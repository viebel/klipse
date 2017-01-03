goog.provide("reagent.ratom");
(function (){
reagent.ratom._STAR_ratom_context_STAR_; return (
new cljs.core.Var(function(){return reagent.ratom._STAR_ratom_context_STAR_;},new cljs.core.Symbol("reagent.ratom","*ratom-context*","reagent.ratom/*ratom-context*",(13467415),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",(-1557728360),null),"reagent/ratom.cljs",(35),(1),true,(9),true,(9),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.ratom._STAR_ratom_context_STAR_)?reagent.ratom._STAR_ratom_context_STAR_.cljs$lang$test:null)])));})()
;
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
(function (){
reagent.ratom.debug = false; return (
new cljs.core.Var(function(){return reagent.ratom.debug;},new cljs.core.Symbol("reagent.ratom","debug","reagent.ratom/debug",(1664636330),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"debug","debug",(32358931),null),"reagent/ratom.cljs",(24),(1),(10),(10),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.List.EMPTY,null,((reagent.ratom.debug)?reagent.ratom.debug.cljs$lang$test:null)])));})()
;
}
if(typeof reagent.ratom.generation !== 'undefined'){
} else {
(function (){
reagent.ratom.generation = (0); return (
new cljs.core.Var(function(){return reagent.ratom.generation;},new cljs.core.Symbol("reagent.ratom","generation","reagent.ratom/generation",(2111246434),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"generation","generation",(-492010517),null),"reagent/ratom.cljs",(30),(1),(11),(11),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.ratom.generation)?reagent.ratom.generation.cljs$lang$test:null)])));})()
;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
(function (){
reagent.ratom._running = cljs.core.atom.call(null,(0)); return (
new cljs.core.Var(function(){return reagent.ratom._running;},new cljs.core.Symbol("reagent.ratom","-running","reagent.ratom/-running",(-1210257958),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"-running","-running",(694296147),null),"reagent/ratom.cljs",(28),(1),(12),(12),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.ratom._running)?reagent.ratom._running.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.ratom.reactive_QMARK_ = (function reagent$ratom$reactive_QMARK_(){
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}); return (
new cljs.core.Var(function(){return reagent.ratom.reactive_QMARK_;},new cljs.core.Symbol("reagent.ratom","reactive?","reagent.ratom/reactive?",(-358553475),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"reactive?","reactive?",(1213887990),null),"reagent/ratom.cljs",(25),(1),(14),(14),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,((reagent.ratom.reactive_QMARK_)?reagent.ratom.reactive_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
}); return (
new cljs.core.Var(function(){return reagent.ratom.running;},new cljs.core.Symbol("reagent.ratom","running","reagent.ratom/running",(320718031),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"running","running",(-1099466666),null),"reagent/ratom.cljs",(14),(1),(20),(20),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent.ratom.running)?reagent.ratom.running.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.arr_len = (function reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.arr_len;},new cljs.core.Symbol("reagent.ratom","arr-len","reagent.ratom/arr-len",(-606572313),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"arr-len","arr-len",(2120475518),null),"reagent/ratom.cljs",(23),(1),(23),(23),new cljs.core.Symbol(null,"number","number",(-1084057331),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(reagent.ratom.arr_len)?reagent.ratom.arr_len.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.arr_eq = (function reagent$ratom$arr_eq(x,y){
var len = reagent.ratom.arr_len.call(null,x);
var and__20770__auto__ = (len === reagent.ratom.arr_len.call(null,y));
if(and__20770__auto__){
var i = (0);
while(true){
var or__20817__auto__ = (i === len);
if(or__20817__auto__){
return or__20817__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__140 = (i + (1));
i = G__140;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__20770__auto__;
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.arr_eq;},new cljs.core.Symbol("reagent.ratom","arr-eq","reagent.ratom/arr-eq",(-70964719),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"arr-eq","arr-eq",(422469512),null),"reagent/ratom.cljs",(23),(1),(26),(26),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null)),null,((reagent.ratom.arr_eq)?reagent.ratom.arr_eq.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.in_context = (function reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR_142 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_142;
}}); return (
new cljs.core.Var(function(){return reagent.ratom.in_context;},new cljs.core.Symbol("reagent.ratom","in-context","reagent.ratom/in-context",(-613270978),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"in-context","in-context",(967159457),null),"reagent/ratom.cljs",(18),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.ratom.in_context)?reagent.ratom.in_context.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.deref_capture = (function reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = reagent.ratom.generation = (reagent.ratom.generation + (1));


var res = reagent.ratom.in_context.call(null,r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(reagent.ratom.arr_eq.call(null,c,r.watching)){
} else {
r._update_watching(c);
}

return res;
}); return (
new cljs.core.Var(function(){return reagent.ratom.deref_capture;},new cljs.core.Symbol("reagent.ratom","deref-capture","reagent.ratom/deref-capture",(895927101),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"deref-capture","deref-capture",(-741779786),null),"reagent/ratom.cljs",(21),(1),(39),(39),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"r","r",(1169147337),null)], null)),null,(cljs.core.truth_(reagent.ratom.deref_capture)?reagent.ratom.deref_capture.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__20427__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__20427__auto__ == null)){
return null;
} else {
var r = temp__20427__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.notify_deref_watcher_BANG_;},new cljs.core.Symbol("reagent.ratom","notify-deref-watcher!","reagent.ratom/notify-deref-watcher!",(922168200),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"notify-deref-watcher!","notify-deref-watcher!",(-1857964031),null),"reagent/ratom.cljs",(29),(1),(51),(51),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefed","derefed",(-2063751186),null)], null)),null,(cljs.core.truth_(reagent.ratom.notify_deref_watcher_BANG_)?reagent.ratom.notify_deref_watcher_BANG_.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.check_watches = (function reagent$ratom$check_watches(old,new$){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count.call(null,new$) - cljs.core.count.call(null,old)));
} else {
}

return new$;
}); return (
new cljs.core.Var(function(){return reagent.ratom.check_watches;},new cljs.core.Symbol("reagent.ratom","check-watches","reagent.ratom/check-watches",(-691848631),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"check-watches","check-watches",(1936308174),null),"reagent/ratom.cljs",(21),(1),(58),(58),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old","old",(-184691163),null),new cljs.core.Symbol(null,"new","new",(-444906321),null)], null)),null,(cljs.core.truth_(reagent.ratom.check_watches)?reagent.ratom.check_watches.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.add_w = (function reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.assoc.call(null,w,key,f));

return this$.watchesArr = null;
}); return (
new cljs.core.Var(function(){return reagent.ratom.add_w;},new cljs.core.Symbol("reagent.ratom","add-w","reagent.ratom/add-w",(1212726841),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"add-w","add-w",(722600880),null),"reagent/ratom.cljs",(13),(1),(63),(63),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.ratom.add_w)?reagent.ratom.add_w.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.remove_w = (function reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.dissoc.call(null,w,key));

return this$.watchesArr = null;
}); return (
new cljs.core.Var(function(){return reagent.ratom.remove_w;},new cljs.core.Symbol("reagent.ratom","remove-w","reagent.ratom/remove-w",(1975715940),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"remove-w","remove-w",(141145341),null),"reagent/ratom.cljs",(16),(1),(68),(68),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null)),null,(cljs.core.truth_(reagent.ratom.remove_w)?reagent.ratom.remove_w.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.notify_w = (function reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv.call(null,((function (w){
return (function (p1__8_SHARP_,p2__9_SHARP_,p3__10_SHARP_){
var G__144 = p1__8_SHARP_;
G__144.push(p2__9_SHARP_);

G__144.push(p3__10_SHARP_);

return G__144;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_145 = (a[i]);
var f_146 = (a[(i + (1))]);
f_146.call(null,k_145,this$,old,new$);

var G__147 = ((2) + i);
i = G__147;
continue;
} else {
return null;
}
break;
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.notify_w;},new cljs.core.Symbol("reagent.ratom","notify-w","reagent.ratom/notify-w",(-904203697),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"notify-w","notify-w",(1876983492),null),"reagent/ratom.cljs",(16),(1),(73),(73),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"old","old",(-184691163),null),new cljs.core.Symbol(null,"new","new",(-444906321),null)], null)),null,(cljs.core.truth_(reagent.ratom.notify_w)?reagent.ratom.notify_w.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.pr_atom = (function reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write.call(null,writer,[cljs.core.str("#<"),cljs.core.str(s),cljs.core.str(" ")].join(''));

cljs.core.pr_writer.call(null,(function (){var _STAR_ratom_context_STAR_149 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,a);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_149;
}})(),writer,opts);

return cljs.core._write.call(null,writer,">");
}); return (
new cljs.core.Var(function(){return reagent.ratom.pr_atom;},new cljs.core.Symbol("reagent.ratom","pr-atom","reagent.ratom/pr-atom",(-625076225),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"pr-atom","pr-atom",(1204323424),null),"reagent/ratom.cljs",(15),(1),(89),(89),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(reagent.ratom.pr_atom)?reagent.ratom.pr_atom.cljs$lang$test:null)])));})()
;
if(typeof reagent.ratom.rea_queue !== 'undefined'){
} else {
(function (){
reagent.ratom.rea_queue = null; return (
new cljs.core.Var(function(){return reagent.ratom.rea_queue;},new cljs.core.Symbol("reagent.ratom","rea-queue","reagent.ratom/rea-queue",(-937655409),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"rea-queue","rea-queue",(1430656790),null),"reagent/ratom.cljs",(29),(1),(97),(97),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.ratom.rea_queue)?reagent.ratom.rea_queue.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.ratom.rea_enqueue = (function reagent$ratom$rea_enqueue(r){
if((reagent.ratom.rea_queue == null)){
reagent.ratom.rea_queue = [];

reagent.impl.batching.schedule.call(null);
} else {
}

return reagent.ratom.rea_queue.push(r);
}); return (
new cljs.core.Var(function(){return reagent.ratom.rea_enqueue;},new cljs.core.Symbol("reagent.ratom","rea-enqueue","reagent.ratom/rea-enqueue",(-1277112822),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"rea-enqueue","rea-enqueue",(1414158977),null),"reagent/ratom.cljs",(19),(1),(99),(99),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null)], null)),null,(cljs.core.truth_(reagent.ratom.rea_enqueue)?reagent.ratom.rea_enqueue.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.flush_BANG_ = (function reagent$ratom$flush_BANG_(){
while(true){
var q = reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
reagent.ratom.rea_queue = null;

var n__23475__auto___150 = q.length;
var i_151 = (0);
while(true){
if((i_151 < n__23475__auto___150)){
(q[i_151])._queued_run();

var G__152 = (i_151 + (1));
i_151 = G__152;
continue;
} else {
}
break;
}

continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.flush_BANG_;},new cljs.core.Symbol("reagent.ratom","flush!","reagent.ratom/flush!",(-693392600),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"flush!","flush!",(1979537297),null),"reagent/ratom.cljs",(13),(1),(105),(105),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent.ratom.flush_BANG_)?reagent.ratom.flush_BANG_.cljs$lang$test:null)])));})()
;
reagent.impl.batching.ratom_flush = reagent.ratom.flush_BANG_;

/**
 * @interface
 */
(function (){
reagent.ratom.IReactiveAtom = function(){}; return (
new cljs.core.Var(function(){return reagent.ratom.IReactiveAtom;},new cljs.core.Symbol("reagent.ratom","IReactiveAtom","reagent.ratom/IReactiveAtom",(562162668),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",(-991158427),null),"reagent/ratom.cljs",(27),(1),(119),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.EMPTY], null),(119),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(reagent.ratom.IReactiveAtom)?reagent.ratom.IReactiveAtom.cljs$lang$test:null)])));})()
;


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = -2141028352;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Atom:");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str("(validator new-value)")].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
reagent.ratom.notify_w.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"meta","meta",(-1154898805),null),new cljs.core.Symbol(null,"validator","validator",(-325659154),null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"reagent.ratom/RAtom");
});

(function (){
reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
}); return (
new cljs.core.Var(function(){return reagent.ratom.__GT_RAtom;},new cljs.core.Symbol("reagent.ratom","->RAtom","reagent.ratom/->RAtom",(-1167532411),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol("cljs.core","IWatchable","cljs.core/IWatchable",(-1531379261),null),null,new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",(-1037999645),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IReset","cljs.core/IReset",(-1478584309),null),null,new cljs.core.Symbol("cljs.core","ISwap","cljs.core/ISwap",(-190928468),null),null,new cljs.core.Symbol("reagent.ratom","IReactiveAtom","reagent.ratom/IReactiveAtom",(562162668),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"->RAtom","->RAtom",(432231422),null),"reagent/ratom.cljs",(15),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(121),(121),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"meta","meta",(-1154898805),null),new cljs.core.Symbol(null,"validator","validator",(-325659154),null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Symbol("cljs.core","IWatchable","cljs.core/IWatchable",(-1531379261),null),null,new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",(-1037999645),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IReset","cljs.core/IReset",(-1478584309),null),null,new cljs.core.Symbol("cljs.core","ISwap","cljs.core/ISwap",(-190928468),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),null,(cljs.core.truth_(reagent.ratom.__GT_RAtom)?reagent.ratom.__GT_RAtom.cljs$lang$test:null)])));})()
;

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
(function (){
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var args153 = [];
var len__23656__auto___161 = arguments.length;
var i__23657__auto___162 = (0);
while(true){
if((i__23657__auto___162 < len__23656__auto___161)){
args153.push((arguments[i__23657__auto___162]));

var G__163 = (i__23657__auto___162 + (1));
i__23657__auto___162 = G__163;
continue;
} else {
}
break;
}

var G__157 = args153.length;
switch (G__157) {
case (1):
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__23675__auto__ = (new cljs.core.IndexedSeq(args153.slice((1)),(0),null));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23675__auto__);

}
}); return (
new cljs.core.Var(function(){return reagent.ratom.atom;},new cljs.core.Symbol("reagent.ratom","atom","reagent.ratom/atom",(-391081187),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"atom","atom",(1243487874),null),"reagent/ratom.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",(-1154898805),null),new cljs.core.Symbol(null,"validator","validator",(-325659154),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(163),(163),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",(-1154898805),null),new cljs.core.Symbol(null,"validator","validator",(-325659154),null)], null)], null)], null)),"Like clojure.core/atom, except that it keeps track of derefs.",(cljs.core.truth_(reagent.ratom.atom)?reagent.ratom.atom.cljs$lang$test:null)])));})()
;

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__158){
var map__159 = p__158;
var map__159__$1 = ((((!((map__159 == null)))?((((map__159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__159):map__159);
var meta = cljs.core.get.call(null,map__159__$1,new cljs.core.Keyword(null,"meta","meta",(1499536964)));
var validator = cljs.core.get.call(null,map__159__$1,new cljs.core.Keyword(null,"validator","validator",(-1966190681)));
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq154){
var G__155 = cljs.core.first.call(null,seq154);
var seq154__$1 = cljs.core.next.call(null,seq154);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__155,seq154__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return reagent.ratom.atom;},new cljs.core.Symbol("reagent.ratom","atom","reagent.ratom/atom",(-391081187),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"atom","atom",(1243487874),null),"reagent/ratom.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",(-1154898805),null),new cljs.core.Symbol(null,"validator","validator",(-325659154),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(163),(163),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",(-1154898805),null),new cljs.core.Symbol(null,"validator","validator",(-325659154),null)], null)], null)], null)),"Like clojure.core/atom, except that it keeps track of derefs.",(cljs.core.truth_(reagent.ratom.atom)?reagent.ratom.atom.cljs$lang$test:null)]));
(function (){
reagent.ratom.make_reaction; return (
new cljs.core.Var(function(){return reagent.ratom.make_reaction;},new cljs.core.Symbol("reagent.ratom","make-reaction","reagent.ratom/make-reaction",(272608527),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"make-reaction","make-reaction",(1935680112),null),"reagent/ratom.cljs",(23),(1),(171),true,(171),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.ratom.make_reaction)?reagent.ratom.make_reaction.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.cache_key = "reagReactionCache"; return (
new cljs.core.Var(function(){return reagent.ratom.cache_key;},new cljs.core.Symbol("reagent.ratom","cache-key","reagent.ratom/cache-key",(-420484446),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"const","const",(1709929842)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"cache-key","cache-key",(1075082795),null),"reagent/ratom.cljs",(44),(1),true,(173),(173),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.ratom.cache_key)?reagent.ratom.cache_key.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.cached_reaction = (function reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o[reagent.ratom.cache_key]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = m__$1.call(null,k,null);
if(cljs.core.some_QMARK_.call(null,r)){
return cljs.core._deref.call(null,r);
} else {
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return f.call(null);
} else {
var r__$1 = reagent.ratom.make_reaction.call(null,f,new cljs.core.Keyword(null,"on-dispose","on-dispose",(2105306360)),((function (m,m__$1,r){
return (function (x){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

var __165 = (o[reagent.ratom.cache_key]);
var __166__$1 = cljs.core.dissoc.call(null,__165,k);
var __167__$2 = (o[reagent.ratom.cache_key] = __166__$1);

if(cljs.core.some_QMARK_.call(null,obj)){
obj.reaction = null;
} else {
}

if(cljs.core.some_QMARK_.call(null,destroy)){
return destroy.call(null,x);
} else {
return null;
}
});})(m,m__$1,r))
);
var v = cljs.core._deref.call(null,r__$1);
(o[reagent.ratom.cache_key] = cljs.core.assoc.call(null,m__$1,k,r__$1));

if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

if(cljs.core.some_QMARK_.call(null,obj)){
obj.reaction = r__$1;
} else {
}

return v;

}
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.cached_reaction;},new cljs.core.Symbol("reagent.ratom","cached-reaction","reagent.ratom/cached-reaction",(-2072437011),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"cached-reaction","cached-reaction",(421694802),null),"reagent/ratom.cljs",(23),(1),(175),(175),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"o","o",(290524299),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"obj","obj",(-1672671807),null),new cljs.core.Symbol(null,"destroy","destroy",(796871122),null)], null)),null,(cljs.core.truth_(reagent.ratom.cached_reaction)?reagent.ratom.cached_reaction.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = -2141159424;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.ratom.Track.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__20287__auto__ = self__.reaction;
if((temp__20287__auto__ == null)){
return reagent.ratom.cached_reaction.call(null,((function (temp__20287__auto__,this$__$1){
return (function (){
return cljs.core.apply.call(null,self__.f,self__.args);
});})(temp__20287__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__20287__auto__;
return cljs.core._deref.call(null,r);
}
});

reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Track)) && (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Track:");
});

reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",(2131401315),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

reagent.ratom.Track.cljs$lang$type = true;

reagent.ratom.Track.cljs$lang$ctorStr = "reagent.ratom/Track";

reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"reagent.ratom/Track");
});

(function (){
reagent.ratom.__GT_Track = (function reagent$ratom$__GT_Track(f,args,reaction){
return (new reagent.ratom.Track(f,args,reaction));
}); return (
new cljs.core.Var(function(){return reagent.ratom.__GT_Track;},new cljs.core.Symbol("reagent.ratom","->Track","reagent.ratom/->Track",(1872097142),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("reagent.ratom","IReactiveAtom","reagent.ratom/IReactiveAtom",(562162668),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"->Track","->Track",(-1933018369),null),"reagent/ratom.cljs",(15),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(199),(199),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",(2131401315),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),null,(cljs.core.truth_(reagent.ratom.__GT_Track)?reagent.ratom.__GT_Track.cljs$lang$test:null)])));})()
;

(function (){
reagent.ratom.make_track = (function reagent$ratom$make_track(f,args){
return (new reagent.ratom.Track(f,args,null));
}); return (
new cljs.core.Var(function(){return reagent.ratom.make_track;},new cljs.core.Symbol("reagent.ratom","make-track","reagent.ratom/make-track",(267038680),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"make-track","make-track",(-1388299455),null),"reagent/ratom.cljs",(17),(1),(220),(220),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(reagent.ratom.make_track)?reagent.ratom.make_track.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.make_track_BANG_ = (function reagent$ratom$make_track_BANG_(f,args){
var t = reagent.ratom.make_track.call(null,f,args);
var r = reagent.ratom.make_reaction.call(null,((function (t){
return (function (){
return cljs.core._deref.call(null,t);
});})(t))
,new cljs.core.Keyword(null,"auto-run","auto-run",(1958400437)),true);
cljs.core.deref.call(null,r);

return r;
}); return (
new cljs.core.Var(function(){return reagent.ratom.make_track_BANG_;},new cljs.core.Symbol("reagent.ratom","make-track!","reagent.ratom/make-track!",(1107317730),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"make-track!","make-track!",(-513069205),null),"reagent/ratom.cljs",(18),(1),(223),(223),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(reagent.ratom.make_track_BANG_)?reagent.ratom.make_track_BANG_.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.track = (function reagent$ratom$track(var_args){
var args__23658__auto__ = [];
var len__23656__auto___170 = arguments.length;
var i__23657__auto___171 = (0);
while(true){
if((i__23657__auto___171 < len__23656__auto___170)){
args__23658__auto__.push((arguments[i__23657__auto___171]));

var G__172 = (i__23657__auto___171 + (1));
i__23657__auto___171 = G__172;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.ratom.track;},new cljs.core.Symbol("reagent.ratom","track","reagent.ratom/track",(-874605139),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"track","track",(1836319014),null),"reagent/ratom.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(230),(230),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(reagent.ratom.track)?reagent.ratom.track.cljs$lang$test:null)])));})()
;

reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track.call(null,f,args);
});

reagent.ratom.track.cljs$lang$maxFixedArity = (1);

reagent.ratom.track.cljs$lang$applyTo = (function (seq168){
var G__169 = cljs.core.first.call(null,seq168);
var seq168__$1 = cljs.core.next.call(null,seq168);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic(G__169,seq168__$1);
});

new cljs.core.Var(function(){return reagent.ratom.track;},new cljs.core.Symbol("reagent.ratom","track","reagent.ratom/track",(-874605139),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"track","track",(1836319014),null),"reagent/ratom.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(230),(230),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(reagent.ratom.track)?reagent.ratom.track.cljs$lang$test:null)]));
(function (){
reagent.ratom.track_BANG_ = (function reagent$ratom$track_BANG_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___175 = arguments.length;
var i__23657__auto___176 = (0);
while(true){
if((i__23657__auto___176 < len__23656__auto___175)){
args__23658__auto__.push((arguments[i__23657__auto___176]));

var G__177 = (i__23657__auto___176 + (1));
i__23657__auto___176 = G__177;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.ratom.track_BANG_;},new cljs.core.Symbol("reagent.ratom","track!","reagent.ratom/track!",(1183599982),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"track!","track!",(-516308489),null),"reagent/ratom.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(234),(234),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(reagent.ratom.track_BANG_)?reagent.ratom.track_BANG_.cljs$lang$test:null)])));})()
;

reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
});

reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq173){
var G__174 = cljs.core.first.call(null,seq173);
var seq173__$1 = cljs.core.next.call(null,seq173);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__174,seq173__$1);
});

new cljs.core.Var(function(){return reagent.ratom.track_BANG_;},new cljs.core.Symbol("reagent.ratom","track!","reagent.ratom/track!",(1183599982),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"track!","track!",(-516308489),null),"reagent/ratom.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(234),(234),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(reagent.ratom.track_BANG_)?reagent.ratom.track_BANG_.cljs$lang$test:null)]));

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = -2141159424;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_178 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_178;
}});

reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if(cljs.core.some_QMARK_.call(null,self__.watches)){
return reagent.ratom.notify_w.call(null,this$,oldstate,newstate);
} else {
return null;
}
}
});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,[cljs.core.str("Cursor: "),cljs.core.str(self__.path)].join(''));
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if(((!((self__.ratom == null)))?((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$)))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_.call(null,self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
self__.ratom.call(null,self__.path,new_value);
}

return new_value;
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek()));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x,y));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1._peek(),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__20287__auto__ = self__.reaction;
if((temp__20287__auto__ == null)){
var f = ((((!((self__.ratom == null)))?((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$)))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?((function (temp__20287__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(temp__20287__auto__,oldstate,this$__$1))
:((function (temp__20287__auto__,oldstate,this$__$1){
return (function (){
return self__.ratom.call(null,self__.path);
});})(temp__20287__auto__,oldstate,this$__$1))
);
return reagent.ratom.cached_reaction.call(null,f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__20287__auto__;
return cljs.core._deref.call(null,r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",(1514010260),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",(2131401315),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"reagent.ratom/RCursor");
});

(function (){
reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new reagent.ratom.RCursor(ratom,path,reaction,state,watches));
}); return (
new cljs.core.Var(function(){return reagent.ratom.__GT_RCursor;},new cljs.core.Symbol("reagent.ratom","->RCursor","reagent.ratom/->RCursor",(669008959),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol("cljs.core","IWatchable","cljs.core/IWatchable",(-1531379261),null),null,new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",(-1037999645),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IReset","cljs.core/IReset",(-1478584309),null),null,new cljs.core.Symbol("cljs.core","ISwap","cljs.core/ISwap",(-190928468),null),null,new cljs.core.Symbol("reagent.ratom","IReactiveAtom","reagent.ratom/IReactiveAtom",(562162668),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null,new cljs.core.Symbol("reagent.ratom","Object","reagent.ratom/Object",(2121307421),null),null], null), null),new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"->RCursor","->RCursor",(1522462880),null),"reagent/ratom.cljs",(17),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(240),(240),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",(1514010260),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",(2131401315),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IReset","cljs.core/IReset",(-1478584309),null),null,new cljs.core.Symbol("cljs.core","ISwap","cljs.core/ISwap",(-190928468),null),null,new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",(-1037999645),null),null,new cljs.core.Symbol("cljs.core","IWatchable","cljs.core/IWatchable",(-1531379261),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null], null), null),null,(cljs.core.truth_(reagent.ratom.__GT_RCursor)?reagent.ratom.__GT_RCursor.cljs$lang$test:null)])));})()
;

(function (){
reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var or__20817__auto__ = ((!((src == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === src.reagent$ratom$IReactiveAtom$)))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src));
if(or__20817__auto__){
return or__20817__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))")].join('')));
}

return (new reagent.ratom.RCursor(src,path,null,null,null));
}); return (
new cljs.core.Var(function(){return reagent.ratom.cursor;},new cljs.core.Symbol("reagent.ratom","cursor","reagent.ratom/cursor",(1018421400),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"cursor","cursor",(-1642498285),null),"reagent/ratom.cljs",(13),(1),(302),(302),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",(-10544524),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),null,(cljs.core.truth_(reagent.ratom.cursor)?reagent.ratom.cursor.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.with_let_destroy = (function reagent$ratom$with_let_destroy(v){
var temp__20427__auto__ = v.destroy;
if((temp__20427__auto__ == null)){
return null;
} else {
var f = temp__20427__auto__;
return f.call(null);
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.with_let_destroy;},new cljs.core.Symbol("reagent.ratom","with-let-destroy","reagent.ratom/with-let-destroy",(-818941367),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"with-let-destroy","with-let-destroy",(769159118),null),"reagent/ratom.cljs",(23),(1),(314),(314),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(reagent.ratom.with_let_destroy)?reagent.ratom.with_let_destroy.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.with_let_values = (function reagent$ratom$with_let_values(key){
var temp__20287__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__20287__auto__ == null)){
return [];
} else {
var c = temp__20287__auto__;
return reagent.ratom.cached_reaction.call(null,cljs.core.array,c,key,null,reagent.ratom.with_let_destroy);
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.with_let_values;},new cljs.core.Symbol("reagent.ratom","with-let-values","reagent.ratom/with-let-values",(-575838306),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"with-let-values","with-let-values",(1929572375),null),"reagent/ratom.cljs",(22),(1),(318),(318),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null)], null)),null,(cljs.core.truth_(reagent.ratom.with_let_values)?reagent.ratom.with_let_values.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
reagent.ratom.IDisposable = function(){}; return (
new cljs.core.Var(function(){return reagent.ratom.IDisposable;},new cljs.core.Symbol("reagent.ratom","IDisposable","reagent.ratom/IDisposable",(-2065565737),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"IDisposable","IDisposable",(-78953682),null),"reagent/ratom.cljs",(25),(1),(327),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"dispose!","dispose!",(-395693497),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"add-on-dispose!","add-on-dispose!",(1342807147),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)], null)], true, false)], null),(327),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(reagent.ratom.IDisposable)?reagent.ratom.IDisposable.cljs$lang$test:null)])));})()
;

(function (){
reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.dispose_BANG_;},new cljs.core.Symbol("reagent.ratom","dispose!","reagent.ratom/dispose!",(-1899707954),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("reagent.ratom","IDisposable","reagent.ratom/IDisposable",(-2065565737),null),new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"dispose!","dispose!",(-395693497),null),"reagent/ratom.cljs",(12),(1),(327),(328),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(reagent.ratom.dispose_BANG_)?reagent.ratom.dispose_BANG_.cljs$lang$test:null)])));})()
;

(function (){
reagent.ratom.add_on_dispose_BANG_ = (function reagent$ratom$add_on_dispose_BANG_(this$,f){
if((!((this$ == null))) && (!((this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))){
return this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,f);
} else {
var m__23055__auto____$1 = (reagent.ratom.add_on_dispose_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.add-on-dispose!",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.add_on_dispose_BANG_;},new cljs.core.Symbol("reagent.ratom","add-on-dispose!","reagent.ratom/add-on-dispose!",(-847376112),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("reagent.ratom","IDisposable","reagent.ratom/IDisposable",(-2065565737),null),new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"add-on-dispose!","add-on-dispose!",(1342807147),null),"reagent/ratom.cljs",(19),(1),(327),(329),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.ratom.add_on_dispose_BANG_)?reagent.ratom.add_on_dispose_BANG_.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
reagent.ratom.IRunnable = function(){}; return (
new cljs.core.Var(function(){return reagent.ratom.IRunnable;},new cljs.core.Symbol("reagent.ratom","IRunnable","reagent.ratom/IRunnable",(-1463863953),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"IRunnable","IRunnable",(1338343926),null),"reagent/ratom.cljs",(23),(1),(331),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"run","run",(-180635126),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(331),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(reagent.ratom.IRunnable)?reagent.ratom.IRunnable.cljs$lang$test:null)])));})()
;

(function (){
reagent.ratom.run = (function reagent$ratom$run(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (reagent.ratom.run[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (reagent.ratom.run["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return reagent.ratom.run;},new cljs.core.Symbol("reagent.ratom","run","reagent.ratom/run",(-1813108861),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("reagent.ratom","IRunnable","reagent.ratom/IRunnable",(-1463863953),null),new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"run","run",(-180635126),null),"reagent/ratom.cljs",(7),(1),(331),(332),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(reagent.ratom.run)?reagent.ratom.run.cljs$lang$test:null)])));})()
;

(function (){
reagent.ratom.handle_reaction_change = (function reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
}); return (
new cljs.core.Var(function(){return reagent.ratom.handle_reaction_change;},new cljs.core.Symbol("reagent.ratom","handle-reaction-change","reagent.ratom/handle-reaction-change",(-1871048783),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"handle-reaction-change","handle-reaction-change",(890731530),null),"reagent/ratom.cljs",(30),(1),(334),(334),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"sender","sender",(-1097132484),null),new cljs.core.Symbol(null,"old","old",(-184691163),null),new cljs.core.Symbol(null,"new","new",(-444906321),null)], null)),null,(cljs.core.truth_(reagent.ratom.handle_reaction_change)?reagent.ratom.handle_reaction_change.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = -2141159424;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_185 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_185;
}});

reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if(((oldval === newval)) || (self__.dirty_QMARK_)){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return reagent.ratom.rea_enqueue.call(null,this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return self__.auto_run.call(null,this$);
}
}
}
});

reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set.call(null,derefed);
var old = cljs.core.set.call(null,self__.watching);
self__.watching = derefed;

var seq__190_202 = cljs.core.seq.call(null,clojure.set.difference.call(null,new$,old));
var chunk__191_203 = null;
var count__192_204 = (0);
var i__193_205 = (0);
while(true){
if((i__193_205 < count__192_204)){
var w_206 = cljs.core._nth.call(null,chunk__191_203,i__193_205);
cljs.core._add_watch.call(null,w_206,this$,reagent.ratom.handle_reaction_change);

var G__207 = seq__190_202;
var G__208 = chunk__191_203;
var G__209 = count__192_204;
var G__210 = (i__193_205 + (1));
seq__190_202 = G__207;
chunk__191_203 = G__208;
count__192_204 = G__209;
i__193_205 = G__210;
continue;
} else {
var temp__19834__auto___211 = cljs.core.seq.call(null,seq__190_202);
if(temp__19834__auto___211){
var seq__190_212__$1 = temp__19834__auto___211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__190_212__$1)){
var c__23363__auto___213 = cljs.core.chunk_first.call(null,seq__190_212__$1);
var G__214 = cljs.core.chunk_rest.call(null,seq__190_212__$1);
var G__215 = c__23363__auto___213;
var G__216 = cljs.core.count.call(null,c__23363__auto___213);
var G__217 = (0);
seq__190_202 = G__214;
chunk__191_203 = G__215;
count__192_204 = G__216;
i__193_205 = G__217;
continue;
} else {
var w_218 = cljs.core.first.call(null,seq__190_212__$1);
cljs.core._add_watch.call(null,w_218,this$,reagent.ratom.handle_reaction_change);

var G__219 = cljs.core.next.call(null,seq__190_212__$1);
var G__220 = null;
var G__221 = (0);
var G__222 = (0);
seq__190_202 = G__219;
chunk__191_203 = G__220;
count__192_204 = G__221;
i__193_205 = G__222;
continue;
}
} else {
}
}
break;
}

var seq__186 = cljs.core.seq.call(null,clojure.set.difference.call(null,old,new$));
var chunk__187 = null;
var count__188 = (0);
var i__189 = (0);
while(true){
if((i__189 < count__188)){
var w = cljs.core._nth.call(null,chunk__187,i__189);
cljs.core._remove_watch.call(null,w,this$);

var G__223 = seq__186;
var G__224 = chunk__187;
var G__225 = count__188;
var G__226 = (i__189 + (1));
seq__186 = G__223;
chunk__187 = G__224;
count__188 = G__225;
i__189 = G__226;
continue;
} else {
var temp__19834__auto__ = cljs.core.seq.call(null,seq__186);
if(temp__19834__auto__){
var seq__186__$1 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__186__$1)){
var c__23363__auto__ = cljs.core.chunk_first.call(null,seq__186__$1);
var G__227 = cljs.core.chunk_rest.call(null,seq__186__$1);
var G__228 = c__23363__auto__;
var G__229 = cljs.core.count.call(null,c__23363__auto__);
var G__230 = (0);
seq__186 = G__227;
chunk__187 = G__228;
count__188 = G__229;
i__189 = G__230;
continue;
} else {
var w = cljs.core.first.call(null,seq__186__$1);
cljs.core._remove_watch.call(null,w,this$);

var G__231 = cljs.core.next.call(null,seq__186__$1);
var G__232 = null;
var G__233 = (0);
var G__234 = (0);
seq__186 = G__231;
chunk__187 = G__232;
count__188 = G__233;
i__189 = G__234;
continue;
}
} else {
return null;
}
}
break;
}
});

reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if((self__.dirty_QMARK_) && (cljs.core.some_QMARK_.call(null,self__.watching))){
return this$._run(true);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return reagent.ratom.deref_capture.call(null,f__$1,this$);
}catch (e194){var e = e194;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):reagent.ratom.deref_capture.call(null,self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if(((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate,res))){
} else {
reagent.ratom.notify_w.call(null,this$,oldstate,res);
}
}

return res;
});

reagent.ratom.Reaction.prototype._set_opts = (function (p__195){
var self__ = this;
var map__196 = p__195;
var map__196__$1 = ((((!((map__196 == null)))?((((map__196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196):map__196);
var on_set = cljs.core.get.call(null,map__196__$1,new cljs.core.Keyword(null,"on-set","on-set",(-140953470)));
var no_cache = cljs.core.get.call(null,map__196__$1,new cljs.core.Keyword(null,"no-cache","no-cache",(1588056370)));
var auto_run__$1 = cljs.core.get.call(null,map__196__$1,new cljs.core.Keyword(null,"auto-run","auto-run",(1958400437)));
var on_dispose = cljs.core.get.call(null,map__196__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",(2105306360)));
var this$ = this;
if(cljs.core.some_QMARK_.call(null,auto_run__$1)){
this$.auto_run = auto_run__$1;
} else {
}

if(cljs.core.some_QMARK_.call(null,on_set)){
this$.on_set = on_set;
} else {
}

if(cljs.core.some_QMARK_.call(null,on_dispose)){
this$.on_dispose = on_dispose;
} else {
}

if(cljs.core.some_QMARK_.call(null,no_cache)){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,[cljs.core.str("Reaction "),cljs.core.str(cljs.core.hash.call(null,a__$1)),cljs.core.str(":")].join(''));
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__198_235 = cljs.core.seq.call(null,cljs.core.set.call(null,wg));
var chunk__199_236 = null;
var count__200_237 = (0);
var i__201_238 = (0);
while(true){
if((i__201_238 < count__200_237)){
var w_239 = cljs.core._nth.call(null,chunk__199_236,i__201_238);
cljs.core._remove_watch.call(null,w_239,this$__$1);

var G__240 = seq__198_235;
var G__241 = chunk__199_236;
var G__242 = count__200_237;
var G__243 = (i__201_238 + (1));
seq__198_235 = G__240;
chunk__199_236 = G__241;
count__200_237 = G__242;
i__201_238 = G__243;
continue;
} else {
var temp__19834__auto___244 = cljs.core.seq.call(null,seq__198_235);
if(temp__19834__auto___244){
var seq__198_245__$1 = temp__19834__auto___244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198_245__$1)){
var c__23363__auto___246 = cljs.core.chunk_first.call(null,seq__198_245__$1);
var G__247 = cljs.core.chunk_rest.call(null,seq__198_245__$1);
var G__248 = c__23363__auto___246;
var G__249 = cljs.core.count.call(null,c__23363__auto___246);
var G__250 = (0);
seq__198_235 = G__247;
chunk__199_236 = G__248;
count__200_237 = G__249;
i__201_238 = G__250;
continue;
} else {
var w_251 = cljs.core.first.call(null,seq__198_245__$1);
cljs.core._remove_watch.call(null,w_251,this$__$1);

var G__252 = cljs.core.next.call(null,seq__198_245__$1);
var G__253 = null;
var G__254 = (0);
var G__255 = (0);
seq__198_235 = G__252;
chunk__199_236 = G__253;
count__200_237 = G__254;
i__201_238 = G__255;
continue;
}
} else {
}
}
break;
}

if(cljs.core.some_QMARK_.call(null,this$__$1.on_dispose)){
this$__$1.on_dispose(s);
} else {
}

var temp__20427__auto__ = this$__$1.on_dispose_arr;
if((temp__20427__auto__ == null)){
return null;
} else {
var a = temp__20427__auto__;
var n__23475__auto__ = a.length;
var i = (0);
while(true){
if((i < n__23475__auto__)){
(a[i]).call(null,this$__$1);

var G__256 = (i + (1));
i = G__256;
continue;
} else {
return null;
}
break;
}
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__20287__auto__ = this$__$1.on_dispose_arr;
if((temp__20287__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__20287__auto__;
return a.push(f__$1);
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_.call(null,a__$1.on_set)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction is read only."),cljs.core.str("\n"),cljs.core.str("(fn? (.-on-set a))")].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

reagent.ratom.notify_w.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at()));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,a__$1._peek_at(),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.flush_BANG_.call(null);

return this$__$1._run(false);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_.call(null,self__.watches);
reagent.ratom.remove_w.call(null,this$__$1,key);

if((!(was_empty)) && (cljs.core.empty_QMARK_.call(null,self__.watches)) && ((self__.auto_run == null))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__20427__auto___257 = self__.caught;
if((temp__20427__auto___257 == null)){
} else {
var e_258 = temp__20427__auto___257;
throw e_258;
}

var non_reactive_259 = (reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_259){
reagent.ratom.flush_BANG_.call(null);
} else {
}

if((non_reactive_259) && ((self__.auto_run == null))){
if(self__.dirty_QMARK_){
var oldstate_260 = self__.state;
self__.state = self__.f.call(null);

if(((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate_260,self__.state))){
} else {
reagent.ratom.notify_w.call(null,this$__$1,oldstate_260,self__.state);
}
} else {
}
} else {
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",(-419314319),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",(-1065670978),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",(1947648227),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",(-696035332),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",(2084008322),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"reagent.ratom/Reaction");
});

(function (){
reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
}); return (
new cljs.core.Var(function(){return reagent.ratom.__GT_Reaction;},new cljs.core.Symbol("reagent.ratom","->Reaction","reagent.ratom/->Reaction",(-1177037874),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Symbol("cljs.core","IWatchable","cljs.core/IWatchable",(-1531379261),null),null,new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",(-1037999645),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IReset","cljs.core/IReset",(-1478584309),null),null,new cljs.core.Symbol("cljs.core","ISwap","cljs.core/ISwap",(-190928468),null),null,new cljs.core.Symbol("reagent.ratom","IReactiveAtom","reagent.ratom/IReactiveAtom",(562162668),null),null,new cljs.core.Symbol("reagent.ratom","IRunnable","reagent.ratom/IRunnable",(-1463863953),null),null,new cljs.core.Symbol("reagent.ratom","IDisposable","reagent.ratom/IDisposable",(-2065565737),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null,new cljs.core.Symbol("reagent.ratom","Object","reagent.ratom/Object",(2121307421),null),null], null), null),new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"->Reaction","->Reaction",(511788101),null),"reagent/ratom.cljs",(18),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(338),(338),cljs.core.list(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",(-419314319),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",(-1065670978),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",(1947648227),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",(-696035332),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",(2084008322),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IReset","cljs.core/IReset",(-1478584309),null),null,new cljs.core.Symbol("cljs.core","ISwap","cljs.core/ISwap",(-190928468),null),null,new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",(-1037999645),null),null,new cljs.core.Symbol("cljs.core","IWatchable","cljs.core/IWatchable",(-1531379261),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null], null), null),null,(cljs.core.truth_(reagent.ratom.__GT_Reaction)?reagent.ratom.__GT_Reaction.cljs$lang$test:null)])));})()
;

(function (){
reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__23658__auto__ = [];
var len__23656__auto___266 = arguments.length;
var i__23657__auto___267 = (0);
while(true){
if((i__23657__auto___267 < len__23656__auto___266)){
args__23658__auto__.push((arguments[i__23657__auto___267]));

var G__268 = (i__23657__auto___267 + (1));
i__23657__auto___267 = G__268;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.ratom.make_reaction;},new cljs.core.Symbol("reagent.ratom","make-reaction","reagent.ratom/make-reaction",(272608527),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"make-reaction","make-reaction",(1935680112),null),"reagent/ratom.cljs",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-run","auto-run",(-696035332),null),new cljs.core.Symbol(null,"on-set","on-set",(1499578057),null),new cljs.core.Symbol(null,"on-dispose","on-dispose",(-549129409),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-run","auto-run",(-696035332),null),new cljs.core.Symbol(null,"on-set","on-set",(1499578057),null),new cljs.core.Symbol(null,"on-dispose","on-dispose",(-549129409),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(488),(488),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-run","auto-run",(-696035332),null),new cljs.core.Symbol(null,"on-set","on-set",(1499578057),null),new cljs.core.Symbol(null,"on-dispose","on-dispose",(-549129409),null)], null)], null)], null)),null,(cljs.core.truth_(reagent.ratom.make_reaction)?reagent.ratom.make_reaction.cljs$lang$test:null)])));})()
;

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__263){
var map__264 = p__263;
var map__264__$1 = ((((!((map__264 == null)))?((((map__264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__264):map__264);
var on_set = cljs.core.get.call(null,map__264__$1,new cljs.core.Keyword(null,"on-set","on-set",(-140953470)));
var auto_run = cljs.core.get.call(null,map__264__$1,new cljs.core.Keyword(null,"auto-run","auto-run",(1958400437)));
var on_dispose = cljs.core.get.call(null,map__264__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",(2105306360)));
var reaction = (new reagent.ratom.Reaction(f,null,true,false,null,null,null,null));
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-set","on-set",(-140953470)),on_set,new cljs.core.Keyword(null,"auto-run","auto-run",(1958400437)),auto_run,new cljs.core.Keyword(null,"on-dispose","on-dispose",(2105306360)),on_dispose], null));

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq261){
var G__262 = cljs.core.first.call(null,seq261);
var seq261__$1 = cljs.core.next.call(null,seq261);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__262,seq261__$1);
});

new cljs.core.Var(function(){return reagent.ratom.make_reaction;},new cljs.core.Symbol("reagent.ratom","make-reaction","reagent.ratom/make-reaction",(272608527),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"make-reaction","make-reaction",(1935680112),null),"reagent/ratom.cljs",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-run","auto-run",(-696035332),null),new cljs.core.Symbol(null,"on-set","on-set",(1499578057),null),new cljs.core.Symbol(null,"on-dispose","on-dispose",(-549129409),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-run","auto-run",(-696035332),null),new cljs.core.Symbol(null,"on-set","on-set",(1499578057),null),new cljs.core.Symbol(null,"on-dispose","on-dispose",(-549129409),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(488),(488),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-run","auto-run",(-696035332),null),new cljs.core.Symbol(null,"on-set","on-set",(1499578057),null),new cljs.core.Symbol(null,"on-dispose","on-dispose",(-549129409),null)], null)], null)], null)),null,(cljs.core.truth_(reagent.ratom.make_reaction)?reagent.ratom.make_reaction.cljs$lang$test:null)]));
(function (){
reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null); return (
new cljs.core.Var(function(){return reagent.ratom.temp_reaction;},new cljs.core.Symbol("reagent.ratom","temp-reaction","reagent.ratom/temp-reaction",(-243114894),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"temp-reaction","temp-reaction",(-1805659925),null),"reagent/ratom.cljs",(29),(1),(497),(497),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.ratom.temp_reaction)?reagent.ratom.temp_reaction.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.run_in_reaction = (function reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = reagent.ratom.temp_reaction;
var res = reagent.ratom.deref_capture.call(null,f,r);
if((r.watching == null)){
} else {
reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return run.call(null,obj);
});})(r,res))
;

(obj[key] = r);
}

return res;
}); return (
new cljs.core.Var(function(){return reagent.ratom.run_in_reaction;},new cljs.core.Symbol("reagent.ratom","run-in-reaction","reagent.ratom/run-in-reaction",(-1692171658),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"run-in-reaction","run-in-reaction",(-108120339),null),"reagent/ratom.cljs",(22),(1),(499),(499),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"obj","obj",(-1672671807),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"run","run",(-180635126),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(reagent.ratom.run_in_reaction)?reagent.ratom.run_in_reaction.cljs$lang$test:null)])));})()
;
(function (){
reagent.ratom.check_derefs = (function reagent$ratom$check_derefs(f){
var ctx = {};
var res = reagent.ratom.in_context.call(null,ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.some_QMARK_.call(null,ctx.captured)], null);
}); return (
new cljs.core.Var(function(){return reagent.ratom.check_derefs;},new cljs.core.Symbol("reagent.ratom","check-derefs","reagent.ratom/check-derefs",(1263717378),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"check-derefs","check-derefs",(680024473),null),"reagent/ratom.cljs",(19),(1),(510),(510),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.ratom.check_derefs)?reagent.ratom.check_derefs.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = -2145353728;
})
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.changed) && (cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if(cljs.core.some_QMARK_.call(null,self__.watches)){
reagent.ratom.notify_w.call(null,this$__$1,oldval,newval);
} else {
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (!(self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Wrap:");
});

reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"callback","callback",(935395299),null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",(-2083710852),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"reagent.ratom/Wrapper");
});

(function (){
reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
}); return (
new cljs.core.Var(function(){return reagent.ratom.__GT_Wrapper;},new cljs.core.Symbol("reagent.ratom","->Wrapper","reagent.ratom/->Wrapper",(-1907186697),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",(-1037999645),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IReset","cljs.core/IReset",(-1478584309),null),null,new cljs.core.Symbol("cljs.core","ISwap","cljs.core/ISwap",(-190928468),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IWatchable","cljs.core/IWatchable",(-1531379261),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"->Wrapper","->Wrapper",(753219454),null),"reagent/ratom.cljs",(17),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(518),(518),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"callback","callback",(935395299),null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",(-2083710852),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",(-1037999645),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IReset","cljs.core/IReset",(-1478584309),null),null,new cljs.core.Symbol("cljs.core","ISwap","cljs.core/ISwap",(-190928468),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IWatchable","cljs.core/IWatchable",(-1531379261),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),null,(cljs.core.truth_(reagent.ratom.__GT_Wrapper)?reagent.ratom.__GT_Wrapper.cljs$lang$test:null)])));})()
;

(function (){
reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
}); return (
new cljs.core.Var(function(){return reagent.ratom.make_wrapper;},new cljs.core.Symbol("reagent.ratom","make-wrapper","reagent.ratom/make-wrapper",(-1844931060),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",(-2036346616),null),new cljs.core.Symbol(null,"make-wrapper","make-wrapper",(820320901),null),"reagent/ratom.cljs",(19),(1),(565),(565),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"callback-fn","callback-fn",(-635543049),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(reagent.ratom.make_wrapper)?reagent.ratom.make_wrapper.cljs$lang$test:null)])));})()
;
