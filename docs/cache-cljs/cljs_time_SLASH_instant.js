goog.provide("cljs_time.instant");
goog.date.UtcDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,writer,opts){
var obj__$1 = this;
cljs.core._write.call(null,writer,"#inst ");

return cljs.core.pr_writer.call(null,cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",(177938180)).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),obj__$1),writer,opts);
});

goog.date.DateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,writer,opts){
var obj__$1 = this;
cljs.core._write.call(null,writer,"#inst ");

return cljs.core.pr_writer.call(null,cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",(177938180)).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),obj__$1),writer,opts);
});

goog.date.Date.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,writer,opts){
var obj__$1 = this;
cljs.core._write.call(null,writer,"#inst ");

return cljs.core.pr_writer.call(null,cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date","date",(-1463434462)).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),obj__$1),writer,opts);
});
