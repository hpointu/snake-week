(ns snakeweek.core
  (:require [play-cljs.core :as p]
            [goog.events :as events]))

(enable-console-print!)

(defonce game (p/create-game (.-innerWidth js/window) (.-innerHeight js/window)))
(defonce state (atom {}))
(defonce pressed-keys (atom #{}))

(def WIDTH 40)
(def HEIGHT 30)
(def UNIT 12)

(defn cell-drawable [[x y]]
  [:fill {:color "white"}
   [:rect {:x (* UNIT x) :y (* UNIT y) :width UNIT :height UNIT}]])

(defn food-drawable [[x y ttl]]
  [:fill {:color "green"}
   [:rect {:x (* UNIT x) :y (* UNIT y) :width UNIT :height UNIT}]])

(defn update-snake [snake dir]
  (defn adjust [[x y]]
    (let [x (cond (< x 0) (dec WIDTH)
                  (>= x WIDTH) 0
                  :else x)
          y (cond (< y 0) (dec HEIGHT)
                  (>= y HEIGHT) 0
                  :else y)]
      [x y]
      ))

  (defn new-head [[x y]]
    (case dir
      :north [x (dec y)]
      :east  [(inc x) y]
      :south [x (inc y)]
      :west  [(dec x) y]))
  (let [head (first snake)]
    (cons (-> head new-head adjust) (drop-last snake))
    ))

(defn die [{:keys [snake] :as state}]
  (let [[head & tail] snake]
    (if (some #(= head %) tail)
        (assoc state :dead true)
        state)))

(defn move-snake
  [{:keys [snake dir last-move current-time speed] :as state}]
  (if (> (- current-time last-move) speed)
      (let [new (update-snake snake dir)]
        (-> state
            (assoc :snake new
                   :last-move current-time)
            (die)))
      state))

(defn handle-input [state]
  (let [keys @pressed-keys
        dir (:dir state)
        change-dir #(assoc state :dir %)]
   (cond
     (and (contains? keys 37) (not= dir :east)) (change-dir :west)
     (and (contains? keys 38) (not= dir :south)) (change-dir :north)
     (and (contains? keys 39) (not= dir :west)) (change-dir :east)
     (and (contains? keys 40) (not= dir :north)) (change-dir :south)
     :else state
     ))
  )

(defn spawn-food [spawn-time]
  (let [x (rand-int WIDTH)
        y (rand-int HEIGHT)]
    [x y spawn-time]
    )
  )

(defn get-age [[_ _ birth] current-time]
  (- current-time birth))

(defn update-food [[x y birth :as food] current-time ttl]
  (if (> (get-age food current-time) ttl)
    (spawn-food current-time)
    food
    ))

(defn head-on-food? [[x y] [fx fy]]
  (and (= x fx) (= y fy)))

(defn grow [snake]
  (let [head (first snake)]
    (cons head snake))
  )

(defn get-score [age]
  (int (/ (+ 1000 (- 6000 age)) 10))
  )

(defn eat-food [{:keys [snake head food current-time]:as state}]
  (let [head (first snake)]
    (if (head-on-food? head food)
      (-> state
          (assoc :food (spawn-food current-time)
                 :last-spawn current-time)
          (update :snake grow)
          (update :speed #(max (dec %) 5))
          (update :score + (get-score (get-age food current-time))))
      state
      )))

(defn update-game [{:keys [dead paused] :as state} delta]
  (if (or dead paused)
    state
    (-> state
        (handle-input)
        (update :food update-food (:current-time state) 10000)
        (move-snake)
        (eat-food)
        )))

(defn draw-background []
  [:fill {:color "black"}
   [:rect {:x 0 :y 0 :width (.-innerWidth js/window) :height (.-innerHeight js/window)}]])

(defn draw-board []
  [:stroke {:color "white"}
   [:fill {:color "black"}
    [:rect {:x 0 :y 0 :width (* WIDTH UNIT) :height (* HEIGHT UNIT)}]]])

(defn draw-score [score]
  [:fill {:color "white"}
   [:text {:value (str "Score: " score)
           :x 20 :y (+ 20 (* HEIGHT UNIT))
           :size 14 :font "Georgia"}]])

(defn init-state []
  (let [ct (p/get-total-time game)]
    (reset! state {:snake [[6 5] [5 5] [4 5]]
                   :speed 80
                   :score 0
                   :paused false
                   :food (spawn-food ct)
                   :last-spawn ct
                   :last-move ct
                   :current-time ct
                   :dir :east
                   })))

(defn draw-hud [{:keys [paused] :as state}]
  (if paused
    [:fill {:color "red"}
     [:text {:value "PAUSED" :size 20 :x (- (/ (* UNIT WIDTH) 2) 40) :y (/ (* UNIT HEIGHT) 2)}]]
    [])
  )

(defn on-key-down [state key-code]
  (if (= key-code 32) ; SPACE BAR
    (update state :paused not)
    state)
  )

(defn on-key-up [state key-code]
  state)

(def main-screen
  (reify p/Screen
    (on-show [this]
      (init-state))
    (on-hide [this])
    (on-render [this]
      (swap! state assoc :current-time (p/get-total-time game))
      (swap! state update-game (p/get-delta-time game))
      (when (:dead @state) (init-state))
      (p/render
       game
       [(draw-background)
        (draw-board)
        (draw-score (:score @state))
        (map cell-drawable (:snake @state))
        (let [food (:food @state)]
          (when food (food-drawable food)))

        (draw-hud @state)
        ]))))

(doto js/window
  (events/removeAll "keydown")
  (events/removeAll "keyup")
  (events/listen "keydown"
                 (fn [e]
                   (swap! state on-key-down (.-keyCode e))
                   (swap! pressed-keys conj (.-keyCode e))))
  (events/listen "keyup"
                 (fn [e]
                   (swap! state on-key-up (.-keyCode e))
                   (swap! pressed-keys disj (.-keyCode e)))))
(doto game
  (p/start)
  (p/set-screen main-screen))
