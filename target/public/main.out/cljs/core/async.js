// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10179 = arguments.length;
switch (G__10179) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10180 = (function (f,blockable,meta10181){
this.f = f;
this.blockable = blockable;
this.meta10181 = meta10181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10182,meta10181__$1){
var self__ = this;
var _10182__$1 = this;
return (new cljs.core.async.t_cljs$core$async10180(self__.f,self__.blockable,meta10181__$1));
});

cljs.core.async.t_cljs$core$async10180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10182){
var self__ = this;
var _10182__$1 = this;
return self__.meta10181;
});

cljs.core.async.t_cljs$core$async10180.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10180.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10181","meta10181",948792817,null)], null);
});

cljs.core.async.t_cljs$core$async10180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10180";

cljs.core.async.t_cljs$core$async10180.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async10180");
});

cljs.core.async.__GT_t_cljs$core$async10180 = (function cljs$core$async$__GT_t_cljs$core$async10180(f__$1,blockable__$1,meta10181){
return (new cljs.core.async.t_cljs$core$async10180(f__$1,blockable__$1,meta10181));
});

}

return (new cljs.core.async.t_cljs$core$async10180(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__10186 = arguments.length;
switch (G__10186) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__10189 = arguments.length;
switch (G__10189) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__10192 = arguments.length;
switch (G__10192) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10194 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10194);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10194,ret){
return (function (){
return fn1.call(null,val_10194);
});})(val_10194,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__10196 = arguments.length;
switch (G__10196) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8209__auto___10198 = n;
var x_10199 = (0);
while(true){
if((x_10199 < n__8209__auto___10198)){
(a[x_10199] = (0));

var G__10200 = (x_10199 + (1));
x_10199 = G__10200;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10201 = (i + (1));
i = G__10201;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10202 = (function (flag,meta10203){
this.flag = flag;
this.meta10203 = meta10203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10204,meta10203__$1){
var self__ = this;
var _10204__$1 = this;
return (new cljs.core.async.t_cljs$core$async10202(self__.flag,meta10203__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10204){
var self__ = this;
var _10204__$1 = this;
return self__.meta10203;
});})(flag))
;

cljs.core.async.t_cljs$core$async10202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10202.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10203","meta10203",828035132,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10202";

cljs.core.async.t_cljs$core$async10202.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async10202");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10202 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10202(flag__$1,meta10203){
return (new cljs.core.async.t_cljs$core$async10202(flag__$1,meta10203));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10202(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10205 = (function (flag,cb,meta10206){
this.flag = flag;
this.cb = cb;
this.meta10206 = meta10206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10207,meta10206__$1){
var self__ = this;
var _10207__$1 = this;
return (new cljs.core.async.t_cljs$core$async10205(self__.flag,self__.cb,meta10206__$1));
});

cljs.core.async.t_cljs$core$async10205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10207){
var self__ = this;
var _10207__$1 = this;
return self__.meta10206;
});

cljs.core.async.t_cljs$core$async10205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10206","meta10206",1444442383,null)], null);
});

cljs.core.async.t_cljs$core$async10205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10205";

cljs.core.async.t_cljs$core$async10205.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async10205");
});

cljs.core.async.__GT_t_cljs$core$async10205 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10205(flag__$1,cb__$1,meta10206){
return (new cljs.core.async.t_cljs$core$async10205(flag__$1,cb__$1,meta10206));
});

}

return (new cljs.core.async.t_cljs$core$async10205(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10208_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10208_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10209_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10209_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7285__auto__ = wport;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10210 = (i + (1));
i = G__10210;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7285__auto__ = ret;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__7273__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7273__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7273__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8417__auto__ = [];
var len__8410__auto___10216 = arguments.length;
var i__8411__auto___10217 = (0);
while(true){
if((i__8411__auto___10217 < len__8410__auto___10216)){
args__8417__auto__.push((arguments[i__8411__auto___10217]));

var G__10218 = (i__8411__auto___10217 + (1));
i__8411__auto___10217 = G__10218;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((1) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8418__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10213){
var map__10214 = p__10213;
var map__10214__$1 = ((((!((map__10214 == null)))?((((map__10214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10214):map__10214);
var opts = map__10214__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10211){
var G__10212 = cljs.core.first.call(null,seq10211);
var seq10211__$1 = cljs.core.next.call(null,seq10211);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10212,seq10211__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__10220 = arguments.length;
switch (G__10220) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10133__auto___10266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___10266){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___10266){
return (function (state_10244){
var state_val_10245 = (state_10244[(1)]);
if((state_val_10245 === (7))){
var inst_10240 = (state_10244[(2)]);
var state_10244__$1 = state_10244;
var statearr_10246_10267 = state_10244__$1;
(statearr_10246_10267[(2)] = inst_10240);

(statearr_10246_10267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10245 === (1))){
var state_10244__$1 = state_10244;
var statearr_10247_10268 = state_10244__$1;
(statearr_10247_10268[(2)] = null);

(statearr_10247_10268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10245 === (4))){
var inst_10223 = (state_10244[(7)]);
var inst_10223__$1 = (state_10244[(2)]);
var inst_10224 = (inst_10223__$1 == null);
var state_10244__$1 = (function (){var statearr_10248 = state_10244;
(statearr_10248[(7)] = inst_10223__$1);

return statearr_10248;
})();
if(cljs.core.truth_(inst_10224)){
var statearr_10249_10269 = state_10244__$1;
(statearr_10249_10269[(1)] = (5));

} else {
var statearr_10250_10270 = state_10244__$1;
(statearr_10250_10270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10245 === (13))){
var state_10244__$1 = state_10244;
var statearr_10251_10271 = state_10244__$1;
(statearr_10251_10271[(2)] = null);

(statearr_10251_10271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10245 === (6))){
var inst_10223 = (state_10244[(7)]);
var state_10244__$1 = state_10244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10244__$1,(11),to,inst_10223);
} else {
if((state_val_10245 === (3))){
var inst_10242 = (state_10244[(2)]);
var state_10244__$1 = state_10244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10244__$1,inst_10242);
} else {
if((state_val_10245 === (12))){
var state_10244__$1 = state_10244;
var statearr_10252_10272 = state_10244__$1;
(statearr_10252_10272[(2)] = null);

(statearr_10252_10272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10245 === (2))){
var state_10244__$1 = state_10244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10244__$1,(4),from);
} else {
if((state_val_10245 === (11))){
var inst_10233 = (state_10244[(2)]);
var state_10244__$1 = state_10244;
if(cljs.core.truth_(inst_10233)){
var statearr_10253_10273 = state_10244__$1;
(statearr_10253_10273[(1)] = (12));

} else {
var statearr_10254_10274 = state_10244__$1;
(statearr_10254_10274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10245 === (9))){
var state_10244__$1 = state_10244;
var statearr_10255_10275 = state_10244__$1;
(statearr_10255_10275[(2)] = null);

(statearr_10255_10275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10245 === (5))){
var state_10244__$1 = state_10244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10256_10276 = state_10244__$1;
(statearr_10256_10276[(1)] = (8));

} else {
var statearr_10257_10277 = state_10244__$1;
(statearr_10257_10277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10245 === (14))){
var inst_10238 = (state_10244[(2)]);
var state_10244__$1 = state_10244;
var statearr_10258_10278 = state_10244__$1;
(statearr_10258_10278[(2)] = inst_10238);

(statearr_10258_10278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10245 === (10))){
var inst_10230 = (state_10244[(2)]);
var state_10244__$1 = state_10244;
var statearr_10259_10279 = state_10244__$1;
(statearr_10259_10279[(2)] = inst_10230);

(statearr_10259_10279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10245 === (8))){
var inst_10227 = cljs.core.async.close_BANG_.call(null,to);
var state_10244__$1 = state_10244;
var statearr_10260_10280 = state_10244__$1;
(statearr_10260_10280[(2)] = inst_10227);

(statearr_10260_10280[(1)] = (10));


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
});})(c__10133__auto___10266))
;
return ((function (switch__10045__auto__,c__10133__auto___10266){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_10261 = [null,null,null,null,null,null,null,null];
(statearr_10261[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_10261[(1)] = (1));

return statearr_10261;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_10244){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10262){if((e10262 instanceof Object)){
var ex__10049__auto__ = e10262;
var statearr_10263_10281 = state_10244;
(statearr_10263_10281[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10282 = state_10244;
state_10244 = G__10282;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_10244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_10244);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___10266))
})();
var state__10135__auto__ = (function (){var statearr_10264 = f__10134__auto__.call(null);
(statearr_10264[(6)] = c__10133__auto___10266);

return statearr_10264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___10266))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10283){
var vec__10284 = p__10283;
var v = cljs.core.nth.call(null,vec__10284,(0),null);
var p = cljs.core.nth.call(null,vec__10284,(1),null);
var job = vec__10284;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10133__auto___10455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___10455,res,vec__10284,v,p,job,jobs,results){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___10455,res,vec__10284,v,p,job,jobs,results){
return (function (state_10291){
var state_val_10292 = (state_10291[(1)]);
if((state_val_10292 === (1))){
var state_10291__$1 = state_10291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10291__$1,(2),res,v);
} else {
if((state_val_10292 === (2))){
var inst_10288 = (state_10291[(2)]);
var inst_10289 = cljs.core.async.close_BANG_.call(null,res);
var state_10291__$1 = (function (){var statearr_10293 = state_10291;
(statearr_10293[(7)] = inst_10288);

return statearr_10293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10291__$1,inst_10289);
} else {
return null;
}
}
});})(c__10133__auto___10455,res,vec__10284,v,p,job,jobs,results))
;
return ((function (switch__10045__auto__,c__10133__auto___10455,res,vec__10284,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0 = (function (){
var statearr_10294 = [null,null,null,null,null,null,null,null];
(statearr_10294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__);

(statearr_10294[(1)] = (1));

return statearr_10294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1 = (function (state_10291){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10295){if((e10295 instanceof Object)){
var ex__10049__auto__ = e10295;
var statearr_10296_10456 = state_10291;
(statearr_10296_10456[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10457 = state_10291;
state_10291 = G__10457;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__ = function(state_10291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1.call(this,state_10291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___10455,res,vec__10284,v,p,job,jobs,results))
})();
var state__10135__auto__ = (function (){var statearr_10297 = f__10134__auto__.call(null);
(statearr_10297[(6)] = c__10133__auto___10455);

return statearr_10297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___10455,res,vec__10284,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10298){
var vec__10299 = p__10298;
var v = cljs.core.nth.call(null,vec__10299,(0),null);
var p = cljs.core.nth.call(null,vec__10299,(1),null);
var job = vec__10299;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__8209__auto___10458 = n;
var __10459 = (0);
while(true){
if((__10459 < n__8209__auto___10458)){
var G__10302_10460 = type;
var G__10302_10461__$1 = (((G__10302_10460 instanceof cljs.core.Keyword))?G__10302_10460.fqn:null);
switch (G__10302_10461__$1) {
case "compute":
var c__10133__auto___10463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10459,c__10133__auto___10463,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (__10459,c__10133__auto___10463,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async){
return (function (state_10315){
var state_val_10316 = (state_10315[(1)]);
if((state_val_10316 === (1))){
var state_10315__$1 = state_10315;
var statearr_10317_10464 = state_10315__$1;
(statearr_10317_10464[(2)] = null);

(statearr_10317_10464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10316 === (2))){
var state_10315__$1 = state_10315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10315__$1,(4),jobs);
} else {
if((state_val_10316 === (3))){
var inst_10313 = (state_10315[(2)]);
var state_10315__$1 = state_10315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10315__$1,inst_10313);
} else {
if((state_val_10316 === (4))){
var inst_10305 = (state_10315[(2)]);
var inst_10306 = process.call(null,inst_10305);
var state_10315__$1 = state_10315;
if(cljs.core.truth_(inst_10306)){
var statearr_10318_10465 = state_10315__$1;
(statearr_10318_10465[(1)] = (5));

} else {
var statearr_10319_10466 = state_10315__$1;
(statearr_10319_10466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10316 === (5))){
var state_10315__$1 = state_10315;
var statearr_10320_10467 = state_10315__$1;
(statearr_10320_10467[(2)] = null);

(statearr_10320_10467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10316 === (6))){
var state_10315__$1 = state_10315;
var statearr_10321_10468 = state_10315__$1;
(statearr_10321_10468[(2)] = null);

(statearr_10321_10468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10316 === (7))){
var inst_10311 = (state_10315[(2)]);
var state_10315__$1 = state_10315;
var statearr_10322_10469 = state_10315__$1;
(statearr_10322_10469[(2)] = inst_10311);

(statearr_10322_10469[(1)] = (3));


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
});})(__10459,c__10133__auto___10463,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async))
;
return ((function (__10459,switch__10045__auto__,c__10133__auto___10463,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0 = (function (){
var statearr_10323 = [null,null,null,null,null,null,null];
(statearr_10323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__);

(statearr_10323[(1)] = (1));

return statearr_10323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1 = (function (state_10315){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10324){if((e10324 instanceof Object)){
var ex__10049__auto__ = e10324;
var statearr_10325_10470 = state_10315;
(statearr_10325_10470[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10471 = state_10315;
state_10315 = G__10471;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__ = function(state_10315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1.call(this,state_10315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__;
})()
;})(__10459,switch__10045__auto__,c__10133__auto___10463,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async))
})();
var state__10135__auto__ = (function (){var statearr_10326 = f__10134__auto__.call(null);
(statearr_10326[(6)] = c__10133__auto___10463);

return statearr_10326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(__10459,c__10133__auto___10463,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async))
);


break;
case "async":
var c__10133__auto___10472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10459,c__10133__auto___10472,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (__10459,c__10133__auto___10472,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async){
return (function (state_10339){
var state_val_10340 = (state_10339[(1)]);
if((state_val_10340 === (1))){
var state_10339__$1 = state_10339;
var statearr_10341_10473 = state_10339__$1;
(statearr_10341_10473[(2)] = null);

(statearr_10341_10473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (2))){
var state_10339__$1 = state_10339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10339__$1,(4),jobs);
} else {
if((state_val_10340 === (3))){
var inst_10337 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10339__$1,inst_10337);
} else {
if((state_val_10340 === (4))){
var inst_10329 = (state_10339[(2)]);
var inst_10330 = async.call(null,inst_10329);
var state_10339__$1 = state_10339;
if(cljs.core.truth_(inst_10330)){
var statearr_10342_10474 = state_10339__$1;
(statearr_10342_10474[(1)] = (5));

} else {
var statearr_10343_10475 = state_10339__$1;
(statearr_10343_10475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (5))){
var state_10339__$1 = state_10339;
var statearr_10344_10476 = state_10339__$1;
(statearr_10344_10476[(2)] = null);

(statearr_10344_10476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (6))){
var state_10339__$1 = state_10339;
var statearr_10345_10477 = state_10339__$1;
(statearr_10345_10477[(2)] = null);

(statearr_10345_10477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (7))){
var inst_10335 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
var statearr_10346_10478 = state_10339__$1;
(statearr_10346_10478[(2)] = inst_10335);

(statearr_10346_10478[(1)] = (3));


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
});})(__10459,c__10133__auto___10472,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async))
;
return ((function (__10459,switch__10045__auto__,c__10133__auto___10472,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0 = (function (){
var statearr_10347 = [null,null,null,null,null,null,null];
(statearr_10347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__);

(statearr_10347[(1)] = (1));

return statearr_10347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1 = (function (state_10339){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10348){if((e10348 instanceof Object)){
var ex__10049__auto__ = e10348;
var statearr_10349_10479 = state_10339;
(statearr_10349_10479[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10480 = state_10339;
state_10339 = G__10480;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__ = function(state_10339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1.call(this,state_10339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__;
})()
;})(__10459,switch__10045__auto__,c__10133__auto___10472,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async))
})();
var state__10135__auto__ = (function (){var statearr_10350 = f__10134__auto__.call(null);
(statearr_10350[(6)] = c__10133__auto___10472);

return statearr_10350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(__10459,c__10133__auto___10472,G__10302_10460,G__10302_10461__$1,n__8209__auto___10458,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10302_10461__$1)].join('')));

}

var G__10481 = (__10459 + (1));
__10459 = G__10481;
continue;
} else {
}
break;
}

var c__10133__auto___10482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___10482,jobs,results,process,async){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___10482,jobs,results,process,async){
return (function (state_10372){
var state_val_10373 = (state_10372[(1)]);
if((state_val_10373 === (1))){
var state_10372__$1 = state_10372;
var statearr_10374_10483 = state_10372__$1;
(statearr_10374_10483[(2)] = null);

(statearr_10374_10483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10373 === (2))){
var state_10372__$1 = state_10372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10372__$1,(4),from);
} else {
if((state_val_10373 === (3))){
var inst_10370 = (state_10372[(2)]);
var state_10372__$1 = state_10372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10372__$1,inst_10370);
} else {
if((state_val_10373 === (4))){
var inst_10353 = (state_10372[(7)]);
var inst_10353__$1 = (state_10372[(2)]);
var inst_10354 = (inst_10353__$1 == null);
var state_10372__$1 = (function (){var statearr_10375 = state_10372;
(statearr_10375[(7)] = inst_10353__$1);

return statearr_10375;
})();
if(cljs.core.truth_(inst_10354)){
var statearr_10376_10484 = state_10372__$1;
(statearr_10376_10484[(1)] = (5));

} else {
var statearr_10377_10485 = state_10372__$1;
(statearr_10377_10485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10373 === (5))){
var inst_10356 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10372__$1 = state_10372;
var statearr_10378_10486 = state_10372__$1;
(statearr_10378_10486[(2)] = inst_10356);

(statearr_10378_10486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10373 === (6))){
var inst_10358 = (state_10372[(8)]);
var inst_10353 = (state_10372[(7)]);
var inst_10358__$1 = cljs.core.async.chan.call(null,(1));
var inst_10359 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10360 = [inst_10353,inst_10358__$1];
var inst_10361 = (new cljs.core.PersistentVector(null,2,(5),inst_10359,inst_10360,null));
var state_10372__$1 = (function (){var statearr_10379 = state_10372;
(statearr_10379[(8)] = inst_10358__$1);

return statearr_10379;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10372__$1,(8),jobs,inst_10361);
} else {
if((state_val_10373 === (7))){
var inst_10368 = (state_10372[(2)]);
var state_10372__$1 = state_10372;
var statearr_10380_10487 = state_10372__$1;
(statearr_10380_10487[(2)] = inst_10368);

(statearr_10380_10487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10373 === (8))){
var inst_10358 = (state_10372[(8)]);
var inst_10363 = (state_10372[(2)]);
var state_10372__$1 = (function (){var statearr_10381 = state_10372;
(statearr_10381[(9)] = inst_10363);

return statearr_10381;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10372__$1,(9),results,inst_10358);
} else {
if((state_val_10373 === (9))){
var inst_10365 = (state_10372[(2)]);
var state_10372__$1 = (function (){var statearr_10382 = state_10372;
(statearr_10382[(10)] = inst_10365);

return statearr_10382;
})();
var statearr_10383_10488 = state_10372__$1;
(statearr_10383_10488[(2)] = null);

(statearr_10383_10488[(1)] = (2));


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
});})(c__10133__auto___10482,jobs,results,process,async))
;
return ((function (switch__10045__auto__,c__10133__auto___10482,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0 = (function (){
var statearr_10384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__);

(statearr_10384[(1)] = (1));

return statearr_10384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1 = (function (state_10372){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10385){if((e10385 instanceof Object)){
var ex__10049__auto__ = e10385;
var statearr_10386_10489 = state_10372;
(statearr_10386_10489[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10490 = state_10372;
state_10372 = G__10490;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__ = function(state_10372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1.call(this,state_10372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___10482,jobs,results,process,async))
})();
var state__10135__auto__ = (function (){var statearr_10387 = f__10134__auto__.call(null);
(statearr_10387[(6)] = c__10133__auto___10482);

return statearr_10387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___10482,jobs,results,process,async))
);


var c__10133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto__,jobs,results,process,async){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto__,jobs,results,process,async){
return (function (state_10425){
var state_val_10426 = (state_10425[(1)]);
if((state_val_10426 === (7))){
var inst_10421 = (state_10425[(2)]);
var state_10425__$1 = state_10425;
var statearr_10427_10491 = state_10425__$1;
(statearr_10427_10491[(2)] = inst_10421);

(statearr_10427_10491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (20))){
var state_10425__$1 = state_10425;
var statearr_10428_10492 = state_10425__$1;
(statearr_10428_10492[(2)] = null);

(statearr_10428_10492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (1))){
var state_10425__$1 = state_10425;
var statearr_10429_10493 = state_10425__$1;
(statearr_10429_10493[(2)] = null);

(statearr_10429_10493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (4))){
var inst_10390 = (state_10425[(7)]);
var inst_10390__$1 = (state_10425[(2)]);
var inst_10391 = (inst_10390__$1 == null);
var state_10425__$1 = (function (){var statearr_10430 = state_10425;
(statearr_10430[(7)] = inst_10390__$1);

return statearr_10430;
})();
if(cljs.core.truth_(inst_10391)){
var statearr_10431_10494 = state_10425__$1;
(statearr_10431_10494[(1)] = (5));

} else {
var statearr_10432_10495 = state_10425__$1;
(statearr_10432_10495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (15))){
var inst_10403 = (state_10425[(8)]);
var state_10425__$1 = state_10425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10425__$1,(18),to,inst_10403);
} else {
if((state_val_10426 === (21))){
var inst_10416 = (state_10425[(2)]);
var state_10425__$1 = state_10425;
var statearr_10433_10496 = state_10425__$1;
(statearr_10433_10496[(2)] = inst_10416);

(statearr_10433_10496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (13))){
var inst_10418 = (state_10425[(2)]);
var state_10425__$1 = (function (){var statearr_10434 = state_10425;
(statearr_10434[(9)] = inst_10418);

return statearr_10434;
})();
var statearr_10435_10497 = state_10425__$1;
(statearr_10435_10497[(2)] = null);

(statearr_10435_10497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (6))){
var inst_10390 = (state_10425[(7)]);
var state_10425__$1 = state_10425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10425__$1,(11),inst_10390);
} else {
if((state_val_10426 === (17))){
var inst_10411 = (state_10425[(2)]);
var state_10425__$1 = state_10425;
if(cljs.core.truth_(inst_10411)){
var statearr_10436_10498 = state_10425__$1;
(statearr_10436_10498[(1)] = (19));

} else {
var statearr_10437_10499 = state_10425__$1;
(statearr_10437_10499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (3))){
var inst_10423 = (state_10425[(2)]);
var state_10425__$1 = state_10425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10425__$1,inst_10423);
} else {
if((state_val_10426 === (12))){
var inst_10400 = (state_10425[(10)]);
var state_10425__$1 = state_10425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10425__$1,(14),inst_10400);
} else {
if((state_val_10426 === (2))){
var state_10425__$1 = state_10425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10425__$1,(4),results);
} else {
if((state_val_10426 === (19))){
var state_10425__$1 = state_10425;
var statearr_10438_10500 = state_10425__$1;
(statearr_10438_10500[(2)] = null);

(statearr_10438_10500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (11))){
var inst_10400 = (state_10425[(2)]);
var state_10425__$1 = (function (){var statearr_10439 = state_10425;
(statearr_10439[(10)] = inst_10400);

return statearr_10439;
})();
var statearr_10440_10501 = state_10425__$1;
(statearr_10440_10501[(2)] = null);

(statearr_10440_10501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (9))){
var state_10425__$1 = state_10425;
var statearr_10441_10502 = state_10425__$1;
(statearr_10441_10502[(2)] = null);

(statearr_10441_10502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (5))){
var state_10425__$1 = state_10425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10442_10503 = state_10425__$1;
(statearr_10442_10503[(1)] = (8));

} else {
var statearr_10443_10504 = state_10425__$1;
(statearr_10443_10504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (14))){
var inst_10405 = (state_10425[(11)]);
var inst_10403 = (state_10425[(8)]);
var inst_10403__$1 = (state_10425[(2)]);
var inst_10404 = (inst_10403__$1 == null);
var inst_10405__$1 = cljs.core.not.call(null,inst_10404);
var state_10425__$1 = (function (){var statearr_10444 = state_10425;
(statearr_10444[(11)] = inst_10405__$1);

(statearr_10444[(8)] = inst_10403__$1);

return statearr_10444;
})();
if(inst_10405__$1){
var statearr_10445_10505 = state_10425__$1;
(statearr_10445_10505[(1)] = (15));

} else {
var statearr_10446_10506 = state_10425__$1;
(statearr_10446_10506[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (16))){
var inst_10405 = (state_10425[(11)]);
var state_10425__$1 = state_10425;
var statearr_10447_10507 = state_10425__$1;
(statearr_10447_10507[(2)] = inst_10405);

(statearr_10447_10507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (10))){
var inst_10397 = (state_10425[(2)]);
var state_10425__$1 = state_10425;
var statearr_10448_10508 = state_10425__$1;
(statearr_10448_10508[(2)] = inst_10397);

(statearr_10448_10508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (18))){
var inst_10408 = (state_10425[(2)]);
var state_10425__$1 = state_10425;
var statearr_10449_10509 = state_10425__$1;
(statearr_10449_10509[(2)] = inst_10408);

(statearr_10449_10509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10426 === (8))){
var inst_10394 = cljs.core.async.close_BANG_.call(null,to);
var state_10425__$1 = state_10425;
var statearr_10450_10510 = state_10425__$1;
(statearr_10450_10510[(2)] = inst_10394);

(statearr_10450_10510[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__10133__auto__,jobs,results,process,async))
;
return ((function (switch__10045__auto__,c__10133__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0 = (function (){
var statearr_10451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10451[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__);

(statearr_10451[(1)] = (1));

return statearr_10451;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1 = (function (state_10425){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10452){if((e10452 instanceof Object)){
var ex__10049__auto__ = e10452;
var statearr_10453_10511 = state_10425;
(statearr_10453_10511[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10512 = state_10425;
state_10425 = G__10512;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__ = function(state_10425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1.call(this,state_10425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto__,jobs,results,process,async))
})();
var state__10135__auto__ = (function (){var statearr_10454 = f__10134__auto__.call(null);
(statearr_10454[(6)] = c__10133__auto__);

return statearr_10454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto__,jobs,results,process,async))
);

return c__10133__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__10514 = arguments.length;
switch (G__10514) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__10517 = arguments.length;
switch (G__10517) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__10520 = arguments.length;
switch (G__10520) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10133__auto___10569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___10569,tc,fc){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___10569,tc,fc){
return (function (state_10546){
var state_val_10547 = (state_10546[(1)]);
if((state_val_10547 === (7))){
var inst_10542 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10548_10570 = state_10546__$1;
(statearr_10548_10570[(2)] = inst_10542);

(statearr_10548_10570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (1))){
var state_10546__$1 = state_10546;
var statearr_10549_10571 = state_10546__$1;
(statearr_10549_10571[(2)] = null);

(statearr_10549_10571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (4))){
var inst_10523 = (state_10546[(7)]);
var inst_10523__$1 = (state_10546[(2)]);
var inst_10524 = (inst_10523__$1 == null);
var state_10546__$1 = (function (){var statearr_10550 = state_10546;
(statearr_10550[(7)] = inst_10523__$1);

return statearr_10550;
})();
if(cljs.core.truth_(inst_10524)){
var statearr_10551_10572 = state_10546__$1;
(statearr_10551_10572[(1)] = (5));

} else {
var statearr_10552_10573 = state_10546__$1;
(statearr_10552_10573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (13))){
var state_10546__$1 = state_10546;
var statearr_10553_10574 = state_10546__$1;
(statearr_10553_10574[(2)] = null);

(statearr_10553_10574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (6))){
var inst_10523 = (state_10546[(7)]);
var inst_10529 = p.call(null,inst_10523);
var state_10546__$1 = state_10546;
if(cljs.core.truth_(inst_10529)){
var statearr_10554_10575 = state_10546__$1;
(statearr_10554_10575[(1)] = (9));

} else {
var statearr_10555_10576 = state_10546__$1;
(statearr_10555_10576[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (3))){
var inst_10544 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10546__$1,inst_10544);
} else {
if((state_val_10547 === (12))){
var state_10546__$1 = state_10546;
var statearr_10556_10577 = state_10546__$1;
(statearr_10556_10577[(2)] = null);

(statearr_10556_10577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (2))){
var state_10546__$1 = state_10546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10546__$1,(4),ch);
} else {
if((state_val_10547 === (11))){
var inst_10523 = (state_10546[(7)]);
var inst_10533 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10546__$1,(8),inst_10533,inst_10523);
} else {
if((state_val_10547 === (9))){
var state_10546__$1 = state_10546;
var statearr_10557_10578 = state_10546__$1;
(statearr_10557_10578[(2)] = tc);

(statearr_10557_10578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (5))){
var inst_10526 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10527 = cljs.core.async.close_BANG_.call(null,fc);
var state_10546__$1 = (function (){var statearr_10558 = state_10546;
(statearr_10558[(8)] = inst_10526);

return statearr_10558;
})();
var statearr_10559_10579 = state_10546__$1;
(statearr_10559_10579[(2)] = inst_10527);

(statearr_10559_10579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (14))){
var inst_10540 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10560_10580 = state_10546__$1;
(statearr_10560_10580[(2)] = inst_10540);

(statearr_10560_10580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (10))){
var state_10546__$1 = state_10546;
var statearr_10561_10581 = state_10546__$1;
(statearr_10561_10581[(2)] = fc);

(statearr_10561_10581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (8))){
var inst_10535 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
if(cljs.core.truth_(inst_10535)){
var statearr_10562_10582 = state_10546__$1;
(statearr_10562_10582[(1)] = (12));

} else {
var statearr_10563_10583 = state_10546__$1;
(statearr_10563_10583[(1)] = (13));

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
});})(c__10133__auto___10569,tc,fc))
;
return ((function (switch__10045__auto__,c__10133__auto___10569,tc,fc){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_10564 = [null,null,null,null,null,null,null,null,null];
(statearr_10564[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_10564[(1)] = (1));

return statearr_10564;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_10546){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10565){if((e10565 instanceof Object)){
var ex__10049__auto__ = e10565;
var statearr_10566_10584 = state_10546;
(statearr_10566_10584[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10585 = state_10546;
state_10546 = G__10585;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_10546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_10546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___10569,tc,fc))
})();
var state__10135__auto__ = (function (){var statearr_10567 = f__10134__auto__.call(null);
(statearr_10567[(6)] = c__10133__auto___10569);

return statearr_10567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___10569,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto__){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto__){
return (function (state_10606){
var state_val_10607 = (state_10606[(1)]);
if((state_val_10607 === (7))){
var inst_10602 = (state_10606[(2)]);
var state_10606__$1 = state_10606;
var statearr_10608_10626 = state_10606__$1;
(statearr_10608_10626[(2)] = inst_10602);

(statearr_10608_10626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10607 === (1))){
var inst_10586 = init;
var state_10606__$1 = (function (){var statearr_10609 = state_10606;
(statearr_10609[(7)] = inst_10586);

return statearr_10609;
})();
var statearr_10610_10627 = state_10606__$1;
(statearr_10610_10627[(2)] = null);

(statearr_10610_10627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10607 === (4))){
var inst_10589 = (state_10606[(8)]);
var inst_10589__$1 = (state_10606[(2)]);
var inst_10590 = (inst_10589__$1 == null);
var state_10606__$1 = (function (){var statearr_10611 = state_10606;
(statearr_10611[(8)] = inst_10589__$1);

return statearr_10611;
})();
if(cljs.core.truth_(inst_10590)){
var statearr_10612_10628 = state_10606__$1;
(statearr_10612_10628[(1)] = (5));

} else {
var statearr_10613_10629 = state_10606__$1;
(statearr_10613_10629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10607 === (6))){
var inst_10589 = (state_10606[(8)]);
var inst_10593 = (state_10606[(9)]);
var inst_10586 = (state_10606[(7)]);
var inst_10593__$1 = f.call(null,inst_10586,inst_10589);
var inst_10594 = cljs.core.reduced_QMARK_.call(null,inst_10593__$1);
var state_10606__$1 = (function (){var statearr_10614 = state_10606;
(statearr_10614[(9)] = inst_10593__$1);

return statearr_10614;
})();
if(inst_10594){
var statearr_10615_10630 = state_10606__$1;
(statearr_10615_10630[(1)] = (8));

} else {
var statearr_10616_10631 = state_10606__$1;
(statearr_10616_10631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10607 === (3))){
var inst_10604 = (state_10606[(2)]);
var state_10606__$1 = state_10606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10606__$1,inst_10604);
} else {
if((state_val_10607 === (2))){
var state_10606__$1 = state_10606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10606__$1,(4),ch);
} else {
if((state_val_10607 === (9))){
var inst_10593 = (state_10606[(9)]);
var inst_10586 = inst_10593;
var state_10606__$1 = (function (){var statearr_10617 = state_10606;
(statearr_10617[(7)] = inst_10586);

return statearr_10617;
})();
var statearr_10618_10632 = state_10606__$1;
(statearr_10618_10632[(2)] = null);

(statearr_10618_10632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10607 === (5))){
var inst_10586 = (state_10606[(7)]);
var state_10606__$1 = state_10606;
var statearr_10619_10633 = state_10606__$1;
(statearr_10619_10633[(2)] = inst_10586);

(statearr_10619_10633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10607 === (10))){
var inst_10600 = (state_10606[(2)]);
var state_10606__$1 = state_10606;
var statearr_10620_10634 = state_10606__$1;
(statearr_10620_10634[(2)] = inst_10600);

(statearr_10620_10634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10607 === (8))){
var inst_10593 = (state_10606[(9)]);
var inst_10596 = cljs.core.deref.call(null,inst_10593);
var state_10606__$1 = state_10606;
var statearr_10621_10635 = state_10606__$1;
(statearr_10621_10635[(2)] = inst_10596);

(statearr_10621_10635[(1)] = (10));


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
});})(c__10133__auto__))
;
return ((function (switch__10045__auto__,c__10133__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10046__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10046__auto____0 = (function (){
var statearr_10622 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10622[(0)] = cljs$core$async$reduce_$_state_machine__10046__auto__);

(statearr_10622[(1)] = (1));

return statearr_10622;
});
var cljs$core$async$reduce_$_state_machine__10046__auto____1 = (function (state_10606){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10623){if((e10623 instanceof Object)){
var ex__10049__auto__ = e10623;
var statearr_10624_10636 = state_10606;
(statearr_10624_10636[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10637 = state_10606;
state_10606 = G__10637;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10046__auto__ = function(state_10606){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10046__auto____1.call(this,state_10606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10046__auto____0;
cljs$core$async$reduce_$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10046__auto____1;
return cljs$core$async$reduce_$_state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto__))
})();
var state__10135__auto__ = (function (){var statearr_10625 = f__10134__auto__.call(null);
(statearr_10625[(6)] = c__10133__auto__);

return statearr_10625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto__))
);

return c__10133__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto__,f__$1){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto__,f__$1){
return (function (state_10643){
var state_val_10644 = (state_10643[(1)]);
if((state_val_10644 === (1))){
var inst_10638 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10643__$1 = state_10643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10643__$1,(2),inst_10638);
} else {
if((state_val_10644 === (2))){
var inst_10640 = (state_10643[(2)]);
var inst_10641 = f__$1.call(null,inst_10640);
var state_10643__$1 = state_10643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10643__$1,inst_10641);
} else {
return null;
}
}
});})(c__10133__auto__,f__$1))
;
return ((function (switch__10045__auto__,c__10133__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10046__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10046__auto____0 = (function (){
var statearr_10645 = [null,null,null,null,null,null,null];
(statearr_10645[(0)] = cljs$core$async$transduce_$_state_machine__10046__auto__);

(statearr_10645[(1)] = (1));

return statearr_10645;
});
var cljs$core$async$transduce_$_state_machine__10046__auto____1 = (function (state_10643){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10646){if((e10646 instanceof Object)){
var ex__10049__auto__ = e10646;
var statearr_10647_10649 = state_10643;
(statearr_10647_10649[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10650 = state_10643;
state_10643 = G__10650;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10046__auto__ = function(state_10643){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10046__auto____1.call(this,state_10643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10046__auto____0;
cljs$core$async$transduce_$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10046__auto____1;
return cljs$core$async$transduce_$_state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto__,f__$1))
})();
var state__10135__auto__ = (function (){var statearr_10648 = f__10134__auto__.call(null);
(statearr_10648[(6)] = c__10133__auto__);

return statearr_10648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto__,f__$1))
);

return c__10133__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__10652 = arguments.length;
switch (G__10652) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto__){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto__){
return (function (state_10677){
var state_val_10678 = (state_10677[(1)]);
if((state_val_10678 === (7))){
var inst_10659 = (state_10677[(2)]);
var state_10677__$1 = state_10677;
var statearr_10679_10700 = state_10677__$1;
(statearr_10679_10700[(2)] = inst_10659);

(statearr_10679_10700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10678 === (1))){
var inst_10653 = cljs.core.seq.call(null,coll);
var inst_10654 = inst_10653;
var state_10677__$1 = (function (){var statearr_10680 = state_10677;
(statearr_10680[(7)] = inst_10654);

return statearr_10680;
})();
var statearr_10681_10701 = state_10677__$1;
(statearr_10681_10701[(2)] = null);

(statearr_10681_10701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10678 === (4))){
var inst_10654 = (state_10677[(7)]);
var inst_10657 = cljs.core.first.call(null,inst_10654);
var state_10677__$1 = state_10677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10677__$1,(7),ch,inst_10657);
} else {
if((state_val_10678 === (13))){
var inst_10671 = (state_10677[(2)]);
var state_10677__$1 = state_10677;
var statearr_10682_10702 = state_10677__$1;
(statearr_10682_10702[(2)] = inst_10671);

(statearr_10682_10702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10678 === (6))){
var inst_10662 = (state_10677[(2)]);
var state_10677__$1 = state_10677;
if(cljs.core.truth_(inst_10662)){
var statearr_10683_10703 = state_10677__$1;
(statearr_10683_10703[(1)] = (8));

} else {
var statearr_10684_10704 = state_10677__$1;
(statearr_10684_10704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10678 === (3))){
var inst_10675 = (state_10677[(2)]);
var state_10677__$1 = state_10677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10677__$1,inst_10675);
} else {
if((state_val_10678 === (12))){
var state_10677__$1 = state_10677;
var statearr_10685_10705 = state_10677__$1;
(statearr_10685_10705[(2)] = null);

(statearr_10685_10705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10678 === (2))){
var inst_10654 = (state_10677[(7)]);
var state_10677__$1 = state_10677;
if(cljs.core.truth_(inst_10654)){
var statearr_10686_10706 = state_10677__$1;
(statearr_10686_10706[(1)] = (4));

} else {
var statearr_10687_10707 = state_10677__$1;
(statearr_10687_10707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10678 === (11))){
var inst_10668 = cljs.core.async.close_BANG_.call(null,ch);
var state_10677__$1 = state_10677;
var statearr_10688_10708 = state_10677__$1;
(statearr_10688_10708[(2)] = inst_10668);

(statearr_10688_10708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10678 === (9))){
var state_10677__$1 = state_10677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10689_10709 = state_10677__$1;
(statearr_10689_10709[(1)] = (11));

} else {
var statearr_10690_10710 = state_10677__$1;
(statearr_10690_10710[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10678 === (5))){
var inst_10654 = (state_10677[(7)]);
var state_10677__$1 = state_10677;
var statearr_10691_10711 = state_10677__$1;
(statearr_10691_10711[(2)] = inst_10654);

(statearr_10691_10711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10678 === (10))){
var inst_10673 = (state_10677[(2)]);
var state_10677__$1 = state_10677;
var statearr_10692_10712 = state_10677__$1;
(statearr_10692_10712[(2)] = inst_10673);

(statearr_10692_10712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10678 === (8))){
var inst_10654 = (state_10677[(7)]);
var inst_10664 = cljs.core.next.call(null,inst_10654);
var inst_10654__$1 = inst_10664;
var state_10677__$1 = (function (){var statearr_10693 = state_10677;
(statearr_10693[(7)] = inst_10654__$1);

return statearr_10693;
})();
var statearr_10694_10713 = state_10677__$1;
(statearr_10694_10713[(2)] = null);

(statearr_10694_10713[(1)] = (2));


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
});})(c__10133__auto__))
;
return ((function (switch__10045__auto__,c__10133__auto__){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_10695 = [null,null,null,null,null,null,null,null];
(statearr_10695[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_10695[(1)] = (1));

return statearr_10695;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_10677){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10696){if((e10696 instanceof Object)){
var ex__10049__auto__ = e10696;
var statearr_10697_10714 = state_10677;
(statearr_10697_10714[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10715 = state_10677;
state_10677 = G__10715;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_10677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_10677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto__))
})();
var state__10135__auto__ = (function (){var statearr_10698 = f__10134__auto__.call(null);
(statearr_10698[(6)] = c__10133__auto__);

return statearr_10698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto__))
);

return c__10133__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7954__auto__ = (((_ == null))?null:_);
var m__7955__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,_);
} else {
var m__7955__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7955__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,ch);
} else {
var m__7955__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m);
} else {
var m__7955__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10716 = (function (ch,cs,meta10717){
this.ch = ch;
this.cs = cs;
this.meta10717 = meta10717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10718,meta10717__$1){
var self__ = this;
var _10718__$1 = this;
return (new cljs.core.async.t_cljs$core$async10716(self__.ch,self__.cs,meta10717__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10718){
var self__ = this;
var _10718__$1 = this;
return self__.meta10717;
});})(cs))
;

cljs.core.async.t_cljs$core$async10716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10716.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10716.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10716.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10716.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10716.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10717","meta10717",1125424790,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10716";

cljs.core.async.t_cljs$core$async10716.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async10716");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10716 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10716(ch__$1,cs__$1,meta10717){
return (new cljs.core.async.t_cljs$core$async10716(ch__$1,cs__$1,meta10717));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10716(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10133__auto___10938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___10938,cs,m,dchan,dctr,done){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___10938,cs,m,dchan,dctr,done){
return (function (state_10853){
var state_val_10854 = (state_10853[(1)]);
if((state_val_10854 === (7))){
var inst_10849 = (state_10853[(2)]);
var state_10853__$1 = state_10853;
var statearr_10855_10939 = state_10853__$1;
(statearr_10855_10939[(2)] = inst_10849);

(statearr_10855_10939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (20))){
var inst_10752 = (state_10853[(7)]);
var inst_10764 = cljs.core.first.call(null,inst_10752);
var inst_10765 = cljs.core.nth.call(null,inst_10764,(0),null);
var inst_10766 = cljs.core.nth.call(null,inst_10764,(1),null);
var state_10853__$1 = (function (){var statearr_10856 = state_10853;
(statearr_10856[(8)] = inst_10765);

return statearr_10856;
})();
if(cljs.core.truth_(inst_10766)){
var statearr_10857_10940 = state_10853__$1;
(statearr_10857_10940[(1)] = (22));

} else {
var statearr_10858_10941 = state_10853__$1;
(statearr_10858_10941[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (27))){
var inst_10801 = (state_10853[(9)]);
var inst_10796 = (state_10853[(10)]);
var inst_10721 = (state_10853[(11)]);
var inst_10794 = (state_10853[(12)]);
var inst_10801__$1 = cljs.core._nth.call(null,inst_10794,inst_10796);
var inst_10802 = cljs.core.async.put_BANG_.call(null,inst_10801__$1,inst_10721,done);
var state_10853__$1 = (function (){var statearr_10859 = state_10853;
(statearr_10859[(9)] = inst_10801__$1);

return statearr_10859;
})();
if(cljs.core.truth_(inst_10802)){
var statearr_10860_10942 = state_10853__$1;
(statearr_10860_10942[(1)] = (30));

} else {
var statearr_10861_10943 = state_10853__$1;
(statearr_10861_10943[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (1))){
var state_10853__$1 = state_10853;
var statearr_10862_10944 = state_10853__$1;
(statearr_10862_10944[(2)] = null);

(statearr_10862_10944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (24))){
var inst_10752 = (state_10853[(7)]);
var inst_10771 = (state_10853[(2)]);
var inst_10772 = cljs.core.next.call(null,inst_10752);
var inst_10730 = inst_10772;
var inst_10731 = null;
var inst_10732 = (0);
var inst_10733 = (0);
var state_10853__$1 = (function (){var statearr_10863 = state_10853;
(statearr_10863[(13)] = inst_10733);

(statearr_10863[(14)] = inst_10731);

(statearr_10863[(15)] = inst_10730);

(statearr_10863[(16)] = inst_10771);

(statearr_10863[(17)] = inst_10732);

return statearr_10863;
})();
var statearr_10864_10945 = state_10853__$1;
(statearr_10864_10945[(2)] = null);

(statearr_10864_10945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (39))){
var state_10853__$1 = state_10853;
var statearr_10868_10946 = state_10853__$1;
(statearr_10868_10946[(2)] = null);

(statearr_10868_10946[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (4))){
var inst_10721 = (state_10853[(11)]);
var inst_10721__$1 = (state_10853[(2)]);
var inst_10722 = (inst_10721__$1 == null);
var state_10853__$1 = (function (){var statearr_10869 = state_10853;
(statearr_10869[(11)] = inst_10721__$1);

return statearr_10869;
})();
if(cljs.core.truth_(inst_10722)){
var statearr_10870_10947 = state_10853__$1;
(statearr_10870_10947[(1)] = (5));

} else {
var statearr_10871_10948 = state_10853__$1;
(statearr_10871_10948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (15))){
var inst_10733 = (state_10853[(13)]);
var inst_10731 = (state_10853[(14)]);
var inst_10730 = (state_10853[(15)]);
var inst_10732 = (state_10853[(17)]);
var inst_10748 = (state_10853[(2)]);
var inst_10749 = (inst_10733 + (1));
var tmp10865 = inst_10731;
var tmp10866 = inst_10730;
var tmp10867 = inst_10732;
var inst_10730__$1 = tmp10866;
var inst_10731__$1 = tmp10865;
var inst_10732__$1 = tmp10867;
var inst_10733__$1 = inst_10749;
var state_10853__$1 = (function (){var statearr_10872 = state_10853;
(statearr_10872[(13)] = inst_10733__$1);

(statearr_10872[(18)] = inst_10748);

(statearr_10872[(14)] = inst_10731__$1);

(statearr_10872[(15)] = inst_10730__$1);

(statearr_10872[(17)] = inst_10732__$1);

return statearr_10872;
})();
var statearr_10873_10949 = state_10853__$1;
(statearr_10873_10949[(2)] = null);

(statearr_10873_10949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (21))){
var inst_10775 = (state_10853[(2)]);
var state_10853__$1 = state_10853;
var statearr_10877_10950 = state_10853__$1;
(statearr_10877_10950[(2)] = inst_10775);

(statearr_10877_10950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (31))){
var inst_10801 = (state_10853[(9)]);
var inst_10805 = done.call(null,null);
var inst_10806 = cljs.core.async.untap_STAR_.call(null,m,inst_10801);
var state_10853__$1 = (function (){var statearr_10878 = state_10853;
(statearr_10878[(19)] = inst_10805);

return statearr_10878;
})();
var statearr_10879_10951 = state_10853__$1;
(statearr_10879_10951[(2)] = inst_10806);

(statearr_10879_10951[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (32))){
var inst_10793 = (state_10853[(20)]);
var inst_10795 = (state_10853[(21)]);
var inst_10796 = (state_10853[(10)]);
var inst_10794 = (state_10853[(12)]);
var inst_10808 = (state_10853[(2)]);
var inst_10809 = (inst_10796 + (1));
var tmp10874 = inst_10793;
var tmp10875 = inst_10795;
var tmp10876 = inst_10794;
var inst_10793__$1 = tmp10874;
var inst_10794__$1 = tmp10876;
var inst_10795__$1 = tmp10875;
var inst_10796__$1 = inst_10809;
var state_10853__$1 = (function (){var statearr_10880 = state_10853;
(statearr_10880[(20)] = inst_10793__$1);

(statearr_10880[(21)] = inst_10795__$1);

(statearr_10880[(10)] = inst_10796__$1);

(statearr_10880[(22)] = inst_10808);

(statearr_10880[(12)] = inst_10794__$1);

return statearr_10880;
})();
var statearr_10881_10952 = state_10853__$1;
(statearr_10881_10952[(2)] = null);

(statearr_10881_10952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (40))){
var inst_10821 = (state_10853[(23)]);
var inst_10825 = done.call(null,null);
var inst_10826 = cljs.core.async.untap_STAR_.call(null,m,inst_10821);
var state_10853__$1 = (function (){var statearr_10882 = state_10853;
(statearr_10882[(24)] = inst_10825);

return statearr_10882;
})();
var statearr_10883_10953 = state_10853__$1;
(statearr_10883_10953[(2)] = inst_10826);

(statearr_10883_10953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (33))){
var inst_10812 = (state_10853[(25)]);
var inst_10814 = cljs.core.chunked_seq_QMARK_.call(null,inst_10812);
var state_10853__$1 = state_10853;
if(inst_10814){
var statearr_10884_10954 = state_10853__$1;
(statearr_10884_10954[(1)] = (36));

} else {
var statearr_10885_10955 = state_10853__$1;
(statearr_10885_10955[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (13))){
var inst_10742 = (state_10853[(26)]);
var inst_10745 = cljs.core.async.close_BANG_.call(null,inst_10742);
var state_10853__$1 = state_10853;
var statearr_10886_10956 = state_10853__$1;
(statearr_10886_10956[(2)] = inst_10745);

(statearr_10886_10956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (22))){
var inst_10765 = (state_10853[(8)]);
var inst_10768 = cljs.core.async.close_BANG_.call(null,inst_10765);
var state_10853__$1 = state_10853;
var statearr_10887_10957 = state_10853__$1;
(statearr_10887_10957[(2)] = inst_10768);

(statearr_10887_10957[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (36))){
var inst_10812 = (state_10853[(25)]);
var inst_10816 = cljs.core.chunk_first.call(null,inst_10812);
var inst_10817 = cljs.core.chunk_rest.call(null,inst_10812);
var inst_10818 = cljs.core.count.call(null,inst_10816);
var inst_10793 = inst_10817;
var inst_10794 = inst_10816;
var inst_10795 = inst_10818;
var inst_10796 = (0);
var state_10853__$1 = (function (){var statearr_10888 = state_10853;
(statearr_10888[(20)] = inst_10793);

(statearr_10888[(21)] = inst_10795);

(statearr_10888[(10)] = inst_10796);

(statearr_10888[(12)] = inst_10794);

return statearr_10888;
})();
var statearr_10889_10958 = state_10853__$1;
(statearr_10889_10958[(2)] = null);

(statearr_10889_10958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (41))){
var inst_10812 = (state_10853[(25)]);
var inst_10828 = (state_10853[(2)]);
var inst_10829 = cljs.core.next.call(null,inst_10812);
var inst_10793 = inst_10829;
var inst_10794 = null;
var inst_10795 = (0);
var inst_10796 = (0);
var state_10853__$1 = (function (){var statearr_10890 = state_10853;
(statearr_10890[(27)] = inst_10828);

(statearr_10890[(20)] = inst_10793);

(statearr_10890[(21)] = inst_10795);

(statearr_10890[(10)] = inst_10796);

(statearr_10890[(12)] = inst_10794);

return statearr_10890;
})();
var statearr_10891_10959 = state_10853__$1;
(statearr_10891_10959[(2)] = null);

(statearr_10891_10959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (43))){
var state_10853__$1 = state_10853;
var statearr_10892_10960 = state_10853__$1;
(statearr_10892_10960[(2)] = null);

(statearr_10892_10960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (29))){
var inst_10837 = (state_10853[(2)]);
var state_10853__$1 = state_10853;
var statearr_10893_10961 = state_10853__$1;
(statearr_10893_10961[(2)] = inst_10837);

(statearr_10893_10961[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (44))){
var inst_10846 = (state_10853[(2)]);
var state_10853__$1 = (function (){var statearr_10894 = state_10853;
(statearr_10894[(28)] = inst_10846);

return statearr_10894;
})();
var statearr_10895_10962 = state_10853__$1;
(statearr_10895_10962[(2)] = null);

(statearr_10895_10962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (6))){
var inst_10785 = (state_10853[(29)]);
var inst_10784 = cljs.core.deref.call(null,cs);
var inst_10785__$1 = cljs.core.keys.call(null,inst_10784);
var inst_10786 = cljs.core.count.call(null,inst_10785__$1);
var inst_10787 = cljs.core.reset_BANG_.call(null,dctr,inst_10786);
var inst_10792 = cljs.core.seq.call(null,inst_10785__$1);
var inst_10793 = inst_10792;
var inst_10794 = null;
var inst_10795 = (0);
var inst_10796 = (0);
var state_10853__$1 = (function (){var statearr_10896 = state_10853;
(statearr_10896[(20)] = inst_10793);

(statearr_10896[(29)] = inst_10785__$1);

(statearr_10896[(21)] = inst_10795);

(statearr_10896[(10)] = inst_10796);

(statearr_10896[(12)] = inst_10794);

(statearr_10896[(30)] = inst_10787);

return statearr_10896;
})();
var statearr_10897_10963 = state_10853__$1;
(statearr_10897_10963[(2)] = null);

(statearr_10897_10963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (28))){
var inst_10793 = (state_10853[(20)]);
var inst_10812 = (state_10853[(25)]);
var inst_10812__$1 = cljs.core.seq.call(null,inst_10793);
var state_10853__$1 = (function (){var statearr_10898 = state_10853;
(statearr_10898[(25)] = inst_10812__$1);

return statearr_10898;
})();
if(inst_10812__$1){
var statearr_10899_10964 = state_10853__$1;
(statearr_10899_10964[(1)] = (33));

} else {
var statearr_10900_10965 = state_10853__$1;
(statearr_10900_10965[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (25))){
var inst_10795 = (state_10853[(21)]);
var inst_10796 = (state_10853[(10)]);
var inst_10798 = (inst_10796 < inst_10795);
var inst_10799 = inst_10798;
var state_10853__$1 = state_10853;
if(cljs.core.truth_(inst_10799)){
var statearr_10901_10966 = state_10853__$1;
(statearr_10901_10966[(1)] = (27));

} else {
var statearr_10902_10967 = state_10853__$1;
(statearr_10902_10967[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (34))){
var state_10853__$1 = state_10853;
var statearr_10903_10968 = state_10853__$1;
(statearr_10903_10968[(2)] = null);

(statearr_10903_10968[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (17))){
var state_10853__$1 = state_10853;
var statearr_10904_10969 = state_10853__$1;
(statearr_10904_10969[(2)] = null);

(statearr_10904_10969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (3))){
var inst_10851 = (state_10853[(2)]);
var state_10853__$1 = state_10853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10853__$1,inst_10851);
} else {
if((state_val_10854 === (12))){
var inst_10780 = (state_10853[(2)]);
var state_10853__$1 = state_10853;
var statearr_10905_10970 = state_10853__$1;
(statearr_10905_10970[(2)] = inst_10780);

(statearr_10905_10970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (2))){
var state_10853__$1 = state_10853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10853__$1,(4),ch);
} else {
if((state_val_10854 === (23))){
var state_10853__$1 = state_10853;
var statearr_10906_10971 = state_10853__$1;
(statearr_10906_10971[(2)] = null);

(statearr_10906_10971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (35))){
var inst_10835 = (state_10853[(2)]);
var state_10853__$1 = state_10853;
var statearr_10907_10972 = state_10853__$1;
(statearr_10907_10972[(2)] = inst_10835);

(statearr_10907_10972[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (19))){
var inst_10752 = (state_10853[(7)]);
var inst_10756 = cljs.core.chunk_first.call(null,inst_10752);
var inst_10757 = cljs.core.chunk_rest.call(null,inst_10752);
var inst_10758 = cljs.core.count.call(null,inst_10756);
var inst_10730 = inst_10757;
var inst_10731 = inst_10756;
var inst_10732 = inst_10758;
var inst_10733 = (0);
var state_10853__$1 = (function (){var statearr_10908 = state_10853;
(statearr_10908[(13)] = inst_10733);

(statearr_10908[(14)] = inst_10731);

(statearr_10908[(15)] = inst_10730);

(statearr_10908[(17)] = inst_10732);

return statearr_10908;
})();
var statearr_10909_10973 = state_10853__$1;
(statearr_10909_10973[(2)] = null);

(statearr_10909_10973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (11))){
var inst_10730 = (state_10853[(15)]);
var inst_10752 = (state_10853[(7)]);
var inst_10752__$1 = cljs.core.seq.call(null,inst_10730);
var state_10853__$1 = (function (){var statearr_10910 = state_10853;
(statearr_10910[(7)] = inst_10752__$1);

return statearr_10910;
})();
if(inst_10752__$1){
var statearr_10911_10974 = state_10853__$1;
(statearr_10911_10974[(1)] = (16));

} else {
var statearr_10912_10975 = state_10853__$1;
(statearr_10912_10975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (9))){
var inst_10782 = (state_10853[(2)]);
var state_10853__$1 = state_10853;
var statearr_10913_10976 = state_10853__$1;
(statearr_10913_10976[(2)] = inst_10782);

(statearr_10913_10976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (5))){
var inst_10728 = cljs.core.deref.call(null,cs);
var inst_10729 = cljs.core.seq.call(null,inst_10728);
var inst_10730 = inst_10729;
var inst_10731 = null;
var inst_10732 = (0);
var inst_10733 = (0);
var state_10853__$1 = (function (){var statearr_10914 = state_10853;
(statearr_10914[(13)] = inst_10733);

(statearr_10914[(14)] = inst_10731);

(statearr_10914[(15)] = inst_10730);

(statearr_10914[(17)] = inst_10732);

return statearr_10914;
})();
var statearr_10915_10977 = state_10853__$1;
(statearr_10915_10977[(2)] = null);

(statearr_10915_10977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (14))){
var state_10853__$1 = state_10853;
var statearr_10916_10978 = state_10853__$1;
(statearr_10916_10978[(2)] = null);

(statearr_10916_10978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (45))){
var inst_10843 = (state_10853[(2)]);
var state_10853__$1 = state_10853;
var statearr_10917_10979 = state_10853__$1;
(statearr_10917_10979[(2)] = inst_10843);

(statearr_10917_10979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (26))){
var inst_10785 = (state_10853[(29)]);
var inst_10839 = (state_10853[(2)]);
var inst_10840 = cljs.core.seq.call(null,inst_10785);
var state_10853__$1 = (function (){var statearr_10918 = state_10853;
(statearr_10918[(31)] = inst_10839);

return statearr_10918;
})();
if(inst_10840){
var statearr_10919_10980 = state_10853__$1;
(statearr_10919_10980[(1)] = (42));

} else {
var statearr_10920_10981 = state_10853__$1;
(statearr_10920_10981[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (16))){
var inst_10752 = (state_10853[(7)]);
var inst_10754 = cljs.core.chunked_seq_QMARK_.call(null,inst_10752);
var state_10853__$1 = state_10853;
if(inst_10754){
var statearr_10921_10982 = state_10853__$1;
(statearr_10921_10982[(1)] = (19));

} else {
var statearr_10922_10983 = state_10853__$1;
(statearr_10922_10983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (38))){
var inst_10832 = (state_10853[(2)]);
var state_10853__$1 = state_10853;
var statearr_10923_10984 = state_10853__$1;
(statearr_10923_10984[(2)] = inst_10832);

(statearr_10923_10984[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (30))){
var state_10853__$1 = state_10853;
var statearr_10924_10985 = state_10853__$1;
(statearr_10924_10985[(2)] = null);

(statearr_10924_10985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (10))){
var inst_10733 = (state_10853[(13)]);
var inst_10731 = (state_10853[(14)]);
var inst_10741 = cljs.core._nth.call(null,inst_10731,inst_10733);
var inst_10742 = cljs.core.nth.call(null,inst_10741,(0),null);
var inst_10743 = cljs.core.nth.call(null,inst_10741,(1),null);
var state_10853__$1 = (function (){var statearr_10925 = state_10853;
(statearr_10925[(26)] = inst_10742);

return statearr_10925;
})();
if(cljs.core.truth_(inst_10743)){
var statearr_10926_10986 = state_10853__$1;
(statearr_10926_10986[(1)] = (13));

} else {
var statearr_10927_10987 = state_10853__$1;
(statearr_10927_10987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (18))){
var inst_10778 = (state_10853[(2)]);
var state_10853__$1 = state_10853;
var statearr_10928_10988 = state_10853__$1;
(statearr_10928_10988[(2)] = inst_10778);

(statearr_10928_10988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (42))){
var state_10853__$1 = state_10853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10853__$1,(45),dchan);
} else {
if((state_val_10854 === (37))){
var inst_10812 = (state_10853[(25)]);
var inst_10821 = (state_10853[(23)]);
var inst_10721 = (state_10853[(11)]);
var inst_10821__$1 = cljs.core.first.call(null,inst_10812);
var inst_10822 = cljs.core.async.put_BANG_.call(null,inst_10821__$1,inst_10721,done);
var state_10853__$1 = (function (){var statearr_10929 = state_10853;
(statearr_10929[(23)] = inst_10821__$1);

return statearr_10929;
})();
if(cljs.core.truth_(inst_10822)){
var statearr_10930_10989 = state_10853__$1;
(statearr_10930_10989[(1)] = (39));

} else {
var statearr_10931_10990 = state_10853__$1;
(statearr_10931_10990[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10854 === (8))){
var inst_10733 = (state_10853[(13)]);
var inst_10732 = (state_10853[(17)]);
var inst_10735 = (inst_10733 < inst_10732);
var inst_10736 = inst_10735;
var state_10853__$1 = state_10853;
if(cljs.core.truth_(inst_10736)){
var statearr_10932_10991 = state_10853__$1;
(statearr_10932_10991[(1)] = (10));

} else {
var statearr_10933_10992 = state_10853__$1;
(statearr_10933_10992[(1)] = (11));

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
});})(c__10133__auto___10938,cs,m,dchan,dctr,done))
;
return ((function (switch__10045__auto__,c__10133__auto___10938,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10046__auto__ = null;
var cljs$core$async$mult_$_state_machine__10046__auto____0 = (function (){
var statearr_10934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10934[(0)] = cljs$core$async$mult_$_state_machine__10046__auto__);

(statearr_10934[(1)] = (1));

return statearr_10934;
});
var cljs$core$async$mult_$_state_machine__10046__auto____1 = (function (state_10853){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_10853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e10935){if((e10935 instanceof Object)){
var ex__10049__auto__ = e10935;
var statearr_10936_10993 = state_10853;
(statearr_10936_10993[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10994 = state_10853;
state_10853 = G__10994;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10046__auto__ = function(state_10853){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10046__auto____1.call(this,state_10853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10046__auto____0;
cljs$core$async$mult_$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10046__auto____1;
return cljs$core$async$mult_$_state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___10938,cs,m,dchan,dctr,done))
})();
var state__10135__auto__ = (function (){var statearr_10937 = f__10134__auto__.call(null);
(statearr_10937[(6)] = c__10133__auto___10938);

return statearr_10937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___10938,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__10996 = arguments.length;
switch (G__10996) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,ch);
} else {
var m__7955__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,ch);
} else {
var m__7955__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m);
} else {
var m__7955__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,state_map);
} else {
var m__7955__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,mode);
} else {
var m__7955__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8417__auto__ = [];
var len__8410__auto___11008 = arguments.length;
var i__8411__auto___11009 = (0);
while(true){
if((i__8411__auto___11009 < len__8410__auto___11008)){
args__8417__auto__.push((arguments[i__8411__auto___11009]));

var G__11010 = (i__8411__auto___11009 + (1));
i__8411__auto___11009 = G__11010;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((3) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8418__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11002){
var map__11003 = p__11002;
var map__11003__$1 = ((((!((map__11003 == null)))?((((map__11003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11003):map__11003);
var opts = map__11003__$1;
var statearr_11005_11011 = state;
(statearr_11005_11011[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11003,map__11003__$1,opts){
return (function (val){
var statearr_11006_11012 = state;
(statearr_11006_11012[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11003,map__11003__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11007_11013 = state;
(statearr_11007_11013[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10998){
var G__10999 = cljs.core.first.call(null,seq10998);
var seq10998__$1 = cljs.core.next.call(null,seq10998);
var G__11000 = cljs.core.first.call(null,seq10998__$1);
var seq10998__$2 = cljs.core.next.call(null,seq10998__$1);
var G__11001 = cljs.core.first.call(null,seq10998__$2);
var seq10998__$3 = cljs.core.next.call(null,seq10998__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10999,G__11000,G__11001,seq10998__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11014 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11015){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11015 = meta11015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11016,meta11015__$1){
var self__ = this;
var _11016__$1 = this;
return (new cljs.core.async.t_cljs$core$async11014(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11015__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11016){
var self__ = this;
var _11016__$1 = this;
return self__.meta11015;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11014.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11014.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11014.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11014.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11014.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11014.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11014.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11014.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11015","meta11015",62960505,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11014";

cljs.core.async.t_cljs$core$async11014.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async11014");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11014 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11014(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11015){
return (new cljs.core.async.t_cljs$core$async11014(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11015));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11014(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10133__auto___11178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___11178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___11178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11118){
var state_val_11119 = (state_11118[(1)]);
if((state_val_11119 === (7))){
var inst_11033 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
var statearr_11120_11179 = state_11118__$1;
(statearr_11120_11179[(2)] = inst_11033);

(statearr_11120_11179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (20))){
var inst_11045 = (state_11118[(7)]);
var state_11118__$1 = state_11118;
var statearr_11121_11180 = state_11118__$1;
(statearr_11121_11180[(2)] = inst_11045);

(statearr_11121_11180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (27))){
var state_11118__$1 = state_11118;
var statearr_11122_11181 = state_11118__$1;
(statearr_11122_11181[(2)] = null);

(statearr_11122_11181[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (1))){
var inst_11020 = (state_11118[(8)]);
var inst_11020__$1 = calc_state.call(null);
var inst_11022 = (inst_11020__$1 == null);
var inst_11023 = cljs.core.not.call(null,inst_11022);
var state_11118__$1 = (function (){var statearr_11123 = state_11118;
(statearr_11123[(8)] = inst_11020__$1);

return statearr_11123;
})();
if(inst_11023){
var statearr_11124_11182 = state_11118__$1;
(statearr_11124_11182[(1)] = (2));

} else {
var statearr_11125_11183 = state_11118__$1;
(statearr_11125_11183[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (24))){
var inst_11069 = (state_11118[(9)]);
var inst_11092 = (state_11118[(10)]);
var inst_11078 = (state_11118[(11)]);
var inst_11092__$1 = inst_11069.call(null,inst_11078);
var state_11118__$1 = (function (){var statearr_11126 = state_11118;
(statearr_11126[(10)] = inst_11092__$1);

return statearr_11126;
})();
if(cljs.core.truth_(inst_11092__$1)){
var statearr_11127_11184 = state_11118__$1;
(statearr_11127_11184[(1)] = (29));

} else {
var statearr_11128_11185 = state_11118__$1;
(statearr_11128_11185[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (4))){
var inst_11036 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
if(cljs.core.truth_(inst_11036)){
var statearr_11129_11186 = state_11118__$1;
(statearr_11129_11186[(1)] = (8));

} else {
var statearr_11130_11187 = state_11118__$1;
(statearr_11130_11187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (15))){
var inst_11063 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
if(cljs.core.truth_(inst_11063)){
var statearr_11131_11188 = state_11118__$1;
(statearr_11131_11188[(1)] = (19));

} else {
var statearr_11132_11189 = state_11118__$1;
(statearr_11132_11189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (21))){
var inst_11068 = (state_11118[(12)]);
var inst_11068__$1 = (state_11118[(2)]);
var inst_11069 = cljs.core.get.call(null,inst_11068__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11070 = cljs.core.get.call(null,inst_11068__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11071 = cljs.core.get.call(null,inst_11068__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11118__$1 = (function (){var statearr_11133 = state_11118;
(statearr_11133[(13)] = inst_11070);

(statearr_11133[(9)] = inst_11069);

(statearr_11133[(12)] = inst_11068__$1);

return statearr_11133;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11118__$1,(22),inst_11071);
} else {
if((state_val_11119 === (31))){
var inst_11100 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
if(cljs.core.truth_(inst_11100)){
var statearr_11134_11190 = state_11118__$1;
(statearr_11134_11190[(1)] = (32));

} else {
var statearr_11135_11191 = state_11118__$1;
(statearr_11135_11191[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (32))){
var inst_11077 = (state_11118[(14)]);
var state_11118__$1 = state_11118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11118__$1,(35),out,inst_11077);
} else {
if((state_val_11119 === (33))){
var inst_11068 = (state_11118[(12)]);
var inst_11045 = inst_11068;
var state_11118__$1 = (function (){var statearr_11136 = state_11118;
(statearr_11136[(7)] = inst_11045);

return statearr_11136;
})();
var statearr_11137_11192 = state_11118__$1;
(statearr_11137_11192[(2)] = null);

(statearr_11137_11192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (13))){
var inst_11045 = (state_11118[(7)]);
var inst_11052 = inst_11045.cljs$lang$protocol_mask$partition0$;
var inst_11053 = (inst_11052 & (64));
var inst_11054 = inst_11045.cljs$core$ISeq$;
var inst_11055 = (cljs.core.PROTOCOL_SENTINEL === inst_11054);
var inst_11056 = (inst_11053) || (inst_11055);
var state_11118__$1 = state_11118;
if(cljs.core.truth_(inst_11056)){
var statearr_11138_11193 = state_11118__$1;
(statearr_11138_11193[(1)] = (16));

} else {
var statearr_11139_11194 = state_11118__$1;
(statearr_11139_11194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (22))){
var inst_11078 = (state_11118[(11)]);
var inst_11077 = (state_11118[(14)]);
var inst_11076 = (state_11118[(2)]);
var inst_11077__$1 = cljs.core.nth.call(null,inst_11076,(0),null);
var inst_11078__$1 = cljs.core.nth.call(null,inst_11076,(1),null);
var inst_11079 = (inst_11077__$1 == null);
var inst_11080 = cljs.core._EQ_.call(null,inst_11078__$1,change);
var inst_11081 = (inst_11079) || (inst_11080);
var state_11118__$1 = (function (){var statearr_11140 = state_11118;
(statearr_11140[(11)] = inst_11078__$1);

(statearr_11140[(14)] = inst_11077__$1);

return statearr_11140;
})();
if(cljs.core.truth_(inst_11081)){
var statearr_11141_11195 = state_11118__$1;
(statearr_11141_11195[(1)] = (23));

} else {
var statearr_11142_11196 = state_11118__$1;
(statearr_11142_11196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (36))){
var inst_11068 = (state_11118[(12)]);
var inst_11045 = inst_11068;
var state_11118__$1 = (function (){var statearr_11143 = state_11118;
(statearr_11143[(7)] = inst_11045);

return statearr_11143;
})();
var statearr_11144_11197 = state_11118__$1;
(statearr_11144_11197[(2)] = null);

(statearr_11144_11197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (29))){
var inst_11092 = (state_11118[(10)]);
var state_11118__$1 = state_11118;
var statearr_11145_11198 = state_11118__$1;
(statearr_11145_11198[(2)] = inst_11092);

(statearr_11145_11198[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (6))){
var state_11118__$1 = state_11118;
var statearr_11146_11199 = state_11118__$1;
(statearr_11146_11199[(2)] = false);

(statearr_11146_11199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (28))){
var inst_11088 = (state_11118[(2)]);
var inst_11089 = calc_state.call(null);
var inst_11045 = inst_11089;
var state_11118__$1 = (function (){var statearr_11147 = state_11118;
(statearr_11147[(15)] = inst_11088);

(statearr_11147[(7)] = inst_11045);

return statearr_11147;
})();
var statearr_11148_11200 = state_11118__$1;
(statearr_11148_11200[(2)] = null);

(statearr_11148_11200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (25))){
var inst_11114 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
var statearr_11149_11201 = state_11118__$1;
(statearr_11149_11201[(2)] = inst_11114);

(statearr_11149_11201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (34))){
var inst_11112 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
var statearr_11150_11202 = state_11118__$1;
(statearr_11150_11202[(2)] = inst_11112);

(statearr_11150_11202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (17))){
var state_11118__$1 = state_11118;
var statearr_11151_11203 = state_11118__$1;
(statearr_11151_11203[(2)] = false);

(statearr_11151_11203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (3))){
var state_11118__$1 = state_11118;
var statearr_11152_11204 = state_11118__$1;
(statearr_11152_11204[(2)] = false);

(statearr_11152_11204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (12))){
var inst_11116 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11118__$1,inst_11116);
} else {
if((state_val_11119 === (2))){
var inst_11020 = (state_11118[(8)]);
var inst_11025 = inst_11020.cljs$lang$protocol_mask$partition0$;
var inst_11026 = (inst_11025 & (64));
var inst_11027 = inst_11020.cljs$core$ISeq$;
var inst_11028 = (cljs.core.PROTOCOL_SENTINEL === inst_11027);
var inst_11029 = (inst_11026) || (inst_11028);
var state_11118__$1 = state_11118;
if(cljs.core.truth_(inst_11029)){
var statearr_11153_11205 = state_11118__$1;
(statearr_11153_11205[(1)] = (5));

} else {
var statearr_11154_11206 = state_11118__$1;
(statearr_11154_11206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (23))){
var inst_11077 = (state_11118[(14)]);
var inst_11083 = (inst_11077 == null);
var state_11118__$1 = state_11118;
if(cljs.core.truth_(inst_11083)){
var statearr_11155_11207 = state_11118__$1;
(statearr_11155_11207[(1)] = (26));

} else {
var statearr_11156_11208 = state_11118__$1;
(statearr_11156_11208[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (35))){
var inst_11103 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
if(cljs.core.truth_(inst_11103)){
var statearr_11157_11209 = state_11118__$1;
(statearr_11157_11209[(1)] = (36));

} else {
var statearr_11158_11210 = state_11118__$1;
(statearr_11158_11210[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (19))){
var inst_11045 = (state_11118[(7)]);
var inst_11065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11045);
var state_11118__$1 = state_11118;
var statearr_11159_11211 = state_11118__$1;
(statearr_11159_11211[(2)] = inst_11065);

(statearr_11159_11211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (11))){
var inst_11045 = (state_11118[(7)]);
var inst_11049 = (inst_11045 == null);
var inst_11050 = cljs.core.not.call(null,inst_11049);
var state_11118__$1 = state_11118;
if(inst_11050){
var statearr_11160_11212 = state_11118__$1;
(statearr_11160_11212[(1)] = (13));

} else {
var statearr_11161_11213 = state_11118__$1;
(statearr_11161_11213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (9))){
var inst_11020 = (state_11118[(8)]);
var state_11118__$1 = state_11118;
var statearr_11162_11214 = state_11118__$1;
(statearr_11162_11214[(2)] = inst_11020);

(statearr_11162_11214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (5))){
var state_11118__$1 = state_11118;
var statearr_11163_11215 = state_11118__$1;
(statearr_11163_11215[(2)] = true);

(statearr_11163_11215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (14))){
var state_11118__$1 = state_11118;
var statearr_11164_11216 = state_11118__$1;
(statearr_11164_11216[(2)] = false);

(statearr_11164_11216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (26))){
var inst_11078 = (state_11118[(11)]);
var inst_11085 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11078);
var state_11118__$1 = state_11118;
var statearr_11165_11217 = state_11118__$1;
(statearr_11165_11217[(2)] = inst_11085);

(statearr_11165_11217[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (16))){
var state_11118__$1 = state_11118;
var statearr_11166_11218 = state_11118__$1;
(statearr_11166_11218[(2)] = true);

(statearr_11166_11218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (38))){
var inst_11108 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
var statearr_11167_11219 = state_11118__$1;
(statearr_11167_11219[(2)] = inst_11108);

(statearr_11167_11219[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (30))){
var inst_11070 = (state_11118[(13)]);
var inst_11069 = (state_11118[(9)]);
var inst_11078 = (state_11118[(11)]);
var inst_11095 = cljs.core.empty_QMARK_.call(null,inst_11069);
var inst_11096 = inst_11070.call(null,inst_11078);
var inst_11097 = cljs.core.not.call(null,inst_11096);
var inst_11098 = (inst_11095) && (inst_11097);
var state_11118__$1 = state_11118;
var statearr_11168_11220 = state_11118__$1;
(statearr_11168_11220[(2)] = inst_11098);

(statearr_11168_11220[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (10))){
var inst_11020 = (state_11118[(8)]);
var inst_11041 = (state_11118[(2)]);
var inst_11042 = cljs.core.get.call(null,inst_11041,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11043 = cljs.core.get.call(null,inst_11041,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11044 = cljs.core.get.call(null,inst_11041,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11045 = inst_11020;
var state_11118__$1 = (function (){var statearr_11169 = state_11118;
(statearr_11169[(7)] = inst_11045);

(statearr_11169[(16)] = inst_11043);

(statearr_11169[(17)] = inst_11044);

(statearr_11169[(18)] = inst_11042);

return statearr_11169;
})();
var statearr_11170_11221 = state_11118__$1;
(statearr_11170_11221[(2)] = null);

(statearr_11170_11221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (18))){
var inst_11060 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
var statearr_11171_11222 = state_11118__$1;
(statearr_11171_11222[(2)] = inst_11060);

(statearr_11171_11222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (37))){
var state_11118__$1 = state_11118;
var statearr_11172_11223 = state_11118__$1;
(statearr_11172_11223[(2)] = null);

(statearr_11172_11223[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (8))){
var inst_11020 = (state_11118[(8)]);
var inst_11038 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11020);
var state_11118__$1 = state_11118;
var statearr_11173_11224 = state_11118__$1;
(statearr_11173_11224[(2)] = inst_11038);

(statearr_11173_11224[(1)] = (10));


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
}
}
}
}
}
}
});})(c__10133__auto___11178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10045__auto__,c__10133__auto___11178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10046__auto__ = null;
var cljs$core$async$mix_$_state_machine__10046__auto____0 = (function (){
var statearr_11174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11174[(0)] = cljs$core$async$mix_$_state_machine__10046__auto__);

(statearr_11174[(1)] = (1));

return statearr_11174;
});
var cljs$core$async$mix_$_state_machine__10046__auto____1 = (function (state_11118){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_11118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e11175){if((e11175 instanceof Object)){
var ex__10049__auto__ = e11175;
var statearr_11176_11225 = state_11118;
(statearr_11176_11225[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11226 = state_11118;
state_11118 = G__11226;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10046__auto__ = function(state_11118){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10046__auto____1.call(this,state_11118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10046__auto____0;
cljs$core$async$mix_$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10046__auto____1;
return cljs$core$async$mix_$_state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___11178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10135__auto__ = (function (){var statearr_11177 = f__10134__auto__.call(null);
(statearr_11177[(6)] = c__10133__auto___11178);

return statearr_11177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___11178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7954__auto__ = (((p == null))?null:p);
var m__7955__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7955__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7954__auto__ = (((p == null))?null:p);
var m__7955__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,p,v,ch);
} else {
var m__7955__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11228 = arguments.length;
switch (G__11228) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7954__auto__ = (((p == null))?null:p);
var m__7955__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,p);
} else {
var m__7955__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7954__auto__ = (((p == null))?null:p);
var m__7955__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,p,v);
} else {
var m__7955__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__11232 = arguments.length;
switch (G__11232) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7285__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7285__auto__,mults){
return (function (p1__11230_SHARP_){
if(cljs.core.truth_(p1__11230_SHARP_.call(null,topic))){
return p1__11230_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11230_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7285__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11233 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11234){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11234 = meta11234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11235,meta11234__$1){
var self__ = this;
var _11235__$1 = this;
return (new cljs.core.async.t_cljs$core$async11233(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11234__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11235){
var self__ = this;
var _11235__$1 = this;
return self__.meta11234;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11233.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11234","meta11234",885420596,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11233";

cljs.core.async.t_cljs$core$async11233.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async11233");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11233 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11233(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11234){
return (new cljs.core.async.t_cljs$core$async11233(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11234));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11233(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10133__auto___11353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___11353,mults,ensure_mult,p){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___11353,mults,ensure_mult,p){
return (function (state_11307){
var state_val_11308 = (state_11307[(1)]);
if((state_val_11308 === (7))){
var inst_11303 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
var statearr_11309_11354 = state_11307__$1;
(statearr_11309_11354[(2)] = inst_11303);

(statearr_11309_11354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (20))){
var state_11307__$1 = state_11307;
var statearr_11310_11355 = state_11307__$1;
(statearr_11310_11355[(2)] = null);

(statearr_11310_11355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (1))){
var state_11307__$1 = state_11307;
var statearr_11311_11356 = state_11307__$1;
(statearr_11311_11356[(2)] = null);

(statearr_11311_11356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (24))){
var inst_11286 = (state_11307[(7)]);
var inst_11295 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11286);
var state_11307__$1 = state_11307;
var statearr_11312_11357 = state_11307__$1;
(statearr_11312_11357[(2)] = inst_11295);

(statearr_11312_11357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (4))){
var inst_11238 = (state_11307[(8)]);
var inst_11238__$1 = (state_11307[(2)]);
var inst_11239 = (inst_11238__$1 == null);
var state_11307__$1 = (function (){var statearr_11313 = state_11307;
(statearr_11313[(8)] = inst_11238__$1);

return statearr_11313;
})();
if(cljs.core.truth_(inst_11239)){
var statearr_11314_11358 = state_11307__$1;
(statearr_11314_11358[(1)] = (5));

} else {
var statearr_11315_11359 = state_11307__$1;
(statearr_11315_11359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (15))){
var inst_11280 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
var statearr_11316_11360 = state_11307__$1;
(statearr_11316_11360[(2)] = inst_11280);

(statearr_11316_11360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (21))){
var inst_11300 = (state_11307[(2)]);
var state_11307__$1 = (function (){var statearr_11317 = state_11307;
(statearr_11317[(9)] = inst_11300);

return statearr_11317;
})();
var statearr_11318_11361 = state_11307__$1;
(statearr_11318_11361[(2)] = null);

(statearr_11318_11361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (13))){
var inst_11262 = (state_11307[(10)]);
var inst_11264 = cljs.core.chunked_seq_QMARK_.call(null,inst_11262);
var state_11307__$1 = state_11307;
if(inst_11264){
var statearr_11319_11362 = state_11307__$1;
(statearr_11319_11362[(1)] = (16));

} else {
var statearr_11320_11363 = state_11307__$1;
(statearr_11320_11363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (22))){
var inst_11292 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
if(cljs.core.truth_(inst_11292)){
var statearr_11321_11364 = state_11307__$1;
(statearr_11321_11364[(1)] = (23));

} else {
var statearr_11322_11365 = state_11307__$1;
(statearr_11322_11365[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (6))){
var inst_11238 = (state_11307[(8)]);
var inst_11286 = (state_11307[(7)]);
var inst_11288 = (state_11307[(11)]);
var inst_11286__$1 = topic_fn.call(null,inst_11238);
var inst_11287 = cljs.core.deref.call(null,mults);
var inst_11288__$1 = cljs.core.get.call(null,inst_11287,inst_11286__$1);
var state_11307__$1 = (function (){var statearr_11323 = state_11307;
(statearr_11323[(7)] = inst_11286__$1);

(statearr_11323[(11)] = inst_11288__$1);

return statearr_11323;
})();
if(cljs.core.truth_(inst_11288__$1)){
var statearr_11324_11366 = state_11307__$1;
(statearr_11324_11366[(1)] = (19));

} else {
var statearr_11325_11367 = state_11307__$1;
(statearr_11325_11367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (25))){
var inst_11297 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
var statearr_11326_11368 = state_11307__$1;
(statearr_11326_11368[(2)] = inst_11297);

(statearr_11326_11368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (17))){
var inst_11262 = (state_11307[(10)]);
var inst_11271 = cljs.core.first.call(null,inst_11262);
var inst_11272 = cljs.core.async.muxch_STAR_.call(null,inst_11271);
var inst_11273 = cljs.core.async.close_BANG_.call(null,inst_11272);
var inst_11274 = cljs.core.next.call(null,inst_11262);
var inst_11248 = inst_11274;
var inst_11249 = null;
var inst_11250 = (0);
var inst_11251 = (0);
var state_11307__$1 = (function (){var statearr_11327 = state_11307;
(statearr_11327[(12)] = inst_11251);

(statearr_11327[(13)] = inst_11273);

(statearr_11327[(14)] = inst_11248);

(statearr_11327[(15)] = inst_11249);

(statearr_11327[(16)] = inst_11250);

return statearr_11327;
})();
var statearr_11328_11369 = state_11307__$1;
(statearr_11328_11369[(2)] = null);

(statearr_11328_11369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (3))){
var inst_11305 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11307__$1,inst_11305);
} else {
if((state_val_11308 === (12))){
var inst_11282 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
var statearr_11329_11370 = state_11307__$1;
(statearr_11329_11370[(2)] = inst_11282);

(statearr_11329_11370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (2))){
var state_11307__$1 = state_11307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11307__$1,(4),ch);
} else {
if((state_val_11308 === (23))){
var state_11307__$1 = state_11307;
var statearr_11330_11371 = state_11307__$1;
(statearr_11330_11371[(2)] = null);

(statearr_11330_11371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (19))){
var inst_11238 = (state_11307[(8)]);
var inst_11288 = (state_11307[(11)]);
var inst_11290 = cljs.core.async.muxch_STAR_.call(null,inst_11288);
var state_11307__$1 = state_11307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11307__$1,(22),inst_11290,inst_11238);
} else {
if((state_val_11308 === (11))){
var inst_11262 = (state_11307[(10)]);
var inst_11248 = (state_11307[(14)]);
var inst_11262__$1 = cljs.core.seq.call(null,inst_11248);
var state_11307__$1 = (function (){var statearr_11331 = state_11307;
(statearr_11331[(10)] = inst_11262__$1);

return statearr_11331;
})();
if(inst_11262__$1){
var statearr_11332_11372 = state_11307__$1;
(statearr_11332_11372[(1)] = (13));

} else {
var statearr_11333_11373 = state_11307__$1;
(statearr_11333_11373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (9))){
var inst_11284 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
var statearr_11334_11374 = state_11307__$1;
(statearr_11334_11374[(2)] = inst_11284);

(statearr_11334_11374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (5))){
var inst_11245 = cljs.core.deref.call(null,mults);
var inst_11246 = cljs.core.vals.call(null,inst_11245);
var inst_11247 = cljs.core.seq.call(null,inst_11246);
var inst_11248 = inst_11247;
var inst_11249 = null;
var inst_11250 = (0);
var inst_11251 = (0);
var state_11307__$1 = (function (){var statearr_11335 = state_11307;
(statearr_11335[(12)] = inst_11251);

(statearr_11335[(14)] = inst_11248);

(statearr_11335[(15)] = inst_11249);

(statearr_11335[(16)] = inst_11250);

return statearr_11335;
})();
var statearr_11336_11375 = state_11307__$1;
(statearr_11336_11375[(2)] = null);

(statearr_11336_11375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (14))){
var state_11307__$1 = state_11307;
var statearr_11340_11376 = state_11307__$1;
(statearr_11340_11376[(2)] = null);

(statearr_11340_11376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (16))){
var inst_11262 = (state_11307[(10)]);
var inst_11266 = cljs.core.chunk_first.call(null,inst_11262);
var inst_11267 = cljs.core.chunk_rest.call(null,inst_11262);
var inst_11268 = cljs.core.count.call(null,inst_11266);
var inst_11248 = inst_11267;
var inst_11249 = inst_11266;
var inst_11250 = inst_11268;
var inst_11251 = (0);
var state_11307__$1 = (function (){var statearr_11341 = state_11307;
(statearr_11341[(12)] = inst_11251);

(statearr_11341[(14)] = inst_11248);

(statearr_11341[(15)] = inst_11249);

(statearr_11341[(16)] = inst_11250);

return statearr_11341;
})();
var statearr_11342_11377 = state_11307__$1;
(statearr_11342_11377[(2)] = null);

(statearr_11342_11377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (10))){
var inst_11251 = (state_11307[(12)]);
var inst_11248 = (state_11307[(14)]);
var inst_11249 = (state_11307[(15)]);
var inst_11250 = (state_11307[(16)]);
var inst_11256 = cljs.core._nth.call(null,inst_11249,inst_11251);
var inst_11257 = cljs.core.async.muxch_STAR_.call(null,inst_11256);
var inst_11258 = cljs.core.async.close_BANG_.call(null,inst_11257);
var inst_11259 = (inst_11251 + (1));
var tmp11337 = inst_11248;
var tmp11338 = inst_11249;
var tmp11339 = inst_11250;
var inst_11248__$1 = tmp11337;
var inst_11249__$1 = tmp11338;
var inst_11250__$1 = tmp11339;
var inst_11251__$1 = inst_11259;
var state_11307__$1 = (function (){var statearr_11343 = state_11307;
(statearr_11343[(12)] = inst_11251__$1);

(statearr_11343[(17)] = inst_11258);

(statearr_11343[(14)] = inst_11248__$1);

(statearr_11343[(15)] = inst_11249__$1);

(statearr_11343[(16)] = inst_11250__$1);

return statearr_11343;
})();
var statearr_11344_11378 = state_11307__$1;
(statearr_11344_11378[(2)] = null);

(statearr_11344_11378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (18))){
var inst_11277 = (state_11307[(2)]);
var state_11307__$1 = state_11307;
var statearr_11345_11379 = state_11307__$1;
(statearr_11345_11379[(2)] = inst_11277);

(statearr_11345_11379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11308 === (8))){
var inst_11251 = (state_11307[(12)]);
var inst_11250 = (state_11307[(16)]);
var inst_11253 = (inst_11251 < inst_11250);
var inst_11254 = inst_11253;
var state_11307__$1 = state_11307;
if(cljs.core.truth_(inst_11254)){
var statearr_11346_11380 = state_11307__$1;
(statearr_11346_11380[(1)] = (10));

} else {
var statearr_11347_11381 = state_11307__$1;
(statearr_11347_11381[(1)] = (11));

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
});})(c__10133__auto___11353,mults,ensure_mult,p))
;
return ((function (switch__10045__auto__,c__10133__auto___11353,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_11348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11348[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_11348[(1)] = (1));

return statearr_11348;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_11307){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_11307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e11349){if((e11349 instanceof Object)){
var ex__10049__auto__ = e11349;
var statearr_11350_11382 = state_11307;
(statearr_11350_11382[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11383 = state_11307;
state_11307 = G__11383;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_11307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_11307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___11353,mults,ensure_mult,p))
})();
var state__10135__auto__ = (function (){var statearr_11351 = f__10134__auto__.call(null);
(statearr_11351[(6)] = c__10133__auto___11353);

return statearr_11351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___11353,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__11385 = arguments.length;
switch (G__11385) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11388 = arguments.length;
switch (G__11388) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__11391 = arguments.length;
switch (G__11391) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10133__auto___11458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___11458,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___11458,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11430){
var state_val_11431 = (state_11430[(1)]);
if((state_val_11431 === (7))){
var state_11430__$1 = state_11430;
var statearr_11432_11459 = state_11430__$1;
(statearr_11432_11459[(2)] = null);

(statearr_11432_11459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (1))){
var state_11430__$1 = state_11430;
var statearr_11433_11460 = state_11430__$1;
(statearr_11433_11460[(2)] = null);

(statearr_11433_11460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (4))){
var inst_11394 = (state_11430[(7)]);
var inst_11396 = (inst_11394 < cnt);
var state_11430__$1 = state_11430;
if(cljs.core.truth_(inst_11396)){
var statearr_11434_11461 = state_11430__$1;
(statearr_11434_11461[(1)] = (6));

} else {
var statearr_11435_11462 = state_11430__$1;
(statearr_11435_11462[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (15))){
var inst_11426 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
var statearr_11436_11463 = state_11430__$1;
(statearr_11436_11463[(2)] = inst_11426);

(statearr_11436_11463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (13))){
var inst_11419 = cljs.core.async.close_BANG_.call(null,out);
var state_11430__$1 = state_11430;
var statearr_11437_11464 = state_11430__$1;
(statearr_11437_11464[(2)] = inst_11419);

(statearr_11437_11464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (6))){
var state_11430__$1 = state_11430;
var statearr_11438_11465 = state_11430__$1;
(statearr_11438_11465[(2)] = null);

(statearr_11438_11465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (3))){
var inst_11428 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11430__$1,inst_11428);
} else {
if((state_val_11431 === (12))){
var inst_11416 = (state_11430[(8)]);
var inst_11416__$1 = (state_11430[(2)]);
var inst_11417 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11416__$1);
var state_11430__$1 = (function (){var statearr_11439 = state_11430;
(statearr_11439[(8)] = inst_11416__$1);

return statearr_11439;
})();
if(cljs.core.truth_(inst_11417)){
var statearr_11440_11466 = state_11430__$1;
(statearr_11440_11466[(1)] = (13));

} else {
var statearr_11441_11467 = state_11430__$1;
(statearr_11441_11467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (2))){
var inst_11393 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11394 = (0);
var state_11430__$1 = (function (){var statearr_11442 = state_11430;
(statearr_11442[(7)] = inst_11394);

(statearr_11442[(9)] = inst_11393);

return statearr_11442;
})();
var statearr_11443_11468 = state_11430__$1;
(statearr_11443_11468[(2)] = null);

(statearr_11443_11468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (11))){
var inst_11394 = (state_11430[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11430,(10),Object,null,(9));
var inst_11403 = chs__$1.call(null,inst_11394);
var inst_11404 = done.call(null,inst_11394);
var inst_11405 = cljs.core.async.take_BANG_.call(null,inst_11403,inst_11404);
var state_11430__$1 = state_11430;
var statearr_11444_11469 = state_11430__$1;
(statearr_11444_11469[(2)] = inst_11405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (9))){
var inst_11394 = (state_11430[(7)]);
var inst_11407 = (state_11430[(2)]);
var inst_11408 = (inst_11394 + (1));
var inst_11394__$1 = inst_11408;
var state_11430__$1 = (function (){var statearr_11445 = state_11430;
(statearr_11445[(7)] = inst_11394__$1);

(statearr_11445[(10)] = inst_11407);

return statearr_11445;
})();
var statearr_11446_11470 = state_11430__$1;
(statearr_11446_11470[(2)] = null);

(statearr_11446_11470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (5))){
var inst_11414 = (state_11430[(2)]);
var state_11430__$1 = (function (){var statearr_11447 = state_11430;
(statearr_11447[(11)] = inst_11414);

return statearr_11447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11430__$1,(12),dchan);
} else {
if((state_val_11431 === (14))){
var inst_11416 = (state_11430[(8)]);
var inst_11421 = cljs.core.apply.call(null,f,inst_11416);
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11430__$1,(16),out,inst_11421);
} else {
if((state_val_11431 === (16))){
var inst_11423 = (state_11430[(2)]);
var state_11430__$1 = (function (){var statearr_11448 = state_11430;
(statearr_11448[(12)] = inst_11423);

return statearr_11448;
})();
var statearr_11449_11471 = state_11430__$1;
(statearr_11449_11471[(2)] = null);

(statearr_11449_11471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (10))){
var inst_11398 = (state_11430[(2)]);
var inst_11399 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11430__$1 = (function (){var statearr_11450 = state_11430;
(statearr_11450[(13)] = inst_11398);

return statearr_11450;
})();
var statearr_11451_11472 = state_11430__$1;
(statearr_11451_11472[(2)] = inst_11399);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (8))){
var inst_11412 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
var statearr_11452_11473 = state_11430__$1;
(statearr_11452_11473[(2)] = inst_11412);

(statearr_11452_11473[(1)] = (5));


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
}
}
});})(c__10133__auto___11458,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10045__auto__,c__10133__auto___11458,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_11453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11453[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_11453[(1)] = (1));

return statearr_11453;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_11430){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_11430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e11454){if((e11454 instanceof Object)){
var ex__10049__auto__ = e11454;
var statearr_11455_11474 = state_11430;
(statearr_11455_11474[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11475 = state_11430;
state_11430 = G__11475;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_11430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_11430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___11458,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10135__auto__ = (function (){var statearr_11456 = f__10134__auto__.call(null);
(statearr_11456[(6)] = c__10133__auto___11458);

return statearr_11456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___11458,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__11478 = arguments.length;
switch (G__11478) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10133__auto___11532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___11532,out){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___11532,out){
return (function (state_11510){
var state_val_11511 = (state_11510[(1)]);
if((state_val_11511 === (7))){
var inst_11490 = (state_11510[(7)]);
var inst_11489 = (state_11510[(8)]);
var inst_11489__$1 = (state_11510[(2)]);
var inst_11490__$1 = cljs.core.nth.call(null,inst_11489__$1,(0),null);
var inst_11491 = cljs.core.nth.call(null,inst_11489__$1,(1),null);
var inst_11492 = (inst_11490__$1 == null);
var state_11510__$1 = (function (){var statearr_11512 = state_11510;
(statearr_11512[(7)] = inst_11490__$1);

(statearr_11512[(9)] = inst_11491);

(statearr_11512[(8)] = inst_11489__$1);

return statearr_11512;
})();
if(cljs.core.truth_(inst_11492)){
var statearr_11513_11533 = state_11510__$1;
(statearr_11513_11533[(1)] = (8));

} else {
var statearr_11514_11534 = state_11510__$1;
(statearr_11514_11534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11511 === (1))){
var inst_11479 = cljs.core.vec.call(null,chs);
var inst_11480 = inst_11479;
var state_11510__$1 = (function (){var statearr_11515 = state_11510;
(statearr_11515[(10)] = inst_11480);

return statearr_11515;
})();
var statearr_11516_11535 = state_11510__$1;
(statearr_11516_11535[(2)] = null);

(statearr_11516_11535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11511 === (4))){
var inst_11480 = (state_11510[(10)]);
var state_11510__$1 = state_11510;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11510__$1,(7),inst_11480);
} else {
if((state_val_11511 === (6))){
var inst_11506 = (state_11510[(2)]);
var state_11510__$1 = state_11510;
var statearr_11517_11536 = state_11510__$1;
(statearr_11517_11536[(2)] = inst_11506);

(statearr_11517_11536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11511 === (3))){
var inst_11508 = (state_11510[(2)]);
var state_11510__$1 = state_11510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11510__$1,inst_11508);
} else {
if((state_val_11511 === (2))){
var inst_11480 = (state_11510[(10)]);
var inst_11482 = cljs.core.count.call(null,inst_11480);
var inst_11483 = (inst_11482 > (0));
var state_11510__$1 = state_11510;
if(cljs.core.truth_(inst_11483)){
var statearr_11519_11537 = state_11510__$1;
(statearr_11519_11537[(1)] = (4));

} else {
var statearr_11520_11538 = state_11510__$1;
(statearr_11520_11538[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11511 === (11))){
var inst_11480 = (state_11510[(10)]);
var inst_11499 = (state_11510[(2)]);
var tmp11518 = inst_11480;
var inst_11480__$1 = tmp11518;
var state_11510__$1 = (function (){var statearr_11521 = state_11510;
(statearr_11521[(10)] = inst_11480__$1);

(statearr_11521[(11)] = inst_11499);

return statearr_11521;
})();
var statearr_11522_11539 = state_11510__$1;
(statearr_11522_11539[(2)] = null);

(statearr_11522_11539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11511 === (9))){
var inst_11490 = (state_11510[(7)]);
var state_11510__$1 = state_11510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11510__$1,(11),out,inst_11490);
} else {
if((state_val_11511 === (5))){
var inst_11504 = cljs.core.async.close_BANG_.call(null,out);
var state_11510__$1 = state_11510;
var statearr_11523_11540 = state_11510__$1;
(statearr_11523_11540[(2)] = inst_11504);

(statearr_11523_11540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11511 === (10))){
var inst_11502 = (state_11510[(2)]);
var state_11510__$1 = state_11510;
var statearr_11524_11541 = state_11510__$1;
(statearr_11524_11541[(2)] = inst_11502);

(statearr_11524_11541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11511 === (8))){
var inst_11480 = (state_11510[(10)]);
var inst_11490 = (state_11510[(7)]);
var inst_11491 = (state_11510[(9)]);
var inst_11489 = (state_11510[(8)]);
var inst_11494 = (function (){var cs = inst_11480;
var vec__11485 = inst_11489;
var v = inst_11490;
var c = inst_11491;
return ((function (cs,vec__11485,v,c,inst_11480,inst_11490,inst_11491,inst_11489,state_val_11511,c__10133__auto___11532,out){
return (function (p1__11476_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11476_SHARP_);
});
;})(cs,vec__11485,v,c,inst_11480,inst_11490,inst_11491,inst_11489,state_val_11511,c__10133__auto___11532,out))
})();
var inst_11495 = cljs.core.filterv.call(null,inst_11494,inst_11480);
var inst_11480__$1 = inst_11495;
var state_11510__$1 = (function (){var statearr_11525 = state_11510;
(statearr_11525[(10)] = inst_11480__$1);

return statearr_11525;
})();
var statearr_11526_11542 = state_11510__$1;
(statearr_11526_11542[(2)] = null);

(statearr_11526_11542[(1)] = (2));


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
});})(c__10133__auto___11532,out))
;
return ((function (switch__10045__auto__,c__10133__auto___11532,out){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_11527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11527[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_11527[(1)] = (1));

return statearr_11527;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_11510){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_11510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e11528){if((e11528 instanceof Object)){
var ex__10049__auto__ = e11528;
var statearr_11529_11543 = state_11510;
(statearr_11529_11543[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11544 = state_11510;
state_11510 = G__11544;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_11510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_11510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___11532,out))
})();
var state__10135__auto__ = (function (){var statearr_11530 = f__10134__auto__.call(null);
(statearr_11530[(6)] = c__10133__auto___11532);

return statearr_11530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___11532,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__11546 = arguments.length;
switch (G__11546) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10133__auto___11591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___11591,out){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___11591,out){
return (function (state_11570){
var state_val_11571 = (state_11570[(1)]);
if((state_val_11571 === (7))){
var inst_11552 = (state_11570[(7)]);
var inst_11552__$1 = (state_11570[(2)]);
var inst_11553 = (inst_11552__$1 == null);
var inst_11554 = cljs.core.not.call(null,inst_11553);
var state_11570__$1 = (function (){var statearr_11572 = state_11570;
(statearr_11572[(7)] = inst_11552__$1);

return statearr_11572;
})();
if(inst_11554){
var statearr_11573_11592 = state_11570__$1;
(statearr_11573_11592[(1)] = (8));

} else {
var statearr_11574_11593 = state_11570__$1;
(statearr_11574_11593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (1))){
var inst_11547 = (0);
var state_11570__$1 = (function (){var statearr_11575 = state_11570;
(statearr_11575[(8)] = inst_11547);

return statearr_11575;
})();
var statearr_11576_11594 = state_11570__$1;
(statearr_11576_11594[(2)] = null);

(statearr_11576_11594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (4))){
var state_11570__$1 = state_11570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11570__$1,(7),ch);
} else {
if((state_val_11571 === (6))){
var inst_11565 = (state_11570[(2)]);
var state_11570__$1 = state_11570;
var statearr_11577_11595 = state_11570__$1;
(statearr_11577_11595[(2)] = inst_11565);

(statearr_11577_11595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (3))){
var inst_11567 = (state_11570[(2)]);
var inst_11568 = cljs.core.async.close_BANG_.call(null,out);
var state_11570__$1 = (function (){var statearr_11578 = state_11570;
(statearr_11578[(9)] = inst_11567);

return statearr_11578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11570__$1,inst_11568);
} else {
if((state_val_11571 === (2))){
var inst_11547 = (state_11570[(8)]);
var inst_11549 = (inst_11547 < n);
var state_11570__$1 = state_11570;
if(cljs.core.truth_(inst_11549)){
var statearr_11579_11596 = state_11570__$1;
(statearr_11579_11596[(1)] = (4));

} else {
var statearr_11580_11597 = state_11570__$1;
(statearr_11580_11597[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (11))){
var inst_11547 = (state_11570[(8)]);
var inst_11557 = (state_11570[(2)]);
var inst_11558 = (inst_11547 + (1));
var inst_11547__$1 = inst_11558;
var state_11570__$1 = (function (){var statearr_11581 = state_11570;
(statearr_11581[(10)] = inst_11557);

(statearr_11581[(8)] = inst_11547__$1);

return statearr_11581;
})();
var statearr_11582_11598 = state_11570__$1;
(statearr_11582_11598[(2)] = null);

(statearr_11582_11598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (9))){
var state_11570__$1 = state_11570;
var statearr_11583_11599 = state_11570__$1;
(statearr_11583_11599[(2)] = null);

(statearr_11583_11599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (5))){
var state_11570__$1 = state_11570;
var statearr_11584_11600 = state_11570__$1;
(statearr_11584_11600[(2)] = null);

(statearr_11584_11600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (10))){
var inst_11562 = (state_11570[(2)]);
var state_11570__$1 = state_11570;
var statearr_11585_11601 = state_11570__$1;
(statearr_11585_11601[(2)] = inst_11562);

(statearr_11585_11601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (8))){
var inst_11552 = (state_11570[(7)]);
var state_11570__$1 = state_11570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11570__$1,(11),out,inst_11552);
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
});})(c__10133__auto___11591,out))
;
return ((function (switch__10045__auto__,c__10133__auto___11591,out){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_11586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11586[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_11586[(1)] = (1));

return statearr_11586;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_11570){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_11570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e11587){if((e11587 instanceof Object)){
var ex__10049__auto__ = e11587;
var statearr_11588_11602 = state_11570;
(statearr_11588_11602[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11603 = state_11570;
state_11570 = G__11603;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_11570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_11570);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___11591,out))
})();
var state__10135__auto__ = (function (){var statearr_11589 = f__10134__auto__.call(null);
(statearr_11589[(6)] = c__10133__auto___11591);

return statearr_11589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___11591,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11605 = (function (f,ch,meta11606){
this.f = f;
this.ch = ch;
this.meta11606 = meta11606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11607,meta11606__$1){
var self__ = this;
var _11607__$1 = this;
return (new cljs.core.async.t_cljs$core$async11605(self__.f,self__.ch,meta11606__$1));
});

cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11607){
var self__ = this;
var _11607__$1 = this;
return self__.meta11606;
});

cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11608 = (function (f,ch,meta11606,_,fn1,meta11609){
this.f = f;
this.ch = ch;
this.meta11606 = meta11606;
this._ = _;
this.fn1 = fn1;
this.meta11609 = meta11609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11610,meta11609__$1){
var self__ = this;
var _11610__$1 = this;
return (new cljs.core.async.t_cljs$core$async11608(self__.f,self__.ch,self__.meta11606,self__._,self__.fn1,meta11609__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11610){
var self__ = this;
var _11610__$1 = this;
return self__.meta11609;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11604_SHARP_){
return f1.call(null,(((p1__11604_SHARP_ == null))?null:self__.f.call(null,p1__11604_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11608.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11606","meta11606",-1927517655,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11605","cljs.core.async/t_cljs$core$async11605",-863378593,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11609","meta11609",-1397528105,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11608";

cljs.core.async.t_cljs$core$async11608.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async11608");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11608 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11608(f__$1,ch__$1,meta11606__$1,___$2,fn1__$1,meta11609){
return (new cljs.core.async.t_cljs$core$async11608(f__$1,ch__$1,meta11606__$1,___$2,fn1__$1,meta11609));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11608(self__.f,self__.ch,self__.meta11606,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7273__auto__ = ret;
if(cljs.core.truth_(and__7273__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7273__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11606","meta11606",-1927517655,null)], null);
});

cljs.core.async.t_cljs$core$async11605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11605";

cljs.core.async.t_cljs$core$async11605.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async11605");
});

cljs.core.async.__GT_t_cljs$core$async11605 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11605(f__$1,ch__$1,meta11606){
return (new cljs.core.async.t_cljs$core$async11605(f__$1,ch__$1,meta11606));
});

}

return (new cljs.core.async.t_cljs$core$async11605(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11611 = (function (f,ch,meta11612){
this.f = f;
this.ch = ch;
this.meta11612 = meta11612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11613,meta11612__$1){
var self__ = this;
var _11613__$1 = this;
return (new cljs.core.async.t_cljs$core$async11611(self__.f,self__.ch,meta11612__$1));
});

cljs.core.async.t_cljs$core$async11611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11613){
var self__ = this;
var _11613__$1 = this;
return self__.meta11612;
});

cljs.core.async.t_cljs$core$async11611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11612","meta11612",253993879,null)], null);
});

cljs.core.async.t_cljs$core$async11611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11611";

cljs.core.async.t_cljs$core$async11611.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async11611");
});

cljs.core.async.__GT_t_cljs$core$async11611 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11611(f__$1,ch__$1,meta11612){
return (new cljs.core.async.t_cljs$core$async11611(f__$1,ch__$1,meta11612));
});

}

return (new cljs.core.async.t_cljs$core$async11611(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11614 = (function (p,ch,meta11615){
this.p = p;
this.ch = ch;
this.meta11615 = meta11615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11616,meta11615__$1){
var self__ = this;
var _11616__$1 = this;
return (new cljs.core.async.t_cljs$core$async11614(self__.p,self__.ch,meta11615__$1));
});

cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11616){
var self__ = this;
var _11616__$1 = this;
return self__.meta11615;
});

cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11615","meta11615",-1068661749,null)], null);
});

cljs.core.async.t_cljs$core$async11614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11614";

cljs.core.async.t_cljs$core$async11614.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async11614");
});

cljs.core.async.__GT_t_cljs$core$async11614 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11614(p__$1,ch__$1,meta11615){
return (new cljs.core.async.t_cljs$core$async11614(p__$1,ch__$1,meta11615));
});

}

return (new cljs.core.async.t_cljs$core$async11614(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__11618 = arguments.length;
switch (G__11618) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10133__auto___11658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___11658,out){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___11658,out){
return (function (state_11639){
var state_val_11640 = (state_11639[(1)]);
if((state_val_11640 === (7))){
var inst_11635 = (state_11639[(2)]);
var state_11639__$1 = state_11639;
var statearr_11641_11659 = state_11639__$1;
(statearr_11641_11659[(2)] = inst_11635);

(statearr_11641_11659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11640 === (1))){
var state_11639__$1 = state_11639;
var statearr_11642_11660 = state_11639__$1;
(statearr_11642_11660[(2)] = null);

(statearr_11642_11660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11640 === (4))){
var inst_11621 = (state_11639[(7)]);
var inst_11621__$1 = (state_11639[(2)]);
var inst_11622 = (inst_11621__$1 == null);
var state_11639__$1 = (function (){var statearr_11643 = state_11639;
(statearr_11643[(7)] = inst_11621__$1);

return statearr_11643;
})();
if(cljs.core.truth_(inst_11622)){
var statearr_11644_11661 = state_11639__$1;
(statearr_11644_11661[(1)] = (5));

} else {
var statearr_11645_11662 = state_11639__$1;
(statearr_11645_11662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11640 === (6))){
var inst_11621 = (state_11639[(7)]);
var inst_11626 = p.call(null,inst_11621);
var state_11639__$1 = state_11639;
if(cljs.core.truth_(inst_11626)){
var statearr_11646_11663 = state_11639__$1;
(statearr_11646_11663[(1)] = (8));

} else {
var statearr_11647_11664 = state_11639__$1;
(statearr_11647_11664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11640 === (3))){
var inst_11637 = (state_11639[(2)]);
var state_11639__$1 = state_11639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11639__$1,inst_11637);
} else {
if((state_val_11640 === (2))){
var state_11639__$1 = state_11639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11639__$1,(4),ch);
} else {
if((state_val_11640 === (11))){
var inst_11629 = (state_11639[(2)]);
var state_11639__$1 = state_11639;
var statearr_11648_11665 = state_11639__$1;
(statearr_11648_11665[(2)] = inst_11629);

(statearr_11648_11665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11640 === (9))){
var state_11639__$1 = state_11639;
var statearr_11649_11666 = state_11639__$1;
(statearr_11649_11666[(2)] = null);

(statearr_11649_11666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11640 === (5))){
var inst_11624 = cljs.core.async.close_BANG_.call(null,out);
var state_11639__$1 = state_11639;
var statearr_11650_11667 = state_11639__$1;
(statearr_11650_11667[(2)] = inst_11624);

(statearr_11650_11667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11640 === (10))){
var inst_11632 = (state_11639[(2)]);
var state_11639__$1 = (function (){var statearr_11651 = state_11639;
(statearr_11651[(8)] = inst_11632);

return statearr_11651;
})();
var statearr_11652_11668 = state_11639__$1;
(statearr_11652_11668[(2)] = null);

(statearr_11652_11668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11640 === (8))){
var inst_11621 = (state_11639[(7)]);
var state_11639__$1 = state_11639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11639__$1,(11),out,inst_11621);
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
});})(c__10133__auto___11658,out))
;
return ((function (switch__10045__auto__,c__10133__auto___11658,out){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_11653 = [null,null,null,null,null,null,null,null,null];
(statearr_11653[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_11653[(1)] = (1));

return statearr_11653;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_11639){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_11639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e11654){if((e11654 instanceof Object)){
var ex__10049__auto__ = e11654;
var statearr_11655_11669 = state_11639;
(statearr_11655_11669[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11670 = state_11639;
state_11639 = G__11670;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_11639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_11639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___11658,out))
})();
var state__10135__auto__ = (function (){var statearr_11656 = f__10134__auto__.call(null);
(statearr_11656[(6)] = c__10133__auto___11658);

return statearr_11656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___11658,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11672 = arguments.length;
switch (G__11672) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto__){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto__){
return (function (state_11735){
var state_val_11736 = (state_11735[(1)]);
if((state_val_11736 === (7))){
var inst_11731 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11737_11775 = state_11735__$1;
(statearr_11737_11775[(2)] = inst_11731);

(statearr_11737_11775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (20))){
var inst_11701 = (state_11735[(7)]);
var inst_11712 = (state_11735[(2)]);
var inst_11713 = cljs.core.next.call(null,inst_11701);
var inst_11687 = inst_11713;
var inst_11688 = null;
var inst_11689 = (0);
var inst_11690 = (0);
var state_11735__$1 = (function (){var statearr_11738 = state_11735;
(statearr_11738[(8)] = inst_11689);

(statearr_11738[(9)] = inst_11688);

(statearr_11738[(10)] = inst_11687);

(statearr_11738[(11)] = inst_11690);

(statearr_11738[(12)] = inst_11712);

return statearr_11738;
})();
var statearr_11739_11776 = state_11735__$1;
(statearr_11739_11776[(2)] = null);

(statearr_11739_11776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (1))){
var state_11735__$1 = state_11735;
var statearr_11740_11777 = state_11735__$1;
(statearr_11740_11777[(2)] = null);

(statearr_11740_11777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (4))){
var inst_11676 = (state_11735[(13)]);
var inst_11676__$1 = (state_11735[(2)]);
var inst_11677 = (inst_11676__$1 == null);
var state_11735__$1 = (function (){var statearr_11741 = state_11735;
(statearr_11741[(13)] = inst_11676__$1);

return statearr_11741;
})();
if(cljs.core.truth_(inst_11677)){
var statearr_11742_11778 = state_11735__$1;
(statearr_11742_11778[(1)] = (5));

} else {
var statearr_11743_11779 = state_11735__$1;
(statearr_11743_11779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (15))){
var state_11735__$1 = state_11735;
var statearr_11747_11780 = state_11735__$1;
(statearr_11747_11780[(2)] = null);

(statearr_11747_11780[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (21))){
var state_11735__$1 = state_11735;
var statearr_11748_11781 = state_11735__$1;
(statearr_11748_11781[(2)] = null);

(statearr_11748_11781[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (13))){
var inst_11689 = (state_11735[(8)]);
var inst_11688 = (state_11735[(9)]);
var inst_11687 = (state_11735[(10)]);
var inst_11690 = (state_11735[(11)]);
var inst_11697 = (state_11735[(2)]);
var inst_11698 = (inst_11690 + (1));
var tmp11744 = inst_11689;
var tmp11745 = inst_11688;
var tmp11746 = inst_11687;
var inst_11687__$1 = tmp11746;
var inst_11688__$1 = tmp11745;
var inst_11689__$1 = tmp11744;
var inst_11690__$1 = inst_11698;
var state_11735__$1 = (function (){var statearr_11749 = state_11735;
(statearr_11749[(8)] = inst_11689__$1);

(statearr_11749[(9)] = inst_11688__$1);

(statearr_11749[(10)] = inst_11687__$1);

(statearr_11749[(11)] = inst_11690__$1);

(statearr_11749[(14)] = inst_11697);

return statearr_11749;
})();
var statearr_11750_11782 = state_11735__$1;
(statearr_11750_11782[(2)] = null);

(statearr_11750_11782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (22))){
var state_11735__$1 = state_11735;
var statearr_11751_11783 = state_11735__$1;
(statearr_11751_11783[(2)] = null);

(statearr_11751_11783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (6))){
var inst_11676 = (state_11735[(13)]);
var inst_11685 = f.call(null,inst_11676);
var inst_11686 = cljs.core.seq.call(null,inst_11685);
var inst_11687 = inst_11686;
var inst_11688 = null;
var inst_11689 = (0);
var inst_11690 = (0);
var state_11735__$1 = (function (){var statearr_11752 = state_11735;
(statearr_11752[(8)] = inst_11689);

(statearr_11752[(9)] = inst_11688);

(statearr_11752[(10)] = inst_11687);

(statearr_11752[(11)] = inst_11690);

return statearr_11752;
})();
var statearr_11753_11784 = state_11735__$1;
(statearr_11753_11784[(2)] = null);

(statearr_11753_11784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (17))){
var inst_11701 = (state_11735[(7)]);
var inst_11705 = cljs.core.chunk_first.call(null,inst_11701);
var inst_11706 = cljs.core.chunk_rest.call(null,inst_11701);
var inst_11707 = cljs.core.count.call(null,inst_11705);
var inst_11687 = inst_11706;
var inst_11688 = inst_11705;
var inst_11689 = inst_11707;
var inst_11690 = (0);
var state_11735__$1 = (function (){var statearr_11754 = state_11735;
(statearr_11754[(8)] = inst_11689);

(statearr_11754[(9)] = inst_11688);

(statearr_11754[(10)] = inst_11687);

(statearr_11754[(11)] = inst_11690);

return statearr_11754;
})();
var statearr_11755_11785 = state_11735__$1;
(statearr_11755_11785[(2)] = null);

(statearr_11755_11785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (3))){
var inst_11733 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11735__$1,inst_11733);
} else {
if((state_val_11736 === (12))){
var inst_11721 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11756_11786 = state_11735__$1;
(statearr_11756_11786[(2)] = inst_11721);

(statearr_11756_11786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (2))){
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11735__$1,(4),in$);
} else {
if((state_val_11736 === (23))){
var inst_11729 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11757_11787 = state_11735__$1;
(statearr_11757_11787[(2)] = inst_11729);

(statearr_11757_11787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (19))){
var inst_11716 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11758_11788 = state_11735__$1;
(statearr_11758_11788[(2)] = inst_11716);

(statearr_11758_11788[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (11))){
var inst_11687 = (state_11735[(10)]);
var inst_11701 = (state_11735[(7)]);
var inst_11701__$1 = cljs.core.seq.call(null,inst_11687);
var state_11735__$1 = (function (){var statearr_11759 = state_11735;
(statearr_11759[(7)] = inst_11701__$1);

return statearr_11759;
})();
if(inst_11701__$1){
var statearr_11760_11789 = state_11735__$1;
(statearr_11760_11789[(1)] = (14));

} else {
var statearr_11761_11790 = state_11735__$1;
(statearr_11761_11790[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (9))){
var inst_11723 = (state_11735[(2)]);
var inst_11724 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11735__$1 = (function (){var statearr_11762 = state_11735;
(statearr_11762[(15)] = inst_11723);

return statearr_11762;
})();
if(cljs.core.truth_(inst_11724)){
var statearr_11763_11791 = state_11735__$1;
(statearr_11763_11791[(1)] = (21));

} else {
var statearr_11764_11792 = state_11735__$1;
(statearr_11764_11792[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (5))){
var inst_11679 = cljs.core.async.close_BANG_.call(null,out);
var state_11735__$1 = state_11735;
var statearr_11765_11793 = state_11735__$1;
(statearr_11765_11793[(2)] = inst_11679);

(statearr_11765_11793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (14))){
var inst_11701 = (state_11735[(7)]);
var inst_11703 = cljs.core.chunked_seq_QMARK_.call(null,inst_11701);
var state_11735__$1 = state_11735;
if(inst_11703){
var statearr_11766_11794 = state_11735__$1;
(statearr_11766_11794[(1)] = (17));

} else {
var statearr_11767_11795 = state_11735__$1;
(statearr_11767_11795[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (16))){
var inst_11719 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11768_11796 = state_11735__$1;
(statearr_11768_11796[(2)] = inst_11719);

(statearr_11768_11796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (10))){
var inst_11688 = (state_11735[(9)]);
var inst_11690 = (state_11735[(11)]);
var inst_11695 = cljs.core._nth.call(null,inst_11688,inst_11690);
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11735__$1,(13),out,inst_11695);
} else {
if((state_val_11736 === (18))){
var inst_11701 = (state_11735[(7)]);
var inst_11710 = cljs.core.first.call(null,inst_11701);
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11735__$1,(20),out,inst_11710);
} else {
if((state_val_11736 === (8))){
var inst_11689 = (state_11735[(8)]);
var inst_11690 = (state_11735[(11)]);
var inst_11692 = (inst_11690 < inst_11689);
var inst_11693 = inst_11692;
var state_11735__$1 = state_11735;
if(cljs.core.truth_(inst_11693)){
var statearr_11769_11797 = state_11735__$1;
(statearr_11769_11797[(1)] = (10));

} else {
var statearr_11770_11798 = state_11735__$1;
(statearr_11770_11798[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10046__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10046__auto____0 = (function (){
var statearr_11771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11771[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10046__auto__);

(statearr_11771[(1)] = (1));

return statearr_11771;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10046__auto____1 = (function (state_11735){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_11735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e11772){if((e11772 instanceof Object)){
var ex__10049__auto__ = e11772;
var statearr_11773_11799 = state_11735;
(statearr_11773_11799[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11800 = state_11735;
state_11735 = G__11800;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10046__auto__ = function(state_11735){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10046__auto____1.call(this,state_11735);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10046__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10046__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto__))
})();
var state__10135__auto__ = (function (){var statearr_11774 = f__10134__auto__.call(null);
(statearr_11774[(6)] = c__10133__auto__);

return statearr_11774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto__))
);

return c__10133__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11802 = arguments.length;
switch (G__11802) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__11805 = arguments.length;
switch (G__11805) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__11808 = arguments.length;
switch (G__11808) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10133__auto___11855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___11855,out){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___11855,out){
return (function (state_11832){
var state_val_11833 = (state_11832[(1)]);
if((state_val_11833 === (7))){
var inst_11827 = (state_11832[(2)]);
var state_11832__$1 = state_11832;
var statearr_11834_11856 = state_11832__$1;
(statearr_11834_11856[(2)] = inst_11827);

(statearr_11834_11856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11833 === (1))){
var inst_11809 = null;
var state_11832__$1 = (function (){var statearr_11835 = state_11832;
(statearr_11835[(7)] = inst_11809);

return statearr_11835;
})();
var statearr_11836_11857 = state_11832__$1;
(statearr_11836_11857[(2)] = null);

(statearr_11836_11857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11833 === (4))){
var inst_11812 = (state_11832[(8)]);
var inst_11812__$1 = (state_11832[(2)]);
var inst_11813 = (inst_11812__$1 == null);
var inst_11814 = cljs.core.not.call(null,inst_11813);
var state_11832__$1 = (function (){var statearr_11837 = state_11832;
(statearr_11837[(8)] = inst_11812__$1);

return statearr_11837;
})();
if(inst_11814){
var statearr_11838_11858 = state_11832__$1;
(statearr_11838_11858[(1)] = (5));

} else {
var statearr_11839_11859 = state_11832__$1;
(statearr_11839_11859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11833 === (6))){
var state_11832__$1 = state_11832;
var statearr_11840_11860 = state_11832__$1;
(statearr_11840_11860[(2)] = null);

(statearr_11840_11860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11833 === (3))){
var inst_11829 = (state_11832[(2)]);
var inst_11830 = cljs.core.async.close_BANG_.call(null,out);
var state_11832__$1 = (function (){var statearr_11841 = state_11832;
(statearr_11841[(9)] = inst_11829);

return statearr_11841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11832__$1,inst_11830);
} else {
if((state_val_11833 === (2))){
var state_11832__$1 = state_11832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11832__$1,(4),ch);
} else {
if((state_val_11833 === (11))){
var inst_11812 = (state_11832[(8)]);
var inst_11821 = (state_11832[(2)]);
var inst_11809 = inst_11812;
var state_11832__$1 = (function (){var statearr_11842 = state_11832;
(statearr_11842[(7)] = inst_11809);

(statearr_11842[(10)] = inst_11821);

return statearr_11842;
})();
var statearr_11843_11861 = state_11832__$1;
(statearr_11843_11861[(2)] = null);

(statearr_11843_11861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11833 === (9))){
var inst_11812 = (state_11832[(8)]);
var state_11832__$1 = state_11832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11832__$1,(11),out,inst_11812);
} else {
if((state_val_11833 === (5))){
var inst_11812 = (state_11832[(8)]);
var inst_11809 = (state_11832[(7)]);
var inst_11816 = cljs.core._EQ_.call(null,inst_11812,inst_11809);
var state_11832__$1 = state_11832;
if(inst_11816){
var statearr_11845_11862 = state_11832__$1;
(statearr_11845_11862[(1)] = (8));

} else {
var statearr_11846_11863 = state_11832__$1;
(statearr_11846_11863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11833 === (10))){
var inst_11824 = (state_11832[(2)]);
var state_11832__$1 = state_11832;
var statearr_11847_11864 = state_11832__$1;
(statearr_11847_11864[(2)] = inst_11824);

(statearr_11847_11864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11833 === (8))){
var inst_11809 = (state_11832[(7)]);
var tmp11844 = inst_11809;
var inst_11809__$1 = tmp11844;
var state_11832__$1 = (function (){var statearr_11848 = state_11832;
(statearr_11848[(7)] = inst_11809__$1);

return statearr_11848;
})();
var statearr_11849_11865 = state_11832__$1;
(statearr_11849_11865[(2)] = null);

(statearr_11849_11865[(1)] = (2));


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
});})(c__10133__auto___11855,out))
;
return ((function (switch__10045__auto__,c__10133__auto___11855,out){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_11850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11850[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_11850[(1)] = (1));

return statearr_11850;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_11832){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_11832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e11851){if((e11851 instanceof Object)){
var ex__10049__auto__ = e11851;
var statearr_11852_11866 = state_11832;
(statearr_11852_11866[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11867 = state_11832;
state_11832 = G__11867;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_11832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_11832);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___11855,out))
})();
var state__10135__auto__ = (function (){var statearr_11853 = f__10134__auto__.call(null);
(statearr_11853[(6)] = c__10133__auto___11855);

return statearr_11853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___11855,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11869 = arguments.length;
switch (G__11869) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10133__auto___11935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___11935,out){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___11935,out){
return (function (state_11907){
var state_val_11908 = (state_11907[(1)]);
if((state_val_11908 === (7))){
var inst_11903 = (state_11907[(2)]);
var state_11907__$1 = state_11907;
var statearr_11909_11936 = state_11907__$1;
(statearr_11909_11936[(2)] = inst_11903);

(statearr_11909_11936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (1))){
var inst_11870 = (new Array(n));
var inst_11871 = inst_11870;
var inst_11872 = (0);
var state_11907__$1 = (function (){var statearr_11910 = state_11907;
(statearr_11910[(7)] = inst_11872);

(statearr_11910[(8)] = inst_11871);

return statearr_11910;
})();
var statearr_11911_11937 = state_11907__$1;
(statearr_11911_11937[(2)] = null);

(statearr_11911_11937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (4))){
var inst_11875 = (state_11907[(9)]);
var inst_11875__$1 = (state_11907[(2)]);
var inst_11876 = (inst_11875__$1 == null);
var inst_11877 = cljs.core.not.call(null,inst_11876);
var state_11907__$1 = (function (){var statearr_11912 = state_11907;
(statearr_11912[(9)] = inst_11875__$1);

return statearr_11912;
})();
if(inst_11877){
var statearr_11913_11938 = state_11907__$1;
(statearr_11913_11938[(1)] = (5));

} else {
var statearr_11914_11939 = state_11907__$1;
(statearr_11914_11939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (15))){
var inst_11897 = (state_11907[(2)]);
var state_11907__$1 = state_11907;
var statearr_11915_11940 = state_11907__$1;
(statearr_11915_11940[(2)] = inst_11897);

(statearr_11915_11940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (13))){
var state_11907__$1 = state_11907;
var statearr_11916_11941 = state_11907__$1;
(statearr_11916_11941[(2)] = null);

(statearr_11916_11941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (6))){
var inst_11872 = (state_11907[(7)]);
var inst_11893 = (inst_11872 > (0));
var state_11907__$1 = state_11907;
if(cljs.core.truth_(inst_11893)){
var statearr_11917_11942 = state_11907__$1;
(statearr_11917_11942[(1)] = (12));

} else {
var statearr_11918_11943 = state_11907__$1;
(statearr_11918_11943[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (3))){
var inst_11905 = (state_11907[(2)]);
var state_11907__$1 = state_11907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11907__$1,inst_11905);
} else {
if((state_val_11908 === (12))){
var inst_11871 = (state_11907[(8)]);
var inst_11895 = cljs.core.vec.call(null,inst_11871);
var state_11907__$1 = state_11907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11907__$1,(15),out,inst_11895);
} else {
if((state_val_11908 === (2))){
var state_11907__$1 = state_11907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11907__$1,(4),ch);
} else {
if((state_val_11908 === (11))){
var inst_11887 = (state_11907[(2)]);
var inst_11888 = (new Array(n));
var inst_11871 = inst_11888;
var inst_11872 = (0);
var state_11907__$1 = (function (){var statearr_11919 = state_11907;
(statearr_11919[(7)] = inst_11872);

(statearr_11919[(10)] = inst_11887);

(statearr_11919[(8)] = inst_11871);

return statearr_11919;
})();
var statearr_11920_11944 = state_11907__$1;
(statearr_11920_11944[(2)] = null);

(statearr_11920_11944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (9))){
var inst_11871 = (state_11907[(8)]);
var inst_11885 = cljs.core.vec.call(null,inst_11871);
var state_11907__$1 = state_11907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11907__$1,(11),out,inst_11885);
} else {
if((state_val_11908 === (5))){
var inst_11872 = (state_11907[(7)]);
var inst_11875 = (state_11907[(9)]);
var inst_11871 = (state_11907[(8)]);
var inst_11880 = (state_11907[(11)]);
var inst_11879 = (inst_11871[inst_11872] = inst_11875);
var inst_11880__$1 = (inst_11872 + (1));
var inst_11881 = (inst_11880__$1 < n);
var state_11907__$1 = (function (){var statearr_11921 = state_11907;
(statearr_11921[(12)] = inst_11879);

(statearr_11921[(11)] = inst_11880__$1);

return statearr_11921;
})();
if(cljs.core.truth_(inst_11881)){
var statearr_11922_11945 = state_11907__$1;
(statearr_11922_11945[(1)] = (8));

} else {
var statearr_11923_11946 = state_11907__$1;
(statearr_11923_11946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (14))){
var inst_11900 = (state_11907[(2)]);
var inst_11901 = cljs.core.async.close_BANG_.call(null,out);
var state_11907__$1 = (function (){var statearr_11925 = state_11907;
(statearr_11925[(13)] = inst_11900);

return statearr_11925;
})();
var statearr_11926_11947 = state_11907__$1;
(statearr_11926_11947[(2)] = inst_11901);

(statearr_11926_11947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (10))){
var inst_11891 = (state_11907[(2)]);
var state_11907__$1 = state_11907;
var statearr_11927_11948 = state_11907__$1;
(statearr_11927_11948[(2)] = inst_11891);

(statearr_11927_11948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (8))){
var inst_11871 = (state_11907[(8)]);
var inst_11880 = (state_11907[(11)]);
var tmp11924 = inst_11871;
var inst_11871__$1 = tmp11924;
var inst_11872 = inst_11880;
var state_11907__$1 = (function (){var statearr_11928 = state_11907;
(statearr_11928[(7)] = inst_11872);

(statearr_11928[(8)] = inst_11871__$1);

return statearr_11928;
})();
var statearr_11929_11949 = state_11907__$1;
(statearr_11929_11949[(2)] = null);

(statearr_11929_11949[(1)] = (2));


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
}
});})(c__10133__auto___11935,out))
;
return ((function (switch__10045__auto__,c__10133__auto___11935,out){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_11930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11930[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_11930[(1)] = (1));

return statearr_11930;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_11907){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_11907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e11931){if((e11931 instanceof Object)){
var ex__10049__auto__ = e11931;
var statearr_11932_11950 = state_11907;
(statearr_11932_11950[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11951 = state_11907;
state_11907 = G__11951;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_11907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_11907);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___11935,out))
})();
var state__10135__auto__ = (function (){var statearr_11933 = f__10134__auto__.call(null);
(statearr_11933[(6)] = c__10133__auto___11935);

return statearr_11933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___11935,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11953 = arguments.length;
switch (G__11953) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10133__auto___12023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10133__auto___12023,out){
return (function (){
var f__10134__auto__ = (function (){var switch__10045__auto__ = ((function (c__10133__auto___12023,out){
return (function (state_11995){
var state_val_11996 = (state_11995[(1)]);
if((state_val_11996 === (7))){
var inst_11991 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_11997_12024 = state_11995__$1;
(statearr_11997_12024[(2)] = inst_11991);

(statearr_11997_12024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (1))){
var inst_11954 = [];
var inst_11955 = inst_11954;
var inst_11956 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11995__$1 = (function (){var statearr_11998 = state_11995;
(statearr_11998[(7)] = inst_11955);

(statearr_11998[(8)] = inst_11956);

return statearr_11998;
})();
var statearr_11999_12025 = state_11995__$1;
(statearr_11999_12025[(2)] = null);

(statearr_11999_12025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (4))){
var inst_11959 = (state_11995[(9)]);
var inst_11959__$1 = (state_11995[(2)]);
var inst_11960 = (inst_11959__$1 == null);
var inst_11961 = cljs.core.not.call(null,inst_11960);
var state_11995__$1 = (function (){var statearr_12000 = state_11995;
(statearr_12000[(9)] = inst_11959__$1);

return statearr_12000;
})();
if(inst_11961){
var statearr_12001_12026 = state_11995__$1;
(statearr_12001_12026[(1)] = (5));

} else {
var statearr_12002_12027 = state_11995__$1;
(statearr_12002_12027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (15))){
var inst_11985 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12003_12028 = state_11995__$1;
(statearr_12003_12028[(2)] = inst_11985);

(statearr_12003_12028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (13))){
var state_11995__$1 = state_11995;
var statearr_12004_12029 = state_11995__$1;
(statearr_12004_12029[(2)] = null);

(statearr_12004_12029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (6))){
var inst_11955 = (state_11995[(7)]);
var inst_11980 = inst_11955.length;
var inst_11981 = (inst_11980 > (0));
var state_11995__$1 = state_11995;
if(cljs.core.truth_(inst_11981)){
var statearr_12005_12030 = state_11995__$1;
(statearr_12005_12030[(1)] = (12));

} else {
var statearr_12006_12031 = state_11995__$1;
(statearr_12006_12031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (3))){
var inst_11993 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11995__$1,inst_11993);
} else {
if((state_val_11996 === (12))){
var inst_11955 = (state_11995[(7)]);
var inst_11983 = cljs.core.vec.call(null,inst_11955);
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11995__$1,(15),out,inst_11983);
} else {
if((state_val_11996 === (2))){
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11995__$1,(4),ch);
} else {
if((state_val_11996 === (11))){
var inst_11963 = (state_11995[(10)]);
var inst_11959 = (state_11995[(9)]);
var inst_11973 = (state_11995[(2)]);
var inst_11974 = [];
var inst_11975 = inst_11974.push(inst_11959);
var inst_11955 = inst_11974;
var inst_11956 = inst_11963;
var state_11995__$1 = (function (){var statearr_12007 = state_11995;
(statearr_12007[(11)] = inst_11975);

(statearr_12007[(12)] = inst_11973);

(statearr_12007[(7)] = inst_11955);

(statearr_12007[(8)] = inst_11956);

return statearr_12007;
})();
var statearr_12008_12032 = state_11995__$1;
(statearr_12008_12032[(2)] = null);

(statearr_12008_12032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (9))){
var inst_11955 = (state_11995[(7)]);
var inst_11971 = cljs.core.vec.call(null,inst_11955);
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11995__$1,(11),out,inst_11971);
} else {
if((state_val_11996 === (5))){
var inst_11963 = (state_11995[(10)]);
var inst_11959 = (state_11995[(9)]);
var inst_11956 = (state_11995[(8)]);
var inst_11963__$1 = f.call(null,inst_11959);
var inst_11964 = cljs.core._EQ_.call(null,inst_11963__$1,inst_11956);
var inst_11965 = cljs.core.keyword_identical_QMARK_.call(null,inst_11956,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11966 = (inst_11964) || (inst_11965);
var state_11995__$1 = (function (){var statearr_12009 = state_11995;
(statearr_12009[(10)] = inst_11963__$1);

return statearr_12009;
})();
if(cljs.core.truth_(inst_11966)){
var statearr_12010_12033 = state_11995__$1;
(statearr_12010_12033[(1)] = (8));

} else {
var statearr_12011_12034 = state_11995__$1;
(statearr_12011_12034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (14))){
var inst_11988 = (state_11995[(2)]);
var inst_11989 = cljs.core.async.close_BANG_.call(null,out);
var state_11995__$1 = (function (){var statearr_12013 = state_11995;
(statearr_12013[(13)] = inst_11988);

return statearr_12013;
})();
var statearr_12014_12035 = state_11995__$1;
(statearr_12014_12035[(2)] = inst_11989);

(statearr_12014_12035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (10))){
var inst_11978 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12015_12036 = state_11995__$1;
(statearr_12015_12036[(2)] = inst_11978);

(statearr_12015_12036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (8))){
var inst_11963 = (state_11995[(10)]);
var inst_11959 = (state_11995[(9)]);
var inst_11955 = (state_11995[(7)]);
var inst_11968 = inst_11955.push(inst_11959);
var tmp12012 = inst_11955;
var inst_11955__$1 = tmp12012;
var inst_11956 = inst_11963;
var state_11995__$1 = (function (){var statearr_12016 = state_11995;
(statearr_12016[(14)] = inst_11968);

(statearr_12016[(7)] = inst_11955__$1);

(statearr_12016[(8)] = inst_11956);

return statearr_12016;
})();
var statearr_12017_12037 = state_11995__$1;
(statearr_12017_12037[(2)] = null);

(statearr_12017_12037[(1)] = (2));


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
}
});})(c__10133__auto___12023,out))
;
return ((function (switch__10045__auto__,c__10133__auto___12023,out){
return (function() {
var cljs$core$async$state_machine__10046__auto__ = null;
var cljs$core$async$state_machine__10046__auto____0 = (function (){
var statearr_12018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12018[(0)] = cljs$core$async$state_machine__10046__auto__);

(statearr_12018[(1)] = (1));

return statearr_12018;
});
var cljs$core$async$state_machine__10046__auto____1 = (function (state_11995){
while(true){
var ret_value__10047__auto__ = (function (){try{while(true){
var result__10048__auto__ = switch__10045__auto__.call(null,state_11995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10048__auto__;
}
break;
}
}catch (e12019){if((e12019 instanceof Object)){
var ex__10049__auto__ = e12019;
var statearr_12020_12038 = state_11995;
(statearr_12020_12038[(5)] = ex__10049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12039 = state_11995;
state_11995 = G__12039;
continue;
} else {
return ret_value__10047__auto__;
}
break;
}
});
cljs$core$async$state_machine__10046__auto__ = function(state_11995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10046__auto____1.call(this,state_11995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10046__auto____0;
cljs$core$async$state_machine__10046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10046__auto____1;
return cljs$core$async$state_machine__10046__auto__;
})()
;})(switch__10045__auto__,c__10133__auto___12023,out))
})();
var state__10135__auto__ = (function (){var statearr_12021 = f__10134__auto__.call(null);
(statearr_12021[(6)] = c__10133__auto___12023);

return statearr_12021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10135__auto__);
});})(c__10133__auto___12023,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map