(ns snakeweek.drawing)

(def UNIT 12)

(defn draw-cell [state]
  (fn [[x y]]
    [:fill {:color "white"}
     [:rect {:x (* UNIT x) :y (* UNIT y) :width UNIT :height UNIT}]]))

(defn draw-food [[x y ttl]]
  [:fill {:color "green"}
   [:rect {:x (* UNIT x) :y (* UNIT y) :width UNIT :height UNIT}]])

(defn draw-background []
  [:fill {:color "black"}
   [:rect {:x 0 :y 0 :width (.-innerWidth js/window) :height (.-innerHeight js/window)}]])

(defn draw-board [{:keys [width height]}]
  [:stroke {:color "white"}
   [:fill {:color "black"}
    [:rect {:x 0 :y 0 :width (* width UNIT) :height (* height UNIT)}]]])

(defn draw-score [{:keys [score height]}]
  [:fill {:color "white"}
   [:text {:value (str "Score: " score)
           :x 20 :y (+ 20 (* height UNIT))
           :size 14 :font "Georgia"}]])

(defn draw-hud [{:keys [paused width height] :as state}]
  (if paused
    [:fill {:color "red"}
     [:text {:value "PAUSED" :size 20
             :x (- (/ (* UNIT width) 2) 40)
             :y (/ (* UNIT height) 2)}]]
    [])
  )

(defn draw-walls [wall-coords]
  (for [[x y] wall-coords]
    [:fill {:color "blue"}
     [:rect {:x (* UNIT x) :y (* UNIT y)
             :width UNIT :height UNIT}]]
    ))
