

Klipse is written in Clojurescript.


# How to run locally

from the terminal:

```bash
clj -A:figwheel --build dev --repl
```


From Cider, you should tell cider to launch clj with `:fig-cider` alias so that figwheel-main library is loaded.

Then, open the browser [http://localhost:5014/js-dbg.html](http://localhost:5014/js-dbg.html)

From now on, the code is auto-compiled on every changes.
You might need to refresh the test page to make sure the code changes were applied.
 
See [How to add a language to Klipse](https://github.com/viebel/klipse/wiki/How-to-add-a-language-to-klipse) to learn how to add a language to Klipse.

# How to install locally

```bash
lein with-profile deploy install
```

# How to deploy to production

## 0. Prepare

Upgrade version in `project.clj` and in `src/klipse/core.cljs`.

## 1. Build

```bash
./scripts/build
```

## 2. Test 

Make sure figwheel runs.

```bash
clj -A:figwheel --build dev --repl
```

Open your browser and test the following test pages:

Production build: 

- http://localhost:5014/plugin-prod.html 
- http://localhost:5014/plugin-prod-more.html (some of the evaluators are incompatible on the same page)
- http://localhost:5014/plugin-prod-more-2.html (some of the evaluators are incompatible on the same page)

Dev build: 

- http://localhost:5014/plugin-dev.html
- http://localhost:5014/plugin-clojure-dev.html

## 3. Publish the npm package

Upgrade version number in `package.json` and then:

```bash
npm publish
```

## 4. Commit, tag and push

```bash
git commit -am 'cut version 7.10.0'
git tag v7.10.0
git push
git push --tags
```

Draft a new release on [github](https://github.com/viebel/klipse/releases)

## 5. Deploy to clojars

```bash
lein with-profile deploy deploy clojars
```

## 6. Deploy to Google Storage

Make sure [gsutil](https://cloud.google.com/storage/docs/gsutil_install) is installed.

```bash
./scripts/deploy
```

