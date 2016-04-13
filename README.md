# KLIPSE [![Build Status](https://travis-ci.org/viebel/klipse.svg?branch=master)](https://travis-ci.org/viebel/klipse)

KLIPSE is live [here](http://app.gadjett.com/cljs_compiler/index-dev.html).

And it looks like this:


![KLIPSE screenshot](http://raphaelboukara.github.io/assets/hello_klipse.png "KLIPSE screenshot")

Basically, [KLIPSE](http://app.gadjett.com/cljs_compiler/index-dev.html) is made of 4 rectangles:

1. Top left rectangle: you insert your cljs code
2. Top right rectangle: you see the generated javascript code from the cljs code
3. Bottom left rectangle: you see the evaluation of the cljs code as a clojure object
4. Bottom right rectangle: you see the evaluation of the cljs code as a js object

## Usage

Here is an introductory blog post: [KLIPSE: why? what? how?](http://raphaelboukara.github.io/clojure/2016/03/17/klipse.html)


Insert your code in the top left area.
Press Ctrl-Enter to evaluate.




## Run Locally

```bash
rlwrap lein figwheel
```
or 

```bash
lein figwheel
```
 Open the browser [http://localhost:5014/index-dbg.html](http://localhost:5014/index-dbg.html)

 ## Run dev-card

 ```bash
rlwrap lein figwheel devcards
```
or 

```bash
lein figwheel devcards
```
 Open the browser [http://localhost:5014/cards.html](http://localhost:5014/cards.html)
 
 
## Tutorial

Read [KLIPSE Magic](https://github.com/viebel/klipse/blob/master/tutorial.md) to discover how we made KLIPSE.

## Deploy to Goolge Storage

####1. Build

```bash
lein cljsbuild once dev
```
####2. Test

Test that `dev` build works properly => 

- Open the browser [http://localhost:5014/index-dev.html](http://localhost:5014/index-dev.html)
- Open the browser [http://localhost:5014/test.html](http://localhost:5014/test.html)
 

####3. Deploy

Make sure [gsutil](https://cloud.google.com/storage/docs/gsutil_install) is installed.

```bash
./scripts/deploy
```
