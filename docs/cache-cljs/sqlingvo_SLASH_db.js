goog.provide("sqlingvo.db");

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sqlingvo.db.Database = (function (scheme,__meta,__extmap,__hash){
this.scheme = scheme;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
sqlingvo.db.Database.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

sqlingvo.db.Database.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k861,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__863 = (((k861 instanceof cljs.core.Keyword))?k861.fqn:null);
switch (G__863) {
case "scheme":
return self__.scheme;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k861,else__22672__auto__);

}
});

sqlingvo.db.Database.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#sqlingvo.db.Database{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scheme","scheme",(90199613)),self__.scheme],null))], null),self__.__extmap));
});

sqlingvo.db.Database.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

sqlingvo.db.Database.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__860){
var self__ = this;
var G__860__$1 = this;
return (new cljs.core.RecordIter((0),G__860__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheme","scheme",(90199613))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

sqlingvo.db.Database.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

sqlingvo.db.Database.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new sqlingvo.db.Database(self__.scheme,self__.__meta,self__.__extmap,self__.__hash));
});

sqlingvo.db.Database.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

sqlingvo.db.Database.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

sqlingvo.db.Database.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

sqlingvo.db.Database.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scheme","scheme",(90199613)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new sqlingvo.db.Database(self__.scheme,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

sqlingvo.db.Database.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__860){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__864 = cljs.core.keyword_identical_QMARK_;
var expr__865 = k__22678__auto__;
if(cljs.core.truth_(pred__864.call(null,new cljs.core.Keyword(null,"scheme","scheme",(90199613)),expr__865))){
return (new sqlingvo.db.Database(G__860,self__.__meta,self__.__extmap,null));
} else {
return (new sqlingvo.db.Database(self__.scheme,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__860),null));
}
});

sqlingvo.db.Database.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scheme","scheme",(90199613)),self__.scheme],null))], null),self__.__extmap));
});

sqlingvo.db.Database.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__860){
var self__ = this;
var this__22668__auto____$1 = this;
return (new sqlingvo.db.Database(self__.scheme,G__860,self__.__extmap,self__.__hash));
});

sqlingvo.db.Database.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

sqlingvo.db.Database.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scheme","scheme",(1730731140),null)], null);
});

sqlingvo.db.Database.cljs$lang$type = true;

sqlingvo.db.Database.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"sqlingvo.db/Database");
});

sqlingvo.db.Database.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"sqlingvo.db/Database");
});

(function (){
sqlingvo.db.__GT_Database = (function sqlingvo$db$__GT_Database(scheme){
return (new sqlingvo.db.Database(scheme,null,null,null));
}); return (
new cljs.core.Var(function(){return sqlingvo.db.__GT_Database;},new cljs.core.Symbol("sqlingvo.db","->Database","sqlingvo.db/->Database",(968469356),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.db","sqlingvo.db",(-1200841137),null),new cljs.core.Symbol(null,"->Database","->Database",(1718989933),null),"sqlingvo/db.cljc",(20),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(6),(6),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scheme","scheme",(1730731140),null)], null)),null,(cljs.core.truth_(sqlingvo.db.__GT_Database)?sqlingvo.db.__GT_Database.cljs$lang$test:null)])));})()
;

(function (){
sqlingvo.db.map__GT_Database = (function sqlingvo$db$map__GT_Database(G__862){
return (new sqlingvo.db.Database(new cljs.core.Keyword(null,"scheme","scheme",(90199613)).cljs$core$IFn$_invoke$arity$1(G__862),null,cljs.core.dissoc.call(null,G__862,new cljs.core.Keyword(null,"scheme","scheme",(90199613))),null));
}); return (
new cljs.core.Var(function(){return sqlingvo.db.map__GT_Database;},new cljs.core.Symbol("sqlingvo.db","map->Database","sqlingvo.db/map->Database",(2029088526),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.db","sqlingvo.db",(-1200841137),null),new cljs.core.Symbol(null,"map->Database","map->Database",(-938654199),null),"sqlingvo/db.cljc",(20),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(6),(6),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__862","G__862",(752416868),null)], null)),null,(cljs.core.truth_(sqlingvo.db.map__GT_Database)?sqlingvo.db.map__GT_Database.cljs$lang$test:null)])));})()
;

/**
 * Return the database adapter as a keyword.
 */
(function (){
sqlingvo.db.scheme = (function sqlingvo$db$scheme(db){
var or__20817__auto__ = new cljs.core.Keyword(null,"scheme","scheme",(90199613)).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.Keyword(null,"subprotocol","subprotocol",(-559265970)).cljs$core$IFn$_invoke$arity$1(db);
}
}); return (
new cljs.core.Var(function(){return sqlingvo.db.scheme;},new cljs.core.Symbol("sqlingvo.db","scheme","sqlingvo.db/scheme",(-924519029),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.db","sqlingvo.db",(-1200841137),null),new cljs.core.Symbol(null,"scheme","scheme",(1730731140),null),"sqlingvo/db.cljc",(13),(1),(8),(8),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)),"Return the database adapter as a keyword.",(cljs.core.truth_(sqlingvo.db.scheme)?sqlingvo.db.scheme.cljs$lang$test:null)])));})()
;
if(typeof sqlingvo.db.db_spec !== 'undefined'){
} else {
/**
 * Return the `Database` record for :adapter or :subprotocol in
 *   `db-spec`.
 */
(function (){
sqlingvo.db.db_spec = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.db","db-spec"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (p1__59_SHARP_){
var G__868 = p1__59_SHARP_;
var G__868__$1 = (((G__868 == null))?null:sqlingvo.db.scheme.call(null,G__868));
var G__868__$2 = (((G__868__$1 == null))?null:cljs.core.keyword.call(null,G__868__$1));
return G__868__$2;
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.db.db_spec;},new cljs.core.Symbol("sqlingvo.db","db-spec","sqlingvo.db/db-spec",(-630706588),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.db","sqlingvo.db",(-1200841137),null),new cljs.core.Symbol(null,"db-spec","db-spec",(1798051685),null),"sqlingvo/db.cljc",(18),(1),(13),(13),cljs.core.List.EMPTY,"Return the `Database` record for :adapter or :subprotocol in\n  `db-spec`.",(cljs.core.truth_(sqlingvo.db.db_spec)?sqlingvo.db.db_spec.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.db.db_spec,new cljs.core.Keyword(null,"mysql","mysql",(-1431590210)),(function (db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sql-quote","sql-quote",(994700328)),sqlingvo.util.sql_quote_backtick,new cljs.core.Keyword(null,"classname","classname",(777390796)),"com.mysql.cj.jdbc.Driver"], null);
}));
cljs.core._add_method.call(null,sqlingvo.db.db_spec,new cljs.core.Keyword(null,"postgresql","postgresql",(-1568339962)),(function (db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sql-quote","sql-quote",(994700328)),sqlingvo.util.sql_quote_double_quote,new cljs.core.Keyword(null,"classname","classname",(777390796)),"org.postgresql.Driver"], null);
}));
cljs.core._add_method.call(null,sqlingvo.db.db_spec,new cljs.core.Keyword(null,"oracle","oracle",(-2085139604)),(function (db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sql-quote","sql-quote",(994700328)),sqlingvo.util.sql_quote_double_quote,new cljs.core.Keyword(null,"classname","classname",(777390796)),"oracle.jdbc.driver.OracleDriver"], null);
}));
cljs.core._add_method.call(null,sqlingvo.db.db_spec,new cljs.core.Keyword(null,"sqlite","sqlite",(1450998204)),(function (db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sql-quote","sql-quote",(994700328)),sqlingvo.util.sql_quote_double_quote,new cljs.core.Keyword(null,"classname","classname",(777390796)),"org.sqlite.JDBC"], null);
}));
cljs.core._add_method.call(null,sqlingvo.db.db_spec,new cljs.core.Keyword(null,"sqlserver","sqlserver",(222509918)),(function (db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sql-quote","sql-quote",(994700328)),sqlingvo.util.sql_quote_double_quote,new cljs.core.Keyword(null,"classname","classname",(777390796)),"com.microsoft.sqlserver.jdbc.SQLServerDriver"], null);
}));
cljs.core._add_method.call(null,sqlingvo.db.db_spec,new cljs.core.Keyword(null,"vertica","vertica",(-801927024)),(function (db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sql-quote","sql-quote",(994700328)),sqlingvo.util.sql_quote_double_quote,new cljs.core.Keyword(null,"classname","classname",(777390796)),"com.vertica.jdbc.Driver"], null);
}));
cljs.core._add_method.call(null,sqlingvo.db.db_spec,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (db){
throw cljs.core.ex_info.call(null,"Unknown database :scheme or :subprotocol.",(function (){var or__20817__auto__ = db;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}));
/**
 * Return a database for `spec`.
 */
(function (){
sqlingvo.db.db = (function sqlingvo$db$db(var_args){
var args__23658__auto__ = [];
var len__23656__auto___875 = arguments.length;
var i__23657__auto___876 = (0);
while(true){
if((i__23657__auto___876 < len__23656__auto___875)){
args__23658__auto__.push((arguments[i__23657__auto___876]));

var G__877 = (i__23657__auto___876 + (1));
i__23657__auto___876 = G__877;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return sqlingvo.db.db.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.db.db;},new cljs.core.Symbol("sqlingvo.db","db","sqlingvo.db/db",(-306152175),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.db","sqlingvo.db",(-1200841137),null),new cljs.core.Symbol(null,"db","db",(-1661185010),null),"sqlingvo/db.cljc",(9),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(45),(45),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Return a database for `spec`.",(cljs.core.truth_(sqlingvo.db.db)?sqlingvo.db.db.cljs$lang$test:null)])));})()
;

sqlingvo.db.db.cljs$core$IFn$_invoke$arity$variadic = (function (spec,p__871){
var vec__872 = p__871;
var opts = cljs.core.nth.call(null,vec__872,(0),null);
var db = (((spec instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scheme","scheme",(90199613)),spec], null):((typeof spec === 'string')?sqlingvo.url.parse.call(null,spec):(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.map_QMARK_.call(null,spec);
if(and__20770__auto__){
return sqlingvo.db.scheme.call(null,spec);
} else {
return and__20770__auto__;
}
})())?spec:null)));
var db__$1 = cljs.core.merge.call(null,db,sqlingvo.db.db_spec.call(null,db),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval-fn","eval-fn",(-1111644294)),sqlingvo.compiler.compile_stmt], null),opts);
var db__$2 = sqlingvo.db.map__GT_Database.call(null,db__$1);
return db__$2;
});

sqlingvo.db.db.cljs$lang$maxFixedArity = (1);

sqlingvo.db.db.cljs$lang$applyTo = (function (seq869){
var G__870 = cljs.core.first.call(null,seq869);
var seq869__$1 = cljs.core.next.call(null,seq869);
return sqlingvo.db.db.cljs$core$IFn$_invoke$arity$variadic(G__870,seq869__$1);
});

new cljs.core.Var(function(){return sqlingvo.db.db;},new cljs.core.Symbol("sqlingvo.db","db","sqlingvo.db/db",(-306152175),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.db","sqlingvo.db",(-1200841137),null),new cljs.core.Symbol(null,"db","db",(-1661185010),null),"sqlingvo/db.cljc",(9),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(45),(45),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Return a database for `spec`.",(cljs.core.truth_(sqlingvo.db.db)?sqlingvo.db.db.cljs$lang$test:null)]));
