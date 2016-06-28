# KLIPSE [![Circle CI](https://circleci.com/gh/viebel/klipse/tree/master.svg?style=svg)](https://circleci.com/gh/viebel/klipse/tree/master) [![Join the chat at https://gitter.im/viebel/klipse](https://badges.gitter.im/viebel/klipse.svg)](https://gitter.im/viebel/klipse?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)  [![Codewake](https://www.codewake.com/badges/contribute.svg)](https://www.codewake.com/p/klipse)

Ask us any question about the klipse plugin (integration, feature requests...) on [![Join the chat at https://gitter.im/viebel/klipse](https://badges.gitter.im/viebel/klipse.svg)](https://gitter.im/viebel/klipse?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

We need your support to make blogging about languages a much better experience [![Codewake](https://www.codewake.com/badges/contribute.svg)](https://www.codewake.com/p/klipse)

The klipse plugin is a javascript tag that transforms static code snippets of an html page to live and interactive snippets:

1. **Live**: The code is executed in your browser
2. **Interactive**: You can modify the code and it is evaluated after 2 seconds of inactivity


The code evaluation is done in the browser: no server is involved at all!

The code editing is done with [CodeMirror](http://codemirror.net/).



# Supported languages

- javascript: evaluation is done with the javascript function `eval`
- clojure[script]: evaluation is done with [Self-Hosted Clojurescript](http://swannodette.github.io/2015/07/29/clojurescript-17)
- ruby: evaluation is done with [Opal](http://opalrb.org/)


# How does it work?

- javascript: [A new way of blogging about javascript](http://blog.klipse.tech/javascript/2016/06/20/blog-javascript.html)
- ruby: [A new way of blogging about ruby](http://blog.klipse.tech/ruby/2016/06/20/blog-ruby.html)
- clojure[script]: [How to klipsify a clojure[script] blog post] (http://blog.klipse.tech/clojure/2016/06/07/klipse-plugin-tuto.html)


# Integration

In order to integrate the klipse plugin on a blog, library documentation or any other web page, add the following `javascript` tag **at the end of the page body** according to the language of the code snippets:

## javascript

```html
<link rel="stylesheet" type="text/css" href="http://app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector_eval_js: '.language-klipse-eval-js', // css selector for the html elements you want to klipsify
    };
</script>
<script src="http://app.klipse.tech/plugin_prod/js/klipse_plugin.min.js"></script>
```

## ruby

```html
<link rel="stylesheet" type="text/css" href="http://app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector_eval_ruby: '.language-klipse-eval-ruby', // css selector for the html elements you want to klipsify
    };
</script>
<script src="http://cdn.opalrb.org/opal/current/opal.min.js"></script>
<script src="http://cdn.opalrb.org/opal/current/opal-parser.min.js"></script>
<script src="http://app.klipse.tech/plugin/js/klipse_plugin.js"></script>
```

## clojure

```html
<link rel="stylesheet" type="text/css" href="http://app.klipse.tech/css/codemirror.css">

<script>
    window.klipse_settings = {
        selector: '.language-klipse'// css selector for the html elements you want to klipsify
    };
</script>
<script src="http://app.klipse.tech/plugin/js/klipse_plugin.js"></script>
```

## https

If your site runs under `https`, you need to load the klipse plugin from `https://storage.googleapis.com/app.klipse.tech` instead of `http://app.klipse.tech`.

The reason is that the klipse plugin is hosted on [Google Cloud Storage](https://cloud.google.com/storage/) and for the moment [SSL is not supported for custom domains](https://cloud.google.com/storage/docs/hosting-static-website#creating_a_cname_alias).

## Configuration

The klipse plugin is configurable both at the level of the page and at the level of the snippet.

### Page level configuration

~~~javascript
window.klipse_settings = {
          eval_idle_msec: 20, // idle time in msec before the snippet is evaluated
          selector_js: '.language-klipse-js', // selector for javascript evaluation snippets
          selector: '.language-klipse', //selector for clojure evaluation snippets
          selector_eval_js: '.language-klipse-eval-js', // selector for clojure transpilation snippets
          selector_eval_ruby: '.language-klipse-eval-ruby' //selector for ruby evaluation snippets
};

~~~

### Snippet level configuration

The following attributes can be added to the DOM element of the snippet:

* `data-eval-idle-msec`: (default 20) idle time in msec before the snippet is evaluated

### Javascript only

* `data-external-libs`: comma separated list of javascript libraries to load before snippet evaluation

#### Clojure only

* `data-static-fns`: (default `false`) set to true for using [static dispatch](http://blog.klipse.tech/clojurescript/2016/04/13/static-fns.html)
* `data-eval-context`: (default `statement`) indicates the evaluation context that will be passed to cljs/eval-str. One in `expr`, `statement`, `return`.  


## Community

Here are a couple of examples of blogs using the klipse plugin:

- clojurescript transpiled: [blog.ducky.io - More about protocols in ClojureScript](http://blog.ducky.io/clojurescript/2016/06/08/more-defprotocol/)
- ruby: [jessewaites.com - interactive ruby snippets](http://jessewaites.com/embedding-interactive-ruby-snippets-into-web-pages/)
- clojure: [z.caudate.me - live documentation with klipse](http://z.caudate.me/klipse-demo/)
- ruby, javascript, clojure: [blog.klipse.tech](blog.klipse.tech)


## Klipse App
Here is the [information about the Klipse app](https://github.com/viebel/klipse/blob/master/contributing.md)
