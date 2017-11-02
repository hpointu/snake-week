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
var iter__8074__auto__ = (function snakeweek$maps$to_coords_$_iter__15579(s__15580){
return (new cljs.core.LazySeq(null,(function (){
var s__15580__$1 = s__15580;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15580__$1);
if(temp__4657__auto__){
var s__15580__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15580__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__15580__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__15582 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__15581 = (0);
while(true){
if((i__15581 < size__8073__auto__)){
var vec__15583 = cljs.core._nth.call(null,c__8072__auto__,i__15581);
var i = cljs.core.nth.call(null,vec__15583,(0),null);
var wall = cljs.core.nth.call(null,vec__15583,(1),null);
if(cljs.core._EQ_.call(null,(1),wall)){
cljs.core.chunk_append.call(null,b__15582,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,i,width),((i / width) | (0))], null));

var G__15589 = (i__15581 + (1));
i__15581 = G__15589;
continue;
} else {
var G__15590 = (i__15581 + (1));
i__15581 = G__15590;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15582),snakeweek$maps$to_coords_$_iter__15579.call(null,cljs.core.chunk_rest.call(null,s__15580__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15582),null);
}
} else {
var vec__15586 = cljs.core.first.call(null,s__15580__$2);
var i = cljs.core.nth.call(null,vec__15586,(0),null);
var wall = cljs.core.nth.call(null,vec__15586,(1),null);
if(cljs.core._EQ_.call(null,(1),wall)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,i,width),((i / width) | (0))], null),snakeweek$maps$to_coords_$_iter__15579.call(null,cljs.core.rest.call(null,s__15580__$2)));
} else {
var G__15591 = cljs.core.rest.call(null,s__15580__$2);
s__15580__$1 = G__15591;
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
var iter__8074__auto__ = (function snakeweek$maps$get_colors_$_iter__15592(s__15593){
return (new cljs.core.LazySeq(null,(function (){
var s__15593__$1 = s__15593;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15593__$1);
if(temp__4657__auto__){
var s__15593__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15593__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__15593__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__15595 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__15594 = (0);
while(true){
if((i__15594 < size__8073__auto__)){
var i = cljs.core._nth.call(null,c__8072__auto__,i__15594);
var j = (i * (4));
var color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pixels[(j + (0))]),(pixels[(j + (1))]),(pixels[(j + (2))])], null);
cljs.core.chunk_append.call(null,b__15595,color);

var G__15596 = (i__15594 + (1));
i__15594 = G__15596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15595),snakeweek$maps$get_colors_$_iter__15592.call(null,cljs.core.chunk_rest.call(null,s__15593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15595),null);
}
} else {
var i = cljs.core.first.call(null,s__15593__$2);
var j = (i * (4));
var color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pixels[(j + (0))]),(pixels[(j + (1))]),(pixels[(j + (2))])], null);
return cljs.core.cons.call(null,color,snakeweek$maps$get_colors_$_iter__15592.call(null,cljs.core.rest.call(null,s__15593__$2)));
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
return (function snakeweek$maps$load_map_$_iter__15597(s__15598){
return (new cljs.core.LazySeq(null,((function (img,_,w,h,pixels,colors){
return (function (){
var s__15598__$1 = s__15598;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15598__$1);
if(temp__4657__auto__){
var s__15598__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15598__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__15598__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__15600 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__15599 = (0);
while(true){
if((i__15599 < size__8073__auto__)){
var c = cljs.core._nth.call(null,c__8072__auto__,i__15599);
cljs.core.chunk_append.call(null,b__15600,((cljs.core._EQ_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)))?(1):(0)));

var G__15601 = (i__15599 + (1));
i__15599 = G__15601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15600),snakeweek$maps$load_map_$_iter__15597.call(null,cljs.core.chunk_rest.call(null,s__15598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15600),null);
}
} else {
var c = cljs.core.first.call(null,s__15598__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)))?(1):(0)),snakeweek$maps$load_map_$_iter__15597.call(null,cljs.core.rest.call(null,s__15598__$2)));
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
