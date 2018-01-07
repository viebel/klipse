// Compiled by ClojureScript 1.9.908 {}
goog.provide('devcards_om_next.core');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('devcards.util.utils');
goog.require('om.next');
goog.require('om.next.protocols');
var base__16288__auto___22711 = ({"getInitialState": (function (){
return ({"state_change_count": (0), "omnext$unique-id": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"omnext-component-","omnext-component-",217631378,null)))].join('')});
}), "shouldComponentUpdate": (function (next_props,next_state){
var this$ = this;
var watch_atom_QMARK_ = new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152))));
var or__8363__auto__ = watch_atom_QMARK_;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),next_state.state_change_count);
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var map__22696 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
var map__22696__$1 = ((((!((map__22696 == null)))?((((map__22696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22696):map__22696);
var data_atom = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var mount_fn = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256));
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var target = document.getElementById(unique_id);
mount_fn.call(null,target);

if(cljs.core.truth_(data_atom)){
return cljs.core.add_watch.call(null,data_atom,unique_id,((function (map__22696,map__22696__$1,data_atom,mount_fn,unique_id,target,this$){
return (function (_,___$1,___$2,___$3){
var new_change_count = (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1));
return this$.setState(({"state_change_count": new_change_count}));
});})(map__22696,map__22696__$1,data_atom,mount_fn,unique_id,target,this$))
);
} else {
return null;
}
}):(function (){
return null;
})), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
if(cljs.core._EQ_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),prev_state.state_change_count)){
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var map__22698 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
var map__22698__$1 = ((((!((map__22698 == null)))?((((map__22698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22698):map__22698);
var mount_fn = cljs.core.get.call(null,map__22698__$1,new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256));
var component = cljs.core.get.call(null,map__22698__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var reconciler = cljs.core.get.call(null,map__22698__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var target = document.getElementById(unique_id);
var temp__6751__auto__ = om.next.class__GT_any.call(null,reconciler,component);
if(cljs.core.truth_(temp__6751__auto__)){
var c = temp__6751__auto__;
return c.forceUpdate();
} else {
return mount_fn.call(null,target);
}
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var data_atom = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),new cljs.core.Keyword(null,"data_atom","data_atom",257894504)], null));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
if(cljs.core.truth_((function (){var and__8351__auto__ = data_atom;
if(cljs.core.truth_(and__8351__auto__)){
return id;
} else {
return and__8351__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var map__22700 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var map__22700__$1 = ((((!((map__22700 == null)))?((((map__22700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22700):map__22700);
var card = map__22700__$1;
var map__22701 = cljs.core.get.call(null,map__22700__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__22701__$1 = ((((!((map__22701 == null)))?((((map__22701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22701):map__22701);
var watch_atom = cljs.core.get.call(null,map__22701__$1,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308));
var map__22702 = cljs.core.get.call(null,map__22700__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var map__22702__$1 = ((((!((map__22702 == null)))?((((map__22702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22702):map__22702);
var mount_fn = cljs.core.get.call(null,map__22702__$1,new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256));
var data_atom = cljs.core.get.call(null,map__22702__$1,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var main = (function (){var G__22706 = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?React.createElement("div",({"id": unique_id})):mount_fn.call(null));
if(cljs.core.not.call(null,watch_atom)){
return devcards.core.dont_update.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),G__22706);
} else {
return G__22706;
}
})();
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards_om_next.core.OmNextNode !== 'undefined'){
} else {
devcards_om_next.core.OmNextNode = React.createClass(base__16288__auto___22711);
}

var seq__22707_22712 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__22708_22713 = null;
var count__22709_22714 = (0);
var i__22710_22715 = (0);
while(true){
if((i__22710_22715 < count__22709_22714)){
var property__16289__auto___22716 = cljs.core._nth.call(null,chunk__22708_22713,i__22710_22715);
if(cljs.core.truth_((base__16288__auto___22711[property__16289__auto___22716]))){
(devcards_om_next.core.OmNextNode.prototype[property__16289__auto___22716] = (base__16288__auto___22711[property__16289__auto___22716]));
} else {
}

var G__22717 = seq__22707_22712;
var G__22718 = chunk__22708_22713;
var G__22719 = count__22709_22714;
var G__22720 = (i__22710_22715 + (1));
seq__22707_22712 = G__22717;
chunk__22708_22713 = G__22718;
count__22709_22714 = G__22719;
i__22710_22715 = G__22720;
continue;
} else {
var temp__6753__auto___22721 = cljs.core.seq.call(null,seq__22707_22712);
if(temp__6753__auto___22721){
var seq__22707_22722__$1 = temp__6753__auto___22721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22707_22722__$1)){
var c__9294__auto___22723 = cljs.core.chunk_first.call(null,seq__22707_22722__$1);
var G__22724 = cljs.core.chunk_rest.call(null,seq__22707_22722__$1);
var G__22725 = c__9294__auto___22723;
var G__22726 = cljs.core.count.call(null,c__9294__auto___22723);
var G__22727 = (0);
seq__22707_22712 = G__22724;
chunk__22708_22713 = G__22725;
count__22709_22714 = G__22726;
i__22710_22715 = G__22727;
continue;
} else {
var property__16289__auto___22728 = cljs.core.first.call(null,seq__22707_22722__$1);
if(cljs.core.truth_((base__16288__auto___22711[property__16289__auto___22728]))){
(devcards_om_next.core.OmNextNode.prototype[property__16289__auto___22728] = (base__16288__auto___22711[property__16289__auto___22728]));
} else {
}

var G__22729 = cljs.core.next.call(null,seq__22707_22722__$1);
var G__22730 = null;
var G__22731 = (0);
var G__22732 = (0);
seq__22707_22712 = G__22729;
chunk__22708_22713 = G__22730;
count__22709_22714 = G__22731;
i__22710_22715 = G__22732;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=core.js.map
