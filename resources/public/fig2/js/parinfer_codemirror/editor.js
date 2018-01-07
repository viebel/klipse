// Compiled by ClojureScript 1.9.908 {}
goog.provide('parinfer_codemirror.editor');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parinfer_codemirror.state');
goog.require('parinfer_codemirror.editor_support');
parinfer_codemirror.editor.frame_updates = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Called before any change is applied to the editor.
 */
parinfer_codemirror.editor.before_change = (function parinfer_codemirror$editor$before_change(cm,change){
if((cljs.core._EQ_.call(null,"setValue",change.origin)) && (cljs.core._EQ_.call(null,cm.getValue(),clojure.string.join.call(null,"\n",change.text)))){
return change.cancel();
} else {
return null;
}
});
/**
 * Called after any change is applied to the editor.
 */
parinfer_codemirror.editor.on_change = (function parinfer_codemirror$editor$on_change(cm,change){
if(cljs.core.not_EQ_.call(null,"setValue",change.origin)){
parinfer_codemirror.editor_support.fix_text_BANG_.call(null,cm,new cljs.core.Keyword(null,"change","change",-1163046502),change);

parinfer_codemirror.editor_support.update_cursor_BANG_.call(null,cm,change);

return parinfer_codemirror.editor_support.set_frame_updated_BANG_.call(null,cm,true);
} else {
return null;
}
});
/**
 * Called after the cursor moves in the editor.
 */
parinfer_codemirror.editor.on_cursor_activity = (function parinfer_codemirror$editor$on_cursor_activity(cm){
if(cljs.core.truth_(parinfer_codemirror.editor_support.frame_updated_QMARK_.call(null,cm))){
} else {
parinfer_codemirror.editor_support.fix_text_BANG_.call(null,cm);
}

return parinfer_codemirror.editor_support.set_frame_updated_BANG_.call(null,cm,false);
});
/**
 * Add parinfer goodness to a codemirror editor
 */
parinfer_codemirror.editor.parinferize_BANG_ = (function parinfer_codemirror$editor$parinferize_BANG_(cm,key_,parinfer_mode,initial_value){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state),key_))){
return null;
} else {
var initial_state = cljs.core.assoc.call(null,parinfer_codemirror.state.empty_editor_state,new cljs.core.Keyword(null,"mode","mode",654403691),parinfer_mode,new cljs.core.Keyword(null,"text","text",-1790561697),initial_value);
var prev_editor_state = cljs.core.atom.call(null,null);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state),key_))){
} else {
cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc,key_,cljs.core.PersistentArrayMap.EMPTY);
}

cljs.core.swap_BANG_.call(null,parinfer_codemirror.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_], null),((function (initial_state,prev_editor_state){
return (function (p1__22949_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__8363__auto__ = p1__22949_SHARP_;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x22950_22951 = cm;

x22950_22951.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;


x22950_22951.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x22950_22951,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x22950_22951,initial_state,prev_editor_state))
;


x22950_22951.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x22950_22951,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x22950_22951,initial_state,prev_editor_state))
;


x22950_22951.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x22950_22951,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x22950_22951,initial_state,prev_editor_state))
;


x22950_22951.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x22950_22951,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x22950_22951,initial_state,prev_editor_state))
;


cm.on("change",parinfer_codemirror.editor.on_change);

cm.on("beforeChange",parinfer_codemirror.editor.before_change);

cm.on("cursorActivity",parinfer_codemirror.editor.on_cursor_activity);

return cm;
}
});
/**
 * Called every time the state changes to sync the code editor.
 */
parinfer_codemirror.editor.on_state_change = (function parinfer_codemirror$editor$on_state_change(_,___$1,old_state,new_state){
var seq__22952 = cljs.core.seq.call(null,new_state);
var chunk__22953 = null;
var count__22954 = (0);
var i__22955 = (0);
while(true){
if((i__22955 < count__22954)){
var vec__22956 = cljs.core._nth.call(null,chunk__22953,i__22955);
var k = cljs.core.nth.call(null,vec__22956,(0),null);
var map__22959 = cljs.core.nth.call(null,vec__22956,(1),null);
var map__22959__$1 = ((((!((map__22959 == null)))?((((map__22959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22959):map__22959);
var cm = cljs.core.get.call(null,map__22959__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__22959__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__22966 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__22966){
cm.setValue(text);
} else {
}

var G__22967 = seq__22952;
var G__22968 = chunk__22953;
var G__22969 = count__22954;
var G__22970 = (i__22955 + (1));
seq__22952 = G__22967;
chunk__22953 = G__22968;
count__22954 = G__22969;
i__22955 = G__22970;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__22952);
if(temp__6753__auto__){
var seq__22952__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22952__$1)){
var c__9294__auto__ = cljs.core.chunk_first.call(null,seq__22952__$1);
var G__22971 = cljs.core.chunk_rest.call(null,seq__22952__$1);
var G__22972 = c__9294__auto__;
var G__22973 = cljs.core.count.call(null,c__9294__auto__);
var G__22974 = (0);
seq__22952 = G__22971;
chunk__22953 = G__22972;
count__22954 = G__22973;
i__22955 = G__22974;
continue;
} else {
var vec__22961 = cljs.core.first.call(null,seq__22952__$1);
var k = cljs.core.nth.call(null,vec__22961,(0),null);
var map__22964 = cljs.core.nth.call(null,vec__22961,(1),null);
var map__22964__$1 = ((((!((map__22964 == null)))?((((map__22964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22964):map__22964);
var cm = cljs.core.get.call(null,map__22964__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__22964__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__22975 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__22975){
cm.setValue(text);
} else {
}

var G__22976 = cljs.core.next.call(null,seq__22952__$1);
var G__22977 = null;
var G__22978 = (0);
var G__22979 = (0);
seq__22952 = G__22976;
chunk__22953 = G__22977;
count__22954 = G__22978;
i__22955 = G__22979;
continue;
}
} else {
return null;
}
}
break;
}
});
parinfer_codemirror.editor.force_editor_sync_BANG_ = (function parinfer_codemirror$editor$force_editor_sync_BANG_(){
var seq__22980 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__22981 = null;
var count__22982 = (0);
var i__22983 = (0);
while(true){
if((i__22983 < count__22982)){
var vec__22984 = cljs.core._nth.call(null,chunk__22981,i__22983);
var k = cljs.core.nth.call(null,vec__22984,(0),null);
var map__22987 = cljs.core.nth.call(null,vec__22984,(1),null);
var map__22987__$1 = ((((!((map__22987 == null)))?((((map__22987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22987):map__22987);
var cm = cljs.core.get.call(null,map__22987__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__22987__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);

var G__22994 = seq__22980;
var G__22995 = chunk__22981;
var G__22996 = count__22982;
var G__22997 = (i__22983 + (1));
seq__22980 = G__22994;
chunk__22981 = G__22995;
count__22982 = G__22996;
i__22983 = G__22997;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__22980);
if(temp__6753__auto__){
var seq__22980__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22980__$1)){
var c__9294__auto__ = cljs.core.chunk_first.call(null,seq__22980__$1);
var G__22998 = cljs.core.chunk_rest.call(null,seq__22980__$1);
var G__22999 = c__9294__auto__;
var G__23000 = cljs.core.count.call(null,c__9294__auto__);
var G__23001 = (0);
seq__22980 = G__22998;
chunk__22981 = G__22999;
count__22982 = G__23000;
i__22983 = G__23001;
continue;
} else {
var vec__22989 = cljs.core.first.call(null,seq__22980__$1);
var k = cljs.core.nth.call(null,vec__22989,(0),null);
var map__22992 = cljs.core.nth.call(null,vec__22989,(1),null);
var map__22992__$1 = ((((!((map__22992 == null)))?((((map__22992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22992):map__22992);
var cm = cljs.core.get.call(null,map__22992__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__22992__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);

var G__23002 = cljs.core.next.call(null,seq__22980__$1);
var G__23003 = null;
var G__23004 = (0);
var G__23005 = (0);
seq__22980 = G__23002;
chunk__22981 = G__23003;
count__22982 = G__23004;
i__22983 = G__23005;
continue;
}
} else {
return null;
}
}
break;
}
});
parinfer_codemirror.editor.start_editor_sync_BANG_ = (function parinfer_codemirror$editor$start_editor_sync_BANG_(){
cljs.core.add_watch.call(null,parinfer_codemirror.state.state,new cljs.core.Keyword(null,"editor-updater","editor-updater",-323951652),parinfer_codemirror.editor.on_state_change);

return parinfer_codemirror.editor.force_editor_sync_BANG_.call(null);
});
/**
 * Add parinfer goodness to a codemirror editor
 */
parinfer_codemirror.editor.parinferize_and_sync_BANG_ = (function parinfer_codemirror$editor$parinferize_and_sync_BANG_(cm,key_,parinfer_mode,initial_value){
parinfer_codemirror.editor.parinferize_BANG_.call(null,cm,key_,parinfer_mode,initial_value);

return parinfer_codemirror.editor.start_editor_sync_BANG_.call(null);
});
goog.exportSymbol('parinfer_codemirror.editor.parinferize_and_sync_BANG_', parinfer_codemirror.editor.parinferize_and_sync_BANG_);

//# sourceMappingURL=editor.js.map
