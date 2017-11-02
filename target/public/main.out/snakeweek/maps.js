// Compiled by ClojureScript 1.9.671 {}
goog.provide('snakeweek.maps');
goog.require('cljs.core');
goog.require('snakeweek.assets');
snakeweek.maps.box_hor_wall = (function snakeweek$maps$box_hor_wall(width){
return cljs.core.take.call(null,width,cljs.core.repeat.call(null,(1)));
});
snakeweek.maps.box_row = (function snakeweek$maps$box_row(width){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.take.call(null,(width - (2)),cljs.core.repeat.call(null,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
});
snakeweek.maps.box = (function snakeweek$maps$box(w,h){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,cljs.core.concat.call(null,snakeweek.maps.box_hor_wall.call(null,w),cljs.core.take.call(null,(h - (2)),cljs.core.repeat.call(null,snakeweek.maps.box_row.call(null,w))),snakeweek.maps.box_hor_wall.call(null,w))));
});
snakeweek.maps.to_coords = (function snakeweek$maps$to_coords(width,height,walls){
var iter__8074__auto__ = (function snakeweek$maps$to_coords_$_iter__14116(s__14117){
return (new cljs.core.LazySeq(null,(function (){
var s__14117__$1 = s__14117;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14117__$1);
if(temp__4657__auto__){
var s__14117__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14117__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__14117__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__14119 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__14118 = (0);
while(true){
if((i__14118 < size__8073__auto__)){
var vec__14120 = cljs.core._nth.call(null,c__8072__auto__,i__14118);
var i = cljs.core.nth.call(null,vec__14120,(0),null);
var wall = cljs.core.nth.call(null,vec__14120,(1),null);
if(cljs.core._EQ_.call(null,(1),wall)){
cljs.core.chunk_append.call(null,b__14119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,i,width),((i / width) | (0))], null));

var G__14126 = (i__14118 + (1));
i__14118 = G__14126;
continue;
} else {
var G__14127 = (i__14118 + (1));
i__14118 = G__14127;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14119),snakeweek$maps$to_coords_$_iter__14116.call(null,cljs.core.chunk_rest.call(null,s__14117__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14119),null);
}
} else {
var vec__14123 = cljs.core.first.call(null,s__14117__$2);
var i = cljs.core.nth.call(null,vec__14123,(0),null);
var wall = cljs.core.nth.call(null,vec__14123,(1),null);
if(cljs.core._EQ_.call(null,(1),wall)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,i,width),((i / width) | (0))], null),snakeweek$maps$to_coords_$_iter__14116.call(null,cljs.core.rest.call(null,s__14117__$2)));
} else {
var G__14128 = cljs.core.rest.call(null,s__14117__$2);
s__14117__$1 = G__14128;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8074__auto__.call(null,cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,walls)));
});
snakeweek.maps.walls = (function snakeweek$maps$walls(w,h){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"walls","walls",-268788818),snakeweek.maps.to_coords.call(null,w,h,snakeweek.maps.box.call(null,w,h))], null);
});
snakeweek.maps.get_colors = (function snakeweek$maps$get_colors(pixels,w,h){
var iter__8074__auto__ = (function snakeweek$maps$get_colors_$_iter__14129(s__14130){
return (new cljs.core.LazySeq(null,(function (){
var s__14130__$1 = s__14130;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14130__$1);
if(temp__4657__auto__){
var s__14130__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14130__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__14130__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__14132 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__14131 = (0);
while(true){
if((i__14131 < size__8073__auto__)){
var i = cljs.core._nth.call(null,c__8072__auto__,i__14131);
var j = (i * (4));
var color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pixels[(j + (0))]),(pixels[(j + (1))]),(pixels[(j + (2))])], null);
cljs.core.chunk_append.call(null,b__14132,color);

var G__14133 = (i__14131 + (1));
i__14131 = G__14133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14132),snakeweek$maps$get_colors_$_iter__14129.call(null,cljs.core.chunk_rest.call(null,s__14130__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14132),null);
}
} else {
var i = cljs.core.first.call(null,s__14130__$2);
var j = (i * (4));
var color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pixels[(j + (0))]),(pixels[(j + (1))]),(pixels[(j + (2))])], null);
return cljs.core.cons.call(null,color,snakeweek$maps$get_colors_$_iter__14129.call(null,cljs.core.rest.call(null,s__14130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8074__auto__.call(null,cljs.core.range.call(null,(w * h)));
});
snakeweek.maps.load_map = (function snakeweek$maps$load_map(asset_name){
var img = snakeweek.assets.get_asset.call(null,asset_name);
var _ = img.loadPixels();
var w = (img["width"]);
var h = (img["height"]);
var pixels = (img["pixels"]);
var colors = snakeweek.maps.get_colors.call(null,pixels,w,h);
var walls = (function (){var iter__8074__auto__ = ((function (img,_,w,h,pixels,colors){
return (function snakeweek$maps$load_map_$_iter__14134(s__14135){
return (new cljs.core.LazySeq(null,((function (img,_,w,h,pixels,colors){
return (function (){
var s__14135__$1 = s__14135;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14135__$1);
if(temp__4657__auto__){
var s__14135__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14135__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__14135__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__14137 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__14136 = (0);
while(true){
if((i__14136 < size__8073__auto__)){
var c = cljs.core._nth.call(null,c__8072__auto__,i__14136);
cljs.core.chunk_append.call(null,b__14137,((cljs.core._EQ_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)))?(1):(0)));

var G__14138 = (i__14136 + (1));
i__14136 = G__14138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14137),snakeweek$maps$load_map_$_iter__14134.call(null,cljs.core.chunk_rest.call(null,s__14135__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14137),null);
}
} else {
var c = cljs.core.first.call(null,s__14135__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)))?(1):(0)),snakeweek$maps$load_map_$_iter__14134.call(null,cljs.core.rest.call(null,s__14135__$2)));
}
} else {
return null;
}
break;
}
});})(img,_,w,h,pixels,colors))
,null,null));
});})(img,_,w,h,pixels,colors))
;
return iter__8074__auto__.call(null,colors);
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"walls","walls",-268788818),snakeweek.maps.to_coords.call(null,w,h,walls)], null);
});

//# sourceMappingURL=maps.js.map