(ns snakeweek.maps)


(defn box-hor-wall [width]
  (take width (repeat 1)))

(defn box-row [width]
  (concat [1] (take (- width 2) (repeat 0)) [1]))

(defn box [w h]
  (into
   []
   (flatten
     (concat
       (box-hor-wall w)
       (take (- h 2) (repeat (box-row w)))
       (box-hor-wall w)))))

(defn to-coords [width height walls]
  (for [[i wall] (seq (map-indexed vector walls))
        :when (= 1 wall)]
         [(mod i width) (int (/ i width))]))

(defn walls [w h]
  {:width w
   :height h
   :walls (to-coords w h (box w h))
   })
