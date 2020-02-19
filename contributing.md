

Klipse is written in Clojurescript.


# How to run locally

from the terminal:

```bash
clj -A:figwheel --build dev --repl
```


From cider, you should tell cider to launch clj with `:fig-cider` alias so that figwheel-main libs are loadeine that cider builds.

Then, open the browser [http://localhost:5014/js-dbg.html](http://localhost:5014/js-dbg.html)

From now on, the code is auto-compiled on every changes.
You might need to refreh the test page to make sure the code changes were applied.
 
See [How to add a language to Klipse](https://github.com/viebel/klipse/wiki/How-to-add-a-language-to-klipse) to learn how to add a language to Klipse.

## How to deploy to production

## 0. Prepare

Upgrade version in `project.clj`.

## 1. Build

```bash
./scripts/build
```

## 2. Test 


Production build: http://localhost:5014/plugin-prod.html and http://localhost:5014/plugin-prod-more.html (some of the evaluators are incompatible on the same page)

Dev build: http://localhost:5014/plugin-dev.html?dev=1

 

## 3. Deploy to Google Storage

Make sure [gsutil](https://cloud.google.com/storage/docs/gsutil_install) is installed.

```bash
./scripts/deploy
```

## 4. publish the npm package

Upgrade version number in `package.json` and then:

```bash
npm publish
```
## 5. Deploy to clojars

```bash
lein with-profile deploy deploy clojars
```
