# KLIPSE [![Circle CI](https://circleci.com/gh/viebel/klipse/tree/master.svg?style=svg)](https://circleci.com/gh/viebel/klipse/tree/master) [![Join the chat at https://gitter.im/viebel/klipse](https://badges.gitter.im/viebel/klipse.svg)](https://gitter.im/viebel/klipse?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Codewake](https://www.codewake.com/badges/ask_question.svg)](https://www.codewake.com/p/klipse-67458228-ba92-4d52-9511-bfde20964896)

KLIPSE is a simple client-side code evaluator pluggable on any web page.

KLIPSE is both a web REPL and a plugin. 

## Plugin

The klipse plugin is a javascript tag that transforms static code snippets of an html page into live and interactive snippets:

1. **Live**: The code is executed in your browser
2. **Interactive**: You can modify the code and it is evaluated as you type

The code evaluation is done in the browser: no server is involved at all!

The code editing is done with [CodeMirror](http://codemirror.net/).

## Web REPL

The Web REPL is live at http://app.klipse.tech

Here is [the manual for the KLIPSE web repl](https://github.com/viebel/klipse/blob/master/repl.md).

Languages supported in the REPL: `clojure` and `clojurescript`.

# Live demo

With the klipse plugin, the code is evaluated as you type...

|Javascript | Ruby |
|-------------------------|-------------------------|
|![abc](https://raw.githubusercontent.com/viebel/klipse/master/images/javascript-snippet.gif) |  ![abc](https://raw.githubusercontent.com/viebel/klipse/master/images/ruby-snippet.gif)|

|PHP | Clojure |
|-------------------------|-------------------------|
|![abc](https://raw.githubusercontent.com/viebel/klipse/master/images/php-snippet.gif) |  ![abc](https://raw.githubusercontent.com/viebel/klipse/master/images/clojure-snippet.gif?cachebuster1)|


# Supported languages

- javascript: evaluation is done with the javascript function `eval` and pretty printing of the result is done with [pretty-format](https://github.com/thejameskyle/pretty-format)
- clojure[script]: evaluation is done with [Self-Hosted Clojurescript](http://swannodette.github.io/2015/07/29/clojurescript-17)
- ruby: evaluation is done with [Opal](http://opalrb.org/)
- C++: evaluation is done with [JSCPP](https://github.com/felixhao28/JSCPP)
- python: evaluation is done with [Skulpt](http://www.skulpt.org/)
- scheme: evaluation is done with [BiwasScheme](http://www.biwascheme.org/)
- PHP: evaluation is done with [Uniter](https://asmblah.github.io/uniter/)
- BrainFuck
- JSX
- EcmaScript2017

Here is a [live demo](https://book.klipse.tech/) of the embedding of klipse in a web page.

# How does it work?

- javascript: [A new way of blogging about javascript](http://blog.klipse.tech/javascript/2016/06/20/blog-javascript.html)
- ruby: [A new way of blogging about ruby](http://blog.klipse.tech/ruby/2016/06/20/blog-ruby.html)
- clojure[script]: [How to klipsify a clojure[script] blog post] (http://blog.klipse.tech/clojure/2016/06/07/klipse-plugin-tuto.html)
- PHP: [A new way of blogging about PHP](http://blog.klipse.tech/php/2016/06/26/blog-php.html)


# Integration

In order to integrate the klipse plugin on a blog, library documentation or any other web page, add the following `javascript` tag **at the end of the page body** according to the language of the code snippets:

**You need also to add `<!DOCTYPE html>` at the top of your html file and  `<meta charset="utf-8">` right after your `<head>`.**


## javascript

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector_eval_js: '.language-klipse-eval-js', // css selector for the html elements you want to klipsify
    };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
```

Here is a [jsfiddle with the klipse plugin for javascript](https://jsfiddle.net/viebel/50oLnykk/).
And here are detailed explanations about [a javascript live code editor in a blog post](http://untangled.io/how-to-use-the-live-code-editor/).

## python

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector_eval_python_client: '.language-klipse-python', // css selector for the html elements you want to klipsify
    };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
```
## ruby

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector_eval_ruby: '.language-klipse-eval-ruby', // css selector for the html elements you want to klipsify
    };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
```
## Scheme

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector_eval_scheme: '.language-klipse-eval-scheme', // css selector for the html elements you want to klipsify
    };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
```


## PHP

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector_eval_php: '.language-klipse-eval-php', // css selector for the html elements you want to klipsify
    };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
```


## clojure

> Pay attention: for clojure interactive snippets, you must use the **non-minified** version of klipse as for the moment, self-host cljs doesn't support advanced compilation!

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector: '.language-klipse'// css selector for the html elements you want to klipsify
    };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin/js/klipse_plugin.js"></script>
```


## https

If your site runs under `https`, you need to load the klipse plugin from `https://storage.googleapis.com/app.klipse.tech` instead of `http://app.klipse.tech`.

The reason is that the klipse plugin is hosted on [Google Cloud Storage](https://cloud.google.com/storage/) and for the moment [SSL is not supported for custom domains](https://cloud.google.com/storage/docs/hosting-static-website#creating_a_cname_alias).

## Configuration

The klipse plugin is configurable both at the level of the page and at the level of the snippet.

### Page level configuration


Here are the settings for the klipse plugin a page level:

```javascript
window.klipse_settings = {
          eval_idle_msec: 20, // idle time in msec before the snippet is evaluated
          selector: '.language-klipse', //selector for clojure evaluation snippets
          selector_js: '.language-klipse-js', // selector for clojure transpilation snippets 
          selector_reagent: '.language-reagent', // selector for reagent snippets
          selector_eval_js: '.language-klipse-eval-js', // selector for javascript evaluation snippets
          selector_eval_ruby: '.language-klipse-eval-ruby', //selector for ruby evaluation snippets
          selector_es2017: '.language-klipse-es2017', // selector for EcmaScript 2017 evaluation snippets
          selector_jsx: '.language-klipse-jsx', // selector for jsx evaluation snippets
          selector_transpile_jsx: '.language-transpile-jsx', // selector for jsx transpilation snippets
          selector_eval_php: '.language-klipse-eval-php', // selector for php evaluation snippets
          selector_eval_markdown: '.language-klipse-markdown', // selector for markdown transpilation snippets
          selector_eval_lambdaway: '.language-klipse-lambdaway', // selector for lambdaway transpilation snippets
          selector_eval_python_client: '.language-klipse-python', // selector for python evaluation snippets
	      selector_eval_cpp: '.language-klipse-cpp', // selector for cpp evaluation
          selector_eval_html: '.language-klipse-html', // selector for html evaluation snippets
          selector_sql: '.language-klipse-sql', // selector for sqlite evaluation snippets
          selector_eval_scheme: '.language-klipse-scheme', // selector for scheme evaluation snippets
};

```

Additionaly, you can configure CodeMirror input (snippet source code) and output (snippet evaluation) by setting `codemirror_options_in` and `codemirror_options_out`:

Currently, we support all the settings [CodeMirror Configuration settings](http://codemirror.net/doc/manual.html#config) and part of the [Addons settings](http://codemirror.net/doc/manual.html#addons):  `matchBrackets` and `autoCloseBrackets`.

For instance, you can modify the `identUnit`, `lineWrapping`, `lineNumbers` and `autoCloseBrackets` like this:
```javascript
window.klipse_settings = {
    codemirror_options_in: {
        indentUnit: 8,
        lineWrapping: true,
        lineNumbers: true,
       autoCloseBrackets: true
    },
    codemirror_options_out: {
        lineWrapping: true,
        lineNumbers: true
    }
}
```

#### Clojure only

* `print_length`: (default 1000) max number of items in collections to display - useful to prevent browser stuck when evaluating infinite sequences like `(range)`
* `beautify_strings`: (default false) when evaluation result is a string - display the "interior" of the string without escaping the quotes.


### Snippet level configuration

The following attributes can be added to the DOM element of the snippet:

* `data-eval-idle-msec`: (default 20) idle time in msec before the snippet is evaluated
* `data-loop-msec`: (default `undefined`) the code is run in a loop every `data-loop-msec` msec

### Javascript only

* `data-external-libs`: comma separated list of javascript libraries to load before snippet evaluation
* `data-async-code`: (default `false`) when `true`, asynchronous calls to `console.log` append their result to the result cell

#### Clojure only


Here is a [live demo](https://book.klipse.tech/interactive_clojure[script]_code_snippets.html) of the diffeent snippet level configuration options.

The following data attributes are supported on a klipse snippet DOM element:

* `data-static-fns`: (default `false`) set to true for using [static dispatch](http://blog.klipse.tech/clojurescript/2016/04/13/static-fns.html)
* `data-external-libs`: comma separated list of github repositories to resolve dependencies: you need to provide the full list of dependencies (including the dependencies of dependencies recursively). See for instance [Lambda Caclulus with clojure and Klipse](http://blog.klipse.tech/lambda/2016/07/24/lambda-calculus-2.html)
* `data-print-length`: (default 1000) max number of items in collections to display - useful to prevent browser stuck when evaluating infinite sequences like `(range)`
* `data-preamble`: (default `""`) A string containing Clojurescript source code that should be run before the contents of this snippet, eg "(reset! canvas-id :canvas-2)". Useful for hiding implementation details from readers in blog posts, like e.g. setting a `canvas-id` atom to `:canvas-2`, or for performing any other setup operations that need to be done on a per-snippet basis.
* `data-beautify-strings`: (default false) when evaluation result is a string - display the "interior" of the string without escaping the quotes.
* `data-verbose`: (default false) passed to boostrapped `eval` and `compile` `:verbose` opts
* `data-max-eval-duration`: (default 1000) max number of milliseconds the snippet code is allowed to run synchronously before being interrupted.
* `data-compile-display-guard`: (default false) when true, display the anti-starvation code inside result of compilation


## Styling
The Klipse plugin can be easily styled with CSS, which can be applied both to the Klipse plugin's own elements, and to the CodeMirror editor's elements. Much of the styling you'll apply will be to CodeMirror, as it contains all the CSS classes to style the code itself. Surrounding CodeMirror is the Klipse plugin, the styles of which control the plugin's borders, and the executed code's output.

### Changing the style of CodeMirror
You can change the theme of the CodeMirror editor simply by modifying its [CSS](http://codemirror.net/doc/manual.html#styling). If you don't want to create your own theme, Farhad Gayour has an awesome [list of ready-made themes](http://farhadg.github.io/code-mirror-themes/) you can select from. Have a look at the different themes by selecting them from the drop-down. Once you've found one you like, head to the [theme repo](https://github.com/FarhadG/code-mirror-themes/tree/master/themes) to copy the CSS, paste it into a CSS file, and link to it from the HTML page containing your Klipse plugin.

### Changing the style of the Klipse plugin
To change the style of the Klipse plugin's borders and the console output, you'll need to add a few extra style rules to your CSS file. These are:

- `.CodeMirror` - modify the plugin's borders and CodeMirror's containing `div`
- `.CodeMirror:last-child::before` - modify the console's title (i.e. the bit that says _Output:_)
- `.CodeMirror:last-child` - modify the console area (i.e. the area beneath _Output:_)

You can see an example of styling Klipse in `demos/styling`. And here is a [live demo](http://htmlpreview.github.io/?https://raw.githubusercontent.com/viebel/klipse/master/demos/styling/klipse.html)

## Community

Here are a couple of examples of blogs using the klipse plugin:

- clojure: [Procedural Dungeon Generation: A Drunkard's Walk in ClojureScript](http://blog.jrheard.com/procedural-dungeon-generation-drunkards-walk-in-clojurescript)
- python: [Drawing fractals with a turtle](http://blog.klipse.tech/python/2017/01/04/python-turtle-fractal.html)
- clojure: [Island Generator](http://exupero.org/hazard/post/islands/)
- clojurescript transpiled: [blog.ducky.io - More about protocols in ClojureScript](http://blog.ducky.io/clojurescript/2016/06/08/more-defprotocol/)
- ruby: [jessewaites.com - interactive ruby snippets](http://jessewaites.com/embedding-interactive-ruby-snippets-into-web-pages/)
- clojure: [z.caudate.me - live documentation with klipse](http://z.caudate.me/klipse-demo/)
- ruby, javascript, clojure: [blog.klipse.tech](blog.klipse.tech)
- clojure documentation: [Anonymous functions in clojure](http://clojurebridge.github.io/community-docs/docs/clojure/anonymous-function/)
- javascript: [Untangled.io - Advanced ES6 destructuring techniques with live examples](http://untangled.io/in-depth-es6-destructuring-with-assembled-avengers/)
- clojure: [Klipse for Kids: A fun way to learn computer programming](http://kids.klipse.tech/)
- javascript [Immutable.js: An Introduction with examples written for humans](http://untangled.io/immutable-js-an-introduction-with-examples-written-for-humans/)
- clojure: [Yet another scheme dialect written in Clojure and ClojureScript](http://liujiacai.net/scheme.clj/)
- javascript: [Try Partial Lenses with KLIPSE](http://calmm-js.github.io/partial.lenses/)

Ask us any question about the klipse plugin (integration, feature requests...) on [![Join the chat at https://gitter.im/viebel/klipse](https://badges.gitter.im/viebel/klipse.svg)](https://gitter.im/viebel/klipse?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## Klipse App - Clojure Web Repl
Here is the [information about the Klipse app](https://github.com/viebel/klipse/blob/master/contributing.md)

# License

See the [LICENSE](https://github.com/viebel/klipse/blob/master/LICENSE.txt) file for license rights and limitations (GNU General Public License v3.0).

