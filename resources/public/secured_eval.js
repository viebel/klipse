// inspired by https://blog.risingstack.com/writing-a-javascript-framework-sandboxed-code-evaluation/
(function () {
    var original_eval = window.eval;
    window.klipse_eval_sandbox = {};

    function secured_eval (src) {
        src = 'with (klipse_eval_sandbox) {' + src + '}';
        return original_eval(src);
    }
    window.klipse_secured_eval = secured_eval;
    window.klipse_unsecured_eval = original_eval;
    window.eval = secured_eval;
    Object.keys(window).forEach( function(k) { klipse_eval_sandbox[k] = {}});    
}())

