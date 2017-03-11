goog.provide("re_frisk.devtool");
(function (){
re_frisk.devtool.export_json = (function re_frisk$devtool$export_json(){
var temp__21873__auto__ = (function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",(1279968570))),cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",(865606302)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data))));
}catch (e23){if((e23 instanceof Object)){
var e = e23;
return new cljs.core.Keyword(null,"win","win",(-1624642689)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).alert(e);
} else {
throw e23;

}
}})();
if(cljs.core.truth_(temp__21873__auto__)){
var str = temp__21873__auto__;
return new cljs.core.Keyword(null,"win","win",(-1624642689)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).saveAs((new Blob((new Array(str)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),"application/json"], null))),"app-db.json");
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.export_json;},new cljs.core.Symbol("re-frisk.devtool","export-json","re-frisk.devtool/export-json",(495682037),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"export-json","export-json",(1010719147),null),"re_frisk/devtool.cljs",(18),(1),(11),(11),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frisk.devtool.export_json)?re_frisk.devtool.export_json.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.devtool.json_on_change = (function re_frisk$devtool$json_on_change(event){
var rdr = (new FileReader());
rdr.onload = ((function (rdr){
return (function (p1__1_SHARP_){
cljs.core.reset_BANG_.call(null,re_frisk.data.re_frame_events,cljs.core.PersistentVector.EMPTY);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",(-658524246)),cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",(1279968570))),p1__1_SHARP_.target.result)], null));
});})(rdr))
;

return rdr.readAsText((event.target.files[(0)]));
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.json_on_change;},new cljs.core.Symbol("re-frisk.devtool","json-on-change","re-frisk.devtool/json-on-change",(1329895615),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"json-on-change","json-on-change",(1906885457),null),"re_frisk/devtool.cljs",(21),(1),(18),(18),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null)], null)),null,(cljs.core.truth_(re_frisk.devtool.json_on_change)?re_frisk.devtool.json_on_change.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.devtool.debugger_messages = (function re_frisk$devtool$debugger_messages(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",(694513143)),"debugger-messages",new cljs.core.Keyword(null,"component-did-update","component-did-update",(-1468549173)),(function (this$){
var n = reagent.core.dom_node.call(null,this$);
if(cljs.core.truth_(new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",(-1686598134)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))){
return n.scrollTop = n.scrollHeight;
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",(-985383853)),(function (){
var clrs = new cljs.core.Keyword(null,"evnt-colors","evnt-colors",(582185154)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debugger-sidebar-messages","div.debugger-sidebar-messages",(-2133802263)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",(1590848677)),((function (clrs){
return (function (p1__2_SHARP_){
var t = p1__2_SHARP_.target;
return cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",(-1686598134)),cljs.core._EQ_.call(null,t.scrollTop,(t.scrollHeight - t.offsetHeight)));
});})(clrs))
], null),cljs.core.map_indexed.call(null,((function (clrs){
return (function (id,item){
var event = cljs.core.first.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"event","event",(301435442)).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"event","event",(301435442)).cljs$core$IFn$_invoke$arity$1(item):item));
var fx_QMARK_ = cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/-fx/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));
var db_QMARK_ = cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/-db/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));
var clr = event.call(null,clrs);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.messages-entry","div.messages-entry",(1135066673)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),((function (event,fx_QMARK_,db_QMARK_,clr,clrs){
return (function (){
return cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"event-data","event-data",(-1726012139)),item);
});})(event,fx_QMARK_,db_QMARK_,clr,clrs))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",(242065432)),"inline-block",new cljs.core.Keyword(null,"background-color","background-color",(570434026)),(cljs.core.truth_(clr)?clr:((fx_QMARK_)?"#FF0000":((db_QMARK_)?"#00FF00":"#3d3d3d"
))),new cljs.core.Keyword(null,"opacity","opacity",(397153780)),(0.5),new cljs.core.Keyword(null,"width","width",(-384071477)),"15px",new cljs.core.Keyword(null,"height","height",(1025178622)),"15px",new cljs.core.Keyword(null,"overflow","overflow",(2058931880)),"hidden",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",(-1899795591)),"4px"], null)], null),((fx_QMARK_)?"fx":((db_QMARK_)?"db":"  "
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.messages-entry-content","span.messages-entry-content",(-1610061970)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),id], null));
});})(clrs))
,cljs.core.deref.call(null,re_frisk.data.re_frame_events))], null);
})], null));
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.debugger_messages;},new cljs.core.Symbol("re-frisk.devtool","debugger-messages","re-frisk.devtool/debugger-messages",(128937889),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"debugger-messages","debugger-messages",(-448490469),null),"re_frisk/devtool.cljs",(24),(1),(25),(25),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frisk.devtool.debugger_messages)?re_frisk.devtool.debugger_messages.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.devtool.event_bar = (function re_frisk$devtool$event_bar(){
var evnt_key = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.first.call(null,(function (){var or__23109__auto__ = new cljs.core.Keyword(null,"event","event",(301435442)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"event-data","event-data",(-1726012139)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)));
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return new cljs.core.Keyword(null,"event-data","event-data",(-1726012139)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data));
}
})());
}));
var clr = reagent.ratom.make_reaction.call(null,((function (evnt_key){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))){
return cljs.core.deref.call(null,evnt_key).call(null,new cljs.core.Keyword(null,"evnt-colors","evnt-colors",(582185154)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)));
} else {
return "";
}
});})(evnt_key))
);
return ((function (evnt_key,clr){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",(-384071477)),"100%",new cljs.core.Keyword(null,"height","height",(1025178622)),"20px",new cljs.core.Keyword(null,"background-color","background-color",(570434026)),"#3d3d3d",new cljs.core.Keyword(null,"color","color",(1011675173)),"#ffffff",new cljs.core.Keyword(null,"position","position",(-2011731912)),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),"Event"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",(556931961)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",(-2011731912)),"absolute",new cljs.core.Keyword(null,"left","left",(-399115937)),"50px",new cljs.core.Keyword(null,"top","top",(-1856271961)),"0px",new cljs.core.Keyword(null,"width","width",(-384071477)),"60px"], null),new cljs.core.Keyword(null,"placeholder","placeholder",(-104873083)),"#000000",new cljs.core.Keyword(null,"type","type",(1174270348)),"text",new cljs.core.Keyword(null,"value","value",(305978217)),cljs.core.deref.call(null,clr),new cljs.core.Keyword(null,"max-length","max-length",(-254826109)),"7",new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (evnt_key,clr){
return (function (p1__3_SHARP_){
return cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evnt-colors","evnt-colors",(582185154)),cljs.core.deref.call(null,evnt_key)], null),p1__3_SHARP_.target.value);
});})(evnt_key,clr))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",(-2011731912)),"absolute",new cljs.core.Keyword(null,"right","right",(-452581833)),"0px",new cljs.core.Keyword(null,"top","top",(-1856271961)),"0px",new cljs.core.Keyword(null,"width","width",(-384071477)),"20px",new cljs.core.Keyword(null,"cursor","cursor",(1011937484)),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),((function (evnt_key,clr){
return (function (){
return cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"event-data","event-data",(-1726012139)),null);
});})(evnt_key,clr))
], null),"X"], null)], null);
});
;})(evnt_key,clr))
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.event_bar;},new cljs.core.Symbol("re-frisk.devtool","event-bar","re-frisk.devtool/event-bar",(-946240788),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"event-bar","event-bar",(650472074),null),"re_frisk/devtool.cljs",(16),(1),(54),(54),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frisk.devtool.event_bar)?re_frisk.devtool.event_bar.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.devtool.debugger_shell = (function re_frisk$devtool$debugger_shell(){
var expand_by_default = cljs.core.reduce.call(null,(function (p1__4_SHARP_,p2__5_SHARP_){
return cljs.core.assoc_in.call(null,p1__4_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),p2__5_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540))], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,(1)));
var expand_by_default2 = cljs.core.reduce.call(null,((function (expand_by_default){
return (function (p1__6_SHARP_,p2__7_SHARP_){
return cljs.core.assoc_in.call(null,p1__6_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),p2__7_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540))], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY], true));
});})(expand_by_default))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,(1)));
var state_atom = reagent.core.atom.call(null,expand_by_default);
var state_atom2 = reagent.core.atom.call(null,expand_by_default2);
return ((function (expand_by_default,expand_by_default2,state_atom,state_atom2){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#debugger","div#debugger",(797000977)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debugger-sidebar","div.debugger-sidebar",(-622219837)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.debugger_messages], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debugger-sidebar-controls","div.debugger-sidebar-controls",(-1091565730)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debugger-sidebar-controls-import-export","div.debugger-sidebar-controls-import-export",(-1556067220)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",(1011937484)),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),((function (expand_by_default,expand_by_default2,state_atom,state_atom2){
return (function (){
return new cljs.core.Keyword(null,"doc","doc",(1913296891)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).getElementById("json-file-field").click();
});})(expand_by_default,expand_by_default2,state_atom,state_atom2))
], null),"Import"], null)," / ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",(1011937484)),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),re_frisk.devtool.export_json], null),"Export"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#values","div#values",(987346679)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),cljs.core.merge.call(null,re_frisk.ui.frisk_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",(1025178622)),(cljs.core.truth_(new cljs.core.Keyword(null,"event-data","event-data",(-1726012139)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))?"60%":"100%")], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),cljs.core.map_indexed.call(null,((function (expand_by_default,expand_by_default2,state_atom,state_atom2){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),id], null));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,re_frisk.data.re_frame_data)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),cljs.core.merge.call(null,re_frisk.ui.frisk_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",(1025178622)),"40%",new cljs.core.Keyword(null,"overflow","overflow",(2058931880)),"hidden",new cljs.core.Keyword(null,"display","display",(242065432)),(cljs.core.truth_(new cljs.core.Keyword(null,"event-data","event-data",(-1726012139)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))?"block":"none")], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.event_bar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",(2058931880)),"auto",new cljs.core.Keyword(null,"height","height",(1025178622)),"100%"], null)], null),cljs.core.map_indexed.call(null,((function (expand_by_default,expand_by_default2,state_atom,state_atom2){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom2], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),id], null));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-data","event-data",(-1726012139)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",(1025178622)),"20px"], null)], null)], null)], null)], null)], null)], null);
});
;})(expand_by_default,expand_by_default2,state_atom,state_atom2))
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.debugger_shell;},new cljs.core.Symbol("re-frisk.devtool","debugger-shell","re-frisk.devtool/debugger-shell",(-604817427),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"debugger-shell","debugger-shell",(-89694325),null),"re_frisk/devtool.cljs",(21),(1),(66),(66),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frisk.devtool.debugger_shell)?re_frisk.devtool.debugger_shell.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.devtool.reagent_debugger_shell = (function re_frisk$devtool$reagent_debugger_shell(){
var expand_by_default = cljs.core.reduce.call(null,(function (p1__8_SHARP_,p2__9_SHARP_){
return cljs.core.assoc_in.call(null,p1__8_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),p2__9_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540))], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,(1)));
var state_atom = reagent.core.atom.call(null,expand_by_default);
return ((function (expand_by_default,state_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),re_frisk.ui.frisk_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),cljs.core.map_indexed.call(null,((function (expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),id], null));
});})(expand_by_default,state_atom))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,re_frisk.data.re_frame_data)], null))], null)], null);
});
;})(expand_by_default,state_atom))
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.reagent_debugger_shell;},new cljs.core.Symbol("re-frisk.devtool","reagent-debugger-shell","re-frisk.devtool/reagent-debugger-shell",(928648572),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"reagent-debugger-shell","reagent-debugger-shell",(1410217414),null),"re_frisk/devtool.cljs",(29),(1),(95),(95),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frisk.devtool.reagent_debugger_shell)?re_frisk.devtool.reagent_debugger_shell.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.devtool.on_window_unload = (function re_frisk$devtool$on_window_unload(){
reagent.dom.unmount_component_at_node.call(null,new cljs.core.Keyword(null,"app","app",(-560961707)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)));

return cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",(-1950516132)),true);
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.on_window_unload;},new cljs.core.Symbol("re-frisk.devtool","on-window-unload","re-frisk.devtool/on-window-unload",(-591561561),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"on-window-unload","on-window-unload",(1047086873),null),"re_frisk/devtool.cljs",(23),(1),(104),(104),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frisk.devtool.on_window_unload)?re_frisk.devtool.on_window_unload.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.devtool.mount = (function re_frisk$devtool$mount(w,d){
var app = d.getElementById("app");
var re_frame_QMARK_ = new cljs.core.Keyword(null,"app-db","app-db",(865606302)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data));
(w["onunload"] = re_frisk.devtool.on_window_unload);

cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",(-1950516132)),false,new cljs.core.Keyword(null,"doc","doc",(1913296891)),d,new cljs.core.Keyword(null,"win","win",(-1624642689)),w,new cljs.core.Keyword(null,"app","app",(-560961707)),app);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",(1025178622)),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",(556931961)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),"file",new cljs.core.Keyword(null,"id","id",(-1388402092)),"json-file-field",new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),re_frisk.devtool.json_on_change,new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",(242065432)),"none"], null)], null)], null),(cljs.core.truth_((function (){var and__23067__auto__ = re_frame_QMARK_;
if(cljs.core.truth_(and__23067__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"events?","events?",(-780512682)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prefs","prefs",(-1818938470)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data))),false);
} else {
return and__23067__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.debugger_shell], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.reagent_debugger_shell], null))], null),app);
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.mount;},new cljs.core.Symbol("re-frisk.devtool","mount","re-frisk.devtool/mount",(2049836379),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"mount","mount",(79949057),null),"re_frisk/devtool.cljs",(12),(1),(108),(108),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",(1994700528),null),new cljs.core.Symbol(null,"d","d",(-682293345),null)], null)),null,(cljs.core.truth_(re_frisk.devtool.mount)?re_frisk.devtool.mount.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.devtool.open_debugger_window = (function re_frisk$devtool$open_debugger_window(){
var w = window.open("","Debugger","width=800,height=400,resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no");
var d = w.document;
d.open();

d.write(re_frisk.ui.debugger_page);

(w["onload"] = ((function (w,d){
return (function (){
return re_frisk.devtool.mount.call(null,w,d);
});})(w,d))
);

return d.close();
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.open_debugger_window;},new cljs.core.Symbol("re-frisk.devtool","open-debugger-window","re-frisk.devtool/open-debugger-window",(-1114090554),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"open-debugger-window","open-debugger-window",(-1674806496),null),"re_frisk/devtool.cljs",(27),(1),(120),(120),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frisk.devtool.open_debugger_window)?re_frisk.devtool.open_debugger_window.cljs$lang$test:null)])));})()
;
