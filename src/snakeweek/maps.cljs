(ns snakeweek.maps
  (:require [snakeweek.assets :as assets]))


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


(defn- get-colors [pixels w h]
  (for [i (range (* w h))
          :let [j (* i 4)
                color [(aget pixels (+ j 0))
                       (aget pixels (+ j 1))
                       (aget pixels (+ j 2))]]]
    color)
  )

(defn load-map [asset-name]
  (let [img (assets/get-asset asset-name)
        _ (.loadPixels img)
        w (aget img "width")
        h (aget img "height")
        pixels (aget img "pixels")
        colors (get-colors pixels w h)
        walls  (for [c colors] (if (= c [255 255 255]) 1 0))]
    {:width w
     :height h
     :walls (to-coords w h walls)}
    ))
