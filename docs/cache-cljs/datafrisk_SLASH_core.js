goog.provide("datafrisk.core");
(function (){
datafrisk.core.DataFrisk; return (
new cljs.core.Var(function(){return datafrisk.core.DataFrisk;},new cljs.core.Symbol("datafrisk.core","DataFrisk","datafrisk.core/DataFrisk",(228407387),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"DataFrisk","DataFrisk",(945575225),null),"datafrisk/core.cljs",(19),(1),(4),true,(4),cljs.core.List.EMPTY,null,(cljs.core.truth_(datafrisk.core.DataFrisk)?datafrisk.core.DataFrisk.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.ExpandButton = (function datafrisk$core$ExpandButton(p__22){
var map__25 = p__22;
var map__25__$1 = ((((!((map__25 == null)))?((((map__25.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25):map__25);
var expanded_QMARK_ = cljs.core.get.call(null,map__25__$1,new cljs.core.Keyword(null,"expanded?","expanded?",(2055832296)));
var path = cljs.core.get.call(null,map__25__$1,new cljs.core.Keyword(null,"path","path",(-188191168)));
var emit_fn = cljs.core.get.call(null,map__25__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",(1456579943)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",(1444987323)),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",(1738438491)),"transparent",new cljs.core.Keyword(null,"width","width",(-384071477)),"20px",new cljs.core.Keyword(null,"height","height",(1025178622)),"20px"], null),new cljs.core.Keyword(null,"onClick","onClick",(-1991238530)),((function (map__25,map__25__$1,expanded_QMARK_,path,emit_fn){
return (function (){
return emit_fn.call(null,(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"contract","contract",(798152745)):new cljs.core.Keyword(null,"expand","expand",(595248157))),path);
});})(map__25,map__25__$1,expanded_QMARK_,path,emit_fn))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",(856789142)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",(-469489477)),"0 0 100 100",new cljs.core.Keyword(null,"width","width",(-384071477)),"100%",new cljs.core.Keyword(null,"height","height",(1025178622)),"100%",new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",(765692007)),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",(1381301764)),(cljs.core.truth_(expanded_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",(837053759)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",(-1486596883)),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",(1741823555)),"black"], null)], null)], null)], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.ExpandButton;},new cljs.core.Symbol("datafrisk.core","ExpandButton","datafrisk.core/ExpandButton",(-586531676),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"ExpandButton","ExpandButton",(-699719802),null),"datafrisk/core.cljs",(19),(1),(6),(6),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expanded?","expanded?",(-598603473),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"emit-fn","emit-fn",(1922800437),null)], null)], null)], null)),null,(cljs.core.truth_(datafrisk.core.ExpandButton)?datafrisk.core.ExpandButton.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shell","shell",(1402941019)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",(1738438491)),"#FAFAFA",new cljs.core.Keyword(null,"fontFamily","fontFamily",(1493518353)),"Consolas,Monaco,Courier New,monospace",new cljs.core.Keyword(null,"fontSize","fontSize",(919623033)),"12px",new cljs.core.Keyword(null,"z-index","z-index",(1892827090)),(9999)], null),new cljs.core.Keyword(null,"strings","strings",(-2055406807)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",(1011675173)),"#4Ebb4E"], null),new cljs.core.Keyword(null,"keywords","keywords",(1526959054)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",(1011675173)),"purple"], null),new cljs.core.Keyword(null,"numbers","numbers",(1036309864)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",(1011675173)),"blue"], null),new cljs.core.Keyword(null,"nil","nil",(99600501)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",(1011675173)),"red"], null),new cljs.core.Keyword(null,"shell-visible-button","shell-visible-button",(-1362287320)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",(1738438491)),"#4EE24E"], null)], null); return (
new cljs.core.Var(function(){return datafrisk.core.styles;},new cljs.core.Symbol("datafrisk.core","styles","datafrisk.core/styles",(-611886564),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"styles","styles",(-699955394),null),"datafrisk/core.cljs",(12),(1),(16),(16),cljs.core.List.EMPTY,null,(cljs.core.truth_(datafrisk.core.styles)?datafrisk.core.styles.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.ExpandAllButton = (function datafrisk$core$ExpandAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",(1456579943)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",(-1991238530)),(function (){
return emit_fn.call(null,new cljs.core.Keyword(null,"expand-all","expand-all",(-1489416197)),data);
}),new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",(1660304693)),"3px",new cljs.core.Keyword(null,"borderTopLeftRadius","borderTopLeftRadius",(-1503490700)),"2px",new cljs.core.Keyword(null,"borderBottomLeftRadius","borderBottomLeftRadius",(-1845172472)),"2px",new cljs.core.Keyword(null,"cursor","cursor",(1011937484)),"pointer",new cljs.core.Keyword(null,"border","border",(1444987323)),"1px solid darkgray",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",(1738438491)),"white"], null)], null),"Expand all"], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.ExpandAllButton;},new cljs.core.Symbol("datafrisk.core","ExpandAllButton","datafrisk.core/ExpandAllButton",(1246304961),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"ExpandAllButton","ExpandAllButton",(1191738799),null),"datafrisk/core.cljs",(22),(1),(27),(27),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"emit-fn","emit-fn",(1922800437),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(datafrisk.core.ExpandAllButton)?datafrisk.core.ExpandAllButton.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.CollapseAllButton = (function datafrisk$core$CollapseAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",(1456579943)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",(-1991238530)),(function (){
return emit_fn.call(null,new cljs.core.Keyword(null,"collapse-all","collapse-all",(957676825)));
}),new cljs.core.Keyword(null,"style","style",(-496642736)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"borderBottomRightRadius","borderBottomRightRadius",(1814053058)),new cljs.core.Keyword(null,"borderTop","borderTop",(2080227753)),new cljs.core.Keyword(null,"cursor","cursor",(1011937484)),new cljs.core.Keyword(null,"borderBottom","borderBottom",(1676563277)),new cljs.core.Keyword(null,"borderTopRightRadius","borderTopRightRadius",(1530376433)),new cljs.core.Keyword(null,"padding","padding",(1660304693)),new cljs.core.Keyword(null,"borderRight","borderRight",(-873333451)),new cljs.core.Keyword(null,"borderLeft","borderLeft",(-1938358443)),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",(1738438491))],["2px","1px solid darkgray","pointer","1px solid darkgray","2px","3px","1px solid darkgray","0","white"])], null),"Collapse all"], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.CollapseAllButton;},new cljs.core.Symbol("datafrisk.core","CollapseAllButton","datafrisk.core/CollapseAllButton",(654426033),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"CollapseAllButton","CollapseAllButton",(717312151),null),"datafrisk/core.cljs",(24),(1),(37),(37),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"emit-fn","emit-fn",(1922800437),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(datafrisk.core.CollapseAllButton)?datafrisk.core.CollapseAllButton.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.NilText = (function datafrisk$core$NilText(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.Keyword(null,"nil","nil",(99600501)).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),cljs.core.pr_str.call(null,null)], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.NilText;},new cljs.core.Symbol("datafrisk.core","NilText","datafrisk.core/NilText",(2018158662),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"NilText","NilText",(1863046520),null),"datafrisk/core.cljs",(14),(1),(50),(50),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(datafrisk.core.NilText)?datafrisk.core.NilText.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.StringText = (function datafrisk$core$StringText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.Keyword(null,"strings","strings",(-2055406807)).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),cljs.core.pr_str.call(null,data)], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.StringText;},new cljs.core.Symbol("datafrisk.core","StringText","datafrisk.core/StringText",(147025619),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"StringText","StringText",(59509233),null),"datafrisk/core.cljs",(17),(1),(53),(53),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(datafrisk.core.StringText)?datafrisk.core.StringText.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.KeywordText = (function datafrisk$core$KeywordText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.Keyword(null,"keywords","keywords",(1526959054)).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.KeywordText;},new cljs.core.Symbol("datafrisk.core","KeywordText","datafrisk.core/KeywordText",(-27513064),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"KeywordText","KeywordText",(-350270406),null),"datafrisk/core.cljs",(18),(1),(56),(56),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(datafrisk.core.KeywordText)?datafrisk.core.KeywordText.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.NumberText = (function datafrisk$core$NumberText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.Keyword(null,"numbers","numbers",(1036309864)).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),data], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.NumberText;},new cljs.core.Symbol("datafrisk.core","NumberText","datafrisk.core/NumberText",(2041314369),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"NumberText","NumberText",(1986584419),null),"datafrisk/core.cljs",(17),(1),(59),(59),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(datafrisk.core.NumberText)?datafrisk.core.NumberText.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.Node = (function datafrisk$core$Node(p__27){
var map__30 = p__27;
var map__30__$1 = ((((!((map__30 == null)))?((((map__30.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30):map__30);
var data = cljs.core.get.call(null,map__30__$1,new cljs.core.Keyword(null,"data","data",(-232669377)));
var path = cljs.core.get.call(null,map__30__$1,new cljs.core.Keyword(null,"path","path",(-188191168)));
var emit_fn = cljs.core.get.call(null,map__30__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)));
var swappable = cljs.core.get.call(null,map__30__$1,new cljs.core.Keyword(null,"swappable","swappable",(-2024641906)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NilText], null):((typeof data === 'string')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",(556931961)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",(1174270348)),"text",new cljs.core.Keyword(null,"default-value","default-value",(232220170)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (map__30,map__30__$1,data,path,emit_fn,swappable){
return (function datafrisk$core$Node_$_string_changed(e){
return emit_fn.call(null,new cljs.core.Keyword(null,"changed","changed",(570724917)),path,e.target.value);
});})(map__30,map__30__$1,data,path,emit_fn,swappable))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.StringText,data], null)):(((data instanceof cljs.core.Keyword))?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",(556931961)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",(1174270348)),"text",new cljs.core.Keyword(null,"default-value","default-value",(232220170)),cljs.core.name.call(null,data),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (map__30,map__30__$1,data,path,emit_fn,swappable){
return (function datafrisk$core$Node_$_keyword_changed(e){
return emit_fn.call(null,new cljs.core.Keyword(null,"changed","changed",(570724917)),path,cljs.core.keyword.call(null,e.target.value));
});})(map__30,map__30__$1,data,path,emit_fn,swappable))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeywordText,data], null)):((cljs.core.object_QMARK_.call(null,data))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(data))].join(''):((typeof data === 'number')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",(556931961)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",(1174270348)),"number",new cljs.core.Keyword(null,"default-value","default-value",(232220170)),data,new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (map__30,map__30__$1,data,path,emit_fn,swappable){
return (function datafrisk$core$Node_$_number_changed(e){
return emit_fn.call(null,new cljs.core.Keyword(null,"changed","changed",(570724917)),path,Number(e.target.value));
});})(map__30,map__30__$1,data,path,emit_fn,swappable))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NumberText,data], null)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')
)))))], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.Node;},new cljs.core.Symbol("datafrisk.core","Node","datafrisk.core/Node",(399819121),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"Node","Node",(446032991),null),"datafrisk/core.cljs",(11),(1),(62),(62),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"emit-fn","emit-fn",(1922800437),null),new cljs.core.Symbol(null,"swappable","swappable",(-384110379),null)], null)], null)], null)),null,(cljs.core.truth_(datafrisk.core.Node)?datafrisk.core.Node.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.KeyValNode = (function datafrisk$core$KeyValNode(p__32){
var map__38 = p__32;
var map__38__$1 = ((((!((map__38 == null)))?((((map__38.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38):map__38);
var vec__39 = cljs.core.get.call(null,map__38__$1,new cljs.core.Keyword(null,"data","data",(-232669377)));
var k = cljs.core.nth.call(null,vec__39,(0),null);
var v = cljs.core.nth.call(null,vec__39,(1),null);
var path = cljs.core.get.call(null,map__38__$1,new cljs.core.Keyword(null,"path","path",(-188191168)));
var expanded_paths = cljs.core.get.call(null,map__38__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540)));
var emit_fn = cljs.core.get.call(null,map__38__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)));
var swappable = cljs.core.get.call(null,map__38__$1,new cljs.core.Keyword(null,"swappable","swappable",(-2024641906)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",(242065432)),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",(-1425124628)),"0 0 auto",new cljs.core.Keyword(null,"padding","padding",(1660304693)),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",(-232669377)),k], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",(-1425124628)),"1",new cljs.core.Keyword(null,"padding","padding",(1660304693)),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",(-232669377)),v,new cljs.core.Keyword(null,"swappable","swappable",(-2024641906)),swappable,new cljs.core.Keyword(null,"path","path",(-188191168)),cljs.core.conj.call(null,path,k),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540)),expanded_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)),emit_fn], null)], null)], null)], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.KeyValNode;},new cljs.core.Symbol("datafrisk.core","KeyValNode","datafrisk.core/KeyValNode",(1152275938),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"KeyValNode","KeyValNode",(1408055424),null),"datafrisk/core.cljs",(17),(1),(99),(99),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"expanded-paths","expanded-paths",(-1866624229),null),new cljs.core.Symbol(null,"emit-fn","emit-fn",(1922800437),null),new cljs.core.Symbol(null,"swappable","swappable",(-384110379),null)], null)])], null)),null,(cljs.core.truth_(datafrisk.core.KeyValNode)?datafrisk.core.KeyValNode.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.ListVecNode = (function datafrisk$core$ListVecNode(p__43){
var map__46 = p__43;
var map__46__$1 = ((((!((map__46 == null)))?((((map__46.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46):map__46);
var data = cljs.core.get.call(null,map__46__$1,new cljs.core.Keyword(null,"data","data",(-232669377)));
var path = cljs.core.get.call(null,map__46__$1,new cljs.core.Keyword(null,"path","path",(-188191168)));
var expanded_paths = cljs.core.get.call(null,map__46__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540)));
var emit_fn = cljs.core.get.call(null,map__46__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)));
var swappable = cljs.core.get.call(null,map__46__$1,new cljs.core.Keyword(null,"swappable","swappable",(-2024641906)));
var expanded_QMARK_ = cljs.core.get.call(null,expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",(242065432)),"flex"], null)], null),((cljs.core.empty_QMARK_.call(null,data))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",(-1425124628)),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",(2055832296)),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)),emit_fn], null)], null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",(-1425124628)),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),((cljs.core.vector_QMARK_.call(null,data))?"[":"(")], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.call(null,((function (expanded_QMARK_,map__46,map__46__$1,data,path,expanded_paths,emit_fn,swappable){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",(-232669377)),x,new cljs.core.Keyword(null,"swappable","swappable",(-2024641906)),swappable,new cljs.core.Keyword(null,"path","path",(-188191168)),cljs.core.conj.call(null,path,i),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540)),expanded_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)),emit_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),i], null));
});})(expanded_QMARK_,map__46,map__46__$1,data,path,expanded_paths,emit_fn,swappable))
,data):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" items")].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),((cljs.core.vector_QMARK_.call(null,data))?"]":")")], null)], null)], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.ListVecNode;},new cljs.core.Symbol("datafrisk.core","ListVecNode","datafrisk.core/ListVecNode",(-1453213427),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"ListVecNode","ListVecNode",(-1079847709),null),"datafrisk/core.cljs",(18),(1),(110),(110),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"expanded-paths","expanded-paths",(-1866624229),null),new cljs.core.Symbol(null,"emit-fn","emit-fn",(1922800437),null),new cljs.core.Symbol(null,"swappable","swappable",(-384110379),null)], null)], null)], null)),null,(cljs.core.truth_(datafrisk.core.ListVecNode)?datafrisk.core.ListVecNode.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.SetNode = (function datafrisk$core$SetNode(p__48){
var map__51 = p__48;
var map__51__$1 = ((((!((map__51 == null)))?((((map__51.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51):map__51);
var data = cljs.core.get.call(null,map__51__$1,new cljs.core.Keyword(null,"data","data",(-232669377)));
var path = cljs.core.get.call(null,map__51__$1,new cljs.core.Keyword(null,"path","path",(-188191168)));
var expanded_paths = cljs.core.get.call(null,map__51__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540)));
var emit_fn = cljs.core.get.call(null,map__51__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)));
var swappable = cljs.core.get.call(null,map__51__$1,new cljs.core.Keyword(null,"swappable","swappable",(-2024641906)));
var expanded_QMARK_ = cljs.core.get.call(null,expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",(242065432)),"flex"], null)], null),((cljs.core.empty_QMARK_.call(null,data))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",(-1425124628)),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",(2055832296)),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)),emit_fn], null)], null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",(-1425124628)),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),"#{"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.call(null,((function (expanded_QMARK_,map__51,map__51__$1,data,path,expanded_paths,emit_fn,swappable){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",(-232669377)),x,new cljs.core.Keyword(null,"swappable","swappable",(-2024641906)),swappable,new cljs.core.Keyword(null,"path","path",(-188191168)),cljs.core.conj.call(null,path,x),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540)),expanded_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)),emit_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),i], null));
});})(expanded_QMARK_,map__51,map__51__$1,data,path,expanded_paths,emit_fn,swappable))
,data):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" items")].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),"}"], null)], null)], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.SetNode;},new cljs.core.Symbol("datafrisk.core","SetNode","datafrisk.core/SetNode",(1587266702),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"SetNode","SetNode",(677030828),null),"datafrisk/core.cljs",(14),(1),(128),(128),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"expanded-paths","expanded-paths",(-1866624229),null),new cljs.core.Symbol(null,"emit-fn","emit-fn",(1922800437),null),new cljs.core.Symbol(null,"swappable","swappable",(-384110379),null)], null)], null)], null)),null,(cljs.core.truth_(datafrisk.core.SetNode)?datafrisk.core.SetNode.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.KeySet = (function datafrisk$core$KeySet(keyset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),cljs.core.interpose.call(null," ",cljs.core.map_indexed.call(null,(function (i,data){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NilText], null):((typeof data === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.StringText,data], null):(((data instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeywordText,data], null):((typeof data === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NumberText,data], null):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')
))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),i], null));
}),keyset))], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.KeySet;},new cljs.core.Symbol("datafrisk.core","KeySet","datafrisk.core/KeySet",(2124583138),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"KeySet","KeySet",(1273213824),null),"datafrisk/core.cljs",(13),(1),(146),(146),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keyset","keyset",(2135291099),null)], null)),null,(cljs.core.truth_(datafrisk.core.KeySet)?datafrisk.core.KeySet.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.MapNode = (function datafrisk$core$MapNode(p__53){
var map__56 = p__53;
var map__56__$1 = ((((!((map__56 == null)))?((((map__56.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56):map__56);
var all = map__56__$1;
var data = cljs.core.get.call(null,map__56__$1,new cljs.core.Keyword(null,"data","data",(-232669377)));
var path = cljs.core.get.call(null,map__56__$1,new cljs.core.Keyword(null,"path","path",(-188191168)));
var expanded_paths = cljs.core.get.call(null,map__56__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540)));
var emit_fn = cljs.core.get.call(null,map__56__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)));
var expanded_QMARK_ = cljs.core.get.call(null,expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",(242065432)),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",(-1425124628)),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",(2055832296)),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)),emit_fn], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",(-1425124628)),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),"{"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.call(null,((function (expanded_QMARK_,map__56,map__56__$1,all,data,path,expanded_paths,emit_fn){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeyValNode,cljs.core.assoc.call(null,all,new cljs.core.Keyword(null,"data","data",(-232669377)),x)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),i], null));
});})(expanded_QMARK_,map__56,map__56__$1,all,data,path,expanded_paths,emit_fn))
,data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeySet,cljs.core.keys.call(null,data)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),"}"], null)], null)], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.MapNode;},new cljs.core.Symbol("datafrisk.core","MapNode","datafrisk.core/MapNode",(1118541907),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"MapNode","MapNode",(1340390709),null),"datafrisk/core.cljs",(14),(1),(157),(157),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"expanded-paths","expanded-paths",(-1866624229),null),new cljs.core.Symbol(null,"emit-fn","emit-fn",(1922800437),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"all","all",(-1762306027),null)], null)], null)),null,(cljs.core.truth_(datafrisk.core.MapNode)?datafrisk.core.MapNode.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.DataFrisk = (function datafrisk$core$DataFrisk(p__58){
var map__62 = p__58;
var map__62__$1 = ((((!((map__62 == null)))?((((map__62.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62):map__62);
var all = map__62__$1;
var data = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"data","data",(-232669377)));
if(cljs.core.map_QMARK_.call(null,data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.MapNode,all], null);
} else {
if(cljs.core.set_QMARK_.call(null,data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.SetNode,all], null);
} else {
if((cljs.core.seq_QMARK_.call(null,data)) || (cljs.core.vector_QMARK_.call(null,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ListVecNode,all], null);
} else {
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,cljs.core.assoc.call(null,all,new cljs.core.Keyword(null,"data","data",(-232669377)),cljs.core.deref.call(null,data))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Node,all], null);

}
}
}
}
}); return (
new cljs.core.Var(function(){return datafrisk.core.DataFrisk;},new cljs.core.Symbol("datafrisk.core","DataFrisk","datafrisk.core/DataFrisk",(228407387),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"DataFrisk","DataFrisk",(945575225),null),"datafrisk/core.cljs",(16),(1),(171),(171),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"all","all",(-1762306027),null)], null)], null)),null,(cljs.core.truth_(datafrisk.core.DataFrisk)?datafrisk.core.DataFrisk.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.conj_to_set = (function datafrisk$core$conj_to_set(coll,x){
return cljs.core.conj.call(null,(function (){var or__23109__auto__ = coll;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),x);
}); return (
new cljs.core.Var(function(){return datafrisk.core.conj_to_set;},new cljs.core.Symbol("datafrisk.core","conj-to-set","datafrisk.core/conj-to-set",(458757308),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"conj-to-set","conj-to-set",(362544094),null),"datafrisk/core.cljs",(18),(1),(178),(178),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(datafrisk.core.conj_to_set)?datafrisk.core.conj_to_set.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.expand_all_paths = (function datafrisk$core$expand_all_paths(root_value){
var remaining = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",(-188191168)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"node","node",(581201198)),root_value], null)], null);
var expanded_paths = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,remaining)){
var vec__73 = remaining;
var seq__74 = cljs.core.seq.call(null,vec__73);
var first__75 = cljs.core.first.call(null,seq__74);
var seq__74__$1 = cljs.core.next.call(null,seq__74);
var current = first__75;
var rest = seq__74__$1;
var current_node = (((function (){var G__76 = new cljs.core.Keyword(null,"node","node",(581201198)).cljs$core$IFn$_invoke$arity$1(current);
if(!((G__76 == null))){
if(((G__76.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === G__76.cljs$core$IDeref$))){
return true;
} else {
if((!G__76.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__76);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__76);
}
})())?cljs.core.deref.call(null,new cljs.core.Keyword(null,"node","node",(581201198)).cljs$core$IFn$_invoke$arity$1(current)):new cljs.core.Keyword(null,"node","node",(581201198)).cljs$core$IFn$_invoke$arity$1(current));
if(cljs.core.map_QMARK_.call(null,current_node)){
var G__81 = cljs.core.concat.call(null,rest,cljs.core.map.call(null,((function (remaining,expanded_paths,vec__73,seq__74,first__75,seq__74__$1,current,rest,current_node){
return (function (p__77){
var vec__78 = p__77;
var k = cljs.core.nth.call(null,vec__78,(0),null);
var v = cljs.core.nth.call(null,vec__78,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",(-188191168)),cljs.core.conj.call(null,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(current),k),new cljs.core.Keyword(null,"node","node",(581201198)),v], null);
});})(remaining,expanded_paths,vec__73,seq__74,first__75,seq__74__$1,current,rest,current_node))
,current_node));
var G__82 = cljs.core.conj.call(null,expanded_paths,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(current));
remaining = G__81;
expanded_paths = G__82;
continue;
} else {
if((cljs.core.seq_QMARK_.call(null,current_node)) || (cljs.core.vector_QMARK_.call(null,current_node))){
var G__83 = cljs.core.concat.call(null,rest,cljs.core.map_indexed.call(null,((function (remaining,expanded_paths,vec__73,seq__74,first__75,seq__74__$1,current,rest,current_node){
return (function (i,node){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",(-188191168)),cljs.core.conj.call(null,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(current),i),new cljs.core.Keyword(null,"node","node",(581201198)),node], null);
});})(remaining,expanded_paths,vec__73,seq__74,first__75,seq__74__$1,current,rest,current_node))
,current_node));
var G__84 = cljs.core.conj.call(null,expanded_paths,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(current));
remaining = G__83;
expanded_paths = G__84;
continue;
} else {
var G__85 = rest;
var G__86 = ((cljs.core.coll_QMARK_.call(null,current_node))?cljs.core.conj.call(null,expanded_paths,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(current)):expanded_paths);
remaining = G__85;
expanded_paths = G__86;
continue;

}
}
} else {
return expanded_paths;
}
break;
}
}); return (
new cljs.core.Var(function(){return datafrisk.core.expand_all_paths;},new cljs.core.Symbol("datafrisk.core","expand-all-paths","datafrisk.core/expand-all-paths",(-2069975819),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"expand-all-paths","expand-all-paths",(-1302376489),null),"datafrisk/core.cljs",(23),(1),(181),(181),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root-value","root-value",(820824458),null)], null)),null,(cljs.core.truth_(datafrisk.core.expand_all_paths)?datafrisk.core.expand_all_paths.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.emit_fn_factory = (function datafrisk$core$emit_fn_factory(state_atom,id,swappable){
return (function() { 
var G__95__delegate = function (event,args){
var G__91 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__91) {
case "expand":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540))], null),datafrisk.core.conj_to_set,cljs.core.first.call(null,args));

break;
case "expand-all":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540))], null),datafrisk.core.expand_all_paths.call(null,cljs.core.first.call(null,args)));

break;
case "contract":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540))], null),cljs.core.disj,cljs.core.first.call(null,args));

break;
case "collapse-all":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540))], null),cljs.core.PersistentHashSet.EMPTY);

break;
case "changed":
var vec__92 = args;
var path = cljs.core.nth.call(null,vec__92,(0),null);
var value = cljs.core.nth.call(null,vec__92,(1),null);
if(cljs.core.seq.call(null,path)){
return cljs.core.swap_BANG_.call(null,swappable,cljs.core.assoc_in,path,value);
} else {
return cljs.core.reset_BANG_.call(null,swappable,value);
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));

}
};
var G__95 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__97__i = 0, G__97__a = new Array(arguments.length -  1);
while (G__97__i < G__97__a.length) {G__97__a[G__97__i] = arguments[G__97__i + 1]; ++G__97__i;}
  args = new cljs.core.IndexedSeq(G__97__a,0);
} 
return G__95__delegate.call(this,event,args);};
G__95.cljs$lang$maxFixedArity = 1;
G__95.cljs$lang$applyTo = (function (arglist__98){
var event = cljs.core.first(arglist__98);
var args = cljs.core.rest(arglist__98);
return G__95__delegate(event,args);
});
G__95.cljs$core$IFn$_invoke$arity$variadic = G__95__delegate;
return G__95;
})()
;
}); return (
new cljs.core.Var(function(){return datafrisk.core.emit_fn_factory;},new cljs.core.Symbol("datafrisk.core","emit-fn-factory","datafrisk.core/emit-fn-factory",(1464159293),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"emit-fn-factory","emit-fn-factory",(571109727),null),"datafrisk/core.cljs",(22),(1),(207),(207),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-atom","state-atom",(-1350625912),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"swappable","swappable",(-384110379),null)], null)),null,(cljs.core.truth_(datafrisk.core.emit_fn_factory)?datafrisk.core.emit_fn_factory.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.Root = (function datafrisk$core$Root(data,id,state_atom){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
var swappable = ((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data)))?data:null);
var emit_fn = datafrisk.core.emit_fn_factory.call(null,state_atom,id,swappable);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",(1660304693)),"4px 2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandAllButton,emit_fn,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.CollapseAllButton,emit_fn], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",(-232669377)),data,new cljs.core.Keyword(null,"swappable","swappable",(-2024641906)),swappable,new cljs.core.Keyword(null,"path","path",(-188191168)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540)),cljs.core.get_in.call(null,data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540))], null)),new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)),emit_fn], null)], null)], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.Root;},new cljs.core.Symbol("datafrisk.core","Root","datafrisk.core/Root",(-381295161),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"Root","Root",(-704328991),null),"datafrisk/core.cljs",(11),(1),(219),(219),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"state-atom","state-atom",(-1350625912),null)], null)),null,(cljs.core.truth_(datafrisk.core.Root)?datafrisk.core.Root.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.DataFriskShellVisibleButton = (function datafrisk$core$DataFriskShellVisibleButton(visible_QMARK_,toggle_visible_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",(1456579943)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",(-1991238530)),toggle_visible_fn,new cljs.core.Keyword(null,"style","style",(-496642736)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"border","border",(1444987323)),(0),new cljs.core.Keyword(null,"cursor","cursor",(1011937484)),"pointer",new cljs.core.Keyword(null,"font","font",(-1506159249)),"inherit",new cljs.core.Keyword(null,"padding","padding",(1660304693)),"12px",new cljs.core.Keyword(null,"position","position",(-2011731912)),"fixed",new cljs.core.Keyword(null,"right","right",(-452581833)),(0),new cljs.core.Keyword(null,"width","width",(-384071477)),"80px",new cljs.core.Keyword(null,"text-align","text-align",(1786091845)),"center"], null),new cljs.core.Keyword(null,"shell-visible-button","shell-visible-button",(-1362287320)).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles),(cljs.core.truth_(visible_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",(-1550509018)),(0)], null)))], null),(cljs.core.truth_(visible_QMARK_)?"Hide":"Data frisk")], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.DataFriskShellVisibleButton;},new cljs.core.Symbol("datafrisk.core","DataFriskShellVisibleButton","datafrisk.core/DataFriskShellVisibleButton",(-1997333757),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"DataFriskShellVisibleButton","DataFriskShellVisibleButton",(-2085472155),null),"datafrisk/core.cljs",(34),(1),(234),(234),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visible?","visible?",(-524572054),null),new cljs.core.Symbol(null,"toggle-visible-fn","toggle-visible-fn",(240734592),null)], null)),null,(cljs.core.truth_(datafrisk.core.DataFriskShellVisibleButton)?datafrisk.core.DataFriskShellVisibleButton.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.DataFriskShell = (function datafrisk$core$DataFriskShell(var_args){
var args__25948__auto__ = [];
var len__25946__auto___102 = arguments.length;
var i__25947__auto___103 = (0);
while(true){
if((i__25947__auto___103 < len__25946__auto___102)){
args__25948__auto__.push((arguments[i__25947__auto___103]));

var G__104 = (i__25947__auto___103 + (1));
i__25947__auto___103 = G__104;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((0) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((0)),(0),null)):null);
return datafrisk.core.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic(argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return datafrisk.core.DataFriskShell;},new cljs.core.Symbol("datafrisk.core","DataFriskShell","datafrisk.core/DataFriskShell",(884683177),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"DataFriskShell","DataFriskShell",(981128527),null),"datafrisk/core.cljs",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"data","data",(1407862150),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(248),(248),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(datafrisk.core.DataFriskShell)?datafrisk.core.DataFriskShell.cljs$lang$test:null)])));})()
;

datafrisk.core.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.call(null,(function (p1__1_SHARP_,p2__2_SHARP_){
return cljs.core.assoc_in.call(null,p1__1_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),p2__2_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540))], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,cljs.core.count.call(null,data)));
var state_atom = reagent.core.atom.call(null,expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__105__delegate = function (data__$1){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
var visible_QMARK_ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(data_frisk);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",(-2011731912)),"fixed",new cljs.core.Keyword(null,"right","right",(-452581833)),(0),new cljs.core.Keyword(null,"bottom","bottom",(-1550509018)),(0),new cljs.core.Keyword(null,"width","width",(-384071477)),"100%",new cljs.core.Keyword(null,"height","height",(1025178622)),"50%",new cljs.core.Keyword(null,"max-height","max-height",(-612563804)),(cljs.core.truth_(visible_QMARK_)?"50%":(0)),new cljs.core.Keyword(null,"transition","transition",(765692007)),"all 0.3s ease-out",new cljs.core.Keyword(null,"padding","padding",(1660304693)),(0)], null),new cljs.core.Keyword(null,"shell","shell",(1402941019)).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFriskShellVisibleButton,visible_QMARK_,((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (_){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),new cljs.core.Keyword(null,"visible?","visible?",(2129863715))], null),cljs.core.not.call(null,visible_QMARK_));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",(1660304693)),"10px",new cljs.core.Keyword(null,"height","height",(1025178622)),"100%",new cljs.core.Keyword(null,"box-sizing","box-sizing",(-1956090239)),"border-box",new cljs.core.Keyword(null,"overflow-y","overflow-y",(-1436589285)),"scroll"], null)], null),cljs.core.map_indexed.call(null,((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),id], null));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
,data__$1)], null)], null);
};
var G__105 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__106__i = 0, G__106__a = new Array(arguments.length -  0);
while (G__106__i < G__106__a.length) {G__106__a[G__106__i] = arguments[G__106__i + 0]; ++G__106__i;}
  data__$1 = new cljs.core.IndexedSeq(G__106__a,0);
} 
return G__105__delegate.call(this,data__$1);};
G__105.cljs$lang$maxFixedArity = 0;
G__105.cljs$lang$applyTo = (function (arglist__107){
var data__$1 = cljs.core.seq(arglist__107);
return G__105__delegate(data__$1);
});
G__105.cljs$core$IFn$_invoke$arity$variadic = G__105__delegate;
return G__105;
})()
;
;})(expand_by_default,state_atom))
});

datafrisk.core.DataFriskShell.cljs$lang$maxFixedArity = (0);

datafrisk.core.DataFriskShell.cljs$lang$applyTo = (function (seq101){
return datafrisk.core.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq101));
});

new cljs.core.Var(function(){return datafrisk.core.DataFriskShell;},new cljs.core.Symbol("datafrisk.core","DataFriskShell","datafrisk.core/DataFriskShell",(884683177),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"DataFriskShell","DataFriskShell",(981128527),null),"datafrisk/core.cljs",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"data","data",(1407862150),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(248),(248),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(datafrisk.core.DataFriskShell)?datafrisk.core.DataFriskShell.cljs$lang$test:null)]));
(function (){
datafrisk.core.FriskInlineVisibilityButton = (function datafrisk$core$FriskInlineVisibilityButton(visible_QMARK_,update_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",(1456579943)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",(1444987323)),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",(1738438491)),"transparent",new cljs.core.Keyword(null,"width","width",(-384071477)),"20px",new cljs.core.Keyword(null,"height","height",(1025178622)),"20px"], null),new cljs.core.Keyword(null,"onClick","onClick",(-1991238530)),update_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",(856789142)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",(-469489477)),"0 0 100 100",new cljs.core.Keyword(null,"width","width",(-384071477)),"100%",new cljs.core.Keyword(null,"height","height",(1025178622)),"100%",new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",(765692007)),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",(1381301764)),(cljs.core.truth_(visible_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",(837053759)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",(-1486596883)),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",(1741823555)),"black"], null)], null)], null)], null);
}); return (
new cljs.core.Var(function(){return datafrisk.core.FriskInlineVisibilityButton;},new cljs.core.Symbol("datafrisk.core","FriskInlineVisibilityButton","datafrisk.core/FriskInlineVisibilityButton",(486280267),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"FriskInlineVisibilityButton","FriskInlineVisibilityButton",(733818733),null),"datafrisk/core.cljs",(34),(1),(271),(271),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visible?","visible?",(-524572054),null),new cljs.core.Symbol(null,"update-fn","update-fn",(-1943348456),null)], null)),null,(cljs.core.truth_(datafrisk.core.FriskInlineVisibilityButton)?datafrisk.core.FriskInlineVisibilityButton.cljs$lang$test:null)])));})()
;
(function (){
datafrisk.core.FriskInline = (function datafrisk$core$FriskInline(var_args){
var args__25948__auto__ = [];
var len__25946__auto___109 = arguments.length;
var i__25947__auto___110 = (0);
while(true){
if((i__25947__auto___110 < len__25946__auto___109)){
args__25948__auto__.push((arguments[i__25947__auto___110]));

var G__111 = (i__25947__auto___110 + (1));
i__25947__auto___110 = G__111;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((0) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((0)),(0),null)):null);
return datafrisk.core.FriskInline.cljs$core$IFn$_invoke$arity$variadic(argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return datafrisk.core.FriskInline;},new cljs.core.Symbol("datafrisk.core","FriskInline","datafrisk.core/FriskInline",(-137814620),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"FriskInline","FriskInline",(-1056032446),null),"datafrisk/core.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"data","data",(1407862150),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(282),(282),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(datafrisk.core.FriskInline)?datafrisk.core.FriskInline.cljs$lang$test:null)])));})()
;

datafrisk.core.FriskInline.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.call(null,(function (p1__3_SHARP_,p2__4_SHARP_){
return cljs.core.assoc_in.call(null,p1__3_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),p2__4_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",(787811540))], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,cljs.core.count.call(null,data)));
var state_atom = reagent.core.atom.call(null,expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__112__delegate = function (data__$1){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
var visible_QMARK_ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(data_frisk);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-flow","flex-flow",(544537375)),"row nowrap",new cljs.core.Keyword(null,"transition","transition",(765692007)),"all 0.3s ease-out",new cljs.core.Keyword(null,"z-index","z-index",(1892827090)),"5"], null),(cljs.core.truth_(visible_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"overflow-x","overflow-x",(-26547754)),"hide",new cljs.core.Keyword(null,"overflow-y","overflow-y",(-1436589285)),"hide",new cljs.core.Keyword(null,"max-height","max-height",(-612563804)),"30px",new cljs.core.Keyword(null,"max-width","max-width",(-1939924051)),"100px"], null)),new cljs.core.Keyword(null,"shell","shell",(1402941019)).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.FriskInlineVisibilityButton,visible_QMARK_,((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (_){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",(-357579764)),new cljs.core.Keyword(null,"visible?","visible?",(2129863715))], null),cljs.core.not.call(null,visible_QMARK_));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",(1394872991)),"Data frisk"], null),(cljs.core.truth_(visible_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",(1057191632)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",(1660304693)),"10px",new cljs.core.Keyword(null,"resize","resize",(297367086)),"both",new cljs.core.Keyword(null,"box-sizing","box-sizing",(-1956090239)),"border-box",new cljs.core.Keyword(null,"overflow-x","overflow-x",(-26547754)),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",(-1436589285)),"auto"], null)], null),cljs.core.map_indexed.call(null,((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),id], null));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
,data__$1)], null):null)], null);
};
var G__112 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__113__i = 0, G__113__a = new Array(arguments.length -  0);
while (G__113__i < G__113__a.length) {G__113__a[G__113__i] = arguments[G__113__i + 0]; ++G__113__i;}
  data__$1 = new cljs.core.IndexedSeq(G__113__a,0);
} 
return G__112__delegate.call(this,data__$1);};
G__112.cljs$lang$maxFixedArity = 0;
G__112.cljs$lang$applyTo = (function (arglist__114){
var data__$1 = cljs.core.seq(arglist__114);
return G__112__delegate(data__$1);
});
G__112.cljs$core$IFn$_invoke$arity$variadic = G__112__delegate;
return G__112;
})()
;
;})(expand_by_default,state_atom))
});

datafrisk.core.FriskInline.cljs$lang$maxFixedArity = (0);

datafrisk.core.FriskInline.cljs$lang$applyTo = (function (seq108){
return datafrisk.core.FriskInline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq108));
});

new cljs.core.Var(function(){return datafrisk.core.FriskInline;},new cljs.core.Symbol("datafrisk.core","FriskInline","datafrisk.core/FriskInline",(-137814620),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"datafrisk.core","datafrisk.core",(743308045),null),new cljs.core.Symbol(null,"FriskInline","FriskInline",(-1056032446),null),"datafrisk/core.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"data","data",(1407862150),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(282),(282),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(datafrisk.core.FriskInline)?datafrisk.core.FriskInline.cljs$lang$test:null)]));
