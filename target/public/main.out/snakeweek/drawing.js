// Compiled by ClojureScript 1.9.671 {}
goog.provide('snakeweek.drawing');
goog.require('cljs.core');
goog.require('play_cljs.core');
goog.require('snakeweek.assets');
goog.require('clojure.string');
goog.require('cljs.core.async');
snakeweek.drawing.UNIT = (12);
snakeweek.drawing.font_atom = cljs.core.atom.call(null,null);
snakeweek.drawing.font_ready_QMARK_ = cljs.core.atom.call(null,false);
snakeweek.drawing.get_orientation = (function snakeweek$drawing$get_orientation(from,to){
if(cljs.core._EQ_.call(null,from,to)){
return cljs.core.keyword.call(null,to);
} else {
return cljs.core.keyword.call(null,clojure.string.join.call(null,"-",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null))));
}
});
snakeweek.drawing.sprites = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tail-south","tail-south",662674529),new cljs.core.Keyword(null,"west-south","west-south",438483649),new cljs.core.Keyword(null,"tail-west","tail-west",637404097),new cljs.core.Keyword(null,"tail-north","tail-north",-494844893),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"head-north","head-north",-1926454938),new cljs.core.Keyword(null,"head-west","head-west",1941788808),new cljs.core.Keyword(null,"north-west","north-west",15898313),new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"north-east","north-east",-1650651668),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"south-west","south-west",2040517871),new cljs.core.Keyword(null,"tail-east","tail-east",554379504),new cljs.core.Keyword(null,"south-east","south-east",249646387),new cljs.core.Keyword(null,"east-north","east-north",1752319318),new cljs.core.Keyword(null,"west-north","west-north",-1947866602),new cljs.core.Keyword(null,"head-east","head-east",-1922465192),new cljs.core.Keyword(null,"head-south","head-south",1374120955),new cljs.core.Keyword(null,"east-south","east-south",13964956),new cljs.core.Keyword(null,"north","north",651323902)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(36),(36)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(36),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(36),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(36)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(36),(48)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(48)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(36)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(36),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(36)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(48)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(48)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]);
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"no-smooth","no-smooth",-1363327849),(function (game,renderer,content,parent_opts){
var vec__14048 = content;
var seq__14049 = cljs.core.seq.call(null,vec__14048);
var first__14050 = cljs.core.first.call(null,seq__14049);
var seq__14049__$1 = cljs.core.next.call(null,seq__14049);
var command = first__14050;
var children = seq__14049__$1;
renderer.push();

renderer.noSmooth();

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,parent_opts);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"menu-entry","menu-entry",-1135924402),(function (game,renderer,content,parent_opts){
var vec__14051 = content;
var seq__14052 = cljs.core.seq.call(null,vec__14051);
var first__14053 = cljs.core.first.call(null,seq__14052);
var seq__14052__$1 = cljs.core.next.call(null,seq__14052);
var command = first__14053;
var first__14053__$1 = cljs.core.first.call(null,seq__14052__$1);
var seq__14052__$2 = cljs.core.next.call(null,seq__14052__$1);
var opts = first__14053__$1;
var children = seq__14052__$2;
var map__14054 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.text_defaults);
var map__14054__$1 = ((((!((map__14054 == null)))?((((map__14054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14054):map__14054);
var opts__$1 = map__14054__$1;
var x = cljs.core.get.call(null,map__14054__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__14054__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__14054__$1,new cljs.core.Keyword(null,"value","value",305978217));
var size = cljs.core.get.call(null,map__14054__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var active_QMARK_ = cljs.core.get.call(null,map__14054__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var font = snakeweek.assets.get_asset.call(null,"ArcadeAlternate.ttf");
var G__14056_14057 = renderer;
G__14056_14057.textSize(size);

G__14056_14057.textFont(font);

G__14056_14057.textAlign(play_cljs.core.halign__GT_constant.call(null,renderer,new cljs.core.Keyword(null,"center","center",-748944368)),play_cljs.core.valign__GT_constant.call(null,renderer,new cljs.core.Keyword(null,"center","center",-748944368)));

G__14056_14057.text(value,x,y);


var bounds = font.textBounds(value,x,y);
var bx = bounds.x;
var by = bounds.y;
var bw = bounds.w;
var bh = bounds.h;
if(cljs.core.truth_(active_QMARK_)){
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,cljs.core.dissoc.call(null,play_cljs.core.update_opts.call(null,opts__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(bx - x),new cljs.core.Keyword(null,"y","y",-1757859776),(by - y)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"value","value",305978217)));
} else {
return null;
}
}));
snakeweek.drawing.draw_head = (function snakeweek$drawing$draw_head(p__14058){
var vec__14059 = p__14058;
var x = cljs.core.nth.call(null,vec__14059,(0),null);
var y = cljs.core.nth.call(null,vec__14059,(1),null);
var from = cljs.core.nth.call(null,vec__14059,(2),null);
var to = cljs.core.nth.call(null,vec__14059,(3),null);
var sprite = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("head-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,to))].join(''));
var vec__14062 = sprite.call(null,snakeweek.drawing.sprites);
var sx = cljs.core.nth.call(null,vec__14062,(0),null);
var sy = cljs.core.nth.call(null,vec__14062,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"swidth","swidth",-976864420),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sheight","sheight",1322250621),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sx","sx",-403071592),sx,new cljs.core.Keyword(null,"sy","sy",227523849),sy,new cljs.core.Keyword(null,"value","value",305978217),snakeweek.assets.get_asset.call(null,"spritesheet.png")], null)], null);
});
snakeweek.drawing.draw_tail = (function snakeweek$drawing$draw_tail(p__14065){
var vec__14066 = p__14065;
var x = cljs.core.nth.call(null,vec__14066,(0),null);
var y = cljs.core.nth.call(null,vec__14066,(1),null);
var from = cljs.core.nth.call(null,vec__14066,(2),null);
var to = cljs.core.nth.call(null,vec__14066,(3),null);
var sprite = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("tail-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,to))].join(''));
var vec__14069 = sprite.call(null,snakeweek.drawing.sprites);
var sx = cljs.core.nth.call(null,vec__14069,(0),null);
var sy = cljs.core.nth.call(null,vec__14069,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"swidth","swidth",-976864420),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sheight","sheight",1322250621),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sx","sx",-403071592),sx,new cljs.core.Keyword(null,"sy","sy",227523849),sy,new cljs.core.Keyword(null,"value","value",305978217),snakeweek.assets.get_asset.call(null,"spritesheet.png")], null)], null);
});
snakeweek.drawing.draw_cell = (function snakeweek$drawing$draw_cell(p__14072){
var vec__14073 = p__14072;
var x = cljs.core.nth.call(null,vec__14073,(0),null);
var y = cljs.core.nth.call(null,vec__14073,(1),null);
var from = cljs.core.nth.call(null,vec__14073,(2),null);
var to = cljs.core.nth.call(null,vec__14073,(3),null);
var vec__14076 = snakeweek.drawing.get_orientation.call(null,from,to).call(null,snakeweek.drawing.sprites);
var sx = cljs.core.nth.call(null,vec__14076,(0),null);
var sy = cljs.core.nth.call(null,vec__14076,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"swidth","swidth",-976864420),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sheight","sheight",1322250621),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sx","sx",-403071592),sx,new cljs.core.Keyword(null,"sy","sy",227523849),sy,new cljs.core.Keyword(null,"value","value",305978217),snakeweek.assets.get_asset.call(null,"spritesheet.png")], null)], null)], null);
});
snakeweek.drawing.draw_food = (function snakeweek$drawing$draw_food(p__14079){
var vec__14080 = p__14079;
var x = cljs.core.nth.call(null,vec__14080,(0),null);
var y = cljs.core.nth.call(null,vec__14080,(1),null);
var ttl = cljs.core.nth.call(null,vec__14080,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"width","width",-384071477),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"height","height",1025178622),snakeweek.drawing.UNIT], null)], null)], null);
});
snakeweek.drawing.draw_background = (function snakeweek$drawing$draw_background(color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),window.innerWidth,new cljs.core.Keyword(null,"height","height",1025178622),window.innerHeight], null)], null)], null);
});
snakeweek.drawing.draw_board = (function snakeweek$drawing$draw_board(p__14083){
var map__14084 = p__14083;
var map__14084__$1 = ((((!((map__14084 == null)))?((((map__14084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14084):map__14084);
var width = cljs.core.get.call(null,map__14084__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__14084__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"width","width",-384071477),((2) + (width * snakeweek.drawing.UNIT)),new cljs.core.Keyword(null,"height","height",1025178622),((2) + (height * snakeweek.drawing.UNIT))], null)], null)], null)], null);
});
snakeweek.drawing.draw_score = (function snakeweek$drawing$draw_score(p__14086){
var map__14087 = p__14086;
var map__14087__$1 = ((((!((map__14087 == null)))?((((map__14087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14087):map__14087);
var score = cljs.core.get.call(null,map__14087__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var height = cljs.core.get.call(null,map__14087__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Score: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),((20) + (height * snakeweek.drawing.UNIT)),new cljs.core.Keyword(null,"font","font",-1506159249),snakeweek.assets.get_asset.call(null,"ArcadeAlternate.ttf"),new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)], null)], null);
});
cljs.core.PersistentArrayMap.EMPTY;
snakeweek.drawing.draw_hud = (function snakeweek$drawing$draw_hud(p__14089){
var map__14090 = p__14089;
var map__14090__$1 = ((((!((map__14090 == null)))?((((map__14090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14090):map__14090);
var state = map__14090__$1;
var paused = cljs.core.get.call(null,map__14090__$1,new cljs.core.Keyword(null,"paused","paused",-1710376127));
var width = cljs.core.get.call(null,map__14090__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__14090__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(paused)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),"PAUSED",new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"font","font",-1506159249),snakeweek.assets.get_asset.call(null,"ArcadeAlternate.ttf"),new cljs.core.Keyword(null,"x","x",2099068185),(((snakeweek.drawing.UNIT * width) / (2)) - (40)),new cljs.core.Keyword(null,"y","y",-1757859776),((snakeweek.drawing.UNIT * height) / (2))], null)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
snakeweek.drawing.draw_walls = (function snakeweek$drawing$draw_walls(wall_coords){
var iter__8074__auto__ = (function snakeweek$drawing$draw_walls_$_iter__14092(s__14093){
return (new cljs.core.LazySeq(null,(function (){
var s__14093__$1 = s__14093;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14093__$1);
if(temp__4657__auto__){
var s__14093__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14093__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__14093__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__14095 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__14094 = (0);
while(true){
if((i__14094 < size__8073__auto__)){
var vec__14096 = cljs.core._nth.call(null,c__8072__auto__,i__14094);
var x = cljs.core.nth.call(null,vec__14096,(0),null);
var y = cljs.core.nth.call(null,vec__14096,(1),null);
cljs.core.chunk_append.call(null,b__14095,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"value","value",305978217),snakeweek.assets.get_asset.call(null,"wall.png"),new cljs.core.Keyword(null,"width","width",-384071477),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"height","height",1025178622),snakeweek.drawing.UNIT], null)], null)], null));

var G__14102 = (i__14094 + (1));
i__14094 = G__14102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14095),snakeweek$drawing$draw_walls_$_iter__14092.call(null,cljs.core.chunk_rest.call(null,s__14093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14095),null);
}
} else {
var vec__14099 = cljs.core.first.call(null,s__14093__$2);
var x = cljs.core.nth.call(null,vec__14099,(0),null);
var y = cljs.core.nth.call(null,vec__14099,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"value","value",305978217),snakeweek.assets.get_asset.call(null,"wall.png"),new cljs.core.Keyword(null,"width","width",-384071477),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"height","height",1025178622),snakeweek.drawing.UNIT], null)], null)], null),snakeweek$drawing$draw_walls_$_iter__14092.call(null,cljs.core.rest.call(null,s__14093__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8074__auto__.call(null,wall_coords);
});
snakeweek.drawing.draw_credits = (function snakeweek$drawing$draw_credits(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(window.innerWidth / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"font","font",-1506159249),snakeweek.assets.get_asset.call(null,"ArcadeAlternate.ttf"),new cljs.core.Keyword(null,"size","size",1098693007),(18),new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"width","width",-384071477),(300)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-smooth","no-smooth",-1363327849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(-150),new cljs.core.Keyword(null,"y","y",-1757859776),(20),new cljs.core.Keyword(null,"name","name",1843675177),"logo.png",new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(90)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"x","x",2099068185),(-10),new cljs.core.Keyword(null,"y","y",-1757859776),(170)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"value","value",305978217),"Programming:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(40),new cljs.core.Keyword(null,"value","value",305978217),"Graphics:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(80),new cljs.core.Keyword(null,"value","value",305978217),"Music:"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(170)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"value","value",305978217),"Freddy"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(40),new cljs.core.Keyword(null,"value","value",305978217),"Freddy"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(80),new cljs.core.Keyword(null,"value","value",305978217),"Freddy"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"x","x",2099068185),(-20),new cljs.core.Keyword(null,"y","y",-1757859776),(320),new cljs.core.Keyword(null,"value","value",305978217),"Press any key to go back"], null)], null)], null)], null);
});
snakeweek.drawing.create_menu = (function snakeweek$drawing$create_menu(ct,x,y,items,active_id){
snakeweek.drawing.active_QMARK_ = (function snakeweek$drawing$create_menu_$_active_QMARK_(i){
return cljs.core._EQ_.call(null,active_id,i);
});

var frame = cljs.core.mod.call(null,((ct / (100)) | (0)),(5));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0)], null),(function (){var iter__8074__auto__ = ((function (frame){
return (function snakeweek$drawing$create_menu_$_iter__14103(s__14104){
return (new cljs.core.LazySeq(null,((function (frame){
return (function (){
var s__14104__$1 = s__14104;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14104__$1);
if(temp__4657__auto__){
var s__14104__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14104__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__14104__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__14106 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__14105 = (0);
while(true){
if((i__14105 < size__8073__auto__)){
var vec__14107 = cljs.core._nth.call(null,c__8072__auto__,i__14105);
var i = cljs.core.nth.call(null,vec__14107,(0),null);
var item = cljs.core.nth.call(null,vec__14107,(1),null);
cljs.core.chunk_append.call(null,b__14106,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(snakeweek.drawing.active_QMARK_.call(null,i))?"white":"#666")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-entry","menu-entry",-1135924402),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),item,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(i * (30)),new cljs.core.Keyword(null,"size","size",1098693007),(18),new cljs.core.Keyword(null,"active?","active?",459499776),snakeweek.drawing.active_QMARK_.call(null,i)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-smooth","no-smooth",-1363327849),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(100)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(0),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(5),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(10),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(15),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(20),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null)], null)], null)], null)], null));

var G__14113 = (i__14105 + (1));
i__14105 = G__14113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14106),snakeweek$drawing$create_menu_$_iter__14103.call(null,cljs.core.chunk_rest.call(null,s__14104__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14106),null);
}
} else {
var vec__14110 = cljs.core.first.call(null,s__14104__$2);
var i = cljs.core.nth.call(null,vec__14110,(0),null);
var item = cljs.core.nth.call(null,vec__14110,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(snakeweek.drawing.active_QMARK_.call(null,i))?"white":"#666")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-entry","menu-entry",-1135924402),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),item,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(i * (30)),new cljs.core.Keyword(null,"size","size",1098693007),(18),new cljs.core.Keyword(null,"active?","active?",459499776),snakeweek.drawing.active_QMARK_.call(null,i)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-smooth","no-smooth",-1363327849),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(100)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(0),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(5),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(10),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(15),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(20),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null)], null)], null)], null)], null),snakeweek$drawing$create_menu_$_iter__14103.call(null,cljs.core.rest.call(null,s__14104__$2)));
}
} else {
return null;
}
break;
}
});})(frame))
,null,null));
});})(frame))
;
return iter__8074__auto__.call(null,cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,items)));
})()], null);
});

//# sourceMappingURL=drawing.js.map