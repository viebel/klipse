# KLIPSE [![Circle CI](https://circleci.com/gh/viebel/klipse/tree/master.svg?style=svg)](https://circleci.com/gh/viebel/klipse/tree/master)


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

In order to integrate the klipse plugin on a blog, library documentation or any other web page, add the following `javascript` tag according to the language of the code snippets:

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

## Community

- ruby, [jessewaites.com](http://jessewaites.com/embedding-interactive-ruby-snippets-into-web-pages/)
- clojure, [live documentation with klipse](http://z.caudate.me/klipse-demo/)
- ruby, javascript, clojure, [klipse](blog.klipse.tech)



