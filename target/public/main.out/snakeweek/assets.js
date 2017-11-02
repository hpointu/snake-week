// Compiled by ClojureScript 1.9.671 {}
goog.provide('snakeweek.assets');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('p5.sound');
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
snakeweek.assets.load_asset_BANG_ = (function snakeweek$assets$load_asset_BANG_(renderer,p__13923){
var vec__13924 = p__13923;
var type = cljs.core.nth.call(null,vec__13924,(0),null);
var name = cljs.core.nth.call(null,vec__13924,(1),null);
var G__13927 = type;
var G__13927__$1 = (((G__13927 instanceof cljs.core.Keyword))?G__13927.fqn:null);
switch (G__13927__$1) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13927__$1)].join('')));

}
});
snakeweek.assets.load_assets_BANG_ = (function snakeweek$assets$load_assets_BANG_(renderer){
var seq__13929_14009 = cljs.core.seq.call(null,snakeweek.assets.asset_names);
var chunk__13930_14010 = null;
var count__13931_14011 = (0);
var i__13932_14012 = (0);
while(true){
if((i__13932_14012 < count__13931_14011)){
var asset_14013 = cljs.core._nth.call(null,chunk__13930_14010,i__13932_14012);
snakeweek.assets.load_asset_BANG_.call(null,renderer,asset_14013);

var G__14014 = seq__13929_14009;
var G__14015 = chunk__13930_14010;
var G__14016 = count__13931_14011;
var G__14017 = (i__13932_14012 + (1));
seq__13929_14009 = G__14014;
chunk__13930_14010 = G__14015;
count__13931_14011 = G__14016;
i__13932_14012 = G__14017;
continue;
} else {
var temp__4657__auto___14018 = cljs.core.seq.call(null,seq__13929_14009);
if(temp__4657__auto___14018){
var seq__13929_14019__$1 = temp__4657__auto___14018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13929_14019__$1)){
var c__8105__auto___14020 = cljs.core.chunk_first.call(null,seq__13929_14019__$1);
var G__14021 = cljs.core.chunk_rest.call(null,seq__13929_14019__$1);
var G__14022 = c__8105__auto___14020;
var G__14023 = cljs.core.count.call(null,c__8105__auto___14020);
var G__14024 = (0);
seq__13929_14009 = G__14021;
chunk__13930_14010 = G__14022;
count__13931_14011 = G__14023;
i__13932_14012 = G__14024;
continue;
} else {
var asset_14025 = cljs.core.first.call(null,seq__13929_14019__$1);
snakeweek.assets.load_asset_BANG_.call(null,renderer,asset_14025);

var G__14026 = cljs.core.next.call(null,seq__13929_14019__$1);
var G__14027 = null;
var G__14028 = (0);
var G__14029 = (0);
seq__13929_14009 = G__14026;
chunk__13930_14010 = G__14027;
count__13931_14011 = G__14028;
i__13932_14012 = G__14029;
continue;
}
} else {
}
}
break;
}

var c__10133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto__){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto__){
return (function (state_13980){
var state_val_13981 = (state_13980[(1)]);
if((state_val_13981 === (7))){
var inst_13940 = (state_13980[(7)]);
var inst_13941 = (state_13980[(8)]);
var inst_13942 = (state_13980[(9)]);
var inst_13939 = (state_13980[(10)]);
var inst_13949 = (state_13980[(2)]);
var inst_13950 = (inst_13942 + (1));
var tmp13982 = inst_13940;
var tmp13983 = inst_13941;
var tmp13984 = inst_13939;
var inst_13939__$1 = tmp13984;
var inst_13940__$1 = tmp13982;
var inst_13941__$1 = tmp13983;
var inst_13942__$1 = inst_13950;
var state_13980__$1 = (function (){var statearr_13985 = state_13980;
(statearr_13985[(7)] = inst_13940__$1);

(statearr_13985[(8)] = inst_13941__$1);

(statearr_13985[(11)] = inst_13949);

(statearr_13985[(9)] = inst_13942__$1);

(statearr_13985[(10)] = inst_13939__$1);

return statearr_13985;
})();
var statearr_13986_14030 = state_13980__$1;
(statearr_13986_14030[(2)] = null);

(statearr_13986_14030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (1))){
var inst_13937 = cljs.core.deref.call(null,snakeweek.assets.preloads);
var inst_13938 = cljs.core.seq.call(null,inst_13937);
var inst_13939 = inst_13938;
var inst_13940 = null;
var inst_13941 = (0);
var inst_13942 = (0);
var state_13980__$1 = (function (){var statearr_13987 = state_13980;
(statearr_13987[(7)] = inst_13940);

(statearr_13987[(8)] = inst_13941);

(statearr_13987[(9)] = inst_13942);

(statearr_13987[(10)] = inst_13939);

return statearr_13987;
})();
var statearr_13988_14031 = state_13980__$1;
(statearr_13988_14031[(2)] = null);

(statearr_13988_14031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (4))){
var inst_13940 = (state_13980[(7)]);
var inst_13942 = (state_13980[(9)]);
var inst_13947 = cljs.core._nth.call(null,inst_13940,inst_13942);
var state_13980__$1 = state_13980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13980__$1,(7),inst_13947);
} else {
if((state_val_13981 === (13))){
var inst_13968 = (state_13980[(2)]);
var state_13980__$1 = state_13980;
var statearr_13989_14032 = state_13980__$1;
(statearr_13989_14032[(2)] = inst_13968);

(statearr_13989_14032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (6))){
var inst_13973 = (state_13980[(2)]);
var state_13980__$1 = state_13980;
var statearr_13990_14033 = state_13980__$1;
(statearr_13990_14033[(2)] = inst_13973);

(statearr_13990_14033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (3))){
var inst_13975 = (state_13980[(2)]);
var inst_13976 = cljs.core.deref.call(null,snakeweek.assets.assets);
var inst_13977 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13976)].join('');
var inst_13978 = cljs.core.println.call(null,inst_13977);
var state_13980__$1 = (function (){var statearr_13991 = state_13980;
(statearr_13991[(12)] = inst_13975);

return statearr_13991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13980__$1,inst_13978);
} else {
if((state_val_13981 === (12))){
var inst_13953 = (state_13980[(13)]);
var inst_13962 = cljs.core.first.call(null,inst_13953);
var state_13980__$1 = state_13980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13980__$1,(14),inst_13962);
} else {
if((state_val_13981 === (2))){
var inst_13941 = (state_13980[(8)]);
var inst_13942 = (state_13980[(9)]);
var inst_13944 = (inst_13942 < inst_13941);
var inst_13945 = inst_13944;
var state_13980__$1 = state_13980;
if(cljs.core.truth_(inst_13945)){
var statearr_13992_14034 = state_13980__$1;
(statearr_13992_14034[(1)] = (4));

} else {
var statearr_13993_14035 = state_13980__$1;
(statearr_13993_14035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (11))){
var inst_13953 = (state_13980[(13)]);
var inst_13957 = cljs.core.chunk_first.call(null,inst_13953);
var inst_13958 = cljs.core.chunk_rest.call(null,inst_13953);
var inst_13959 = cljs.core.count.call(null,inst_13957);
var inst_13939 = inst_13958;
var inst_13940 = inst_13957;
var inst_13941 = inst_13959;
var inst_13942 = (0);
var state_13980__$1 = (function (){var statearr_13994 = state_13980;
(statearr_13994[(7)] = inst_13940);

(statearr_13994[(8)] = inst_13941);

(statearr_13994[(9)] = inst_13942);

(statearr_13994[(10)] = inst_13939);

return statearr_13994;
})();
var statearr_13995_14036 = state_13980__$1;
(statearr_13995_14036[(2)] = null);

(statearr_13995_14036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (9))){
var state_13980__$1 = state_13980;
var statearr_13996_14037 = state_13980__$1;
(statearr_13996_14037[(2)] = null);

(statearr_13996_14037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (5))){
var inst_13953 = (state_13980[(13)]);
var inst_13939 = (state_13980[(10)]);
var inst_13953__$1 = cljs.core.seq.call(null,inst_13939);
var state_13980__$1 = (function (){var statearr_13997 = state_13980;
(statearr_13997[(13)] = inst_13953__$1);

return statearr_13997;
})();
if(inst_13953__$1){
var statearr_13998_14038 = state_13980__$1;
(statearr_13998_14038[(1)] = (8));

} else {
var statearr_13999_14039 = state_13980__$1;
(statearr_13999_14039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (14))){
var inst_13953 = (state_13980[(13)]);
var inst_13964 = (state_13980[(2)]);
var inst_13965 = cljs.core.next.call(null,inst_13953);
var inst_13939 = inst_13965;
var inst_13940 = null;
var inst_13941 = (0);
var inst_13942 = (0);
var state_13980__$1 = (function (){var statearr_14000 = state_13980;
(statearr_14000[(7)] = inst_13940);

(statearr_14000[(8)] = inst_13941);

(statearr_14000[(14)] = inst_13964);

(statearr_14000[(9)] = inst_13942);

(statearr_14000[(10)] = inst_13939);

return statearr_14000;
})();
var statearr_14001_14040 = state_13980__$1;
(statearr_14001_14040[(2)] = null);

(statearr_14001_14040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (10))){
var inst_13971 = (state_13980[(2)]);
var state_13980__$1 = state_13980;
var statearr_14002_14041 = state_13980__$1;
(statearr_14002_14041[(2)] = inst_13971);

(statearr_14002_14041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (8))){
var inst_13953 = (state_13980[(13)]);
var inst_13955 = cljs.core.chunked_seq_QMARK_.call(null,inst_13953);
var state_13980__$1 = state_13980;
if(inst_13955){
var statearr_14003_14042 = state_13980__$1;
(statearr_14003_14042[(1)] = (11));

} else {
var statearr_14004_14043 = state_13980__$1;
(statearr_14004_14043[(1)] = (12));

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
});})(c__10133__auto__))
;
return ((function (switch__10045__auto__,c__10133__auto__){
return (function() {
var snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto__ = null;
var snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto____0 = (function (){
var statearr_14005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14005[(0)] = snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto__);

(statearr_14005[(1)] = (1));

return statearr_14005;
});
var snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto____1 = (function (state_13980){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_13980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e14006){if((e14006 instanceof Object)){
var ex__10049__auto__ = e14006;
var statearr_14007_14044 = state_13980;
(statearr_14007_14044[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14045 = state_13980;
state_13980 = G__14045;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto__ = function(state_13980){
switch(arguments.length){
case 0:
return snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto____0.call(this);
case 1:
return snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto____1.call(this,state_13980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto____0;
snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto____1;
return snakeweek$assets$load_assets_BANG__$_state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto__))
})();
var state__10135__auto__ = (function (){var statearr_14008 = f__10134__auto__.call(null);
(statearr_14008[(6)] = c__10133__auto__);

return statearr_14008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto__))
);

return c__10133__auto__;
});
snakeweek.assets.get_asset = (function snakeweek$assets$get_asset(name){
return cljs.core.get.call(null,cljs.core.deref.call(null,snakeweek.assets.assets),name);
});

//# sourceMappingURL=assets.js.map