// Compiled by ClojureScript 1.9.671 {}
goog.provide('play_cljs.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('p5.core');
goog.require('p5.tiled_map');
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
var vec__12042 = content;
var seq__12043 = cljs.core.seq.call(null,vec__12042);
var first__12044 = cljs.core.first.call(null,seq__12043);
var seq__12043__$1 = cljs.core.next.call(null,seq__12043);
var command = first__12044;
var first__12044__$1 = cljs.core.first.call(null,seq__12043__$1);
var seq__12043__$2 = cljs.core.next.call(null,seq__12043__$1);
var opts = first__12044__$1;
var children = seq__12043__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (game,renderer,content,parent_opts){
var vec__12045 = content;
var seq__12046 = cljs.core.seq.call(null,vec__12045);
var first__12047 = cljs.core.first.call(null,seq__12046);
var seq__12046__$1 = cljs.core.next.call(null,seq__12046);
var command = first__12047;
var first__12047__$1 = cljs.core.first.call(null,seq__12046__$1);
var seq__12046__$2 = cljs.core.next.call(null,seq__12046__$1);
var opts = first__12047__$1;
var children = seq__12046__$2;
var map__12048 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.text_defaults);
var map__12048__$1 = ((((!((map__12048 == null)))?((((map__12048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12048):map__12048);
var opts__$1 = map__12048__$1;
var value = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"value","value",305978217));
var x = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var font = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var halign = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"halign","halign",-1113968481));
var valign = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"valign","valign",1485197511));
var leading = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"leading","leading",-1239035032));
var style = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var G__12050_12051 = renderer;
G__12050_12051.textSize(size);

G__12050_12051.textFont(font);

G__12050_12051.textAlign(play_cljs.core.halign__GT_constant.call(null,renderer,halign),play_cljs.core.valign__GT_constant.call(null,renderer,valign));

G__12050_12051.textLeading(leading);

G__12050_12051.textStyle(play_cljs.core.style__GT_constant.call(null,renderer,style));

G__12050_12051.text(value,x,y);


return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"arc","arc",252411045),(function (game,renderer,content,parent_opts){
var vec__12052 = content;
var seq__12053 = cljs.core.seq.call(null,vec__12052);
var first__12054 = cljs.core.first.call(null,seq__12053);
var seq__12053__$1 = cljs.core.next.call(null,seq__12053);
var command = first__12054;
var first__12054__$1 = cljs.core.first.call(null,seq__12053__$1);
var seq__12053__$2 = cljs.core.next.call(null,seq__12053__$1);
var opts = first__12054__$1;
var children = seq__12053__$2;
var map__12055 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12055__$1 = ((((!((map__12055 == null)))?((((map__12055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12055):map__12055);
var opts__$1 = map__12055__$1;
var x = cljs.core.get.call(null,map__12055__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12055__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12055__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12055__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start = cljs.core.get.call(null,map__12055__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__12055__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
renderer.arc(x,y,width,height,start,stop);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (game,renderer,content,parent_opts){
var vec__12057 = content;
var seq__12058 = cljs.core.seq.call(null,vec__12057);
var first__12059 = cljs.core.first.call(null,seq__12058);
var seq__12058__$1 = cljs.core.next.call(null,seq__12058);
var command = first__12059;
var first__12059__$1 = cljs.core.first.call(null,seq__12058__$1);
var seq__12058__$2 = cljs.core.next.call(null,seq__12058__$1);
var opts = first__12059__$1;
var children = seq__12058__$2;
var map__12060 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12060__$1 = ((((!((map__12060 == null)))?((((map__12060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12060):map__12060);
var opts__$1 = map__12060__$1;
var x = cljs.core.get.call(null,map__12060__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12060__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12060__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12060__$1,new cljs.core.Keyword(null,"height","height",1025178622));
renderer.ellipse(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"line","line",212345235),(function (game,renderer,content,parent_opts){
var vec__12062 = content;
var seq__12063 = cljs.core.seq.call(null,vec__12062);
var first__12064 = cljs.core.first.call(null,seq__12063);
var seq__12063__$1 = cljs.core.next.call(null,seq__12063);
var command = first__12064;
var first__12064__$1 = cljs.core.first.call(null,seq__12063__$1);
var seq__12063__$2 = cljs.core.next.call(null,seq__12063__$1);
var opts = first__12064__$1;
var children = seq__12063__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12065 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12065__$1 = ((((!((map__12065 == null)))?((((map__12065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12065):map__12065);
var opts__$2 = map__12065__$1;
var x1 = cljs.core.get.call(null,map__12065__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12065__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12065__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12065__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
renderer.line(x1,y1,x2,y2);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"point","point",1813198264),(function (game,renderer,content,parent_opts){
var vec__12067 = content;
var seq__12068 = cljs.core.seq.call(null,vec__12067);
var first__12069 = cljs.core.first.call(null,seq__12068);
var seq__12068__$1 = cljs.core.next.call(null,seq__12068);
var command = first__12069;
var first__12069__$1 = cljs.core.first.call(null,seq__12068__$1);
var seq__12068__$2 = cljs.core.next.call(null,seq__12068__$1);
var opts = first__12069__$1;
var children = seq__12068__$2;
var map__12070 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12070__$1 = ((((!((map__12070 == null)))?((((map__12070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12070):map__12070);
var opts__$1 = map__12070__$1;
var x = cljs.core.get.call(null,map__12070__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12070__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
renderer.point(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"quad","quad",432820757),(function (game,renderer,content,parent_opts){
var vec__12072 = content;
var seq__12073 = cljs.core.seq.call(null,vec__12072);
var first__12074 = cljs.core.first.call(null,seq__12073);
var seq__12073__$1 = cljs.core.next.call(null,seq__12073);
var command = first__12074;
var first__12074__$1 = cljs.core.first.call(null,seq__12073__$1);
var seq__12073__$2 = cljs.core.next.call(null,seq__12073__$1);
var opts = first__12074__$1;
var children = seq__12073__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12075 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12075__$1 = ((((!((map__12075 == null)))?((((map__12075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12075):map__12075);
var opts__$2 = map__12075__$1;
var x1 = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y4 = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
renderer.quad(x1,y1,x2,y2,x3,y3,x4,y4);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (game,renderer,content,parent_opts){
var vec__12077 = content;
var seq__12078 = cljs.core.seq.call(null,vec__12077);
var first__12079 = cljs.core.first.call(null,seq__12078);
var seq__12078__$1 = cljs.core.next.call(null,seq__12078);
var command = first__12079;
var first__12079__$1 = cljs.core.first.call(null,seq__12078__$1);
var seq__12078__$2 = cljs.core.next.call(null,seq__12078__$1);
var opts = first__12079__$1;
var children = seq__12078__$2;
var map__12080 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12080__$1 = ((((!((map__12080 == null)))?((((map__12080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12080):map__12080);
var opts__$1 = map__12080__$1;
var x = cljs.core.get.call(null,map__12080__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12080__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12080__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12080__$1,new cljs.core.Keyword(null,"height","height",1025178622));
renderer.rect(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"triangle","triangle",-1828376667),(function (game,renderer,content,parent_opts){
var vec__12082 = content;
var seq__12083 = cljs.core.seq.call(null,vec__12082);
var first__12084 = cljs.core.first.call(null,seq__12083);
var seq__12083__$1 = cljs.core.next.call(null,seq__12083);
var command = first__12084;
var first__12084__$1 = cljs.core.first.call(null,seq__12083__$1);
var seq__12083__$2 = cljs.core.next.call(null,seq__12083__$1);
var opts = first__12084__$1;
var children = seq__12083__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12085 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12085__$1 = ((((!((map__12085 == null)))?((((map__12085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12085):map__12085);
var opts__$2 = map__12085__$1;
var x1 = cljs.core.get.call(null,map__12085__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12085__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12085__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12085__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__12085__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__12085__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
renderer.triangle(x1,y1,x2,y2,x3,y3);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"image","image",-58725096),(function (game,renderer,content,parent_opts){
var vec__12087 = content;
var seq__12088 = cljs.core.seq.call(null,vec__12087);
var first__12089 = cljs.core.first.call(null,seq__12088);
var seq__12088__$1 = cljs.core.next.call(null,seq__12088);
var command = first__12089;
var first__12089__$1 = cljs.core.first.call(null,seq__12088__$1);
var seq__12088__$2 = cljs.core.next.call(null,seq__12088__$1);
var opts = first__12089__$1;
var children = seq__12088__$2;
var map__12090 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.img_defaults);
var map__12090__$1 = ((((!((map__12090 == null)))?((((map__12090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12090):map__12090);
var opts__$1 = map__12090__$1;
var x = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var scale_x = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var swidth = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"swidth","swidth",-976864420));
var flip_x = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var sheight = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"sheight","sheight",1322250621));
var height = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var flip_y = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var y = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sy = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var width = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var scale_y = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var sx = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
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
var vec__12092 = content;
var seq__12093 = cljs.core.seq.call(null,vec__12092);
var first__12094 = cljs.core.first.call(null,seq__12093);
var seq__12093__$1 = cljs.core.next.call(null,seq__12093);
var command = first__12094;
var first__12094__$1 = cljs.core.first.call(null,seq__12093__$1);
var seq__12093__$2 = cljs.core.next.call(null,seq__12093__$1);
var opts = first__12094__$1;
var children = seq__12093__$2;
var map__12095 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12095__$1 = ((((!((map__12095 == null)))?((((map__12095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12095):map__12095);
var opts__$1 = map__12095__$1;
var duration = cljs.core.get.call(null,map__12095__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var images = cljs.core.vec.call(null,children);
var cycle_time = cljs.core.mod.call(null,play_cljs.core.get_total_time.call(null,game),(duration * cljs.core.count.call(null,images)));
var index = ((cycle_time / duration) | (0));
var image = cljs.core.get.call(null,images,index);
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,image,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (game,renderer,content,parent_opts){
var vec__12097 = content;
var seq__12098 = cljs.core.seq.call(null,vec__12097);
var first__12099 = cljs.core.first.call(null,seq__12098);
var seq__12098__$1 = cljs.core.next.call(null,seq__12098);
var command = first__12099;
var first__12099__$1 = cljs.core.first.call(null,seq__12098__$1);
var seq__12098__$2 = cljs.core.next.call(null,seq__12098__$1);
var opts = first__12099__$1;
var children = seq__12098__$2;
var map__12100 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12100__$1 = ((((!((map__12100 == null)))?((((map__12100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12100):map__12100);
var opts__$1 = map__12100__$1;
var grayscale = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.fill(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.fill(color);
} else {
if(cljs.core.truth_(colors)){
var vec__12102_12105 = colors;
var n1_12106 = cljs.core.nth.call(null,vec__12102_12105,(0),null);
var n2_12107 = cljs.core.nth.call(null,vec__12102_12105,(1),null);
var n3_12108 = cljs.core.nth.call(null,vec__12102_12105,(2),null);
renderer.fill(n1_12106,n2_12107,n3_12108);
} else {
renderer.noFill();

}
}
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (game,renderer,content,parent_opts){
var vec__12109 = content;
var seq__12110 = cljs.core.seq.call(null,vec__12109);
var first__12111 = cljs.core.first.call(null,seq__12110);
var seq__12110__$1 = cljs.core.next.call(null,seq__12110);
var command = first__12111;
var first__12111__$1 = cljs.core.first.call(null,seq__12110__$1);
var seq__12110__$2 = cljs.core.next.call(null,seq__12110__$1);
var opts = first__12111__$1;
var children = seq__12110__$2;
var map__12112 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12112__$1 = ((((!((map__12112 == null)))?((((map__12112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12112):map__12112);
var opts__$1 = map__12112__$1;
var grayscale = cljs.core.get.call(null,map__12112__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__12112__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__12112__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.stroke(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.stroke(color);
} else {
if(cljs.core.truth_(colors)){
var vec__12114_12117 = colors;
var n1_12118 = cljs.core.nth.call(null,vec__12114_12117,(0),null);
var n2_12119 = cljs.core.nth.call(null,vec__12114_12117,(1),null);
var n3_12120 = cljs.core.nth.call(null,vec__12114_12117,(2),null);
renderer.stroke(n1_12118,n2_12119,n3_12120);
} else {
renderer.noStroke();

}
}
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"bezier","bezier",-539235327),(function (game,renderer,content,parent_opts){
var vec__12121 = content;
var seq__12122 = cljs.core.seq.call(null,vec__12121);
var first__12123 = cljs.core.first.call(null,seq__12122);
var seq__12122__$1 = cljs.core.next.call(null,seq__12122);
var command = first__12123;
var first__12123__$1 = cljs.core.first.call(null,seq__12122__$1);
var seq__12122__$2 = cljs.core.next.call(null,seq__12122__$1);
var opts = first__12123__$1;
var children = seq__12122__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12124 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12124__$1 = ((((!((map__12124 == null)))?((((map__12124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12124):map__12124);
var opts__$2 = map__12124__$1;
var x1 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
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
var vec__12126 = content;
var seq__12127 = cljs.core.seq.call(null,vec__12126);
var first__12128 = cljs.core.first.call(null,seq__12127);
var seq__12127__$1 = cljs.core.next.call(null,seq__12127);
var command = first__12128;
var first__12128__$1 = cljs.core.first.call(null,seq__12127__$1);
var seq__12127__$2 = cljs.core.next.call(null,seq__12127__$1);
var opts = first__12128__$1;
var children = seq__12127__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12129 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12129__$1 = ((((!((map__12129 == null)))?((((map__12129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12129):map__12129);
var opts__$2 = map__12129__$1;
var x1 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__12129__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
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
var vec__12131 = content;
var seq__12132 = cljs.core.seq.call(null,vec__12131);
var first__12133 = cljs.core.first.call(null,seq__12132);
var seq__12132__$1 = cljs.core.next.call(null,seq__12132);
var command = first__12133;
var first__12133__$1 = cljs.core.first.call(null,seq__12132__$1);
var seq__12132__$2 = cljs.core.next.call(null,seq__12132__$1);
var opts = first__12133__$1;
var children = seq__12132__$2;
var map__12134 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.rgb_defaults);
var map__12134__$1 = ((((!((map__12134 == null)))?((((map__12134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12134):map__12134);
var opts__$1 = map__12134__$1;
var max_r = cljs.core.get.call(null,map__12134__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g = cljs.core.get.call(null,map__12134__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b = cljs.core.get.call(null,map__12134__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__12134__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
renderer.push();

renderer.colorMode(renderer.RGB,max_r,max_g,max_b,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"hsb","hsb",-753472031),(function (game,renderer,content,parent_opts){
var vec__12136 = content;
var seq__12137 = cljs.core.seq.call(null,vec__12136);
var first__12138 = cljs.core.first.call(null,seq__12137);
var seq__12137__$1 = cljs.core.next.call(null,seq__12137);
var command = first__12138;
var first__12138__$1 = cljs.core.first.call(null,seq__12137__$1);
var seq__12137__$2 = cljs.core.next.call(null,seq__12137__$1);
var opts = first__12138__$1;
var children = seq__12137__$2;
var map__12139 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.hsb_defaults);
var map__12139__$1 = ((((!((map__12139 == null)))?((((map__12139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12139):map__12139);
var opts__$1 = map__12139__$1;
var max_h = cljs.core.get.call(null,map__12139__$1,new cljs.core.Keyword(null,"max-h","max-h",1409940394));
var max_s = cljs.core.get.call(null,map__12139__$1,new cljs.core.Keyword(null,"max-s","max-s",781928940));
var max_b = cljs.core.get.call(null,map__12139__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__12139__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
renderer.push();

renderer.colorMode(renderer.HSB,max_h,max_s,max_b,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"tiled-map","tiled-map",1087696322),(function (game,renderer,content,parent_opts){
var vec__12141 = content;
var seq__12142 = cljs.core.seq.call(null,vec__12141);
var first__12143 = cljs.core.first.call(null,seq__12142);
var seq__12142__$1 = cljs.core.next.call(null,seq__12142);
var command = first__12143;
var first__12143__$1 = cljs.core.first.call(null,seq__12142__$1);
var seq__12142__$2 = cljs.core.next.call(null,seq__12142__$1);
var opts = first__12143__$1;
var children = seq__12142__$2;
var map__12144 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var map__12144__$1 = ((((!((map__12144 == null)))?((((map__12144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12144):map__12144);
var opts__$1 = map__12144__$1;
var value = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var x = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
var vec__12146 = content;
var seq__12147 = cljs.core.seq.call(null,vec__12146);
var first__12148 = cljs.core.first.call(null,seq__12147);
var seq__12147__$1 = cljs.core.next.call(null,seq__12147);
var command = first__12148;
var first__12148__$1 = cljs.core.first.call(null,seq__12147__$1);
var seq__12147__$2 = cljs.core.next.call(null,seq__12147__$1);
var opts = first__12148__$1;
var children = seq__12147__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,points))){
throw ":shape requires :points to contain a seq'able with an even number of values (x and y pairs)";
} else {
renderer.beginShape();

var G__12152_12159 = points;
var vec__12153_12160 = G__12152_12159;
var seq__12154_12161 = cljs.core.seq.call(null,vec__12153_12160);
var first__12155_12162 = cljs.core.first.call(null,seq__12154_12161);
var seq__12154_12163__$1 = cljs.core.next.call(null,seq__12154_12161);
var x_12164 = first__12155_12162;
var first__12155_12165__$1 = cljs.core.first.call(null,seq__12154_12163__$1);
var seq__12154_12166__$2 = cljs.core.next.call(null,seq__12154_12163__$1);
var y_12167 = first__12155_12165__$1;
var rest_12168 = seq__12154_12166__$2;
var G__12152_12169__$1 = G__12152_12159;
while(true){
var vec__12156_12170 = G__12152_12169__$1;
var seq__12157_12171 = cljs.core.seq.call(null,vec__12156_12170);
var first__12158_12172 = cljs.core.first.call(null,seq__12157_12171);
var seq__12157_12173__$1 = cljs.core.next.call(null,seq__12157_12171);
var x_12174__$1 = first__12158_12172;
var first__12158_12175__$1 = cljs.core.first.call(null,seq__12157_12173__$1);
var seq__12157_12176__$2 = cljs.core.next.call(null,seq__12157_12173__$1);
var y_12177__$1 = first__12158_12175__$1;
var rest_12178__$1 = seq__12157_12176__$2;
renderer.vertex(x_12174__$1,y_12177__$1);

if(rest_12178__$1){
var G__12179 = rest_12178__$1;
G__12152_12169__$1 = G__12179;
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
var vec__12180 = content;
var seq__12181 = cljs.core.seq.call(null,vec__12180);
var first__12182 = cljs.core.first.call(null,seq__12181);
var seq__12181__$1 = cljs.core.next.call(null,seq__12181);
var command = first__12182;
var first__12182__$1 = cljs.core.first.call(null,seq__12181__$1);
var seq__12181__$2 = cljs.core.next.call(null,seq__12181__$1);
var opts = first__12182__$1;
var children = seq__12181__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,points))){
throw ":contour requires :points to contain a seq'able with an even number of values (x and y pairs)";
} else {
renderer.beginContour();

var G__12186_12193 = points;
var vec__12187_12194 = G__12186_12193;
var seq__12188_12195 = cljs.core.seq.call(null,vec__12187_12194);
var first__12189_12196 = cljs.core.first.call(null,seq__12188_12195);
var seq__12188_12197__$1 = cljs.core.next.call(null,seq__12188_12195);
var x_12198 = first__12189_12196;
var first__12189_12199__$1 = cljs.core.first.call(null,seq__12188_12197__$1);
var seq__12188_12200__$2 = cljs.core.next.call(null,seq__12188_12197__$1);
var y_12201 = first__12189_12199__$1;
var rest_12202 = seq__12188_12200__$2;
var G__12186_12203__$1 = G__12186_12193;
while(true){
var vec__12190_12204 = G__12186_12203__$1;
var seq__12191_12205 = cljs.core.seq.call(null,vec__12190_12204);
var first__12192_12206 = cljs.core.first.call(null,seq__12191_12205);
var seq__12191_12207__$1 = cljs.core.next.call(null,seq__12191_12205);
var x_12208__$1 = first__12192_12206;
var first__12192_12209__$1 = cljs.core.first.call(null,seq__12191_12207__$1);
var seq__12191_12210__$2 = cljs.core.next.call(null,seq__12191_12207__$1);
var y_12211__$1 = first__12192_12209__$1;
var rest_12212__$1 = seq__12191_12210__$2;
renderer.vertex(x_12208__$1,y_12211__$1);

if(rest_12212__$1){
var G__12213 = rest_12212__$1;
G__12186_12203__$1 = G__12213;
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
return cljs.core.run_BANG_.call(null,(function (p1__12214_SHARP_){
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,p1__12214_SHARP_,parent_opts);
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
if(typeof play_cljs.core.t_play_cljs$core12215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Game}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
play_cljs.core.t_play_cljs$core12215 = (function (width,height,renderer,hidden_state_atom,setup_finished_QMARK_,preloads,meta12216){
this.width = width;
this.height = height;
this.renderer = renderer;
this.hidden_state_atom = hidden_state_atom;
this.setup_finished_QMARK_ = setup_finished_QMARK_;
this.preloads = preloads;
this.meta12216 = meta12216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
play_cljs.core.t_play_cljs$core12215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (_12217,meta12216__$1){
var self__ = this;
var _12217__$1 = this;
return (new play_cljs.core.t_play_cljs$core12215(self__.width,self__.height,self__.renderer,self__.hidden_state_atom,self__.setup_finished_QMARK_,self__.preloads,meta12216__$1));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (_12217){
var self__ = this;
var _12217__$1 = this;
return self__.meta12216;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$ = cljs.core.PROTOCOL_SENTINEL;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$get_screen$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$set_size$arity$3 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,width__$1,height__$1){
var self__ = this;
var this$__$1 = this;
return self__.renderer.resizeCanvas(width__$1,height__$1);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$get_canvas$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$pre_render$arity$5 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,image_name,width__$1,height__$1,content){
var self__ = this;
var this$__$1 = this;
var object = self__.renderer.createGraphics(width__$1,height__$1);
play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,object,content,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,image_name,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$load_image$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
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

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$get_width$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer.width;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$get_asset$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (game,name){
var self__ = this;
var game__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.hidden_state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279),name], null));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$get_height$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer.height;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$start$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
self__.renderer.setup = ((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
var canvas_wrapper_12312 = self__.renderer.createCanvas(self__.width,self__.height);
var canvas_12313 = canvas_wrapper_12312.canvas;
canvas_12313.removeAttribute("style");

cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas_12313);

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

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$get_delta_time$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$get_pressed_keys$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$render$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,content){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,self__.renderer,content,cljs.core.PersistentArrayMap.EMPTY);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$load_tiled_map$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
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

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$set_screen$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,screen){
var self__ = this;
var this$__$1 = this;
var c__10133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (state_12278){
var state_val_12279 = (state_12278[(1)]);
if((state_val_12279 === (7))){
var inst_12272 = (state_12278[(2)]);
var inst_12273 = cljs.core.PersistentVector.EMPTY;
var inst_12274 = cljs.core.reset_BANG_.call(null,self__.preloads,inst_12273);
var inst_12275 = (function (){return ((function (inst_12272,inst_12273,inst_12274,state_val_12279,c__10133__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,((function (inst_12272,inst_12273,inst_12274,state_val_12279,c__10133__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (hidden_state){
var time = self__.renderer.millis();
return cljs.core.assoc.call(null,hidden_state,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),time,new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(time - new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(hidden_state)));
});})(inst_12272,inst_12273,inst_12274,state_val_12279,c__10133__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);

self__.renderer.clear();

return play_cljs.core.on_render.call(null,screen);
});
;})(inst_12272,inst_12273,inst_12274,state_val_12279,c__10133__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
})();
var inst_12276 = self__.renderer.draw = inst_12275;
var state_12278__$1 = (function (){var statearr_12280 = state_12278;
(statearr_12280[(7)] = inst_12274);

(statearr_12280[(8)] = inst_12272);

return statearr_12280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12278__$1,inst_12276);
} else {
if((state_val_12279 === (1))){
var state_12278__$1 = state_12278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12278__$1,(2),self__.setup_finished_QMARK_);
} else {
if((state_val_12279 === (4))){
var inst_12221 = (state_12278[(9)]);
var inst_12225 = play_cljs.core.on_hide.call(null,inst_12221);
var state_12278__$1 = state_12278;
var statearr_12281_12314 = state_12278__$1;
(statearr_12281_12314[(2)] = inst_12225);

(statearr_12281_12314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (15))){
var inst_12250 = (state_12278[(10)]);
var inst_12254 = cljs.core.chunk_first.call(null,inst_12250);
var inst_12255 = cljs.core.chunk_rest.call(null,inst_12250);
var inst_12256 = cljs.core.count.call(null,inst_12254);
var inst_12236 = inst_12255;
var inst_12237 = inst_12254;
var inst_12238 = inst_12256;
var inst_12239 = (0);
var state_12278__$1 = (function (){var statearr_12282 = state_12278;
(statearr_12282[(11)] = inst_12236);

(statearr_12282[(12)] = inst_12239);

(statearr_12282[(13)] = inst_12238);

(statearr_12282[(14)] = inst_12237);

return statearr_12282;
})();
var statearr_12283_12315 = state_12278__$1;
(statearr_12283_12315[(2)] = null);

(statearr_12283_12315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (13))){
var state_12278__$1 = state_12278;
var statearr_12284_12316 = state_12278__$1;
(statearr_12284_12316[(2)] = null);

(statearr_12284_12316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (6))){
var inst_12239 = (state_12278[(12)]);
var inst_12238 = (state_12278[(13)]);
var inst_12241 = (inst_12239 < inst_12238);
var inst_12242 = inst_12241;
var state_12278__$1 = state_12278;
if(cljs.core.truth_(inst_12242)){
var statearr_12285_12317 = state_12278__$1;
(statearr_12285_12317[(1)] = (8));

} else {
var statearr_12286_12318 = state_12278__$1;
(statearr_12286_12318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (17))){
var inst_12265 = (state_12278[(2)]);
var state_12278__$1 = state_12278;
var statearr_12287_12319 = state_12278__$1;
(statearr_12287_12319[(2)] = inst_12265);

(statearr_12287_12319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (3))){
var state_12278__$1 = state_12278;
var statearr_12288_12320 = state_12278__$1;
(statearr_12288_12320[(2)] = null);

(statearr_12288_12320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (12))){
var inst_12250 = (state_12278[(10)]);
var inst_12252 = cljs.core.chunked_seq_QMARK_.call(null,inst_12250);
var state_12278__$1 = state_12278;
if(inst_12252){
var statearr_12292_12321 = state_12278__$1;
(statearr_12292_12321[(1)] = (15));

} else {
var statearr_12293_12322 = state_12278__$1;
(statearr_12293_12322[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (2))){
var inst_12221 = (state_12278[(9)]);
var inst_12219 = (state_12278[(2)]);
var inst_12221__$1 = play_cljs.core.get_screen.call(null,this$__$1);
var inst_12222 = (inst_12221__$1 == null);
var state_12278__$1 = (function (){var statearr_12294 = state_12278;
(statearr_12294[(9)] = inst_12221__$1);

(statearr_12294[(15)] = inst_12219);

return statearr_12294;
})();
if(cljs.core.truth_(inst_12222)){
var statearr_12295_12323 = state_12278__$1;
(statearr_12295_12323[(1)] = (3));

} else {
var statearr_12296_12324 = state_12278__$1;
(statearr_12296_12324[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (11))){
var inst_12236 = (state_12278[(11)]);
var inst_12239 = (state_12278[(12)]);
var inst_12238 = (state_12278[(13)]);
var inst_12237 = (state_12278[(14)]);
var inst_12246 = (state_12278[(2)]);
var inst_12247 = (inst_12239 + (1));
var tmp12289 = inst_12236;
var tmp12290 = inst_12238;
var tmp12291 = inst_12237;
var inst_12236__$1 = tmp12289;
var inst_12237__$1 = tmp12291;
var inst_12238__$1 = tmp12290;
var inst_12239__$1 = inst_12247;
var state_12278__$1 = (function (){var statearr_12297 = state_12278;
(statearr_12297[(16)] = inst_12246);

(statearr_12297[(11)] = inst_12236__$1);

(statearr_12297[(12)] = inst_12239__$1);

(statearr_12297[(13)] = inst_12238__$1);

(statearr_12297[(14)] = inst_12237__$1);

return statearr_12297;
})();
var statearr_12298_12325 = state_12278__$1;
(statearr_12298_12325[(2)] = null);

(statearr_12298_12325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (9))){
var inst_12236 = (state_12278[(11)]);
var inst_12250 = (state_12278[(10)]);
var inst_12250__$1 = cljs.core.seq.call(null,inst_12236);
var state_12278__$1 = (function (){var statearr_12299 = state_12278;
(statearr_12299[(10)] = inst_12250__$1);

return statearr_12299;
})();
if(inst_12250__$1){
var statearr_12300_12326 = state_12278__$1;
(statearr_12300_12326[(1)] = (12));

} else {
var statearr_12301_12327 = state_12278__$1;
(statearr_12301_12327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (5))){
var inst_12227 = (state_12278[(2)]);
var inst_12228 = cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),screen);
var inst_12229 = play_cljs.core.on_show.call(null,screen);
var inst_12234 = cljs.core.deref.call(null,self__.preloads);
var inst_12235 = cljs.core.seq.call(null,inst_12234);
var inst_12236 = inst_12235;
var inst_12237 = null;
var inst_12238 = (0);
var inst_12239 = (0);
var state_12278__$1 = (function (){var statearr_12302 = state_12278;
(statearr_12302[(17)] = inst_12227);

(statearr_12302[(11)] = inst_12236);

(statearr_12302[(12)] = inst_12239);

(statearr_12302[(18)] = inst_12228);

(statearr_12302[(13)] = inst_12238);

(statearr_12302[(14)] = inst_12237);

(statearr_12302[(19)] = inst_12229);

return statearr_12302;
})();
var statearr_12303_12328 = state_12278__$1;
(statearr_12303_12328[(2)] = null);

(statearr_12303_12328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (14))){
var inst_12268 = (state_12278[(2)]);
var state_12278__$1 = state_12278;
var statearr_12304_12329 = state_12278__$1;
(statearr_12304_12329[(2)] = inst_12268);

(statearr_12304_12329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (16))){
var inst_12250 = (state_12278[(10)]);
var inst_12259 = cljs.core.first.call(null,inst_12250);
var state_12278__$1 = state_12278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12278__$1,(18),inst_12259);
} else {
if((state_val_12279 === (10))){
var inst_12270 = (state_12278[(2)]);
var state_12278__$1 = state_12278;
var statearr_12305_12330 = state_12278__$1;
(statearr_12305_12330[(2)] = inst_12270);

(statearr_12305_12330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (18))){
var inst_12250 = (state_12278[(10)]);
var inst_12261 = (state_12278[(2)]);
var inst_12262 = cljs.core.next.call(null,inst_12250);
var inst_12236 = inst_12262;
var inst_12237 = null;
var inst_12238 = (0);
var inst_12239 = (0);
var state_12278__$1 = (function (){var statearr_12306 = state_12278;
(statearr_12306[(20)] = inst_12261);

(statearr_12306[(11)] = inst_12236);

(statearr_12306[(12)] = inst_12239);

(statearr_12306[(13)] = inst_12238);

(statearr_12306[(14)] = inst_12237);

return statearr_12306;
})();
var statearr_12307_12331 = state_12278__$1;
(statearr_12307_12331[(2)] = null);

(statearr_12307_12331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12279 === (8))){
var inst_12239 = (state_12278[(12)]);
var inst_12237 = (state_12278[(14)]);
var inst_12244 = cljs.core._nth.call(null,inst_12237,inst_12239);
var state_12278__$1 = state_12278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12278__$1,(11),inst_12244);
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
});})(c__10133__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;
return ((function (switch__10045__auto__,c__10133__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function() {
var play_cljs$core$create_game_$_state_machine__10046__auto__ = null;
var play_cljs$core$create_game_$_state_machine__10046__auto____0 = (function (){
var statearr_12308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12308[(0)] = play_cljs$core$create_game_$_state_machine__10046__auto__);

(statearr_12308[(1)] = (1));

return statearr_12308;
});
var play_cljs$core$create_game_$_state_machine__10046__auto____1 = (function (state_12278){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_12278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e12309){if((e12309 instanceof Object)){
var ex__10049__auto__ = e12309;
var statearr_12310_12332 = state_12278;
(statearr_12310_12332[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12333 = state_12278;
state_12278 = G__12333;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
play_cljs$core$create_game_$_state_machine__10046__auto__ = function(state_12278){
switch(arguments.length){
case 0:
return play_cljs$core$create_game_$_state_machine__10046__auto____0.call(this);
case 1:
return play_cljs$core$create_game_$_state_machine__10046__auto____1.call(this,state_12278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
play_cljs$core$create_game_$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = play_cljs$core$create_game_$_state_machine__10046__auto____0;
play_cljs$core$create_game_$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = play_cljs$core$create_game_$_state_machine__10046__auto____1;
return play_cljs$core$create_game_$_state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
})();
var state__10135__auto__ = (function (){var statearr_12311 = f__10134__auto__.call(null);
(statearr_12311[(6)] = c__10133__auto__);

return statearr_12311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);

return c__10133__auto__;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$get_total_time$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.prototype.play_cljs$core$Game$get_renderer$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.getBasis = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","p5","js/p5",-237683270,null)], null)),new cljs.core.Symbol(null,"hidden-state-atom","hidden-state-atom",1737146278,null),new cljs.core.Symbol(null,"setup-finished?","setup-finished?",386963073,null),new cljs.core.Symbol(null,"preloads","preloads",-1034105580,null),new cljs.core.Symbol(null,"meta12216","meta12216",-1579810232,null)], null);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12215.cljs$lang$type = true;

play_cljs.core.t_play_cljs$core12215.cljs$lang$ctorStr = "play-cljs.core/t_play_cljs$core12215";

play_cljs.core.t_play_cljs$core12215.cljs$lang$ctorPrWriter = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"play-cljs.core/t_play_cljs$core12215");
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.__GT_t_play_cljs$core12215 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function play_cljs$core$create_game_$___GT_t_play_cljs$core12215(width__$1,height__$1,renderer__$1,hidden_state_atom__$1,setup_finished_QMARK___$1,preloads__$1,meta12216){
return (new play_cljs.core.t_play_cljs$core12215(width__$1,height__$1,renderer__$1,hidden_state_atom__$1,setup_finished_QMARK___$1,preloads__$1,meta12216));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

}

return (new play_cljs.core.t_play_cljs$core12215(width,height,renderer,hidden_state_atom,setup_finished_QMARK_,preloads,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=core.js.map