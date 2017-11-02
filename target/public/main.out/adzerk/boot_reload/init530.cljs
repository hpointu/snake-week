(ns adzerk.boot-reload.init530 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:43489" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})