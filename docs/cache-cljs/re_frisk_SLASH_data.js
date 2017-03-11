goog.provide("re_frisk.data");
if(typeof re_frisk.data.initialized !== 'undefined'){
} else {
(function (){
re_frisk.data.initialized = reagent.core.atom.call(null,false); return (
new cljs.core.Var(function(){return re_frisk.data.initialized;},new cljs.core.Symbol("re-frisk.data","initialized","re-frisk.data/initialized",(166331246),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.data","re-frisk.data",(-2129326614),null),new cljs.core.Symbol(null,"initialized","initialized",(678513933),null),"re_frisk/data.cljs",(21),(1),(4),(4),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frisk.data.initialized)?re_frisk.data.initialized.cljs$lang$test:null)])));})()
;
}
if(typeof re_frisk.data.re_frame_data !== 'undefined'){
} else {
(function (){
re_frisk.data.re_frame_data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return re_frisk.data.re_frame_data;},new cljs.core.Symbol("re-frisk.data","re-frame-data","re-frisk.data/re-frame-data",(504930796),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.data","re-frisk.data",(-2129326614),null),new cljs.core.Symbol(null,"re-frame-data","re-frame-data",(1066793737),null),"re_frisk/data.cljs",(23),(1),(5),(5),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frisk.data.re_frame_data)?re_frisk.data.re_frame_data.cljs$lang$test:null)])));})()
;
}
if(typeof re_frisk.data.re_frame_events !== 'undefined'){
} else {
(function (){
re_frisk.data.re_frame_events = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY); return (
new cljs.core.Var(function(){return re_frisk.data.re_frame_events;},new cljs.core.Symbol("re-frisk.data","re-frame-events","re-frisk.data/re-frame-events",(-738424669),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.data","re-frisk.data",(-2129326614),null),new cljs.core.Symbol(null,"re-frame-events","re-frame-events",(-1301040572),null),"re_frisk/data.cljs",(25),(1),(6),(6),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frisk.data.re_frame_events)?re_frisk.data.re_frame_events.cljs$lang$test:null)])));})()
;
}
if(typeof re_frisk.data.deb_data !== 'undefined'){
} else {
(function (){
re_frisk.data.deb_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",(-1950516132)),true], null)); return (
new cljs.core.Var(function(){return re_frisk.data.deb_data;},new cljs.core.Symbol("re-frisk.data","deb-data","re-frisk.data/deb-data",(-1996245046),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.data","re-frisk.data",(-2129326614),null),new cljs.core.Symbol(null,"deb-data","deb-data",(-1449755031),null),"re_frisk/data.cljs",(18),(1),(7),(7),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frisk.data.deb_data)?re_frisk.data.deb_data.cljs$lang$test:null)])));})()
;
}
