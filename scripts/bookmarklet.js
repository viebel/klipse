function addScript(url){
    var s = document.createElement('script');
    s.src = url;
    document.body.appendChild(s);
}

function addCss(url) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
}

var domain_to_settings_map = {
    'clojuredocs.org': {
        selector: '.example-body'
    },
    'gist.github.com': {
        selector: '.blob-wrapper.type-clojure'
    },
    'clojure.org' : {
                selector: 'code.language-clojure'
    }
};

var default_settings = {
    selector: 'code, .clojure',
};
function domain_to_settings(domain){
    return domain_to_settings_map[domain] || default_settings;
}

console.log('klipse plugin loaded!!!');

window.klipse_settings = domain_to_settings(window.location.hostname);

if(window.klipse_settings) {
    console.log('klipse plugin settings: ', window.klipse_settings);
    addCss('https://storage.googleapis.com/app.klipse.tech/css/codemirror.css');
    addScript('https://storage.googleapis.com/app.klipse.tech/plugin/js/klipse_plugin.js');
}
