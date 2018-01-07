// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.common.registry');
goog.require('cljs.core');
goog.require('klipse.utils');
klipse.common.registry.selector__GT_mode = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
klipse.common.registry.mode_options = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
klipse.common.registry.codemirror_mode_src = (function klipse$common$registry$codemirror_mode_src(mode){
var root = new cljs.core.Keyword(null,"codemirror_root","codemirror_root",274222567).cljs$core$IFn$_invoke$arity$2(klipse.utils.klipse_settings.call(null),"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.21.0/mode");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode),".min.js"].join('');
});
klipse.common.registry.codemirror_keymap_src = (function klipse$common$registry$codemirror_keymap_src(mode){
var root = new cljs.core.Keyword(null,"codemirror_root","codemirror_root",274222567).cljs$core$IFn$_invoke$arity$2(klipse.utils.klipse_settings.call(null),"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.21.0/keymap");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode),".min.js"].join('');
});
klipse.common.registry.scripts_src = (function klipse$common$registry$scripts_src(name){
var root = new cljs.core.Keyword(null,"scripts_root","scripts_root",-1826304893).cljs$core$IFn$_invoke$arity$2(klipse.utils.klipse_settings.call(null),"https://viebel.github.io/klipse/repo/js");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
klipse.common.registry.wasm_src = (function klipse$common$registry$wasm_src(name){
var root = new cljs.core.Keyword(null,"wasm_root","wasm_root",207785580).cljs$core$IFn$_invoke$arity$2(klipse.utils.klipse_settings.call(null),"https://viebel.github.io/klipse/repo/wasm");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
klipse.common.registry.register_mode = (function klipse$common$registry$register_mode(mode,selector,opts){
console.info("register-mode: ",mode,selector);

cljs.core.swap_BANG_.call(null,klipse.common.registry.selector__GT_mode,cljs.core.assoc,selector,mode);

return cljs.core.swap_BANG_.call(null,klipse.common.registry.mode_options,cljs.core.assoc,mode,opts);
});

//# sourceMappingURL=registry.js.map
