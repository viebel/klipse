(def resources ["spec$macros.js" "cljs/spec$macros.cache.json"])
(defn get-resource [x]
  (-> (.get nexeres (str "cljs/" x))
       js/zlib.inflateSync ))


(doseq [res resources]
  (as-> (get-resource res) $ 
    (js/fs.writeFile res $ #(print "done: " res))))

