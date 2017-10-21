(ns snakeweek.core
  (:require [play-cljs.core :as p]
            [snakeweek.maps :as maps]
            [snakeweek.drawing :as d]
            [goog.events :as events]))

(enable-console-print!)

(defonce game (p/create-game (.-innerWidth js/window) (.-innerHeight js/window)))
(defonce state (atom {}))
(defonce pressed-keys (atom #{}))


(defn coords= [[x y] [fx fy]]
  (and (= x fx) (= y fy)))

(defn update-snake [{:keys [snake dir level]}]
  (defn adjust [[x y]]
    (let [width (:width level)
          height (:height level)
          x (cond (< x 0) (dec width)
                  (>= x width) 0
                  :else x)
          y (cond (< y 0) (dec height)
                  (>= y height) 0
                  :else y)]
      [x y]))

  (defn new-head [[x y]]
    (case dir
      :north [x (dec y)]
      :east  [(inc x) y]
      :south [x (inc y)]
      :west  [(dec x) y]))
  (let [head (first snake)]
    (cons (-> head new-head adjust) (drop-last snake))))

(defn die [{:keys [snake walls] :as state}]
  (let [[head & tail] snake]
    (if (or (some #(= head %) tail)
            (some #(= head %) walls))
        (assoc state :dead true)
        state)))

(defn move-snake
  [{:keys [snake dir last-move current-time speed] :as state}]
  (if (> (- current-time last-move) speed)
      (let [new (update-snake state)]
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

(defn spawn-food [{:keys [width height current-time snake walls] :as state}]
  (let [x (rand-int width)
        y (rand-int height)]
    (if (or (some #(coords= [x y] %) walls)
            (some #(coords= [x y] %) snake))
      (spawn-food state)
      (assoc state
             :food [x y current-time]
             :last-spawn current-time))
    ))

(defn get-age [[_ _ birth] current-time]
  (- current-time birth))

(defn update-food
  [{:keys [food current-time width height]:as state} ttl]
  (let [[x y birth] food]
    (if (> (get-age food current-time) ttl)
      (spawn-food state)
      state)))

(defn grow [snake]
  (let [head (first snake)]
    (cons head snake))
  )

(defn get-score [age]
  (int (/ (+ 1000 (- 6000 age)) 10)))

(defn eat-food
  [{:keys [snake head food current-time width height] :as state}]
  (let [head (first snake)]
    (if (coords= head food)
      (-> state
          spawn-food
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
        (update-food 10000)
        (move-snake)
        (eat-food)
        )))

(defn init-state! [level]
  (let [ct (p/get-total-time game)]
    (reset! state
            (into level
                  {:snake [[6 5] [5 5] [4 5]]
                   :speed 80
                   :score 0
                   :level level
                   :paused false
                   :last-spawn ct
                   :last-move ct
                   :current-time ct
                   :dir :east}))))

(defn new-game! [level]
  (init-state! level)
  (swap! state spawn-food))

(defn on-key-down [state key-code]
  (if (= key-code 32) ; SPACE BAR
    (update state :paused not)
    state))

(defn on-key-up [state key-code]
  state)

(def main-screen
  (let [level (maps/walls 40 30)]
    (reify p/Screen
      (on-show [this]
        (new-game! level))
      (on-hide [this])
      (on-render [this]
        (swap! state assoc :current-time (p/get-total-time game))
        (swap! state update-game (p/get-delta-time game))
        (when (:dead @state) (new-game! level))
        (p/render
         game
         [(d/draw-background)
          (d/draw-board @state)
          (d/draw-score @state)
          (map (d/draw-cell @state) (:snake @state))
          (let [food (:food @state)]
            (when food (d/draw-food food)))
          (d/draw-hud @state)
          (d/draw-walls (:walls @state))
          ])))))

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
