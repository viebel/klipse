# klipse

## Usage

Introductory blog post: [KLIPSE: why? what? how?](http://raphaelboukara.github.io/clojure/2016/03/17/klipse.html)
Insert your code in the top left area.
Press Ctrl-Enter to evaluate.




## Contribution

- [x] nice design (4 text areas)
- [x] code mirror
- [ ] keep state in localStorage
- [ ] code mirror for js output
- [ ] bigger fonts and logos
- [ ] input field should not be emptied on reload (compilation)
- [ ] display compilation warnings
- [x] compile into a single `js` file
- [ ] history
- [ ] history in localStorage

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

Make sure [gsutil](https://cloud.google.com/storage/docs/gsutil_install) is installed.

There is currenlty a bug on clojurescript with self-hosting and compilation :optimizations :whitespace. The issue is fixed in clojurescript github repository version `1.8.33` but not yet deployed. 
One must build cljs from the source.

```bash
lein cljsbuild once dev
```
Test that `dev` build works properly => Open the browser [http://localhost:5014/index-dev.html](http://localhost:5014/index-dev.html)


```bash
gsutil -m rsync -R resources/public gs://app.gadjett.com/cljs_compiler
```
