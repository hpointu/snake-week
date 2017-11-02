// Compiled by ClojureScript 1.9.671 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__12428_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__12428_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__12429 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__12430 = null;
var count__12431 = (0);
var i__12432 = (0);
while(true){
if((i__12432 < count__12431)){
var s = cljs.core._nth.call(null,chunk__12430,i__12432);
var temp__4657__auto___12433 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___12433)){
var sheet_12434 = temp__4657__auto___12433;
var temp__4657__auto___12435__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_12434.href,changed);
if(cljs.core.truth_(temp__4657__auto___12435__$1)){
var href_uri_12436 = temp__4657__auto___12435__$1;
sheet_12434.ownerNode.href = href_uri_12436.makeUnique().toString();
} else {
}
} else {
}

var G__12437 = seq__12429;
var G__12438 = chunk__12430;
var G__12439 = count__12431;
var G__12440 = (i__12432 + (1));
seq__12429 = G__12437;
chunk__12430 = G__12438;
count__12431 = G__12439;
i__12432 = G__12440;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12429);
if(temp__4657__auto__){
var seq__12429__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12429__$1)){
var c__8105__auto__ = cljs.core.chunk_first.call(null,seq__12429__$1);
var G__12441 = cljs.core.chunk_rest.call(null,seq__12429__$1);
var G__12442 = c__8105__auto__;
var G__12443 = cljs.core.count.call(null,c__8105__auto__);
var G__12444 = (0);
seq__12429 = G__12441;
chunk__12430 = G__12442;
count__12431 = G__12443;
i__12432 = G__12444;
continue;
} else {
var s = cljs.core.first.call(null,seq__12429__$1);
var temp__4657__auto___12445__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___12445__$1)){
var sheet_12446 = temp__4657__auto___12445__$1;
var temp__4657__auto___12447__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_12446.href,changed);
if(cljs.core.truth_(temp__4657__auto___12447__$2)){
var href_uri_12448 = temp__4657__auto___12447__$2;
sheet_12446.ownerNode.href = href_uri_12448.makeUnique().toString();
} else {
}
} else {
}

var G__12449 = cljs.core.next.call(null,seq__12429__$1);
var G__12450 = null;
var G__12451 = (0);
var G__12452 = (0);
seq__12429 = G__12449;
chunk__12430 = G__12450;
count__12431 = G__12451;
i__12432 = G__12452;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__12453 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__12454 = null;
var count__12455 = (0);
var i__12456 = (0);
while(true){
if((i__12456 < count__12455)){
var s = cljs.core._nth.call(null,chunk__12454,i__12456);
var temp__4657__auto___12457 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___12457)){
var image_12458 = temp__4657__auto___12457;
var temp__4657__auto___12459__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_12458.src,changed);
if(cljs.core.truth_(temp__4657__auto___12459__$1)){
var href_uri_12460 = temp__4657__auto___12459__$1;
image_12458.src = href_uri_12460.makeUnique().toString();
} else {
}
} else {
}

var G__12461 = seq__12453;
var G__12462 = chunk__12454;
var G__12463 = count__12455;
var G__12464 = (i__12456 + (1));
seq__12453 = G__12461;
chunk__12454 = G__12462;
count__12455 = G__12463;
i__12456 = G__12464;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12453);
if(temp__4657__auto__){
var seq__12453__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12453__$1)){
var c__8105__auto__ = cljs.core.chunk_first.call(null,seq__12453__$1);
var G__12465 = cljs.core.chunk_rest.call(null,seq__12453__$1);
var G__12466 = c__8105__auto__;
var G__12467 = cljs.core.count.call(null,c__8105__auto__);
var G__12468 = (0);
seq__12453 = G__12465;
chunk__12454 = G__12466;
count__12455 = G__12467;
i__12456 = G__12468;
continue;
} else {
var s = cljs.core.first.call(null,seq__12453__$1);
var temp__4657__auto___12469__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___12469__$1)){
var image_12470 = temp__4657__auto___12469__$1;
var temp__4657__auto___12471__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_12470.src,changed);
if(cljs.core.truth_(temp__4657__auto___12471__$2)){
var href_uri_12472 = temp__4657__auto___12471__$2;
image_12470.src = href_uri_12472.makeUnique().toString();
} else {
}
} else {
}

var G__12473 = cljs.core.next.call(null,seq__12453__$1);
var G__12474 = null;
var G__12475 = (0);
var G__12476 = (0);
seq__12453 = G__12473;
chunk__12454 = G__12474;
count__12455 = G__12475;
i__12456 = G__12476;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__12479){
var map__12480 = p__12479;
var map__12480__$1 = ((((!((map__12480 == null)))?((((map__12480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12480):map__12480);
var on_jsload = cljs.core.get.call(null,map__12480__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__12480,map__12480__$1,on_jsload){
return (function (p1__12477_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__12477_SHARP_,".js");
});})(map__12480,map__12480__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__12480,map__12480__$1,on_jsload){
return (function (p1__12478_SHARP_){
return goog.Uri.parse(p1__12478_SHARP_).makeUnique();
});})(js_files,map__12480,map__12480__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__12480,map__12480__$1,on_jsload){
return (function() { 
var G__12482__delegate = function (_){
return on_jsload.call(null);
};
var G__12482 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__12483__i = 0, G__12483__a = new Array(arguments.length -  0);
while (G__12483__i < G__12483__a.length) {G__12483__a[G__12483__i] = arguments[G__12483__i + 0]; ++G__12483__i;}
  _ = new cljs.core.IndexedSeq(G__12483__a,0,null);
} 
return G__12482__delegate.call(this,_);};
G__12482.cljs$lang$maxFixedArity = 0;
G__12482.cljs$lang$applyTo = (function (arglist__12484){
var _ = cljs.core.seq(arglist__12484);
return G__12482__delegate(_);
});
G__12482.cljs$core$IFn$_invoke$arity$variadic = G__12482__delegate;
return G__12482;
})()
;})(js_files,map__12480,map__12480__$1,on_jsload))
,((function (js_files,map__12480,map__12480__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__12480,map__12480__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__12485_12489 = cljs.core.seq.call(null,things_to_log);
var chunk__12486_12490 = null;
var count__12487_12491 = (0);
var i__12488_12492 = (0);
while(true){
if((i__12488_12492 < count__12487_12491)){
var t_12493 = cljs.core._nth.call(null,chunk__12486_12490,i__12488_12492);
console.log(t_12493);

var G__12494 = seq__12485_12489;
var G__12495 = chunk__12486_12490;
var G__12496 = count__12487_12491;
var G__12497 = (i__12488_12492 + (1));
seq__12485_12489 = G__12494;
chunk__12486_12490 = G__12495;
count__12487_12491 = G__12496;
i__12488_12492 = G__12497;
continue;
} else {
var temp__4657__auto___12498 = cljs.core.seq.call(null,seq__12485_12489);
if(temp__4657__auto___12498){
var seq__12485_12499__$1 = temp__4657__auto___12498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12485_12499__$1)){
var c__8105__auto___12500 = cljs.core.chunk_first.call(null,seq__12485_12499__$1);
var G__12501 = cljs.core.chunk_rest.call(null,seq__12485_12499__$1);
var G__12502 = c__8105__auto___12500;
var G__12503 = cljs.core.count.call(null,c__8105__auto___12500);
var G__12504 = (0);
seq__12485_12489 = G__12501;
chunk__12486_12490 = G__12502;
count__12487_12491 = G__12503;
i__12488_12492 = G__12504;
continue;
} else {
var t_12505 = cljs.core.first.call(null,seq__12485_12499__$1);
console.log(t_12505);

var G__12506 = cljs.core.next.call(null,seq__12485_12499__$1);
var G__12507 = null;
var G__12508 = (0);
var G__12509 = (0);
seq__12485_12489 = G__12506;
chunk__12486_12490 = G__12507;
count__12487_12491 = G__12508;
i__12488_12492 = G__12509;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__12510_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12510_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__12511 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__12511);

adzerk.boot_reload.reload.reload_css.call(null,G__12511);

adzerk.boot_reload.reload.reload_img.call(null,G__12511);

return G__12511;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map