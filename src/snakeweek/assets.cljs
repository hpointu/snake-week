(ns snakeweek.assets
  (:require [cljs.core.async :refer [promise-chan put! <!]]
            [p5.sound]
            )
  (:require-macros [cljs.core.async.macros :refer [go]]))


(def asset-names
  [
   [:font "ArcadeAlternate.ttf"]
   [:sound "snake.mp3"]
   [:image "maze.png"]
   [:image "wall.png"]

   [:image "spritesheet.png"]
   ])

(def preloads (atom #{}))
(def assets (atom {}))

(defn load-image! [renderer name]
  (let [loaded? (promise-chan)]
    (swap! preloads conj loaded?)
    (let [object (.loadImage renderer name #(put! loaded? true))]
      (swap! assets assoc name object))))

(defn load-sound! [renderer name]
  (let [loaded? (promise-chan)]
    (swap! preloads conj loaded?)
    (let [object (.loadSound renderer name #(put! loaded? true))]
      (swap! assets assoc name object))))

(defn load-font! [renderer name]
  (let [loaded? (promise-chan)]
    (swap! preloads conj loaded?)
    (let [object (.loadFont renderer name #(put! loaded? true))]
      (swap! assets assoc name object))))

(defn load-asset! [renderer [type name]]
  (case type
    :font (load-font! renderer name)
    :image (load-image! renderer name)
    :sound (load-sound! renderer name)
    ))

(defn load-assets! [renderer]
  ; This will make promises
  (doseq [asset asset-names]
    (load-asset! renderer asset))
  (go ; Wait for all promises
    (doseq [promise @preloads]
      (<! promise))
    (println (str @assets))
    )
  )

(defn get-asset [name]
  (get @assets name))
