goog.provide("re_frisk.devtool");
(function (){
re_frisk.devtool.export_json = (function re_frisk$devtool$export_json(){
var temp__21873__auto__ = cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",(1279968570)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlerForForeign","handlerForForeign",(-44914005)),(function (_,___$1){
return cognitect.transit.write_handler.call(null,(function (___$2){
return "ForeignType";
}),(function (___$2){
return "";
}));
})], null)),cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",(865606302)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data))));
if(cljs.core.truth_(temp__21873__auto__)){
var str = temp__21873__auto__;
return new cljs.core.Keyword(null,"win","win",(-1624642689)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).saveAs((new Blob((new Array(str)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),"application/json"], null))),"app-db.json");
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.export_json;},new cljs.core.Symbol("re-frisk.devtool","export-json","re-frisk.devtool/export-json",(495682037),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"export-json","export-json",(1010719147),null),"re_frisk/devtool.cljs",(18),(1),(9),(9),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frisk.devtool.export_json)?re_frisk.devtool.export_json.cljs$lang$test:null)])));})()
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
new cljs.core.Var(function(){return re_frisk.devtool.json_on_change;},new cljs.core.Symbol("re-frisk.devtool","json-on-change","re-frisk.devtool/json-on-change",(1329895615),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"json-on-change","json-on-change",(1906885457),null),"re_frisk/devtool.cljs",(21),(1),(20),(20),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null)], null)),null,(cljs.core.truth_(re_frisk.devtool.json_on_change)?re_frisk.devtool.json_on_change.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.devtool.on_window_unload = (function re_frisk$devtool$on_window_unload(){
reagent.dom.unmount_component_at_node.call(null,new cljs.core.Keyword(null,"app","app",(-560961707)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)));

return cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",(-1950516132)),true);
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.on_window_unload;},new cljs.core.Symbol("re-frisk.devtool","on-window-unload","re-frisk.devtool/on-window-unload",(-591561561),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"on-window-unload","on-window-unload",(1047086873),null),"re_frisk/devtool.cljs",(23),(1),(29),(29),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frisk.devtool.on_window_unload)?re_frisk.devtool.on_window_unload.cljs$lang$test:null)])));})()
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
})())?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.debugger_shell,re_frisk.data.re_frame_data,re_frisk.data.re_frame_events,re_frisk.data.deb_data,((function (app,re_frame_QMARK_){
return (function (){
return new cljs.core.Keyword(null,"doc","doc",(1913296891)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).getElementById("json-file-field").click();
});})(app,re_frame_QMARK_))
,re_frisk.devtool.export_json], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.reagent_debugger_shell,re_frisk.data.re_frame_data], null))], null),app);
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.mount;},new cljs.core.Symbol("re-frisk.devtool","mount","re-frisk.devtool/mount",(2049836379),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"mount","mount",(79949057),null),"re_frisk/devtool.cljs",(12),(1),(33),(33),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",(1994700528),null),new cljs.core.Symbol(null,"d","d",(-682293345),null)], null)),null,(cljs.core.truth_(re_frisk.devtool.mount)?re_frisk.devtool.mount.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.devtool.open_debugger_window = (function re_frisk$devtool$open_debugger_window(){
var w = window.open("","Debugger","width=800,height=400,resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no");
var d = w.document;
d.open();

d.write(re_frisk_shell.core.debugger_page);

(w["onload"] = ((function (w,d){
return (function (){
return re_frisk.devtool.mount.call(null,w,d);
});})(w,d))
);

return d.close();
}); return (
new cljs.core.Var(function(){return re_frisk.devtool.open_debugger_window;},new cljs.core.Symbol("re-frisk.devtool","open-debugger-window","re-frisk.devtool/open-debugger-window",(-1114090554),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.devtool","re-frisk.devtool",(-1816092542),null),new cljs.core.Symbol(null,"open-debugger-window","open-debugger-window",(-1674806496),null),"re_frisk/devtool.cljs",(27),(1),(48),(48),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frisk.devtool.open_debugger_window)?re_frisk.devtool.open_debugger_window.cljs$lang$test:null)])));})()
;
