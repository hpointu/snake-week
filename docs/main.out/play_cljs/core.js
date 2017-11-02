// Compiled by ClojureScript 1.9.671 {}
goog.provide('play_cljs.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('cljs.core.async');

/**
 * A screen object provides the basic lifecycle for a game.
 * Simple games may only need to have one screen. They are a useful way to
 * isolate different aspects of your game. For example, you could make one
 * screen display the title and menu, and another screen contain the game
 * itself.
 * 
 * You can create a screen by using `reify` like this:
 * 
 * ```
 * (def main-screen
 *   (reify p/Screen
 *  (on-show [this])
 *  (on-hide [this])
 *  (on-render [this])))
 * ```
 * @interface
 */
play_cljs.core.Screen = function(){};

/**
 * Runs once, when the screen first appears.
 */
play_cljs.core.on_show = (function play_cljs$core$on_show(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_show$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_show$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (play_cljs.core.on_show[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (play_cljs.core.on_show["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-show",this$);
}
}
}
});

/**
 * Runs once, when the screen is no longer displayed.
 */
play_cljs.core.on_hide = (function play_cljs$core$on_hide(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_hide$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_hide$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (play_cljs.core.on_hide[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (play_cljs.core.on_hide["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-hide",this$);
}
}
}
});

/**
 * Runs each time the game is ready to render another frame.
 */
play_cljs.core.on_render = (function play_cljs$core$on_render(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_render$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_render$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (play_cljs.core.on_render[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (play_cljs.core.on_render["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-render",this$);
}
}
}
});


/**
 * A game object contains the internal renderer object and various bits of state
 * that are important to the overall execution of the game. Every play-cljs game
 * should create just one such object by calling [create-game](#create-game).
 * @interface
 */
play_cljs.core.Game = function(){};

/**
 * Creates the canvas element.
 */
play_cljs.core.start = (function play_cljs$core$start(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$start$arity$1 == null)))){
return game.play_cljs$core$Game$start$arity$1(game);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.start[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game);
} else {
var m__7955__auto____$1 = (play_cljs.core.start["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.start",game);
}
}
}
});

/**
 * Renders the provided data structure.
 */
play_cljs.core.render = (function play_cljs$core$render(game,content){
if((!((game == null))) && (!((game.play_cljs$core$Game$render$arity$2 == null)))){
return game.play_cljs$core$Game$render$arity$2(game,content);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.render[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game,content);
} else {
var m__7955__auto____$1 = (play_cljs.core.render["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.render",game);
}
}
}
});

/**
 * Renders the provided data structure off-screen and associates it with the given name. Returns an [Image](#Image) object.
 */
play_cljs.core.pre_render = (function play_cljs$core$pre_render(game,image_name,width,height,content){
if((!((game == null))) && (!((game.play_cljs$core$Game$pre_render$arity$5 == null)))){
return game.play_cljs$core$Game$pre_render$arity$5(game,image_name,width,height,content);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.pre_render[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game,image_name,width,height,content);
} else {
var m__7955__auto____$1 = (play_cljs.core.pre_render["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game,image_name,width,height,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.pre-render",game);
}
}
}
});

/**
 * Loads an image. Returns an [Image](#Image) object.
 */
play_cljs.core.load_image = (function play_cljs$core$load_image(game,path){
if((!((game == null))) && (!((game.play_cljs$core$Game$load_image$arity$2 == null)))){
return game.play_cljs$core$Game$load_image$arity$2(game,path);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.load_image[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game,path);
} else {
var m__7955__auto____$1 = (play_cljs.core.load_image["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game,path);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-image",game);
}
}
}
});

/**
 * Loads a tiled map. Returns a [TiledMap](#TiledMap) object.
 * A tiled map with the provided name must already be loaded
 * (see the TiledMap docs for details).
 */
play_cljs.core.load_tiled_map = (function play_cljs$core$load_tiled_map(game,map_name){
if((!((game == null))) && (!((game.play_cljs$core$Game$load_tiled_map$arity$2 == null)))){
return game.play_cljs$core$Game$load_tiled_map$arity$2(game,map_name);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.load_tiled_map[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game,map_name);
} else {
var m__7955__auto____$1 = (play_cljs.core.load_tiled_map["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game,map_name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-tiled-map",game);
}
}
}
});

/**
 * Returns the [Screen](#Screen) object currently being displayed.
 */
play_cljs.core.get_screen = (function play_cljs$core$get_screen(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_screen$arity$1 == null)))){
return game.play_cljs$core$Game$get_screen$arity$1(game);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.get_screen[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game);
} else {
var m__7955__auto____$1 = (play_cljs.core.get_screen["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-screen",game);
}
}
}
});

/**
 * Sets the [Screen](#Screen) object to be displayed.
 */
play_cljs.core.set_screen = (function play_cljs$core$set_screen(game,screen){
if((!((game == null))) && (!((game.play_cljs$core$Game$set_screen$arity$2 == null)))){
return game.play_cljs$core$Game$set_screen$arity$2(game,screen);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.set_screen[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game,screen);
} else {
var m__7955__auto____$1 = (play_cljs.core.set_screen["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-screen",game);
}
}
}
});

/**
 * Returns the internal renderer object.
 */
play_cljs.core.get_renderer = (function play_cljs$core$get_renderer(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_renderer$arity$1 == null)))){
return game.play_cljs$core$Game$get_renderer$arity$1(game);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.get_renderer[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game);
} else {
var m__7955__auto____$1 = (play_cljs.core.get_renderer["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-renderer",game);
}
}
}
});

/**
 * Returns the internal canvas object.
 */
play_cljs.core.get_canvas = (function play_cljs$core$get_canvas(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_canvas$arity$1 == null)))){
return game.play_cljs$core$Game$get_canvas$arity$1(game);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.get_canvas[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game);
} else {
var m__7955__auto____$1 = (play_cljs.core.get_canvas["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-canvas",game);
}
}
}
});

/**
 * Returns the total time transpired since the game started, in milliseconds.
 */
play_cljs.core.get_total_time = (function play_cljs$core$get_total_time(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_total_time$arity$1 == null)))){
return game.play_cljs$core$Game$get_total_time$arity$1(game);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.get_total_time[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game);
} else {
var m__7955__auto____$1 = (play_cljs.core.get_total_time["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-total-time",game);
}
}
}
});

/**
 * Returns the time since the last frame was rendered, in milliseconds.
 */
play_cljs.core.get_delta_time = (function play_cljs$core$get_delta_time(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_delta_time$arity$1 == null)))){
return game.play_cljs$core$Game$get_delta_time$arity$1(game);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.get_delta_time[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game);
} else {
var m__7955__auto____$1 = (play_cljs.core.get_delta_time["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-delta-time",game);
}
}
}
});

/**
 * Returns a set containing the key codes for the keys currently being pressed.
 */
play_cljs.core.get_pressed_keys = (function play_cljs$core$get_pressed_keys(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_pressed_keys$arity$1 == null)))){
return game.play_cljs$core$Game$get_pressed_keys$arity$1(game);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.get_pressed_keys[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game);
} else {
var m__7955__auto____$1 = (play_cljs.core.get_pressed_keys["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-pressed-keys",game);
}
}
}
});

/**
 * Returns the virtual width of the game.
 */
play_cljs.core.get_width = (function play_cljs$core$get_width(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_width$arity$1 == null)))){
return game.play_cljs$core$Game$get_width$arity$1(game);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.get_width[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game);
} else {
var m__7955__auto____$1 = (play_cljs.core.get_width["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-width",game);
}
}
}
});

/**
 * Returns the virtual height of the game.
 */
play_cljs.core.get_height = (function play_cljs$core$get_height(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_height$arity$1 == null)))){
return game.play_cljs$core$Game$get_height$arity$1(game);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.get_height[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game);
} else {
var m__7955__auto____$1 = (play_cljs.core.get_height["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-height",game);
}
}
}
});

/**
 * Sets the virtual width and height of the game.
 */
play_cljs.core.set_size = (function play_cljs$core$set_size(game,width,height){
if((!((game == null))) && (!((game.play_cljs$core$Game$set_size$arity$3 == null)))){
return game.play_cljs$core$Game$set_size$arity$3(game,width,height);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.set_size[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game,width,height);
} else {
var m__7955__auto____$1 = (play_cljs.core.set_size["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game,width,height);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-size",game);
}
}
}
});

/**
 * Gets the asset with the given name.
 */
play_cljs.core.get_asset = (function play_cljs$core$get_asset(game,name){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_asset$arity$2 == null)))){
return game.play_cljs$core$Game$get_asset$arity$2(game,name);
} else {
var x__7954__auto__ = (((game == null))?null:game);
var m__7955__auto__ = (play_cljs.core.get_asset[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,game,name);
} else {
var m__7955__auto____$1 = (play_cljs.core.get_asset["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,game,name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-asset",game);
}
}
}
});

p5.disableFriendlyErrors = true;
play_cljs.core.update_opts = (function play_cljs$core$update_opts(opts,parent_opts,defaults){
var parent_opts__$1 = cljs.core.merge.call(null,defaults,parent_opts);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,defaults,cljs.core.dissoc.call(null,parent_opts__$1,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),opts),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(parent_opts__$1)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(parent_opts__$1));
});
play_cljs.core.basic_defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null);
play_cljs.core.text_defaults = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"font","font",-1506159249),"Helvetica",new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"valign","valign",1485197511),new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"leading","leading",-1239035032),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null));
play_cljs.core.img_defaults = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(0),new cljs.core.Keyword(null,"sy","sy",227523849),(0)], null));
play_cljs.core.rgb_defaults = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-r","max-r",1711699344),(255),new cljs.core.Keyword(null,"max-g","max-g",-1655662483),(255),new cljs.core.Keyword(null,"max-b","max-b",-1756758912),(255),new cljs.core.Keyword(null,"max-a","max-a",2065821478),(1)], null));
play_cljs.core.hsb_defaults = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-h","max-h",1409940394),(360),new cljs.core.Keyword(null,"max-s","max-s",781928940),(100),new cljs.core.Keyword(null,"max-b","max-b",-1756758912),(100),new cljs.core.Keyword(null,"max-a","max-a",2065821478),(1)], null));
play_cljs.core.halign__GT_constant = (function play_cljs$core$halign__GT_constant(renderer,halign){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),renderer.LEFT,new cljs.core.Keyword(null,"center","center",-748944368),renderer.CENTER,new cljs.core.Keyword(null,"right","right",-452581833),renderer.RIGHT], null),halign);
});
play_cljs.core.valign__GT_constant = (function play_cljs$core$valign__GT_constant(renderer,valign){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),renderer.TOP,new cljs.core.Keyword(null,"center","center",-748944368),renderer.CENTER,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),renderer.BOTTOM,new cljs.core.Keyword(null,"baseline","baseline",1151033280),renderer.BASELINE], null),valign);
});
play_cljs.core.style__GT_constant = (function play_cljs$core$style__GT_constant(renderer,style){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"normal","normal",-1519123858),renderer.NORMAL,new cljs.core.Keyword(null,"italic","italic",32599196),renderer.ITALIC,new cljs.core.Keyword(null,"bold","bold",-116809535),renderer.BOLD], null),style);
});
if(typeof play_cljs.core.draw_sketch_BANG_ !== 'undefined'){
} else {
play_cljs.core.draw_sketch_BANG_ = (function (){var method_table__8219__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8220__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8221__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8223__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"play-cljs.core","draw-sketch!"),((function (method_table__8219__auto__,prefer_table__8220__auto__,method_cache__8221__auto__,cached_hierarchy__8222__auto__,hierarchy__8223__auto__){
return (function (game,renderer,content,parent_opts){
return cljs.core.first.call(null,content);
});})(method_table__8219__auto__,prefer_table__8220__auto__,method_cache__8221__auto__,cached_hierarchy__8222__auto__,hierarchy__8223__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8223__auto__,method_table__8219__auto__,prefer_table__8220__auto__,method_cache__8221__auto__,cached_hierarchy__8222__auto__));
})();
}
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"div","div",1057191632),(function (game,renderer,content,parent_opts){
var vec__15061 = content;
var seq__15062 = cljs.core.seq.call(null,vec__15061);
var first__15063 = cljs.core.first.call(null,seq__15062);
var seq__15062__$1 = cljs.core.next.call(null,seq__15062);
var command = first__15063;
var first__15063__$1 = cljs.core.first.call(null,seq__15062__$1);
var seq__15062__$2 = cljs.core.next.call(null,seq__15062__$1);
var opts = first__15063__$1;
var children = seq__15062__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (game,renderer,content,parent_opts){
var vec__15064 = content;
var seq__15065 = cljs.core.seq.call(null,vec__15064);
var first__15066 = cljs.core.first.call(null,seq__15065);
var seq__15065__$1 = cljs.core.next.call(null,seq__15065);
var command = first__15066;
var first__15066__$1 = cljs.core.first.call(null,seq__15065__$1);
var seq__15065__$2 = cljs.core.next.call(null,seq__15065__$1);
var opts = first__15066__$1;
var children = seq__15065__$2;
var map__15067 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.text_defaults);
var map__15067__$1 = ((((!((map__15067 == null)))?((((map__15067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15067):map__15067);
var opts__$1 = map__15067__$1;
var value = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"value","value",305978217));
var x = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var font = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var halign = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"halign","halign",-1113968481));
var valign = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"valign","valign",1485197511));
var leading = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"leading","leading",-1239035032));
var style = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var G__15069_15070 = renderer;
G__15069_15070.textSize(size);

G__15069_15070.textFont(font);

G__15069_15070.textAlign(play_cljs.core.halign__GT_constant.call(null,renderer,halign),play_cljs.core.valign__GT_constant.call(null,renderer,valign));

G__15069_15070.textLeading(leading);

G__15069_15070.textStyle(play_cljs.core.style__GT_constant.call(null,renderer,style));

G__15069_15070.text(value,x,y);


return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"arc","arc",252411045),(function (game,renderer,content,parent_opts){
var vec__15071 = content;
var seq__15072 = cljs.core.seq.call(null,vec__15071);
var first__15073 = cljs.core.first.call(null,seq__15072);
var seq__15072__$1 = cljs.core.next.call(null,seq__15072);
var command = first__15073;
var first__15073__$1 = cljs.core.first.call(null,seq__15072__$1);
var seq__15072__$2 = cljs.core.next.call(null,seq__15072__$1);
var opts = first__15073__$1;
var children = seq__15072__$2;
var map__15074 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15074__$1 = ((((!((map__15074 == null)))?((((map__15074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15074):map__15074);
var opts__$1 = map__15074__$1;
var x = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
renderer.arc(x,y,width,height,start,stop);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (game,renderer,content,parent_opts){
var vec__15076 = content;
var seq__15077 = cljs.core.seq.call(null,vec__15076);
var first__15078 = cljs.core.first.call(null,seq__15077);
var seq__15077__$1 = cljs.core.next.call(null,seq__15077);
var command = first__15078;
var first__15078__$1 = cljs.core.first.call(null,seq__15077__$1);
var seq__15077__$2 = cljs.core.next.call(null,seq__15077__$1);
var opts = first__15078__$1;
var children = seq__15077__$2;
var map__15079 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15079__$1 = ((((!((map__15079 == null)))?((((map__15079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15079):map__15079);
var opts__$1 = map__15079__$1;
var x = cljs.core.get.call(null,map__15079__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15079__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__15079__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__15079__$1,new cljs.core.Keyword(null,"height","height",1025178622));
renderer.ellipse(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"line","line",212345235),(function (game,renderer,content,parent_opts){
var vec__15081 = content;
var seq__15082 = cljs.core.seq.call(null,vec__15081);
var first__15083 = cljs.core.first.call(null,seq__15082);
var seq__15082__$1 = cljs.core.next.call(null,seq__15082);
var command = first__15083;
var first__15083__$1 = cljs.core.first.call(null,seq__15082__$1);
var seq__15082__$2 = cljs.core.next.call(null,seq__15082__$1);
var opts = first__15083__$1;
var children = seq__15082__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15084 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__15084__$1 = ((((!((map__15084 == null)))?((((map__15084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15084):map__15084);
var opts__$2 = map__15084__$1;
var x1 = cljs.core.get.call(null,map__15084__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__15084__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__15084__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__15084__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
renderer.line(x1,y1,x2,y2);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"point","point",1813198264),(function (game,renderer,content,parent_opts){
var vec__15086 = content;
var seq__15087 = cljs.core.seq.call(null,vec__15086);
var first__15088 = cljs.core.first.call(null,seq__15087);
var seq__15087__$1 = cljs.core.next.call(null,seq__15087);
var command = first__15088;
var first__15088__$1 = cljs.core.first.call(null,seq__15087__$1);
var seq__15087__$2 = cljs.core.next.call(null,seq__15087__$1);
var opts = first__15088__$1;
var children = seq__15087__$2;
var map__15089 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15089__$1 = ((((!((map__15089 == null)))?((((map__15089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15089):map__15089);
var opts__$1 = map__15089__$1;
var x = cljs.core.get.call(null,map__15089__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15089__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
renderer.point(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"quad","quad",432820757),(function (game,renderer,content,parent_opts){
var vec__15091 = content;
var seq__15092 = cljs.core.seq.call(null,vec__15091);
var first__15093 = cljs.core.first.call(null,seq__15092);
var seq__15092__$1 = cljs.core.next.call(null,seq__15092);
var command = first__15093;
var first__15093__$1 = cljs.core.first.call(null,seq__15092__$1);
var seq__15092__$2 = cljs.core.next.call(null,seq__15092__$1);
var opts = first__15093__$1;
var children = seq__15092__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15094 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__15094__$1 = ((((!((map__15094 == null)))?((((map__15094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15094):map__15094);
var opts__$2 = map__15094__$1;
var x1 = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y4 = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
renderer.quad(x1,y1,x2,y2,x3,y3,x4,y4);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (game,renderer,content,parent_opts){
var vec__15096 = content;
var seq__15097 = cljs.core.seq.call(null,vec__15096);
var first__15098 = cljs.core.first.call(null,seq__15097);
var seq__15097__$1 = cljs.core.next.call(null,seq__15097);
var command = first__15098;
var first__15098__$1 = cljs.core.first.call(null,seq__15097__$1);
var seq__15097__$2 = cljs.core.next.call(null,seq__15097__$1);
var opts = first__15098__$1;
var children = seq__15097__$2;
var map__15099 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15099__$1 = ((((!((map__15099 == null)))?((((map__15099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15099):map__15099);
var opts__$1 = map__15099__$1;
var x = cljs.core.get.call(null,map__15099__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15099__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__15099__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__15099__$1,new cljs.core.Keyword(null,"height","height",1025178622));
renderer.rect(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"triangle","triangle",-1828376667),(function (game,renderer,content,parent_opts){
var vec__15101 = content;
var seq__15102 = cljs.core.seq.call(null,vec__15101);
var first__15103 = cljs.core.first.call(null,seq__15102);
var seq__15102__$1 = cljs.core.next.call(null,seq__15102);
var command = first__15103;
var first__15103__$1 = cljs.core.first.call(null,seq__15102__$1);
var seq__15102__$2 = cljs.core.next.call(null,seq__15102__$1);
var opts = first__15103__$1;
var children = seq__15102__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15104 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__15104__$1 = ((((!((map__15104 == null)))?((((map__15104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15104):map__15104);
var opts__$2 = map__15104__$1;
var x1 = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
renderer.triangle(x1,y1,x2,y2,x3,y3);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"image","image",-58725096),(function (game,renderer,content,parent_opts){
var vec__15106 = content;
var seq__15107 = cljs.core.seq.call(null,vec__15106);
var first__15108 = cljs.core.first.call(null,seq__15107);
var seq__15107__$1 = cljs.core.next.call(null,seq__15107);
var command = first__15108;
var first__15108__$1 = cljs.core.first.call(null,seq__15107__$1);
var seq__15107__$2 = cljs.core.next.call(null,seq__15107__$1);
var opts = first__15108__$1;
var children = seq__15107__$2;
var map__15109 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.img_defaults);
var map__15109__$1 = ((((!((map__15109 == null)))?((((map__15109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15109):map__15109);
var opts__$1 = map__15109__$1;
var x = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var scale_x = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var swidth = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"swidth","swidth",-976864420));
var flip_x = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var sheight = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"sheight","sheight",1322250621));
var height = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var flip_y = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var y = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sy = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var width = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var scale_y = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var sx = cljs.core.get.call(null,map__15109__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var value__$1 = (function (){var or__7285__auto__ = value;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
var or__7285__auto____$1 = play_cljs.core.get_asset.call(null,game,name);
if(cljs.core.truth_(or__7285__auto____$1)){
return or__7285__auto____$1;
} else {
return play_cljs.core.load_image.call(null,game,name);
}
}
})();
var swidth__$1 = (function (){var or__7285__auto__ = swidth;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return value__$1.width;
}
})();
var sheight__$1 = (function (){var or__7285__auto__ = sheight;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return value__$1.height;
}
})();
renderer.push();

renderer.translate(x,y);

renderer.scale(scale_x,scale_y);

if(cljs.core.truth_(flip_x)){
renderer.scale((-1),(1));

renderer.translate((- swidth__$1),(0));
} else {
}

if(cljs.core.truth_(flip_y)){
renderer.scale((1),(-1));

renderer.translate((0),(- sheight__$1));
} else {
}

renderer.image(value__$1,(0),(0),(function (){var or__7285__auto__ = width;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return swidth__$1;
}
})(),(function (){var or__7285__auto__ = height;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return sheight__$1;
}
})(),sx,sy,swidth__$1,sheight__$1);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"animation","animation",-1248293244),(function (game,renderer,content,parent_opts){
var vec__15111 = content;
var seq__15112 = cljs.core.seq.call(null,vec__15111);
var first__15113 = cljs.core.first.call(null,seq__15112);
var seq__15112__$1 = cljs.core.next.call(null,seq__15112);
var command = first__15113;
var first__15113__$1 = cljs.core.first.call(null,seq__15112__$1);
var seq__15112__$2 = cljs.core.next.call(null,seq__15112__$1);
var opts = first__15113__$1;
var children = seq__15112__$2;
var map__15114 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15114__$1 = ((((!((map__15114 == null)))?((((map__15114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15114):map__15114);
var opts__$1 = map__15114__$1;
var duration = cljs.core.get.call(null,map__15114__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var images = cljs.core.vec.call(null,children);
var cycle_time = cljs.core.mod.call(null,play_cljs.core.get_total_time.call(null,game),(duration * cljs.core.count.call(null,images)));
var index = ((cycle_time / duration) | (0));
var image = cljs.core.get.call(null,images,index);
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,image,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (game,renderer,content,parent_opts){
var vec__15116 = content;
var seq__15117 = cljs.core.seq.call(null,vec__15116);
var first__15118 = cljs.core.first.call(null,seq__15117);
var seq__15117__$1 = cljs.core.next.call(null,seq__15117);
var command = first__15118;
var first__15118__$1 = cljs.core.first.call(null,seq__15117__$1);
var seq__15117__$2 = cljs.core.next.call(null,seq__15117__$1);
var opts = first__15118__$1;
var children = seq__15117__$2;
var map__15119 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15119__$1 = ((((!((map__15119 == null)))?((((map__15119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15119):map__15119);
var opts__$1 = map__15119__$1;
var grayscale = cljs.core.get.call(null,map__15119__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__15119__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__15119__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.fill(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.fill(color);
} else {
if(cljs.core.truth_(colors)){
var vec__15121_15124 = colors;
var n1_15125 = cljs.core.nth.call(null,vec__15121_15124,(0),null);
var n2_15126 = cljs.core.nth.call(null,vec__15121_15124,(1),null);
var n3_15127 = cljs.core.nth.call(null,vec__15121_15124,(2),null);
renderer.fill(n1_15125,n2_15126,n3_15127);
} else {
renderer.noFill();

}
}
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (game,renderer,content,parent_opts){
var vec__15128 = content;
var seq__15129 = cljs.core.seq.call(null,vec__15128);
var first__15130 = cljs.core.first.call(null,seq__15129);
var seq__15129__$1 = cljs.core.next.call(null,seq__15129);
var command = first__15130;
var first__15130__$1 = cljs.core.first.call(null,seq__15129__$1);
var seq__15129__$2 = cljs.core.next.call(null,seq__15129__$1);
var opts = first__15130__$1;
var children = seq__15129__$2;
var map__15131 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15131__$1 = ((((!((map__15131 == null)))?((((map__15131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15131):map__15131);
var opts__$1 = map__15131__$1;
var grayscale = cljs.core.get.call(null,map__15131__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__15131__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__15131__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.stroke(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.stroke(color);
} else {
if(cljs.core.truth_(colors)){
var vec__15133_15136 = colors;
var n1_15137 = cljs.core.nth.call(null,vec__15133_15136,(0),null);
var n2_15138 = cljs.core.nth.call(null,vec__15133_15136,(1),null);
var n3_15139 = cljs.core.nth.call(null,vec__15133_15136,(2),null);
renderer.stroke(n1_15137,n2_15138,n3_15139);
} else {
renderer.noStroke();

}
}
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"bezier","bezier",-539235327),(function (game,renderer,content,parent_opts){
var vec__15140 = content;
var seq__15141 = cljs.core.seq.call(null,vec__15140);
var first__15142 = cljs.core.first.call(null,seq__15141);
var seq__15141__$1 = cljs.core.next.call(null,seq__15141);
var command = first__15142;
var first__15142__$1 = cljs.core.first.call(null,seq__15141__$1);
var seq__15141__$2 = cljs.core.next.call(null,seq__15141__$1);
var opts = first__15142__$1;
var children = seq__15141__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15143 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__15143__$1 = ((((!((map__15143 == null)))?((((map__15143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15143):map__15143);
var opts__$2 = map__15143__$1;
var x1 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__7273__auto__ = x1;
if(cljs.core.truth_(and__7273__auto__)){
var and__7273__auto____$1 = y1;
if(cljs.core.truth_(and__7273__auto____$1)){
var and__7273__auto____$2 = x2;
if(cljs.core.truth_(and__7273__auto____$2)){
var and__7273__auto____$3 = y2;
if(cljs.core.truth_(and__7273__auto____$3)){
var and__7273__auto____$4 = x3;
if(cljs.core.truth_(and__7273__auto____$4)){
var and__7273__auto____$5 = y3;
if(cljs.core.truth_(and__7273__auto____$5)){
var and__7273__auto____$6 = x4;
if(cljs.core.truth_(and__7273__auto____$6)){
return y4;
} else {
return and__7273__auto____$6;
}
} else {
return and__7273__auto____$5;
}
} else {
return and__7273__auto____$4;
}
} else {
return and__7273__auto____$3;
}
} else {
return and__7273__auto____$2;
}
} else {
return and__7273__auto____$1;
}
} else {
return and__7273__auto__;
}
})())){
renderer.bezier(x1,y1,x2,y2,x3,y3,x4,y4);
} else {
if(cljs.core.truth_((function (){var and__7273__auto__ = z1;
if(cljs.core.truth_(and__7273__auto__)){
var and__7273__auto____$1 = z2;
if(cljs.core.truth_(and__7273__auto____$1)){
var and__7273__auto____$2 = z3;
if(cljs.core.truth_(and__7273__auto____$2)){
return z4;
} else {
return and__7273__auto____$2;
}
} else {
return and__7273__auto____$1;
}
} else {
return and__7273__auto__;
}
})())){
renderer.bezier(z1,z2,z3,z4);
} else {
throw "Invalid args for bezier";

}
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"curve","curve",-569677866),(function (game,renderer,content,parent_opts){
var vec__15145 = content;
var seq__15146 = cljs.core.seq.call(null,vec__15145);
var first__15147 = cljs.core.first.call(null,seq__15146);
var seq__15146__$1 = cljs.core.next.call(null,seq__15146);
var command = first__15147;
var first__15147__$1 = cljs.core.first.call(null,seq__15146__$1);
var seq__15146__$2 = cljs.core.next.call(null,seq__15146__$1);
var opts = first__15147__$1;
var children = seq__15146__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15148 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__15148__$1 = ((((!((map__15148 == null)))?((((map__15148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15148):map__15148);
var opts__$2 = map__15148__$1;
var x1 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__7273__auto__ = x1;
if(cljs.core.truth_(and__7273__auto__)){
var and__7273__auto____$1 = y1;
if(cljs.core.truth_(and__7273__auto____$1)){
var and__7273__auto____$2 = x2;
if(cljs.core.truth_(and__7273__auto____$2)){
var and__7273__auto____$3 = y2;
if(cljs.core.truth_(and__7273__auto____$3)){
var and__7273__auto____$4 = x3;
if(cljs.core.truth_(and__7273__auto____$4)){
var and__7273__auto____$5 = y3;
if(cljs.core.truth_(and__7273__auto____$5)){
var and__7273__auto____$6 = x4;
if(cljs.core.truth_(and__7273__auto____$6)){
return y4;
} else {
return and__7273__auto____$6;
}
} else {
return and__7273__auto____$5;
}
} else {
return and__7273__auto____$4;
}
} else {
return and__7273__auto____$3;
}
} else {
return and__7273__auto____$2;
}
} else {
return and__7273__auto____$1;
}
} else {
return and__7273__auto__;
}
})())){
renderer.curve(x1,y1,x2,y2,x3,y3,x4,y4);
} else {
if(cljs.core.truth_((function (){var and__7273__auto__ = z1;
if(cljs.core.truth_(and__7273__auto__)){
var and__7273__auto____$1 = z2;
if(cljs.core.truth_(and__7273__auto____$1)){
var and__7273__auto____$2 = z3;
if(cljs.core.truth_(and__7273__auto____$2)){
return z4;
} else {
return and__7273__auto____$2;
}
} else {
return and__7273__auto____$1;
}
} else {
return and__7273__auto__;
}
})())){
renderer.curve(z1,z2,z3,z4);
} else {
throw "Invalid args for curve";

}
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rgb","rgb",1432123467),(function (game,renderer,content,parent_opts){
var vec__15150 = content;
var seq__15151 = cljs.core.seq.call(null,vec__15150);
var first__15152 = cljs.core.first.call(null,seq__15151);
var seq__15151__$1 = cljs.core.next.call(null,seq__15151);
var command = first__15152;
var first__15152__$1 = cljs.core.first.call(null,seq__15151__$1);
var seq__15151__$2 = cljs.core.next.call(null,seq__15151__$1);
var opts = first__15152__$1;
var children = seq__15151__$2;
var map__15153 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.rgb_defaults);
var map__15153__$1 = ((((!((map__15153 == null)))?((((map__15153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15153):map__15153);
var opts__$1 = map__15153__$1;
var max_r = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
renderer.push();

renderer.colorMode(renderer.RGB,max_r,max_g,max_b,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"hsb","hsb",-753472031),(function (game,renderer,content,parent_opts){
var vec__15155 = content;
var seq__15156 = cljs.core.seq.call(null,vec__15155);
var first__15157 = cljs.core.first.call(null,seq__15156);
var seq__15156__$1 = cljs.core.next.call(null,seq__15156);
var command = first__15157;
var first__15157__$1 = cljs.core.first.call(null,seq__15156__$1);
var seq__15156__$2 = cljs.core.next.call(null,seq__15156__$1);
var opts = first__15157__$1;
var children = seq__15156__$2;
var map__15158 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.hsb_defaults);
var map__15158__$1 = ((((!((map__15158 == null)))?((((map__15158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15158):map__15158);
var opts__$1 = map__15158__$1;
var max_h = cljs.core.get.call(null,map__15158__$1,new cljs.core.Keyword(null,"max-h","max-h",1409940394));
var max_s = cljs.core.get.call(null,map__15158__$1,new cljs.core.Keyword(null,"max-s","max-s",781928940));
var max_b = cljs.core.get.call(null,map__15158__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__15158__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
renderer.push();

renderer.colorMode(renderer.HSB,max_h,max_s,max_b,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"tiled-map","tiled-map",1087696322),(function (game,renderer,content,parent_opts){
var vec__15160 = content;
var seq__15161 = cljs.core.seq.call(null,vec__15160);
var first__15162 = cljs.core.first.call(null,seq__15161);
var seq__15161__$1 = cljs.core.next.call(null,seq__15161);
var command = first__15162;
var first__15162__$1 = cljs.core.first.call(null,seq__15161__$1);
var seq__15161__$2 = cljs.core.next.call(null,seq__15161__$1);
var opts = first__15162__$1;
var children = seq__15161__$2;
var map__15163 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__15163__$1 = ((((!((map__15163 == null)))?((((map__15163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15163):map__15163);
var opts__$1 = map__15163__$1;
var value = cljs.core.get.call(null,map__15163__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__15163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var x = cljs.core.get.call(null,map__15163__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15163__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value__$1 = (function (){var or__7285__auto__ = value;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
var or__7285__auto____$1 = play_cljs.core.get_asset.call(null,game,name);
if(cljs.core.truth_(or__7285__auto____$1)){
return or__7285__auto____$1;
} else {
return play_cljs.core.load_tiled_map.call(null,game,name);
}
}
})();
value__$1.draw(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (game,renderer,content,parent_opts){
var vec__15165 = content;
var seq__15166 = cljs.core.seq.call(null,vec__15165);
var first__15167 = cljs.core.first.call(null,seq__15166);
var seq__15166__$1 = cljs.core.next.call(null,seq__15166);
var command = first__15167;
var first__15167__$1 = cljs.core.first.call(null,seq__15166__$1);
var seq__15166__$2 = cljs.core.next.call(null,seq__15166__$1);
var opts = first__15167__$1;
var children = seq__15166__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,points))){
throw ":shape requires :points to contain a seq'able with an even number of values (x and y pairs)";
} else {
renderer.beginShape();

var G__15171_15178 = points;
var vec__15172_15179 = G__15171_15178;
var seq__15173_15180 = cljs.core.seq.call(null,vec__15172_15179);
var first__15174_15181 = cljs.core.first.call(null,seq__15173_15180);
var seq__15173_15182__$1 = cljs.core.next.call(null,seq__15173_15180);
var x_15183 = first__15174_15181;
var first__15174_15184__$1 = cljs.core.first.call(null,seq__15173_15182__$1);
var seq__15173_15185__$2 = cljs.core.next.call(null,seq__15173_15182__$1);
var y_15186 = first__15174_15184__$1;
var rest_15187 = seq__15173_15185__$2;
var G__15171_15188__$1 = G__15171_15178;
while(true){
var vec__15175_15189 = G__15171_15188__$1;
var seq__15176_15190 = cljs.core.seq.call(null,vec__15175_15189);
var first__15177_15191 = cljs.core.first.call(null,seq__15176_15190);
var seq__15176_15192__$1 = cljs.core.next.call(null,seq__15176_15190);
var x_15193__$1 = first__15177_15191;
var first__15177_15194__$1 = cljs.core.first.call(null,seq__15176_15192__$1);
var seq__15176_15195__$2 = cljs.core.next.call(null,seq__15176_15192__$1);
var y_15196__$1 = first__15177_15194__$1;
var rest_15197__$1 = seq__15176_15195__$2;
renderer.vertex(x_15193__$1,y_15196__$1);

if(rest_15197__$1){
var G__15198 = rest_15197__$1;
G__15171_15188__$1 = G__15198;
continue;
} else {
}
break;
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.endShape(renderer.CLOSE);

}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"contour","contour",-943960423),(function (game,renderer,content,parent_opts){
var vec__15199 = content;
var seq__15200 = cljs.core.seq.call(null,vec__15199);
var first__15201 = cljs.core.first.call(null,seq__15200);
var seq__15200__$1 = cljs.core.next.call(null,seq__15200);
var command = first__15201;
var first__15201__$1 = cljs.core.first.call(null,seq__15200__$1);
var seq__15200__$2 = cljs.core.next.call(null,seq__15200__$1);
var opts = first__15201__$1;
var children = seq__15200__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,points))){
throw ":contour requires :points to contain a seq'able with an even number of values (x and y pairs)";
} else {
renderer.beginContour();

var G__15205_15212 = points;
var vec__15206_15213 = G__15205_15212;
var seq__15207_15214 = cljs.core.seq.call(null,vec__15206_15213);
var first__15208_15215 = cljs.core.first.call(null,seq__15207_15214);
var seq__15207_15216__$1 = cljs.core.next.call(null,seq__15207_15214);
var x_15217 = first__15208_15215;
var first__15208_15218__$1 = cljs.core.first.call(null,seq__15207_15216__$1);
var seq__15207_15219__$2 = cljs.core.next.call(null,seq__15207_15216__$1);
var y_15220 = first__15208_15218__$1;
var rest_15221 = seq__15207_15219__$2;
var G__15205_15222__$1 = G__15205_15212;
while(true){
var vec__15209_15223 = G__15205_15222__$1;
var seq__15210_15224 = cljs.core.seq.call(null,vec__15209_15223);
var first__15211_15225 = cljs.core.first.call(null,seq__15210_15224);
var seq__15210_15226__$1 = cljs.core.next.call(null,seq__15210_15224);
var x_15227__$1 = first__15211_15225;
var first__15211_15228__$1 = cljs.core.first.call(null,seq__15210_15226__$1);
var seq__15210_15229__$2 = cljs.core.next.call(null,seq__15210_15226__$1);
var y_15230__$1 = first__15211_15228__$1;
var rest_15231__$1 = seq__15210_15229__$2;
renderer.vertex(x_15227__$1,y_15230__$1);

if(rest_15231__$1){
var G__15232 = rest_15231__$1;
G__15205_15222__$1 = G__15232;
continue;
} else {
}
break;
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.endContour(renderer.CLOSE);

}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (game,renderer,content,parent_opts){
if(cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,content))){
return cljs.core.run_BANG_.call(null,(function (p1__15233_SHARP_){
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,p1__15233_SHARP_,parent_opts);
}),content);
} else {
if((cljs.core.first.call(null,content) == null)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid sketch command: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,content))].join('')));

}
}
}));
/**
 * Returns a game object.
 */
play_cljs.core.create_game = (function play_cljs$core$create_game(width,height){
var renderer = (new p5((function (_){
return null;
})));
var hidden_state_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),(0),new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(0),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.PersistentArrayMap.EMPTY], null));
var setup_finished_QMARK_ = cljs.core.async.promise_chan.call(null);
var preloads = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
if(typeof play_cljs.core.t_play_cljs$core15234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Game}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
play_cljs.core.t_play_cljs$core15234 = (function (width,height,renderer,hidden_state_atom,setup_finished_QMARK_,preloads,meta15235){
this.width = width;
this.height = height;
this.renderer = renderer;
this.hidden_state_atom = hidden_state_atom;
this.setup_finished_QMARK_ = setup_finished_QMARK_;
this.preloads = preloads;
this.meta15235 = meta15235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
play_cljs.core.t_play_cljs$core15234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (_15236,meta15235__$1){
var self__ = this;
var _15236__$1 = this;
return (new play_cljs.core.t_play_cljs$core15234(self__.width,self__.height,self__.renderer,self__.hidden_state_atom,self__.setup_finished_QMARK_,self__.preloads,meta15235__$1));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (_15236){
var self__ = this;
var _15236__$1 = this;
return self__.meta15235;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$ = cljs.core.PROTOCOL_SENTINEL;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$get_screen$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$set_size$arity$3 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,width__$1,height__$1){
var self__ = this;
var this$__$1 = this;
return self__.renderer.resizeCanvas(width__$1,height__$1);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$get_canvas$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$pre_render$arity$5 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,image_name,width__$1,height__$1,content){
var self__ = this;
var this$__$1 = this;
var object = self__.renderer.createGraphics(width__$1,height__$1);
play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,object,content,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,image_name,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$load_image$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,path){
var self__ = this;
var this$__$1 = this;
var finished_loading_QMARK_ = cljs.core.async.promise_chan.call(null);
var _ = cljs.core.swap_BANG_.call(null,self__.preloads,cljs.core.conj,finished_loading_QMARK_);
var object = self__.renderer.loadImage(path,((function (finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished_loading_QMARK_,true);
});})(finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,path,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$get_width$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer.width;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$get_asset$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (game,name){
var self__ = this;
var game__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.hidden_state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279),name], null));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$get_height$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer.height;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$start$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
self__.renderer.setup = ((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
var canvas_wrapper_15331 = self__.renderer.createCanvas(self__.width,self__.height);
var canvas_15332 = canvas_wrapper_15331.canvas;
canvas_15332.removeAttribute("style");

cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas_15332);

return cljs.core.async.put_BANG_.call(null,self__.setup_finished_QMARK_,true);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

cljs.core.run_BANG_.call(null,goog.events.unlistenByKey,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom)));

return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(window,"keydown",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (e){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.conj,e.keyCode);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
),goog.events.listen(window,"keyup",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (e){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(91),null,(93),null], null), null),e.keyCode)){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.disj,e.keyCode);
}
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
),goog.events.listen(window,"blur",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
)], null));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$get_delta_time$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$get_pressed_keys$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$render$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,content){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,self__.renderer,content,cljs.core.PersistentArrayMap.EMPTY);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$load_tiled_map$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,map_name){
var self__ = this;
var this$__$1 = this;
var finished_loading_QMARK_ = cljs.core.async.promise_chan.call(null);
var _ = cljs.core.swap_BANG_.call(null,self__.preloads,cljs.core.conj,finished_loading_QMARK_);
var object = self__.renderer.loadTiledMap(map_name,((function (finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished_loading_QMARK_,true);
});})(finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,map_name,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$set_screen$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,screen){
var self__ = this;
var this$__$1 = this;
var c__13152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (state_15297){
var state_val_15298 = (state_15297[(1)]);
if((state_val_15298 === (7))){
var inst_15291 = (state_15297[(2)]);
var inst_15292 = cljs.core.PersistentVector.EMPTY;
var inst_15293 = cljs.core.reset_BANG_.call(null,self__.preloads,inst_15292);
var inst_15294 = (function (){return ((function (inst_15291,inst_15292,inst_15293,state_val_15298,c__13152__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,((function (inst_15291,inst_15292,inst_15293,state_val_15298,c__13152__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (hidden_state){
var time = self__.renderer.millis();
return cljs.core.assoc.call(null,hidden_state,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),time,new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(time - new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(hidden_state)));
});})(inst_15291,inst_15292,inst_15293,state_val_15298,c__13152__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);

self__.renderer.clear();

return play_cljs.core.on_render.call(null,screen);
});
;})(inst_15291,inst_15292,inst_15293,state_val_15298,c__13152__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
})();
var inst_15295 = self__.renderer.draw = inst_15294;
var state_15297__$1 = (function (){var statearr_15299 = state_15297;
(statearr_15299[(7)] = inst_15291);

(statearr_15299[(8)] = inst_15293);

return statearr_15299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15297__$1,inst_15295);
} else {
if((state_val_15298 === (1))){
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15297__$1,(2),self__.setup_finished_QMARK_);
} else {
if((state_val_15298 === (4))){
var inst_15240 = (state_15297[(9)]);
var inst_15244 = play_cljs.core.on_hide.call(null,inst_15240);
var state_15297__$1 = state_15297;
var statearr_15300_15333 = state_15297__$1;
(statearr_15300_15333[(2)] = inst_15244);

(statearr_15300_15333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (15))){
var inst_15269 = (state_15297[(10)]);
var inst_15273 = cljs.core.chunk_first.call(null,inst_15269);
var inst_15274 = cljs.core.chunk_rest.call(null,inst_15269);
var inst_15275 = cljs.core.count.call(null,inst_15273);
var inst_15255 = inst_15274;
var inst_15256 = inst_15273;
var inst_15257 = inst_15275;
var inst_15258 = (0);
var state_15297__$1 = (function (){var statearr_15301 = state_15297;
(statearr_15301[(11)] = inst_15257);

(statearr_15301[(12)] = inst_15256);

(statearr_15301[(13)] = inst_15258);

(statearr_15301[(14)] = inst_15255);

return statearr_15301;
})();
var statearr_15302_15334 = state_15297__$1;
(statearr_15302_15334[(2)] = null);

(statearr_15302_15334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (13))){
var state_15297__$1 = state_15297;
var statearr_15303_15335 = state_15297__$1;
(statearr_15303_15335[(2)] = null);

(statearr_15303_15335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (6))){
var inst_15257 = (state_15297[(11)]);
var inst_15258 = (state_15297[(13)]);
var inst_15260 = (inst_15258 < inst_15257);
var inst_15261 = inst_15260;
var state_15297__$1 = state_15297;
if(cljs.core.truth_(inst_15261)){
var statearr_15304_15336 = state_15297__$1;
(statearr_15304_15336[(1)] = (8));

} else {
var statearr_15305_15337 = state_15297__$1;
(statearr_15305_15337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (17))){
var inst_15284 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15306_15338 = state_15297__$1;
(statearr_15306_15338[(2)] = inst_15284);

(statearr_15306_15338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (3))){
var state_15297__$1 = state_15297;
var statearr_15307_15339 = state_15297__$1;
(statearr_15307_15339[(2)] = null);

(statearr_15307_15339[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (12))){
var inst_15269 = (state_15297[(10)]);
var inst_15271 = cljs.core.chunked_seq_QMARK_.call(null,inst_15269);
var state_15297__$1 = state_15297;
if(inst_15271){
var statearr_15311_15340 = state_15297__$1;
(statearr_15311_15340[(1)] = (15));

} else {
var statearr_15312_15341 = state_15297__$1;
(statearr_15312_15341[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (2))){
var inst_15240 = (state_15297[(9)]);
var inst_15238 = (state_15297[(2)]);
var inst_15240__$1 = play_cljs.core.get_screen.call(null,this$__$1);
var inst_15241 = (inst_15240__$1 == null);
var state_15297__$1 = (function (){var statearr_15313 = state_15297;
(statearr_15313[(15)] = inst_15238);

(statearr_15313[(9)] = inst_15240__$1);

return statearr_15313;
})();
if(cljs.core.truth_(inst_15241)){
var statearr_15314_15342 = state_15297__$1;
(statearr_15314_15342[(1)] = (3));

} else {
var statearr_15315_15343 = state_15297__$1;
(statearr_15315_15343[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (11))){
var inst_15257 = (state_15297[(11)]);
var inst_15256 = (state_15297[(12)]);
var inst_15258 = (state_15297[(13)]);
var inst_15255 = (state_15297[(14)]);
var inst_15265 = (state_15297[(2)]);
var inst_15266 = (inst_15258 + (1));
var tmp15308 = inst_15257;
var tmp15309 = inst_15256;
var tmp15310 = inst_15255;
var inst_15255__$1 = tmp15310;
var inst_15256__$1 = tmp15309;
var inst_15257__$1 = tmp15308;
var inst_15258__$1 = inst_15266;
var state_15297__$1 = (function (){var statearr_15316 = state_15297;
(statearr_15316[(11)] = inst_15257__$1);

(statearr_15316[(12)] = inst_15256__$1);

(statearr_15316[(13)] = inst_15258__$1);

(statearr_15316[(14)] = inst_15255__$1);

(statearr_15316[(16)] = inst_15265);

return statearr_15316;
})();
var statearr_15317_15344 = state_15297__$1;
(statearr_15317_15344[(2)] = null);

(statearr_15317_15344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (9))){
var inst_15255 = (state_15297[(14)]);
var inst_15269 = (state_15297[(10)]);
var inst_15269__$1 = cljs.core.seq.call(null,inst_15255);
var state_15297__$1 = (function (){var statearr_15318 = state_15297;
(statearr_15318[(10)] = inst_15269__$1);

return statearr_15318;
})();
if(inst_15269__$1){
var statearr_15319_15345 = state_15297__$1;
(statearr_15319_15345[(1)] = (12));

} else {
var statearr_15320_15346 = state_15297__$1;
(statearr_15320_15346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (5))){
var inst_15246 = (state_15297[(2)]);
var inst_15247 = cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),screen);
var inst_15248 = play_cljs.core.on_show.call(null,screen);
var inst_15253 = cljs.core.deref.call(null,self__.preloads);
var inst_15254 = cljs.core.seq.call(null,inst_15253);
var inst_15255 = inst_15254;
var inst_15256 = null;
var inst_15257 = (0);
var inst_15258 = (0);
var state_15297__$1 = (function (){var statearr_15321 = state_15297;
(statearr_15321[(17)] = inst_15248);

(statearr_15321[(11)] = inst_15257);

(statearr_15321[(12)] = inst_15256);

(statearr_15321[(13)] = inst_15258);

(statearr_15321[(14)] = inst_15255);

(statearr_15321[(18)] = inst_15247);

(statearr_15321[(19)] = inst_15246);

return statearr_15321;
})();
var statearr_15322_15347 = state_15297__$1;
(statearr_15322_15347[(2)] = null);

(statearr_15322_15347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (14))){
var inst_15287 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15323_15348 = state_15297__$1;
(statearr_15323_15348[(2)] = inst_15287);

(statearr_15323_15348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (16))){
var inst_15269 = (state_15297[(10)]);
var inst_15278 = cljs.core.first.call(null,inst_15269);
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15297__$1,(18),inst_15278);
} else {
if((state_val_15298 === (10))){
var inst_15289 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15324_15349 = state_15297__$1;
(statearr_15324_15349[(2)] = inst_15289);

(statearr_15324_15349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (18))){
var inst_15269 = (state_15297[(10)]);
var inst_15280 = (state_15297[(2)]);
var inst_15281 = cljs.core.next.call(null,inst_15269);
var inst_15255 = inst_15281;
var inst_15256 = null;
var inst_15257 = (0);
var inst_15258 = (0);
var state_15297__$1 = (function (){var statearr_15325 = state_15297;
(statearr_15325[(11)] = inst_15257);

(statearr_15325[(12)] = inst_15256);

(statearr_15325[(13)] = inst_15258);

(statearr_15325[(14)] = inst_15255);

(statearr_15325[(20)] = inst_15280);

return statearr_15325;
})();
var statearr_15326_15350 = state_15297__$1;
(statearr_15326_15350[(2)] = null);

(statearr_15326_15350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (8))){
var inst_15256 = (state_15297[(12)]);
var inst_15258 = (state_15297[(13)]);
var inst_15263 = cljs.core._nth.call(null,inst_15256,inst_15258);
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15297__$1,(11),inst_15263);
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
}
}
}
}
});})(c__13152__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;
return ((function (switch__13064__auto__,c__13152__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function() {
var play_cljs$core$create_game_$_state_machine__13065__auto__ = null;
var play_cljs$core$create_game_$_state_machine__13065__auto____0 = (function (){
var statearr_15327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15327[(0)] = play_cljs$core$create_game_$_state_machine__13065__auto__);

(statearr_15327[(1)] = (1));

return statearr_15327;
});
var play_cljs$core$create_game_$_state_machine__13065__auto____1 = (function (state_15297){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_15297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e15328){if((e15328 instanceof Object)){
var ex__13068__auto__ = e15328;
var statearr_15329_15351 = state_15297;
(statearr_15329_15351[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15352 = state_15297;
state_15297 = G__15352;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
play_cljs$core$create_game_$_state_machine__13065__auto__ = function(state_15297){
switch(arguments.length){
case 0:
return play_cljs$core$create_game_$_state_machine__13065__auto____0.call(this);
case 1:
return play_cljs$core$create_game_$_state_machine__13065__auto____1.call(this,state_15297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
play_cljs$core$create_game_$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = play_cljs$core$create_game_$_state_machine__13065__auto____0;
play_cljs$core$create_game_$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = play_cljs$core$create_game_$_state_machine__13065__auto____1;
return play_cljs$core$create_game_$_state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
})();
var state__13154__auto__ = (function (){var statearr_15330 = f__13153__auto__.call(null);
(statearr_15330[(6)] = c__13152__auto__);

return statearr_15330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);

return c__13152__auto__;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$get_total_time$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.prototype.play_cljs$core$Game$get_renderer$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.getBasis = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","p5","js/p5",-237683270,null)], null)),new cljs.core.Symbol(null,"hidden-state-atom","hidden-state-atom",1737146278,null),new cljs.core.Symbol(null,"setup-finished?","setup-finished?",386963073,null),new cljs.core.Symbol(null,"preloads","preloads",-1034105580,null),new cljs.core.Symbol(null,"meta15235","meta15235",-1624585746,null)], null);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core15234.cljs$lang$type = true;

play_cljs.core.t_play_cljs$core15234.cljs$lang$ctorStr = "play-cljs.core/t_play_cljs$core15234";

play_cljs.core.t_play_cljs$core15234.cljs$lang$ctorPrWriter = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"play-cljs.core/t_play_cljs$core15234");
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.__GT_t_play_cljs$core15234 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function play_cljs$core$create_game_$___GT_t_play_cljs$core15234(width__$1,height__$1,renderer__$1,hidden_state_atom__$1,setup_finished_QMARK___$1,preloads__$1,meta15235){
return (new play_cljs.core.t_play_cljs$core15234(width__$1,height__$1,renderer__$1,hidden_state_atom__$1,setup_finished_QMARK___$1,preloads__$1,meta15235));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

}

return (new play_cljs.core.t_play_cljs$core15234(width,height,renderer,hidden_state_atom,setup_finished_QMARK_,preloads,cljs.core.PersistentArrayMap.EMPTY));
});
