// Compiled by ClojureScript 1.9.671 {}
goog.provide('snakeweek.assets');
goog.require('cljs.core');
goog.require('cljs.core.async');
snakeweek.assets.asset_names = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),"ArcadeAlternate.ttf"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sound","sound",-2127407070),"snake.mp3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),"empty.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),"box.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),"maze.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),"wall.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),"spritesheet.png"], null)], null);
snakeweek.assets.preloads = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
snakeweek.assets.assets = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
snakeweek.assets.load_image_BANG_ = (function snakeweek$assets$load_image_BANG_(renderer,name){
var loaded_QMARK_ = cljs.core.async.promise_chan.call(null);
cljs.core.swap_BANG_.call(null,snakeweek.assets.preloads,cljs.core.conj,loaded_QMARK_);

var object = renderer.loadImage(name,((function (loaded_QMARK_){
return (function (){
return cljs.core.async.put_BANG_.call(null,loaded_QMARK_,true);
});})(loaded_QMARK_))
);
return cljs.core.swap_BANG_.call(null,snakeweek.assets.assets,cljs.core.assoc,name,object);
});
snakeweek.assets.load_sound_BANG_ = (function snakeweek$assets$load_sound_BANG_(renderer,name){
var loaded_QMARK_ = cljs.core.async.promise_chan.call(null);
cljs.core.swap_BANG_.call(null,snakeweek.assets.preloads,cljs.core.conj,loaded_QMARK_);

var object = renderer.loadSound(name,((function (loaded_QMARK_){
return (function (){
return cljs.core.async.put_BANG_.call(null,loaded_QMARK_,true);
});})(loaded_QMARK_))
);
return cljs.core.swap_BANG_.call(null,snakeweek.assets.assets,cljs.core.assoc,name,object);
});
snakeweek.assets.load_font_BANG_ = (function snakeweek$assets$load_font_BANG_(renderer,name){
var loaded_QMARK_ = cljs.core.async.promise_chan.call(null);
cljs.core.swap_BANG_.call(null,snakeweek.assets.preloads,cljs.core.conj,loaded_QMARK_);

var object = renderer.loadFont(name,((function (loaded_QMARK_){
return (function (){
return cljs.core.async.put_BANG_.call(null,loaded_QMARK_,true);
});})(loaded_QMARK_))
);
return cljs.core.swap_BANG_.call(null,snakeweek.assets.assets,cljs.core.assoc,name,object);
});
snakeweek.assets.load_asset_BANG_ = (function snakeweek$assets$load_asset_BANG_(renderer,p__15355){
var vec__15356 = p__15355;
var type = cljs.core.nth.call(null,vec__15356,(0),null);
var name = cljs.core.nth.call(null,vec__15356,(1),null);
var G__15359 = type;
var G__15359__$1 = (((G__15359 instanceof cljs.core.Keyword))?G__15359.fqn:null);
switch (G__15359__$1) {
case "font":
return snakeweek.assets.load_font_BANG_.call(null,renderer,name);

break;
case "image":
return snakeweek.assets.load_image_BANG_.call(null,renderer,name);

break;
case "sound":
return snakeweek.assets.load_sound_BANG_.call(null,renderer,name);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15359__$1)].join('')));

}
});
snakeweek.assets.load_assets_BANG_ = (function snakeweek$assets$load_assets_BANG_(renderer){
var seq__15361_15441 = cljs.core.seq.call(null,snakeweek.assets.asset_names);
var chunk__15362_15442 = null;
var count__15363_15443 = (0);
var i__15364_15444 = (0);
while(true){
if((i__15364_15444 < count__15363_15443)){
var asset_15445 = cljs.core._nth.call(null,chunk__15362_15442,i__15364_15444);
snakeweek.assets.load_asset_BANG_.call(null,renderer,asset_15445);

var G__15446 = seq__15361_15441;
var G__15447 = chunk__15362_15442;
var G__15448 = count__15363_15443;
var G__15449 = (i__15364_15444 + (1));
seq__15361_15441 = G__15446;
chunk__15362_15442 = G__15447;
count__15363_15443 = G__15448;
i__15364_15444 = G__15449;
continue;
} else {
var temp__4657__auto___15450 = cljs.core.seq.call(null,seq__15361_15441);
if(temp__4657__auto___15450){
var seq__15361_15451__$1 = temp__4657__auto___15450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15361_15451__$1)){
var c__8105__auto___15452 = cljs.core.chunk_first.call(null,seq__15361_15451__$1);
var G__15453 = cljs.core.chunk_rest.call(null,seq__15361_15451__$1);
var G__15454 = c__8105__auto___15452;
var G__15455 = cljs.core.count.call(null,c__8105__auto___15452);
var G__15456 = (0);
seq__15361_15441 = G__15453;
chunk__15362_15442 = G__15454;
count__15363_15443 = G__15455;
i__15364_15444 = G__15456;
continue;
} else {
var asset_15457 = cljs.core.first.call(null,seq__15361_15451__$1);
snakeweek.assets.load_asset_BANG_.call(null,renderer,asset_15457);

var G__15458 = cljs.core.next.call(null,seq__15361_15451__$1);
var G__15459 = null;
var G__15460 = (0);
var G__15461 = (0);
seq__15361_15441 = G__15458;
chunk__15362_15442 = G__15459;
count__15363_15443 = G__15460;
i__15364_15444 = G__15461;
continue;
}
} else {
}
}
break;
}

var c__13152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto__){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto__){
return (function (state_15412){
var state_val_15413 = (state_15412[(1)]);
if((state_val_15413 === (7))){
var inst_15371 = (state_15412[(7)]);
var inst_15373 = (state_15412[(8)]);
var inst_15372 = (state_15412[(9)]);
var inst_15374 = (state_15412[(10)]);
var inst_15381 = (state_15412[(2)]);
var inst_15382 = (inst_15374 + (1));
var tmp15414 = inst_15371;
var tmp15415 = inst_15373;
var tmp15416 = inst_15372;
var inst_15371__$1 = tmp15414;
var inst_15372__$1 = tmp15416;
var inst_15373__$1 = tmp15415;
var inst_15374__$1 = inst_15382;
var state_15412__$1 = (function (){var statearr_15417 = state_15412;
(statearr_15417[(7)] = inst_15371__$1);

(statearr_15417[(8)] = inst_15373__$1);

(statearr_15417[(11)] = inst_15381);

(statearr_15417[(9)] = inst_15372__$1);

(statearr_15417[(10)] = inst_15374__$1);

return statearr_15417;
})();
var statearr_15418_15462 = state_15412__$1;
(statearr_15418_15462[(2)] = null);

(statearr_15418_15462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (1))){
var inst_15369 = cljs.core.deref.call(null,snakeweek.assets.preloads);
var inst_15370 = cljs.core.seq.call(null,inst_15369);
var inst_15371 = inst_15370;
var inst_15372 = null;
var inst_15373 = (0);
var inst_15374 = (0);
var state_15412__$1 = (function (){var statearr_15419 = state_15412;
(statearr_15419[(7)] = inst_15371);

(statearr_15419[(8)] = inst_15373);

(statearr_15419[(9)] = inst_15372);

(statearr_15419[(10)] = inst_15374);

return statearr_15419;
})();
var statearr_15420_15463 = state_15412__$1;
(statearr_15420_15463[(2)] = null);

(statearr_15420_15463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (4))){
var inst_15372 = (state_15412[(9)]);
var inst_15374 = (state_15412[(10)]);
var inst_15379 = cljs.core._nth.call(null,inst_15372,inst_15374);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15412__$1,(7),inst_15379);
} else {
if((state_val_15413 === (13))){
var inst_15400 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15421_15464 = state_15412__$1;
(statearr_15421_15464[(2)] = inst_15400);

(statearr_15421_15464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (6))){
var inst_15405 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15422_15465 = state_15412__$1;
(statearr_15422_15465[(2)] = inst_15405);

(statearr_15422_15465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (3))){
var inst_15407 = (state_15412[(2)]);
var inst_15408 = cljs.core.deref.call(null,snakeweek.assets.assets);
var inst_15409 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15408)].join('');
var inst_15410 = cljs.core.println.call(null,inst_15409);
var state_15412__$1 = (function (){var statearr_15423 = state_15412;
(statearr_15423[(12)] = inst_15407);

return statearr_15423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15412__$1,inst_15410);
} else {
if((state_val_15413 === (12))){
var inst_15385 = (state_15412[(13)]);
var inst_15394 = cljs.core.first.call(null,inst_15385);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15412__$1,(14),inst_15394);
} else {
if((state_val_15413 === (2))){
var inst_15373 = (state_15412[(8)]);
var inst_15374 = (state_15412[(10)]);
var inst_15376 = (inst_15374 < inst_15373);
var inst_15377 = inst_15376;
var state_15412__$1 = state_15412;
if(cljs.core.truth_(inst_15377)){
var statearr_15424_15466 = state_15412__$1;
(statearr_15424_15466[(1)] = (4));

} else {
var statearr_15425_15467 = state_15412__$1;
(statearr_15425_15467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (11))){
var inst_15385 = (state_15412[(13)]);
var inst_15389 = cljs.core.chunk_first.call(null,inst_15385);
var inst_15390 = cljs.core.chunk_rest.call(null,inst_15385);
var inst_15391 = cljs.core.count.call(null,inst_15389);
var inst_15371 = inst_15390;
var inst_15372 = inst_15389;
var inst_15373 = inst_15391;
var inst_15374 = (0);
var state_15412__$1 = (function (){var statearr_15426 = state_15412;
(statearr_15426[(7)] = inst_15371);

(statearr_15426[(8)] = inst_15373);

(statearr_15426[(9)] = inst_15372);

(statearr_15426[(10)] = inst_15374);

return statearr_15426;
})();
var statearr_15427_15468 = state_15412__$1;
(statearr_15427_15468[(2)] = null);

(statearr_15427_15468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (9))){
var state_15412__$1 = state_15412;
var statearr_15428_15469 = state_15412__$1;
(statearr_15428_15469[(2)] = null);

(statearr_15428_15469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (5))){
var inst_15371 = (state_15412[(7)]);
var inst_15385 = (state_15412[(13)]);
var inst_15385__$1 = cljs.core.seq.call(null,inst_15371);
var state_15412__$1 = (function (){var statearr_15429 = state_15412;
(statearr_15429[(13)] = inst_15385__$1);

return statearr_15429;
})();
if(inst_15385__$1){
var statearr_15430_15470 = state_15412__$1;
(statearr_15430_15470[(1)] = (8));

} else {
var statearr_15431_15471 = state_15412__$1;
(statearr_15431_15471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (14))){
var inst_15385 = (state_15412[(13)]);
var inst_15396 = (state_15412[(2)]);
var inst_15397 = cljs.core.next.call(null,inst_15385);
var inst_15371 = inst_15397;
var inst_15372 = null;
var inst_15373 = (0);
var inst_15374 = (0);
var state_15412__$1 = (function (){var statearr_15432 = state_15412;
(statearr_15432[(7)] = inst_15371);

(statearr_15432[(14)] = inst_15396);

(statearr_15432[(8)] = inst_15373);

(statearr_15432[(9)] = inst_15372);

(statearr_15432[(10)] = inst_15374);

return statearr_15432;
})();
var statearr_15433_15472 = state_15412__$1;
(statearr_15433_15472[(2)] = null);

(statearr_15433_15472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (10))){
var inst_15403 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15434_15473 = state_15412__$1;
(statearr_15434_15473[(2)] = inst_15403);

(statearr_15434_15473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (8))){
var inst_15385 = (state_15412[(13)]);
var inst_15387 = cljs.core.chunked_seq_QMARK_.call(null,inst_15385);
var state_15412__$1 = state_15412;
if(inst_15387){
var statearr_15435_15474 = state_15412__$1;
(statearr_15435_15474[(1)] = (11));

} else {
var statearr_15436_15475 = state_15412__$1;
(statearr_15436_15475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13152__auto__))
;
return ((function (switch__13064__auto__,c__13152__auto__){
return (function() {
var snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto__ = null;
var snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto____0 = (function (){
var statearr_15437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15437[(0)] = snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto__);

(statearr_15437[(1)] = (1));

return statearr_15437;
});
var snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto____1 = (function (state_15412){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_15412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e15438){if((e15438 instanceof Object)){
var ex__13068__auto__ = e15438;
var statearr_15439_15476 = state_15412;
(statearr_15439_15476[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15477 = state_15412;
state_15412 = G__15477;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto__ = function(state_15412){
switch(arguments.length){
case 0:
return snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto____0.call(this);
case 1:
return snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto____1.call(this,state_15412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto____0;
snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto____1;
return snakeweek$assets$load_assets_BANG__$_state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto__))
})();
var state__13154__auto__ = (function (){var statearr_15440 = f__13153__auto__.call(null);
(statearr_15440[(6)] = c__13152__auto__);

return statearr_15440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto__))
);

return c__13152__auto__;
});
snakeweek.assets.get_asset = (function snakeweek$assets$get_asset(name){
return cljs.core.get.call(null,cljs.core.deref.call(null,snakeweek.assets.assets),name);
});
