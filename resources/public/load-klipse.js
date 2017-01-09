function addScript(url) {
   var s = document.createElement('script');
   s.src = url;
   document.body.appendChild(s);
}

if(window.location.search.match(/dev=1/)) {
   addScript("plugin/js/klipse_plugin.js");
} else {
   addScript("lib/mirror_extensions.js");
   addScript("fig/js/klipse.fig.js");
}

