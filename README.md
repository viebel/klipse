# KLIPSE [![Circle CI](https://circleci.com/gh/viebel/klipse/tree/master.svg?style=svg)](https://circleci.com/gh/viebel/klipse/tree/master)

KLIPSE is live [here](http://app.klipse.tech).

And it looks like this:


![KLIPSE screenshot](http://blog.klipse.tech/assets/hello-klipse.png "KLIPSE screenshot")

Basically, [KLIPSE](http://app.klipse.tech) is made of 4 rectangles:

1. Top left rectangle: you insert your cljs code
2. Top right rectangle: you see the generated javascript code from the cljs code
3. Bottom left rectangle: you see the evaluation of the cljs code as a clojure object
4. Bottom right rectangle: you see the evaluation of the cljs code as a js object

By the way, if you go to [this KLIPSE with clojure code](http://app.klipse.tech/?cljs_in=(ns%20my.args%0A%20%20(%3Arequire%20%5Bclojure.string%20%3Aas%20string%5D))%0A%0A(defn%20hello-world%20%5B%26%20%7B%3Akeys%20%5Blanguage%20upper-case%3F%5D%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aor%20%7Blanguage%20%3Aen%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20upper-case%3F%20false%7D%7D%5D%0A%0A%20%20(let%20%5Bgreeting%20(case%20language%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Afr%20%22bonjour%20monde%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aen%20%22hello%20world%22)%5D%0A%20%20%20%20(if%20upper-case%3F%0A%20%20%20%20%20%20(string%2Fupper-case%20greeting)%0A%20%20%20%20%20%20greeting)))%0A%0A%0A%5B%0A%20%20(hello-world)%0A%20%20(hello-world%20%3Alanguage%20%3Afr)%0A%20%20(hello-world%20%3Aupper-case%3F%20true)%0A%20%20%5D%0A), you will be able to modify the code of see it in action.

Have fun!

## Usage

Here is an introductory blog post: [KLIPSE: why? what? how?](http://raphaelboukara.github.io/clojure/2016/03/17/klipse.html)


Insert your code in the top left area.
Press Ctrl-Enter to evaluate.




## Run Locally: figwheel + devcards

```bash
rlwrap lein figwheel devcards figwheel
```
or 

 Open the browser [http://localhost:5014/index-dbg.html](http://localhost:5014/index-dbg.html)

 Open the browser [http://localhost:5014/cards.html](http://localhost:5014/cards.html)
 
 
## Tutorial

Read [KLIPSE Magic](https://github.com/viebel/klipse/blob/master/tutorial.md) to discover how we made KLIPSE.

## Deploy to Production

####1. Build

```bash
rm -rf resources/public/plugin resources/public/dev
lein cljsbuild once app plugin
```
####2. Test

Test that `dev` build works properly => 

- Open the browser [http://localhost:5014/index-dev.html](http://localhost:5014/index-dev.html)
- Open the browser [http://localhost:5014/test.html](http://localhost:5014/test.html)
 

####3. Deploy to Google Storage

Make sure [gsutil](https://cloud.google.com/storage/docs/gsutil_install) is installed.

```bash
./scripts/deploy
```
