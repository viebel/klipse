# KLIPSE

KLIPSE is live [here](http://app.gadjett.com/cljs_compiler/index-dev.html).

And it looks like this:


![KLIPSE screenshot](http://raphaelboukara.github.io/assets/hello_klipse.png "KLIPSE screenshot")

Basically, [KLIPSE](http://app.gadjett.com/cljs_compiler/index-dev.html) is made of 4 rectangles:

1. Top left rectangle: you insert your cljs code
2. Top right rectangle: you see the generated javascript code from the cljs code
3. Bottom left rectangle: you see the evaluation of the cljs code as a clojure object
4. Bottom right rectangle: you see the evaluation of the cljs code as a js object

## Usage

Introductory blog post: [KLIPSE: why? what? how?](http://raphaelboukara.github.io/clojure/2016/03/17/klipse.html)


Insert your code in the top left area.
Press Ctrl-Enter to evaluate.




## Contribution

- [x] nice design (4 text areas)
- [x] code mirror
- [ ] cljs code from url parameter
- [ ] keep state in localStorage
- [ ] code mirror for js output
- [ ] bigger fonts and logos
- [ ] input field should not be emptied on reload (compilation)
- [ ] display compilation warnings
- [x] compile into a single `js` file
- [ ] history
- [ ] history in localStorage
- [ ] receives cljs code as a URL parameter

## Run Locally

```bash
rlwrap lein figwheel
```
or 

```bash
lein figwheel
```
 Open the browser [http://localhost:5014/index-dbg.html](http://localhost:5014/index-dbg.html)
 
 
## Tutorial

Read [KLIPSE Magic](https://github.com/viebel/klipse/blob/master/tutorial.md) to discover how we made KLIPSE.

## Deploy to Goolge Storage

####1. Build

```bash
lein cljsbuild once dev
```
####2. Test

Test that `dev` build works properly => Open the browser [http://localhost:5014/index-dev.html](http://localhost:5014/index-dev.html)

####3. Deploy

Make sure [gsutil](https://cloud.google.com/storage/docs/gsutil_install) is installed.

```bash
gsutil -m rsync -R resources/public gs://app.gadjett.com/cljs_compiler
```
