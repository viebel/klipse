# my-cljs-compiler-in-cljs

## Run Locally

```bash
rlwrap lein run -m clojure.main script/figwheel.clj
```


Open the browser [http://localhost:3449](http://localhost:3449)

## Deploy to Goolge Storage
```bash
~/bin/gsutil/gsutil -m rsync -R resources/public gs://app.gadjett.com/cljs_compiler
```
