# Klipse

Klipse is a Javacript plugin for embedding interactive code snippets in tech blogs. See examples at https://blog.klipse.tech/ 

Technically, Klipse is a small piece of javascript code that evaluates code snippets in the browser and it is pluggable on any web page.

If you like this stuff, please consider a (small donation) on [Patreon](https://www.patreon.com/bePatron?u=18227864).


## Plugin

The klipse plugin is a `javascript` tag (see details [below](https://github.com/viebel/klipse#integration)) that transforms static code snippets of an html page into live and interactive snippets:

1. **Live**: The code is executed in your browser
2. **Interactive**: You can modify the code and it is evaluated as you type

The code evaluation is done in the browser: no server is involved at all!


# Live demo

With the klipse plugin, the code is evaluated as you type...

Here is a [live demo](https://book.klipse.tech/) of the embedding of klipse in a web page.


|Javascript | Ruby |
|-------------------------|-------------------------|
|![abc](https://raw.githubusercontent.com/viebel/klipse/master/images/javascript-snippet.gif) |  ![abc](https://raw.githubusercontent.com/viebel/klipse/master/images/ruby-snippet.gif)|

|PHP | Clojure |
|-------------------------|-------------------------|
|![abc](https://raw.githubusercontent.com/viebel/klipse/master/images/php-snippet.gif) |  ![abc](https://raw.githubusercontent.com/viebel/klipse/master/images/clojure-snippet.gif?cachebuster1)|


# Supported languages

- javascript: evaluation is done with the javascript function `eval` and pretty printing of the result is done with [pretty-format](https://github.com/thejameskyle/pretty-format)
- clojure[script]: evaluation is done with [Self-Hosted Clojurescript](http://swannodette.github.io/2015/07/29/clojurescript-17)
- ruby: evaluation is done with [Opal](http://opalrb.com/)
- C++: evaluation is done with [JSCPP](https://github.com/felixhao28/JSCPP)
- python: evaluation is done with [Skulpt](http://www.skulpt.org/)
- scheme: evaluation is done with [BiwasScheme](http://www.biwascheme.org/)
- prolog: evaluation is done with [Tau Prolog](http://tau-prolog.org/)
- common lisp: evaluation is done with [JSCL](https://github.com/jscl-project/jscl)
- PHP: evaluation is done with [Uniter](https://asmblah.github.io/uniter/)
- SQL: evaluation is done with [sql.js](https://github.com/kripken/sql.js). See [SQL example](https://blog.klipse.tech/javascript/2016/11/07/best-sql-tutorial.html)
- BrainFuck
- JSX
- EcmaScript2017
- Google Charts: See [Interactive Business Report with Google Charts](http://blog.klipse.tech/data/2017/03/15/google-charts.html).

The code editing inside the interactive snippets is powered by [CodeMirror](http://codemirror.net/).


# How does it work?

- javascript: [A new way of blogging about javascript](http://blog.klipse.tech/javascript/2016/06/20/blog-javascript.html)
- ruby: [A new way of blogging about ruby](http://blog.klipse.tech/ruby/2016/06/20/blog-ruby.html)
- clojure[script]: [How to klipsify a clojure[script] blog post](http://blog.klipse.tech/clojure/2016/06/07/klipse-plugin-tuto.html)

# Integration

In order to integrate the klipse plugin on a blog, library documentation or any other web page, you have to follow 3 simple steps.


1. Make sure you have `<!DOCTYPE html>` at the top of your html file and  `<meta charset="utf-8">` right after your `<head>` (It is required in order to display properly the CodeMirror elements used by Klipse.)

2. Add css and custom configuration somewhere in the page (it could be in the `<head>` or in the `<body>`) **before** the `<script>` element of step #3.
The selector keys are per language (see below for a list of supported languages) and the value are the CSS selector of the elements that you want to klipsify.

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector_eval_js: '.language-klipse-eval-js', // css selector for the html elements you want to klipsify
    };
</script>
```

3. Add the `javascript` library at the **end of the body tag** :
```html
    <script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
</body>
```

Here is an [interactive guide](https://book.klipse.tech/) of the klipse snippets.


If you want to host the javascript tag from your own server, see [Host Klipse Locally](#host-klipse-locally).

If you want to use an older version of Klipse, see [Use Older Versions](#use-older-versions).


## javascript


Here is the [full interactive guide](https://book.klipse.tech/interactive_javascript_code_snippets.html) of the klipse `javascript` snippets. 

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

## clojure and clojurescript in a web page

> Pay attention: for clojure interactive snippets, you must use the **non-minified** version of klipse as for the moment, self-host cljs doesn't support advanced compilation!

Here is the [full interactive guide](https://book.klipse.tech/interactive_clojure[script]_code_snippets.html
) of the klipse `clojure` snippets.

You can manipulate the DOM inside KLIPSE: here is a [tutorial](http://read.klipse.tech/manipulating-the-dom-with-klipse-2/).



```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector: '.language-klipse'// css selector for the html elements you want to klipsify
    };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin/js/klipse_plugin.js"></script>
```

## clojurescript project

If you want to integrate Klipse inside a Clojuresccript  project, it is recommended to consume Klipse as a Clojurescript library like any other Clojurescript lib, just like this [![Clojars](https://img.shields.io/clojars/v/viebel/klipse.svg)](https://clojars.org/viebel/klipse). 

Inside your code you have to require two namespaces and call a function:

```clojure
(ns my.project
  (:require [klipse.run.plugin.plugin] ;; this namespace initializes Klipse. We require it for its side effects
            [klipse.plugin :as klipse-plugin]))

(klipse-plugin/init #js {:selector ".language-klipse"
                         :selector_reagent ".language-reagent"})))
  
```

Here is an example of a [tiny reagent demo project](https://gitlab.com/viebel/clojurescript-reagent-klipse-demo) that integrates Klipse as a Clojurescript library.

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

## Prolog

Prolog code snippets are separated into two kinds:

- Rules
- Queries

In the query, you must ommit the `?-` characters.

See [A new way of blogging about Prolog](http://blog.klipse.tech/prolog/2019/01/01/blog-prolog.html) for a full example and guide.

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/prolog.css">

<script>
    window.klipse_settings = {
        selector_prolog_rules: '.language-prolog-rules', // css selector for the html elements that contain prolog rules
        selector_prolog_query: '.language-prolog-query', // css selector for the html elements that contain prolog queries
    };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js?v=7.7.1-a"></script>
```

## Common Lisp

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector_eval_clisp: '.language-klipse-eval-clisp', // css selector for the html elements you want to klipsify
    };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
```

## OCaml


```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
 	    selector_eval_ocaml: '.language-klipse-ocaml', // selector for ocaml evaluation snippets
	    selector_transpile_ocaml: '.language-transpile-ocaml' // selector for ocaml transpilation snippets
    };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
```


## ReasonML version 3

> Note: Code Snippets in Reason version 3 will automagically be upgraded to latest Reason version once a new version of Reason is released.

We have 4 kinds of ReasonML snippets:

1. Code Evaluation
2. Transpilation to javascript
3. Tranpilation to Ocaml
4. Transpilation from Ocaml

Here is the javascript tag that you need to setup for embedding ReasonML snippets on your page:

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
 	     selector_transpile_reason_3: '.language-transpile-reason', // selector for reason transpilation snippets
         selector_transpile_reason_3_to_ocaml: '.language-transpile-reason-to-ocaml', // selector for reason transpilation into ocaml snippets
         selector_eval_reason_3: '.language-klipse-reason',  // selector for reason evaluation snippets
         selector_ocaml_to_reason: '.language-klipse-ocaml-to-reason' // selector for ocaml to reason snippets
   };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
```

## ReasonML - Old Syntax(deprecated)

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
    	 selector_transpile_reason: '.language-transpile-reason', // selector for reason transpilation snippets
         selector_transpile_reason_to_ocaml: '.language-transpile-reason-to-ocaml', // selector for reason transpilation into ocaml snippets
         selector_eval_reason: '.language-klipse-reason' // selector for reason evaluation snippets
   };
</script>
<script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
```

## SQL

```html
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">
<link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/sql.css">

<script>
    window.klipse_settings = {
     selector_sql: '.sql',
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
     selector_google_charts: '.language-google-charts' // selector for google charts snippets
	 selector_oblivion: '.language-oblivion' // selector for oblivion snippets
     selector_eval_js: '.language-klipse-eval-js', // selector for javascript evaluation snippets
     selector_eval_ruby: '.language-klipse-eval-ruby', //selector for ruby evaluation snippets
     selector_es2017: '.language-klipse-es2017', // selector for EcmaScript 2017 evaluation snippets
     selector_jsx: '.language-klipse-jsx', // selector for jsx evaluation snippets
     selector_transpile_jsx: '.language-transpile-jsx', // selector for jsx transpilation snippets
     selector_render_jsx: '.language-render-jsx', // selector for jsx rendering snippets		  
	 selector_react: '.language-react', //selector for react snippets
     selector_eval_php: '.language-klipse-eval-php', // selector for php evaluation snippets
     selector_eval_markdown: '.language-klipse-markdown', // selector for markdown transpilation snippets
     selector_eval_lambdaway: '.language-klipse-lambdaway', // selector for lambdaway transpilation snippets
     selector_eval_python_client: '.language-klipse-python', // selector for python evaluation snippets
	 selector_eval_cpp: '.language-klipse-cpp', // selector for cpp evaluation
     selector_eval_html: '.language-klipse-html', // selector for html evaluation snippets
     selector_sql: '.language-klipse-sql', // selector for sqlite evaluation snippets
     selector_eval_scheme: '.language-klipse-scheme', // selector for scheme evaluation snippets
	 selector_brainfuck: '.language-klipse-brainfuck', // selector for brainfuck snippets
	 selector_eval_ocaml: '.language-klipse-ocaml', // selector for ocaml evaluation snippets
     selector_transpile_ocaml: '.language-transpile-ocaml', // selector for ocaml transpilation snippets
     selector_transpile_reason_3: '.language-transpile-reason', // selector for reason transpilation snippets
     selector_transpile_reason_3_to_ocaml: '.language-transpile-reason-to-ocaml', // selector for reason transpilation into ocaml snippets
     selector_eval_reason_3: '.language-klipse-reason', // selector for reason evaluation snippets
	 selector_ocaml_to_reason: '.language-klipse-ocaml-to-reason' // selector for ocaml to reason snippets
	 cached_ns_root: '/my-root', // the root of clojure cached namespace
	 clojure_cached_macro_ns_regexp: /reagent.*/, // the regexp for clojure macro namespaces that are cached
	 clojure_cached_ns_regexp: /reagent.*/, // the regexp for clojure namespaces that are cached
	 codemirror_root: '/my-codemirror-root', // the root of codemirror files
	 scripts_root: '/my-scripts-root', // the root of scripts files (e.g pretty_format.js, opal.js ...)
	 editor_type: 'code-mirror', //the type of the editor for the klipse result (the element where the evaluation of the snippet is displayed). Allowed values:
                                 // "code-mirror": The input editor is codemirror. The output editor is codemirror
                                 // "html": The input editor is codemirror. The output editor is html
                                 // "dom": The input editor is plain text. The output editor is plain text

 
};

```

Additionaly, you can configure CodeMirror input (snippet source code) and output (snippet evaluation) by setting `codemirror_options_in` and `codemirror_options_out`:

Currently, we support all the settings [CodeMirror Configuration settings](http://codemirror.net/doc/manual.html#config) and part of the [Addons settings](http://codemirror.net/doc/manual.html#addons):  `matchBrackets` and `autoCloseBrackets`.

For instance, you can modify the `indentUnit`, `lineWrapping`, `lineNumbers` and `autoCloseBrackets` like this:
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
* `data-preamble`: (default `""`) A string containing Clojurescript source code that should be run before the contents of this snippet, eg "(reset! canvas-id :canvas-2)". Useful for hiding implementation details from readers in blog posts, like e.g. setting a `canvas-id` atom to `:canvas-2`, or for performing any other setup operations that need to be done on a per-snippet basis
* `data-editor-type`: (default `"code-mirror"`) the type of the editor for the klipse result (the element where the evaluation of the snippet is displayed). Allowed values:
  ** "code-mirror": The input editor is codemirror. The output editor is codemirror
  ** "html": The input editor is codemirror. The output editor is html
  ** "dom": The input editor is plain text. The output editor is plain text


### Javascript only

* `data-external-libs`: comma separated list of javascript libraries to load before snippet evaluation
* `data-async-code`: (default `false`) when `true`, asynchronous calls to `console.log` append their result to the result cell

#### Clojure only


Here is a [live demo](https://book.klipse.tech/interactive_clojure[script]_code_snippets.html) of the different snippet level configuration options.

The following data attributes are supported on a klipse snippet DOM element:

* `data-static-fns`: (default `false`) set to true for using [static dispatch](http://blog.klipse.tech/clojurescript/2016/04/13/static-fns.html)
* `data-external-libs`: comma separated list of github repositories to resolve dependencies: you need to provide the full list of dependencies (including the dependencies of dependencies recursively). See for instance [Lambda Caclulus with clojure and Klipse](http://blog.klipse.tech/lambda/2016/07/24/lambda-calculus-2.html)
* `data-print-length`: (default 1000) max number of items in collections to display - useful to prevent browser stuck when evaluating infinite sequences like `(range)`
* `data-beautify-strings`: (default false) when evaluation result is a string - display the "interior" of the string without escaping the quotes.
* `data-verbose`: (default false) passed to boostrapped `eval` and `compile` `:verbose` opts
* `data-max-eval-duration`: (default 1000) max number of milliseconds the snippet code is allowed to run synchronously before being interrupted.
* `data-compile-display-guard`: (default false) when true, display the anti-starvation code inside result of compilation


## Styling
The Klipse plugin can be easily styled with CSS, which can be applied both to the Klipse plugin's own elements, and to the CodeMirror editor's elements. Much of the styling you'll apply will be to CodeMirror, as it contains all the CSS classes to style the code itself. Surrounding CodeMirror is the Klipse plugin, the styles of which control the plugin's borders, and the executed code's output.

## DOM elements

Each klipse snippet is associated with 4 HTML elements:

1. The klipse snippet itself: it has the class `klipse-snippet`.
2. The result: it has the class `klipse-result`.
3. A container: it has the class `klipse-container` and is accessible inside the klipse snippet through the global variable `klipse_container` (the global variable is dynamically bound to the correct klipse container).
4. A separator: it has the class `klipse-separator`.


### Changing the style of CodeMirror
You can change the theme of the CodeMirror editor simply by modifying its [CSS](http://codemirror.net/doc/manual.html#styling). If you don't want to create your own theme, Farhad Gayour has an awesome [list of ready-made themes](http://farhadg.github.io/code-mirror-themes/) you can select from. Have a look at the different themes by selecting them from the drop-down. Once you've found one you like, head to the [theme repo](https://github.com/FarhadG/code-mirror-themes/tree/master/themes) to copy the CSS, paste it into a CSS file, and link to it from the HTML page containing your Klipse plugin.

### Changing the style of the Klipse plugin
To change the style of the Klipse plugin's borders and the console output, you'll need to add a few extra style rules to your CSS file. These are:

- `.CodeMirror` - modify the plugin's borders and CodeMirror's containing `div`
- `.CodeMirror:last-child::before` - modify the console's title (i.e. the bit that says _Output:_)
- `.CodeMirror:last-child` - modify the console area (i.e. the area beneath _Output:_)

You can see an example of styling Klipse in `demos/styling`. And here is a [live demo](http://htmlpreview.github.io/?https://raw.githubusercontent.com/viebel/klipse/master/demos/styling/klipse.html)

## Interactive slides with Klipse

You can build interactive slides by integrating Klipse with [Reveal.js](https://github.com/hakimel/reveal.js/) using this  [template for reveal.js and Klipse](https://github.com/timothypratley/asciidoctor-revealjs-klipse).

## Klipse Community

Here are a couple of examples of blogs using the klipse plugin:

- clojure: [Procedural Dungeon Generation: A Drunkard's Walk in ClojureScript](http://blog.jrheard.com/procedural-dungeon-generation-drunkards-walk-in-clojurescript)
- python: [Drawing fractals with a turtle](http://blog.klipse.tech/python/2017/01/04/python-turtle-fractal.html)
- clojure: [Island Generator](http://exupero.org/hazard/post/islands/)
- clojurescript transpiled: [blog.ducky.io - More about protocols in ClojureScript](http://blog.ducky.io/clojurescript/2016/06/08/more-defprotocol/)
- ruby: [jessewaites.com - interactive ruby snippets](http://jessewaites.com/embedding-interactive-ruby-snippets-into-web-pages/)
- clojure: [z.caudate.me - live documentation with klipse](http://z.caudate.me/klipse-demo/)
- ruby, javascript, clojure: [blog.klipse.tech](blog.klipse.tech)
- prolog: [A new way of blogging about Prolog](http://blog.klipse.tech/prolog/2019/01/01/blog-prolog.html)
- clojure documentation: [Anonymous functions in clojure](http://clojurebridge.github.io/community-docs/docs/clojure/anonymous-function/)
- javascript: [Untangled.io - Advanced ES6 destructuring techniques with live examples](http://untangled.io/in-depth-es6-destructuring-with-assembled-avengers/)
- clojure: [Klipse for Kids: A fun way to learn computer programming](http://kids.klipse.tech/)
- javascript [Immutable.js: An Introduction with examples written for humans](http://untangled.io/immutable-js-an-introduction-with-examples-written-for-humans/)
- clojure: [Yet another scheme dialect written in Clojure and ClojureScript](http://liujiacai.net/scheme.clj/)
- javascript: [Try Partial Lenses with KLIPSE](http://calmm-js.github.io/partial.lenses/)
- javascript: [Clause.js, a JavaScript contract system, documentation created with klipse](https://clause.js.org)
- clojure: Reagent deep dive part [1](http://timothypratley.blogspot.com/2017/01/reagent-deep-dive-part-1.html) [2](http://timothypratley.blogspot.com/2017/01/reagent-deep-dive-part-1.html) [3](http://timothypratley.blogspot.com/2017/01/reagent-deep-dive-part-3-sequences.html) [4](http://timothypratley.blogspot.com/2017/01/reagent-deep-dive-part-4-application.html)
- clojurescript: [Visualising Bézier Curves](https://040code.github.io/2017/07/12/bezier-in-clojurescript/)
- clojure: [core.async fun tutorial](http://abhirag.in/articles/batman_clojure.html)
- clojurescript: [reagent and reframe playground](https://day8.github.io/re-playground/)
- javascript: [chai unit tests playground](https://e-zchai.firebaseapp.com/)
- clojure: [polynomial macro](http://markbastian.github.io/posts-output/2017-07-10-polymacro/)


Ask us any question about the klipse plugin (integration, feature requests...) on [![Join the chat at https://gitter.im/viebel/klipse](https://badges.gitter.im/viebel/klipse.svg)](https://gitter.im/viebel/klipse?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Access the CodeMirror editors programmaticaly

Each code snippet is wrapped into a CodeMirror editor.

The CodeMirror editors are accessible via the javascript global variable: `klipse_editors`. This is an array that contains the CodeMirror editors wrapping the original code snippets. For instance, you can modify the content of the code snippet `i` by calling: `klipse_editors[i].setValue('let a = 1');`

Here is a [jsfiddle](https://jsfiddle.net/yhuh80ry/2/) that shows it in action.

## Use older versions

Since version `6.8.0`, Klipse is published on [npm](https://www.npmjs.com/package/klipse). Therefore you can access the klipse files of a specific version from [unpkg](https://unpkg.com) - a cdn for stuff that is published to `npm`.

For instance, The urls are for the version `6.8.0` are:

- javascript mininfied: https://unpkg.com/klipse@6.8.0/dist/klipse_plugin.min.js
- javascript non-minified:  https://unpkg.com/klipse@6.8.0/dist/klipse_plugin.min.js
- css: https://unpkg.com/klipse@6.8.0/dist/codemirror.css

## Host Klipse locally

You can download klipse with `npm` or `bower`.

In order to serve Klipse from your own server, you have to:

1. Include in your page all the assets that you need from the `dist` folder: `codemirror.css`, `klipse_plugin.js` or `klipse_plugin.min.js`, `javascript.inc.js` (CodeMirror javascript addon), `pretty_format.js` (javascript beautifier)
2. set `klipse_settings.no_dynamic_scripts=true;`


If you need more assets that are usually dynamically loaded by klipse, please download them manually.

## Klipse App - Clojure Web Repl

Here is the [information about the Klipse app](https://github.com/viebel/klipse/blob/master/contributing.md)

The Web REPL is live at http://app.klipse.tech

Here is [the manual for the KLIPSE web repl](https://github.com/viebel/klipse/blob/master/repl.md).

Languages supported in the REPL: `clojure` and `clojurescript`.


# License

If you like this stuff, please consider a (small donation) on [Patreon](https://www.patreon.com/bePatron?u=18227864).

See the [LICENSE](https://github.com/viebel/klipse/blob/master/LICENSE.txt) file for license rights and limitations (GNU General Public License v3.0).

