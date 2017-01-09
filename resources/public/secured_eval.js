function secured_eval_0(s) {
    with ({document: {},
	   window: {}}) {
	return eval(s);
    }
}


const sandboxProxies = new WeakMap();
sandbox = {};
Object.keys(window).forEach( function(k) { sandbox[k] = {}});

function secured_eval (src) {
    //sandbox = new Proxy(sandbox, {has, get});
    src = 'with (sandbox) {' + src + '}';
    return eval(src);
}

function has (target, key) {
    return true
}

function get (target, key) {
    if (key === Symbol.unscopables) return undefined
    return target[key]
}
