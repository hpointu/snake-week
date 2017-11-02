// Compiled by ClojureScript 1.9.671 {}
goog.provide('snakeweek.core');
goog.require('cljs.core');
goog.require('play_cljs.core');
goog.require('cljs.core.async');
goog.require('snakeweek.assets');
goog.require('snakeweek.maps');
goog.require('snakeweek.drawing');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof snakeweek.core.game !== 'undefined'){
} else {
snakeweek.core.game = play_cljs.core.create_game.call(null,window.innerWidth,window.innerHeight);
}
if(typeof snakeweek.core.state !== 'undefined'){
} else {
snakeweek.core.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof snakeweek.core.pressed_keys !== 'undefined'){
} else {
snakeweek.core.pressed_keys = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
}
if(typeof snakeweek.core.menu_screen_atom !== 'undefined'){
} else {
snakeweek.core.menu_screen_atom = cljs.core.atom.call(null,null);
}
if(typeof snakeweek.core.levels !== 'undefined'){
} else {
snakeweek.core.levels = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
snakeweek.core.coords_EQ_ = (function snakeweek$core$coords_EQ_(p__14229,p__14230){
var vec__14231 = p__14229;
var x = cljs.core.nth.call(null,vec__14231,(0),null);
var y = cljs.core.nth.call(null,vec__14231,(1),null);
var vec__14234 = p__14230;
var fx = cljs.core.nth.call(null,vec__14234,(0),null);
var fy = cljs.core.nth.call(null,vec__14234,(1),null);
return (cljs.core._EQ_.call(null,x,fx)) && (cljs.core._EQ_.call(null,y,fy));
});
snakeweek.core.update_snake = (function snakeweek$core$update_snake(p__14237){
var map__14238 = p__14237;
var map__14238__$1 = ((((!((map__14238 == null)))?((((map__14238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14238):map__14238);
var snake = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var dir = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var level = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"level","level",1290497552));
snakeweek.core.adjust = ((function (map__14238,map__14238__$1,snake,dir,level){
return (function snakeweek$core$update_snake_$_adjust(p__14240){
var vec__14241 = p__14240;
var x = cljs.core.nth.call(null,vec__14241,(0),null);
var y = cljs.core.nth.call(null,vec__14241,(1),null);
var from = cljs.core.nth.call(null,vec__14241,(2),null);
var to = cljs.core.nth.call(null,vec__14241,(3),null);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level);
var x__$1 = (((x < (0)))?(width - (1)):(((x >= width))?(0):x
));
var y__$1 = (((y < (0)))?(height - (1)):(((y >= height))?(0):y
));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1,from,to], null);
});})(map__14238,map__14238__$1,snake,dir,level))
;

snakeweek.core.update_head = ((function (map__14238,map__14238__$1,snake,dir,level){
return (function snakeweek$core$update_snake_$_update_head(p__14244){
var vec__14245 = p__14244;
var x = cljs.core.nth.call(null,vec__14245,(0),null);
var y = cljs.core.nth.call(null,vec__14245,(1),null);
var from = cljs.core.nth.call(null,vec__14245,(2),null);
var to = cljs.core.nth.call(null,vec__14245,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,to,dir], null);
});})(map__14238,map__14238__$1,snake,dir,level))
;

snakeweek.core.new_head = ((function (map__14238,map__14238__$1,snake,dir,level){
return (function snakeweek$core$update_snake_$_new_head(p__14248){
var vec__14249 = p__14248;
var x = cljs.core.nth.call(null,vec__14249,(0),null);
var y = cljs.core.nth.call(null,vec__14249,(1),null);
var prev_from = cljs.core.nth.call(null,vec__14249,(2),null);
var prev_to = cljs.core.nth.call(null,vec__14249,(3),null);
var G__14252 = dir;
var G__14252__$1 = (((G__14252 instanceof cljs.core.Keyword))?G__14252.fqn:null);
switch (G__14252__$1) {
case "north":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),prev_to,dir], null);

break;
case "east":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,prev_to,dir], null);

break;
case "south":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),prev_to,dir], null);

break;
case "west":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,prev_to,dir], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14252__$1)].join('')));

}
});})(map__14238,map__14238__$1,snake,dir,level))
;

var vec__14253 = snake;
var seq__14254 = cljs.core.seq.call(null,vec__14253);
var first__14255 = cljs.core.first.call(null,seq__14254);
var seq__14254__$1 = cljs.core.next.call(null,seq__14254);
var head = first__14255;
var tail = seq__14254__$1;
return cljs.core.cons.call(null,snakeweek.core.adjust.call(null,snakeweek.core.new_head.call(null,head)),cljs.core.drop_last.call(null,cljs.core.cons.call(null,snakeweek.core.update_head.call(null,head),tail)));
});
snakeweek.core.die = (function snakeweek$core$die(p__14259){
var map__14260 = p__14259;
var map__14260__$1 = ((((!((map__14260 == null)))?((((map__14260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14260):map__14260);
var state = map__14260__$1;
var snake = cljs.core.get.call(null,map__14260__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var walls = cljs.core.get.call(null,map__14260__$1,new cljs.core.Keyword(null,"walls","walls",-268788818));
var vec__14262 = snake;
var seq__14263 = cljs.core.seq.call(null,vec__14262);
var first__14264 = cljs.core.first.call(null,seq__14263);
var seq__14263__$1 = cljs.core.next.call(null,seq__14263);
var head = first__14264;
var tail = seq__14263__$1;
if(cljs.core.truth_((function (){var or__7285__auto__ = cljs.core.some.call(null,((function (vec__14262,seq__14263,first__14264,seq__14263__$1,head,tail,map__14260,map__14260__$1,state,snake,walls){
return (function (p1__14257_SHARP_){
return snakeweek.core.coords_EQ_.call(null,head,p1__14257_SHARP_);
});})(vec__14262,seq__14263,first__14264,seq__14263__$1,head,tail,map__14260,map__14260__$1,state,snake,walls))
,tail);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return cljs.core.some.call(null,((function (or__7285__auto__,vec__14262,seq__14263,first__14264,seq__14263__$1,head,tail,map__14260,map__14260__$1,state,snake,walls){
return (function (p1__14258_SHARP_){
return snakeweek.core.coords_EQ_.call(null,head,p1__14258_SHARP_);
});})(or__7285__auto__,vec__14262,seq__14263,first__14264,seq__14263__$1,head,tail,map__14260,map__14260__$1,state,snake,walls))
,walls);
}
})())){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dead","dead",-1946604091),true);
} else {
return state;
}
});
snakeweek.core.grow = (function snakeweek$core$grow(snake){
var tail = cljs.core.last.call(null,snake);
return cljs.core.conj.call(null,cljs.core.vec.call(null,snake),tail);
});
snakeweek.core.get_age = (function snakeweek$core$get_age(p__14265,current_time){
var vec__14266 = p__14265;
var _ = cljs.core.nth.call(null,vec__14266,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14266,(1),null);
var birth = cljs.core.nth.call(null,vec__14266,(2),null);
return (current_time - birth);
});
snakeweek.core.spawn_food = (function snakeweek$core$spawn_food(p__14271){
var map__14272 = p__14271;
var map__14272__$1 = ((((!((map__14272 == null)))?((((map__14272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14272):map__14272);
var state = map__14272__$1;
var width = cljs.core.get.call(null,map__14272__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__14272__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var current_time = cljs.core.get.call(null,map__14272__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var snake = cljs.core.get.call(null,map__14272__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var walls = cljs.core.get.call(null,map__14272__$1,new cljs.core.Keyword(null,"walls","walls",-268788818));
var x = cljs.core.rand_int.call(null,width);
var y = cljs.core.rand_int.call(null,height);
if(cljs.core.truth_((function (){var or__7285__auto__ = cljs.core.some.call(null,((function (x,y,map__14272,map__14272__$1,state,width,height,current_time,snake,walls){
return (function (p1__14269_SHARP_){
return snakeweek.core.coords_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p1__14269_SHARP_);
});})(x,y,map__14272,map__14272__$1,state,width,height,current_time,snake,walls))
,walls);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return cljs.core.some.call(null,((function (or__7285__auto__,x,y,map__14272,map__14272__$1,state,width,height,current_time,snake,walls){
return (function (p1__14270_SHARP_){
return snakeweek.core.coords_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p1__14270_SHARP_);
});})(or__7285__auto__,x,y,map__14272,map__14272__$1,state,width,height,current_time,snake,walls))
,snake);
}
})())){
return snakeweek.core.spawn_food.call(null,state);
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"food","food",1842183121),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,current_time], null),new cljs.core.Keyword(null,"last-spawn","last-spawn",-397719714),current_time);
}
});
snakeweek.core.get_score = (function snakeweek$core$get_score(age){
return ((((1000) + ((6000) - age)) / (10)) | (0));
});
snakeweek.core.eat_food = (function snakeweek$core$eat_food(p__14275){
var map__14276 = p__14275;
var map__14276__$1 = ((((!((map__14276 == null)))?((((map__14276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14276):map__14276);
var state = map__14276__$1;
var snake = cljs.core.get.call(null,map__14276__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var head = cljs.core.get.call(null,map__14276__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var food = cljs.core.get.call(null,map__14276__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var current_time = cljs.core.get.call(null,map__14276__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var width = cljs.core.get.call(null,map__14276__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__14276__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var head__$1 = cljs.core.first.call(null,snake);
if(cljs.core.truth_(snakeweek.core.coords_EQ_.call(null,head__$1,food))){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,snakeweek.core.spawn_food.call(null,state),new cljs.core.Keyword(null,"snake","snake",-244377242),snakeweek.core.grow),new cljs.core.Keyword(null,"speed","speed",1257663751),((function (head__$1,map__14276,map__14276__$1,state,snake,head,food,current_time,width,height){
return (function (p1__14274_SHARP_){
var x__7621__auto__ = (p1__14274_SHARP_ - (1));
var y__7622__auto__ = (5);
return ((x__7621__auto__ > y__7622__auto__) ? x__7621__auto__ : y__7622__auto__);
});})(head__$1,map__14276,map__14276__$1,state,snake,head,food,current_time,width,height))
),new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,snakeweek.core.get_score.call(null,snakeweek.core.get_age.call(null,food,current_time)));
} else {
return state;
}
});
snakeweek.core.move_snake = (function snakeweek$core$move_snake(p__14278){
var map__14279 = p__14278;
var map__14279__$1 = ((((!((map__14279 == null)))?((((map__14279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14279):map__14279);
var state = map__14279__$1;
var snake = cljs.core.get.call(null,map__14279__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var dir = cljs.core.get.call(null,map__14279__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var last_move = cljs.core.get.call(null,map__14279__$1,new cljs.core.Keyword(null,"last-move","last-move",2069214404));
var current_time = cljs.core.get.call(null,map__14279__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var speed = cljs.core.get.call(null,map__14279__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
if(((current_time - last_move) > speed)){
var new$ = snakeweek.core.update_snake.call(null,state);
return snakeweek.core.eat_food.call(null,snakeweek.core.die.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"snake","snake",-244377242),new$,new cljs.core.Keyword(null,"last-move","last-move",2069214404),current_time)));
} else {
return state;
}
});
snakeweek.core.handle_input = (function snakeweek$core$handle_input(state){
var keys = cljs.core.deref.call(null,snakeweek.core.pressed_keys);
var dir = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(state);
var change_dir = ((function (keys,dir){
return (function (p1__14281_SHARP_){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dir","dir",1734754661),p1__14281_SHARP_);
});})(keys,dir))
;
if((cljs.core.contains_QMARK_.call(null,keys,(37))) && (cljs.core.not_EQ_.call(null,dir,new cljs.core.Keyword(null,"east","east",1189821678)))){
return change_dir.call(null,new cljs.core.Keyword(null,"west","west",708776677));
} else {
if((cljs.core.contains_QMARK_.call(null,keys,(38))) && (cljs.core.not_EQ_.call(null,dir,new cljs.core.Keyword(null,"south","south",1586796293)))){
return change_dir.call(null,new cljs.core.Keyword(null,"north","north",651323902));
} else {
if((cljs.core.contains_QMARK_.call(null,keys,(39))) && (cljs.core.not_EQ_.call(null,dir,new cljs.core.Keyword(null,"west","west",708776677)))){
return change_dir.call(null,new cljs.core.Keyword(null,"east","east",1189821678));
} else {
if((cljs.core.contains_QMARK_.call(null,keys,(40))) && (cljs.core.not_EQ_.call(null,dir,new cljs.core.Keyword(null,"north","north",651323902)))){
return change_dir.call(null,new cljs.core.Keyword(null,"south","south",1586796293));
} else {
return state;

}
}
}
}
});
snakeweek.core.update_food = (function snakeweek$core$update_food(p__14282,ttl){
var map__14283 = p__14282;
var map__14283__$1 = ((((!((map__14283 == null)))?((((map__14283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14283):map__14283);
var state = map__14283__$1;
var food = cljs.core.get.call(null,map__14283__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var current_time = cljs.core.get.call(null,map__14283__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var width = cljs.core.get.call(null,map__14283__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__14283__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vec__14285 = food;
var x = cljs.core.nth.call(null,vec__14285,(0),null);
var y = cljs.core.nth.call(null,vec__14285,(1),null);
var birth = cljs.core.nth.call(null,vec__14285,(2),null);
if((snakeweek.core.get_age.call(null,food,current_time) > ttl)){
return snakeweek.core.spawn_food.call(null,state);
} else {
return state;
}
});
snakeweek.core.update_game = (function snakeweek$core$update_game(p__14288,delta){
var map__14289 = p__14288;
var map__14289__$1 = ((((!((map__14289 == null)))?((((map__14289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14289):map__14289);
var state = map__14289__$1;
var dead = cljs.core.get.call(null,map__14289__$1,new cljs.core.Keyword(null,"dead","dead",-1946604091));
var paused = cljs.core.get.call(null,map__14289__$1,new cljs.core.Keyword(null,"paused","paused",-1710376127));
if(cljs.core.truth_((function (){var or__7285__auto__ = dead;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return paused;
}
})())){
return state;
} else {
return snakeweek.core.move_snake.call(null,snakeweek.core.update_food.call(null,snakeweek.core.handle_input.call(null,state),(10000)));
}
});
snakeweek.core.init_state_BANG_ = (function snakeweek$core$init_state_BANG_(level){
var ct = play_cljs.core.get_total_time.call(null,snakeweek.core.game);
return cljs.core.reset_BANG_.call(null,snakeweek.core.state,cljs.core.into.call(null,level,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"current-time","current-time",-1609407134),new cljs.core.Keyword(null,"last-move","last-move",2069214404),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"last-spawn","last-spawn",-397719714)],[false,ct,ct,new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(3),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"east","east",1189821678)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"east","east",1189821678)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"east","east",1189821678)], null)], null),(80),level,(0),ct])));
});
snakeweek.core.new_game_BANG_ = (function snakeweek$core$new_game_BANG_(level){
cljs.core.reset_BANG_.call(null,snakeweek.core.pressed_keys,cljs.core.PersistentHashSet.EMPTY);

snakeweek.core.init_state_BANG_.call(null,level);

cljs.core.println.call(null,"NEW GAME!");

return cljs.core.swap_BANG_.call(null,snakeweek.core.state,snakeweek.core.spawn_food);
});
snakeweek.core.on_key_down = (function snakeweek$core$on_key_down(state,key_code){
if(cljs.core._EQ_.call(null,key_code,(32))){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"paused","paused",-1710376127),cljs.core.not);
} else {
return state;
}
});
snakeweek.core.on_key_up = (function snakeweek$core$on_key_up(state,key_code){
return state;
});
snakeweek.core.main_screen = (function (){
if(typeof snakeweek.core.t_snakeweek$core14291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
snakeweek.core.t_snakeweek$core14291 = (function (meta14292){
this.meta14292 = meta14292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
snakeweek.core.t_snakeweek$core14291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14293,meta14292__$1){
var self__ = this;
var _14293__$1 = this;
return (new snakeweek.core.t_snakeweek$core14291(meta14292__$1));
});

snakeweek.core.t_snakeweek$core14291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14293){
var self__ = this;
var _14293__$1 = this;
return self__.meta14292;
});

snakeweek.core.t_snakeweek$core14291.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

snakeweek.core.t_snakeweek$core14291.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__14294_14298 = window;
goog.events.removeAll(G__14294_14298,"keydown");

goog.events.removeAll(G__14294_14298,"keyup");

goog.events.listen(G__14294_14298,"keydown",((function (G__14294_14298,this$__$1){
return (function (e){
cljs.core.swap_BANG_.call(null,snakeweek.core.state,snakeweek.core.on_key_down,e.keyCode);

return cljs.core.swap_BANG_.call(null,snakeweek.core.pressed_keys,cljs.core.conj,e.keyCode);
});})(G__14294_14298,this$__$1))
);

goog.events.listen(G__14294_14298,"keyup",((function (G__14294_14298,this$__$1){
return (function (e){
cljs.core.swap_BANG_.call(null,snakeweek.core.state,snakeweek.core.on_key_up,e.keyCode);

return cljs.core.swap_BANG_.call(null,snakeweek.core.pressed_keys,cljs.core.disj,e.keyCode);
});})(G__14294_14298,this$__$1))
);


snakeweek.core.new_game_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,snakeweek.core.levels),(0)));

return snakeweek.assets.get_asset.call(null,"snake.mp3").play();
});

snakeweek.core.t_snakeweek$core14291.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return snakeweek.assets.get_asset.call(null,"snake.mp3").stop();
});

snakeweek.core.t_snakeweek$core14291.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,snakeweek.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-time","current-time",-1609407134),play_cljs.core.get_total_time.call(null,snakeweek.core.game));

cljs.core.swap_BANG_.call(null,snakeweek.core.state,snakeweek.core.update_game,play_cljs.core.get_delta_time.call(null,snakeweek.core.game));

if(cljs.core.truth_(new cljs.core.Keyword(null,"dead","dead",-1946604091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snakeweek.core.state)))){
play_cljs.core.set_screen.call(null,snakeweek.core.game,cljs.core.deref.call(null,snakeweek.core.menu_screen_atom));
} else {
}

return play_cljs.core.render.call(null,snakeweek.core.game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snakeweek.drawing.draw_background.call(null,"#000"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((play_cljs.core.get_width.call(null,snakeweek.core.game) / (2)) - ((snakeweek.drawing.UNIT * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snakeweek.core.state))) / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),snakeweek.drawing.draw_board.call(null,cljs.core.deref.call(null,snakeweek.core.state)),snakeweek.drawing.draw_score.call(null,cljs.core.deref.call(null,snakeweek.core.state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-smooth","no-smooth",-1363327849),(function (){var vec__14295 = new cljs.core.Keyword(null,"snake","snake",-244377242).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snakeweek.core.state));
var seq__14296 = cljs.core.seq.call(null,vec__14295);
var first__14297 = cljs.core.first.call(null,seq__14296);
var seq__14296__$1 = cljs.core.next.call(null,seq__14296);
var head = first__14297;
var tail = seq__14296__$1;
var body = cljs.core.butlast.call(null,tail);
var tail__$1 = cljs.core.last.call(null,tail);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,snakeweek.drawing.draw_cell,body),snakeweek.drawing.draw_tail.call(null,tail__$1),snakeweek.drawing.draw_head.call(null,head)], null);
})()], null),(function (){var food = new cljs.core.Keyword(null,"food","food",1842183121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snakeweek.core.state));
if(cljs.core.truth_(food)){
return snakeweek.drawing.draw_food.call(null,food);
} else {
return null;
}
})(),snakeweek.drawing.draw_hud.call(null,cljs.core.deref.call(null,snakeweek.core.state)),snakeweek.drawing.draw_walls.call(null,new cljs.core.Keyword(null,"walls","walls",-268788818).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snakeweek.core.state)))], null)], null));
});

snakeweek.core.t_snakeweek$core14291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta14292","meta14292",1083237550,null)], null);
});

snakeweek.core.t_snakeweek$core14291.cljs$lang$type = true;

snakeweek.core.t_snakeweek$core14291.cljs$lang$ctorStr = "snakeweek.core/t_snakeweek$core14291";

snakeweek.core.t_snakeweek$core14291.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"snakeweek.core/t_snakeweek$core14291");
});

snakeweek.core.__GT_t_snakeweek$core14291 = (function snakeweek$core$__GT_t_snakeweek$core14291(meta14292){
return (new snakeweek.core.t_snakeweek$core14291(meta14292));
});

}

return (new snakeweek.core.t_snakeweek$core14291(cljs.core.PersistentArrayMap.EMPTY));
})()
;
snakeweek.core.credits_screen = (function (){
if(typeof snakeweek.core.t_snakeweek$core14299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
snakeweek.core.t_snakeweek$core14299 = (function (meta14300){
this.meta14300 = meta14300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
snakeweek.core.t_snakeweek$core14299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14301,meta14300__$1){
var self__ = this;
var _14301__$1 = this;
return (new snakeweek.core.t_snakeweek$core14299(meta14300__$1));
});

snakeweek.core.t_snakeweek$core14299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14301){
var self__ = this;
var _14301__$1 = this;
return self__.meta14300;
});

snakeweek.core.t_snakeweek$core14299.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

snakeweek.core.t_snakeweek$core14299.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
goog.events.removeAll(window,"keydown");

goog.events.removeAll(window,"keyup");

return goog.events.listen(window,"keydown",((function (this$__$1){
return (function (){
return play_cljs.core.set_screen.call(null,snakeweek.core.game,cljs.core.deref.call(null,snakeweek.core.menu_screen_atom));
});})(this$__$1))
);
});

snakeweek.core.t_snakeweek$core14299.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var i = cljs.core.mod.call(null,((play_cljs.core.get_total_time.call(null,snakeweek.core.game) / (100)) | (0)),(5));
return play_cljs.core.render.call(null,snakeweek.core.game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snakeweek.drawing.draw_background.call(null,"#000"),snakeweek.drawing.draw_credits.call(null)], null));
});

snakeweek.core.t_snakeweek$core14299.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

snakeweek.core.t_snakeweek$core14299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta14300","meta14300",1332363833,null)], null);
});

snakeweek.core.t_snakeweek$core14299.cljs$lang$type = true;

snakeweek.core.t_snakeweek$core14299.cljs$lang$ctorStr = "snakeweek.core/t_snakeweek$core14299";

snakeweek.core.t_snakeweek$core14299.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"snakeweek.core/t_snakeweek$core14299");
});

snakeweek.core.__GT_t_snakeweek$core14299 = (function snakeweek$core$__GT_t_snakeweek$core14299(meta14300){
return (new snakeweek.core.t_snakeweek$core14299(meta14300));
});

}

return (new snakeweek.core.t_snakeweek$core14299(cljs.core.PersistentArrayMap.EMPTY));
})()
;
snakeweek.core.loading_screen = (function (){
if(typeof snakeweek.core.t_snakeweek$core14302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
snakeweek.core.t_snakeweek$core14302 = (function (meta14303){
this.meta14303 = meta14303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
snakeweek.core.t_snakeweek$core14302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14304,meta14303__$1){
var self__ = this;
var _14304__$1 = this;
return (new snakeweek.core.t_snakeweek$core14302(meta14303__$1));
});

snakeweek.core.t_snakeweek$core14302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14304){
var self__ = this;
var _14304__$1 = this;
return self__.meta14303;
});

snakeweek.core.t_snakeweek$core14302.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

snakeweek.core.t_snakeweek$core14302.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

snakeweek.core.t_snakeweek$core14302.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var i = cljs.core.mod.call(null,((play_cljs.core.get_total_time.call(null,snakeweek.core.game) / (100)) | (0)),(5));
return play_cljs.core.render.call(null,snakeweek.core.game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snakeweek.drawing.draw_background.call(null,"#000"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(window.innerWidth / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"Loading...",new cljs.core.Keyword(null,"size","size",1098693007),(25),new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null)], null)], null));
});

snakeweek.core.t_snakeweek$core14302.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

snakeweek.core.t_snakeweek$core14302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta14303","meta14303",69328536,null)], null);
});

snakeweek.core.t_snakeweek$core14302.cljs$lang$type = true;

snakeweek.core.t_snakeweek$core14302.cljs$lang$ctorStr = "snakeweek.core/t_snakeweek$core14302";

snakeweek.core.t_snakeweek$core14302.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"snakeweek.core/t_snakeweek$core14302");
});

snakeweek.core.__GT_t_snakeweek$core14302 = (function snakeweek$core$__GT_t_snakeweek$core14302(meta14303){
return (new snakeweek.core.t_snakeweek$core14302(meta14303));
});

}

return (new snakeweek.core.t_snakeweek$core14302(cljs.core.PersistentArrayMap.EMPTY));
})()
;
snakeweek.core.maps_screen = (function (){
if(typeof snakeweek.core.t_snakeweek$core14305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
snakeweek.core.t_snakeweek$core14305 = (function (meta14306){
this.meta14306 = meta14306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
snakeweek.core.t_snakeweek$core14305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14307,meta14306__$1){
var self__ = this;
var _14307__$1 = this;
return (new snakeweek.core.t_snakeweek$core14305(meta14306__$1));
});

snakeweek.core.t_snakeweek$core14305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14307){
var self__ = this;
var _14307__$1 = this;
return self__.meta14306;
});

snakeweek.core.t_snakeweek$core14305.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

snakeweek.core.t_snakeweek$core14305.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

snakeweek.core.t_snakeweek$core14305.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.render.call(null,snakeweek.core.game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snakeweek.drawing.draw_background.call(null,"#000"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(window.innerWidth / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"Loading...",new cljs.core.Keyword(null,"size","size",1098693007),(25),new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null)], null)], null));
});

snakeweek.core.t_snakeweek$core14305.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

snakeweek.core.t_snakeweek$core14305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta14306","meta14306",-2049904376,null)], null);
});

snakeweek.core.t_snakeweek$core14305.cljs$lang$type = true;

snakeweek.core.t_snakeweek$core14305.cljs$lang$ctorStr = "snakeweek.core/t_snakeweek$core14305";

snakeweek.core.t_snakeweek$core14305.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"snakeweek.core/t_snakeweek$core14305");
});

snakeweek.core.__GT_t_snakeweek$core14305 = (function snakeweek$core$__GT_t_snakeweek$core14305(meta14306){
return (new snakeweek.core.t_snakeweek$core14305(meta14306));
});

}

return (new snakeweek.core.t_snakeweek$core14305(cljs.core.PersistentArrayMap.EMPTY));
})()
;
snakeweek.core.menu_screen = (function (){var active_id = cljs.core.atom.call(null,(0));
snakeweek.core.menu_action = ((function (active_id){
return (function snakeweek$core$menu_action(keycode){
var G__14309 = keycode;
switch (G__14309) {
case (38):
return cljs.core.reset_BANG_.call(null,active_id,(function (){var x__7621__auto__ = (0);
var y__7622__auto__ = (cljs.core.deref.call(null,active_id) - (1));
return ((x__7621__auto__ > y__7622__auto__) ? x__7621__auto__ : y__7622__auto__);
})());

break;
case (40):
return cljs.core.reset_BANG_.call(null,active_id,(function (){var x__7628__auto__ = (2);
var y__7629__auto__ = (cljs.core.deref.call(null,active_id) + (1));
return ((x__7628__auto__ < y__7629__auto__) ? x__7628__auto__ : y__7629__auto__);
})());

break;
case (13):
var G__14310 = cljs.core.deref.call(null,active_id);
switch (G__14310) {
case (0):
return play_cljs.core.set_screen.call(null,snakeweek.core.game,snakeweek.core.main_screen);

break;
case (2):
return play_cljs.core.set_screen.call(null,snakeweek.core.game,snakeweek.core.credits_screen);

break;
default:
return null;

}

break;
default:
return null;

}
});})(active_id))
;

if(typeof snakeweek.core.t_snakeweek$core14311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
snakeweek.core.t_snakeweek$core14311 = (function (active_id,meta14312){
this.active_id = active_id;
this.meta14312 = meta14312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
snakeweek.core.t_snakeweek$core14311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (active_id){
return (function (_14313,meta14312__$1){
var self__ = this;
var _14313__$1 = this;
return (new snakeweek.core.t_snakeweek$core14311(self__.active_id,meta14312__$1));
});})(active_id))
;

snakeweek.core.t_snakeweek$core14311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (active_id){
return (function (_14313){
var self__ = this;
var _14313__$1 = this;
return self__.meta14312;
});})(active_id))
;

snakeweek.core.t_snakeweek$core14311.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

snakeweek.core.t_snakeweek$core14311.prototype.play_cljs$core$Screen$on_show$arity$1 = ((function (active_id){
return (function (this$){
var self__ = this;
var this$__$1 = this;
goog.events.removeAll(window,"keydown");

goog.events.removeAll(window,"keyup");

return goog.events.listen(window,"keydown",((function (this$__$1,active_id){
return (function (p1__14308_SHARP_){
return snakeweek.core.menu_action.call(null,p1__14308_SHARP_.keyCode);
});})(this$__$1,active_id))
);
});})(active_id))
;

snakeweek.core.t_snakeweek$core14311.prototype.play_cljs$core$Screen$on_hide$arity$1 = ((function (active_id){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});})(active_id))
;

snakeweek.core.t_snakeweek$core14311.prototype.play_cljs$core$Screen$on_render$arity$1 = ((function (active_id){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.render.call(null,snakeweek.core.game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snakeweek.drawing.draw_background.call(null,"#000"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#000"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"x","x",2099068185),((play_cljs.core.get_width.call(null,snakeweek.core.game) / (2)) - (250)),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-smooth","no-smooth",-1363327849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"name","name",1843675177),"logo.png",new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(90)], null)], null),snakeweek.drawing.create_menu.call(null,play_cljs.core.get_total_time.call(null,snakeweek.core.game),(250),(150),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Game","View Scores","Credits"], null),cljs.core.deref.call(null,self__.active_id))], null)], null)], null)], null));
});})(active_id))
;

snakeweek.core.t_snakeweek$core14311.getBasis = ((function (active_id){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"active-id","active-id",1581292871,null),new cljs.core.Symbol(null,"meta14312","meta14312",-3659264,null)], null);
});})(active_id))
;

snakeweek.core.t_snakeweek$core14311.cljs$lang$type = true;

snakeweek.core.t_snakeweek$core14311.cljs$lang$ctorStr = "snakeweek.core/t_snakeweek$core14311";

snakeweek.core.t_snakeweek$core14311.cljs$lang$ctorPrWriter = ((function (active_id){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"snakeweek.core/t_snakeweek$core14311");
});})(active_id))
;

snakeweek.core.__GT_t_snakeweek$core14311 = ((function (active_id){
return (function snakeweek$core$__GT_t_snakeweek$core14311(active_id__$1,meta14312){
return (new snakeweek.core.t_snakeweek$core14311(active_id__$1,meta14312));
});})(active_id))
;

}

return (new snakeweek.core.t_snakeweek$core14311(active_id,cljs.core.PersistentArrayMap.EMPTY));
})();
play_cljs.core.start.call(null,snakeweek.core.game);

play_cljs.core.set_screen.call(null,snakeweek.core.game,snakeweek.core.loading_screen);

cljs.core.async.take_BANG_.call(null,snakeweek.assets.load_assets_BANG_.call(null,play_cljs.core.get_renderer.call(null,snakeweek.core.game)),(function (_){
cljs.core.reset_BANG_.call(null,snakeweek.core.menu_screen_atom,snakeweek.core.menu_screen);

play_cljs.core.set_screen.call(null,snakeweek.core.game,snakeweek.core.menu_screen);

return cljs.core.reset_BANG_.call(null,snakeweek.core.levels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snakeweek.maps.load_map.call(null,"maze.png")], null));
}));

//# sourceMappingURL=core.js.map