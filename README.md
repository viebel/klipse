# my-cljs-compiler-in-cljs

## Run Locally

```bash
rlwrap lein run -m clojure.main script/figwheel.clj
```


Open the browser [http://localhost:3449](http://localhost:3449)

## Deploy to Goolge Storage
```bash
gsutil rsync -R local-dir gs://www.example.com
```
