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
var vec__15511 = content;
var seq__15512 = cljs.core.seq.call(null,vec__15511);
var first__15513 = cljs.core.first.call(null,seq__15512);
var seq__15512__$1 = cljs.core.next.call(null,seq__15512);
var command = first__15513;
var children = seq__15512__$1;
renderer.push();

renderer.noSmooth();

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,parent_opts);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"menu-entry","menu-entry",-1135924402),(function (game,renderer,content,parent_opts){
var vec__15514 = content;
var seq__15515 = cljs.core.seq.call(null,vec__15514);
var first__15516 = cljs.core.first.call(null,seq__15515);
var seq__15515__$1 = cljs.core.next.call(null,seq__15515);
var command = first__15516;
var first__15516__$1 = cljs.core.first.call(null,seq__15515__$1);
var seq__15515__$2 = cljs.core.next.call(null,seq__15515__$1);
var opts = first__15516__$1;
var children = seq__15515__$2;
var map__15517 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.text_defaults);
var map__15517__$1 = ((((!((map__15517 == null)))?((((map__15517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15517):map__15517);
var opts__$1 = map__15517__$1;
var x = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"value","value",305978217));
var size = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var active_QMARK_ = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var font = snakeweek.assets.get_asset.call(null,"ArcadeAlternate.ttf");
var G__15519_15520 = renderer;
G__15519_15520.textSize(size);

G__15519_15520.textFont(font);

G__15519_15520.textAlign(play_cljs.core.halign__GT_constant.call(null,renderer,new cljs.core.Keyword(null,"center","center",-748944368)),play_cljs.core.valign__GT_constant.call(null,renderer,new cljs.core.Keyword(null,"center","center",-748944368)));

G__15519_15520.text(value,x,y);


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
snakeweek.drawing.draw_head = (function snakeweek$drawing$draw_head(p__15521){
var vec__15522 = p__15521;
var x = cljs.core.nth.call(null,vec__15522,(0),null);
var y = cljs.core.nth.call(null,vec__15522,(1),null);
var from = cljs.core.nth.call(null,vec__15522,(2),null);
var to = cljs.core.nth.call(null,vec__15522,(3),null);
var sprite = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("head-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,to))].join(''));
var vec__15525 = sprite.call(null,snakeweek.drawing.sprites);
var sx = cljs.core.nth.call(null,vec__15525,(0),null);
var sy = cljs.core.nth.call(null,vec__15525,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"swidth","swidth",-976864420),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sheight","sheight",1322250621),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sx","sx",-403071592),sx,new cljs.core.Keyword(null,"sy","sy",227523849),sy,new cljs.core.Keyword(null,"value","value",305978217),snakeweek.assets.get_asset.call(null,"spritesheet.png")], null)], null);
});
snakeweek.drawing.draw_tail = (function snakeweek$drawing$draw_tail(p__15528){
var vec__15529 = p__15528;
var x = cljs.core.nth.call(null,vec__15529,(0),null);
var y = cljs.core.nth.call(null,vec__15529,(1),null);
var from = cljs.core.nth.call(null,vec__15529,(2),null);
var to = cljs.core.nth.call(null,vec__15529,(3),null);
var sprite = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("tail-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,to))].join(''));
var vec__15532 = sprite.call(null,snakeweek.drawing.sprites);
var sx = cljs.core.nth.call(null,vec__15532,(0),null);
var sy = cljs.core.nth.call(null,vec__15532,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"swidth","swidth",-976864420),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sheight","sheight",1322250621),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sx","sx",-403071592),sx,new cljs.core.Keyword(null,"sy","sy",227523849),sy,new cljs.core.Keyword(null,"value","value",305978217),snakeweek.assets.get_asset.call(null,"spritesheet.png")], null)], null);
});
snakeweek.drawing.draw_cell = (function snakeweek$drawing$draw_cell(p__15535){
var vec__15536 = p__15535;
var x = cljs.core.nth.call(null,vec__15536,(0),null);
var y = cljs.core.nth.call(null,vec__15536,(1),null);
var from = cljs.core.nth.call(null,vec__15536,(2),null);
var to = cljs.core.nth.call(null,vec__15536,(3),null);
var vec__15539 = snakeweek.drawing.get_orientation.call(null,from,to).call(null,snakeweek.drawing.sprites);
var sx = cljs.core.nth.call(null,vec__15539,(0),null);
var sy = cljs.core.nth.call(null,vec__15539,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"swidth","swidth",-976864420),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sheight","sheight",1322250621),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"sx","sx",-403071592),sx,new cljs.core.Keyword(null,"sy","sy",227523849),sy,new cljs.core.Keyword(null,"value","value",305978217),snakeweek.assets.get_asset.call(null,"spritesheet.png")], null)], null)], null);
});
snakeweek.drawing.draw_food = (function snakeweek$drawing$draw_food(p__15542){
var vec__15543 = p__15542;
var x = cljs.core.nth.call(null,vec__15543,(0),null);
var y = cljs.core.nth.call(null,vec__15543,(1),null);
var ttl = cljs.core.nth.call(null,vec__15543,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"width","width",-384071477),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"height","height",1025178622),snakeweek.drawing.UNIT], null)], null)], null);
});
snakeweek.drawing.draw_background = (function snakeweek$drawing$draw_background(color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),window.innerWidth,new cljs.core.Keyword(null,"height","height",1025178622),window.innerHeight], null)], null)], null);
});
snakeweek.drawing.draw_board = (function snakeweek$drawing$draw_board(p__15546){
var map__15547 = p__15546;
var map__15547__$1 = ((((!((map__15547 == null)))?((((map__15547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15547):map__15547);
var width = cljs.core.get.call(null,map__15547__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__15547__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"width","width",-384071477),((2) + (width * snakeweek.drawing.UNIT)),new cljs.core.Keyword(null,"height","height",1025178622),((2) + (height * snakeweek.drawing.UNIT))], null)], null)], null)], null);
});
snakeweek.drawing.draw_score = (function snakeweek$drawing$draw_score(p__15549){
var map__15550 = p__15549;
var map__15550__$1 = ((((!((map__15550 == null)))?((((map__15550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15550):map__15550);
var score = cljs.core.get.call(null,map__15550__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var height = cljs.core.get.call(null,map__15550__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Score: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),((20) + (height * snakeweek.drawing.UNIT)),new cljs.core.Keyword(null,"font","font",-1506159249),snakeweek.assets.get_asset.call(null,"ArcadeAlternate.ttf"),new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)], null)], null);
});
cljs.core.PersistentArrayMap.EMPTY;
snakeweek.drawing.draw_hud = (function snakeweek$drawing$draw_hud(p__15552){
var map__15553 = p__15552;
var map__15553__$1 = ((((!((map__15553 == null)))?((((map__15553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15553):map__15553);
var state = map__15553__$1;
var paused = cljs.core.get.call(null,map__15553__$1,new cljs.core.Keyword(null,"paused","paused",-1710376127));
var width = cljs.core.get.call(null,map__15553__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__15553__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(paused)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),"PAUSED",new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"font","font",-1506159249),snakeweek.assets.get_asset.call(null,"ArcadeAlternate.ttf"),new cljs.core.Keyword(null,"x","x",2099068185),(((snakeweek.drawing.UNIT * width) / (2)) - (40)),new cljs.core.Keyword(null,"y","y",-1757859776),((snakeweek.drawing.UNIT * height) / (2))], null)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
snakeweek.drawing.draw_walls = (function snakeweek$drawing$draw_walls(wall_coords){
var iter__8074__auto__ = (function snakeweek$drawing$draw_walls_$_iter__15555(s__15556){
return (new cljs.core.LazySeq(null,(function (){
var s__15556__$1 = s__15556;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15556__$1);
if(temp__4657__auto__){
var s__15556__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15556__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__15556__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__15558 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__15557 = (0);
while(true){
if((i__15557 < size__8073__auto__)){
var vec__15559 = cljs.core._nth.call(null,c__8072__auto__,i__15557);
var x = cljs.core.nth.call(null,vec__15559,(0),null);
var y = cljs.core.nth.call(null,vec__15559,(1),null);
cljs.core.chunk_append.call(null,b__15558,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"value","value",305978217),snakeweek.assets.get_asset.call(null,"wall.png"),new cljs.core.Keyword(null,"width","width",-384071477),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"height","height",1025178622),snakeweek.drawing.UNIT], null)], null)], null));

var G__15565 = (i__15557 + (1));
i__15557 = G__15565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15558),snakeweek$drawing$draw_walls_$_iter__15555.call(null,cljs.core.chunk_rest.call(null,s__15556__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15558),null);
}
} else {
var vec__15562 = cljs.core.first.call(null,s__15556__$2);
var x = cljs.core.nth.call(null,vec__15562,(0),null);
var y = cljs.core.nth.call(null,vec__15562,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(snakeweek.drawing.UNIT * x),new cljs.core.Keyword(null,"y","y",-1757859776),(snakeweek.drawing.UNIT * y),new cljs.core.Keyword(null,"value","value",305978217),snakeweek.assets.get_asset.call(null,"wall.png"),new cljs.core.Keyword(null,"width","width",-384071477),snakeweek.drawing.UNIT,new cljs.core.Keyword(null,"height","height",1025178622),snakeweek.drawing.UNIT], null)], null)], null),snakeweek$drawing$draw_walls_$_iter__15555.call(null,cljs.core.rest.call(null,s__15556__$2)));
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
return (function snakeweek$drawing$create_menu_$_iter__15566(s__15567){
return (new cljs.core.LazySeq(null,((function (frame){
return (function (){
var s__15567__$1 = s__15567;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15567__$1);
if(temp__4657__auto__){
var s__15567__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15567__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__15567__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__15569 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__15568 = (0);
while(true){
if((i__15568 < size__8073__auto__)){
var vec__15570 = cljs.core._nth.call(null,c__8072__auto__,i__15568);
var i = cljs.core.nth.call(null,vec__15570,(0),null);
var item = cljs.core.nth.call(null,vec__15570,(1),null);
cljs.core.chunk_append.call(null,b__15569,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(snakeweek.drawing.active_QMARK_.call(null,i))?"white":"#666")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-entry","menu-entry",-1135924402),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),item,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(i * (30)),new cljs.core.Keyword(null,"size","size",1098693007),(18),new cljs.core.Keyword(null,"active?","active?",459499776),snakeweek.drawing.active_QMARK_.call(null,i)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-smooth","no-smooth",-1363327849),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(100)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(0),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(5),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(10),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(15),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(20),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null)], null)], null)], null)], null));

var G__15576 = (i__15568 + (1));
i__15568 = G__15576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15569),snakeweek$drawing$create_menu_$_iter__15566.call(null,cljs.core.chunk_rest.call(null,s__15567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15569),null);
}
} else {
var vec__15573 = cljs.core.first.call(null,s__15567__$2);
var i = cljs.core.nth.call(null,vec__15573,(0),null);
var item = cljs.core.nth.call(null,vec__15573,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(snakeweek.drawing.active_QMARK_.call(null,i))?"white":"#666")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-entry","menu-entry",-1135924402),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),item,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(i * (30)),new cljs.core.Keyword(null,"size","size",1098693007),(18),new cljs.core.Keyword(null,"active?","active?",459499776),snakeweek.drawing.active_QMARK_.call(null,i)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-smooth","no-smooth",-1363327849),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(100)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(0),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(5),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(10),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(15),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow.png",new cljs.core.Keyword(null,"x","x",2099068185),(-18),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"sx","sx",-403071592),(20),new cljs.core.Keyword(null,"swidth","swidth",-976864420),(5),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null)], null)], null)], null)], null),snakeweek$drawing$create_menu_$_iter__15566.call(null,cljs.core.rest.call(null,s__15567__$2)));
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
