(ns snakeweek.title
  (:require [play-cljs.core :as p]
            [snakeweek.core :as c]
            [snakeweek.maps :as maps]
            [snakeweek.drawing :as d]
            [goog.events :as events]))



(def menu-screen
  (let [active-id (atom 0)]
    (defn menu-action [keycode]
      (case keycode
        38 (reset! active-id (max 0 (dec @active-id)))
        40 (reset! active-id (min 2 (inc @active-id)))
        13 (case @active-id
             0 (p/set-screen c/game c/main-screen)
             nil)
        nil
        ))
    (reify p/Screen
      (on-show [this]
        (events/removeAll js/window "keydown")
        (events/removeAll js/window "keyup")
        (events/listen js/window "keydown"
                       #(menu-action (.-keyCode %)))
        )
     (on-hide [this])
     (on-render [this]
       (p/render
        c/game
        [
         (d/draw-background "#000")
         [:fill {:color "black"}
          [:rect
           {:width 500 :height 400
            :x (- (/ (p/get-width c/game) 2) 250)
            :y 20}
           [:no-smooth
            [:image {:x 100 :y 0 :name "logo.png" :width 300 :height 90}]
            (d/create-menu
             250 150 ["New Game" "View Scores" "Credits"] @active-id)
            ]
           ]
          ]
         ]
        ))
     )))
