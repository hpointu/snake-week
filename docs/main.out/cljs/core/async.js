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
var G__13198 = arguments.length;
switch (G__13198) {
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
if(typeof cljs.core.async.t_cljs$core$async13199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13199 = (function (f,blockable,meta13200){
this.f = f;
this.blockable = blockable;
this.meta13200 = meta13200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13201,meta13200__$1){
var self__ = this;
var _13201__$1 = this;
return (new cljs.core.async.t_cljs$core$async13199(self__.f,self__.blockable,meta13200__$1));
});

cljs.core.async.t_cljs$core$async13199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13201){
var self__ = this;
var _13201__$1 = this;
return self__.meta13200;
});

cljs.core.async.t_cljs$core$async13199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13200","meta13200",1577894854,null)], null);
});

cljs.core.async.t_cljs$core$async13199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13199";

cljs.core.async.t_cljs$core$async13199.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async13199");
});

cljs.core.async.__GT_t_cljs$core$async13199 = (function cljs$core$async$__GT_t_cljs$core$async13199(f__$1,blockable__$1,meta13200){
return (new cljs.core.async.t_cljs$core$async13199(f__$1,blockable__$1,meta13200));
});

}

return (new cljs.core.async.t_cljs$core$async13199(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13205 = arguments.length;
switch (G__13205) {
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
var G__13208 = arguments.length;
switch (G__13208) {
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
var G__13211 = arguments.length;
switch (G__13211) {
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
var val_13213 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13213);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13213,ret){
return (function (){
return fn1.call(null,val_13213);
});})(val_13213,ret))
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
var G__13215 = arguments.length;
switch (G__13215) {
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
var n__8209__auto___13217 = n;
var x_13218 = (0);
while(true){
if((x_13218 < n__8209__auto___13217)){
(a[x_13218] = (0));

var G__13219 = (x_13218 + (1));
x_13218 = G__13219;
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

var G__13220 = (i + (1));
i = G__13220;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13221 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13221 = (function (flag,meta13222){
this.flag = flag;
this.meta13222 = meta13222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13223,meta13222__$1){
var self__ = this;
var _13223__$1 = this;
return (new cljs.core.async.t_cljs$core$async13221(self__.flag,meta13222__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13223){
var self__ = this;
var _13223__$1 = this;
return self__.meta13222;
});})(flag))
;

cljs.core.async.t_cljs$core$async13221.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13221.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13221.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13222","meta13222",307198134,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13221";

cljs.core.async.t_cljs$core$async13221.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async13221");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13221 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13221(flag__$1,meta13222){
return (new cljs.core.async.t_cljs$core$async13221(flag__$1,meta13222));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13221(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13224 = (function (flag,cb,meta13225){
this.flag = flag;
this.cb = cb;
this.meta13225 = meta13225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13226,meta13225__$1){
var self__ = this;
var _13226__$1 = this;
return (new cljs.core.async.t_cljs$core$async13224(self__.flag,self__.cb,meta13225__$1));
});

cljs.core.async.t_cljs$core$async13224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13226){
var self__ = this;
var _13226__$1 = this;
return self__.meta13225;
});

cljs.core.async.t_cljs$core$async13224.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13224.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13225","meta13225",-1339678508,null)], null);
});

cljs.core.async.t_cljs$core$async13224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13224";

cljs.core.async.t_cljs$core$async13224.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async13224");
});

cljs.core.async.__GT_t_cljs$core$async13224 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13224(flag__$1,cb__$1,meta13225){
return (new cljs.core.async.t_cljs$core$async13224(flag__$1,cb__$1,meta13225));
});

}

return (new cljs.core.async.t_cljs$core$async13224(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13227_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13227_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13228_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13228_SHARP_,port], null));
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
var G__13229 = (i + (1));
i = G__13229;
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
var len__8410__auto___13235 = arguments.length;
var i__8411__auto___13236 = (0);
while(true){
if((i__8411__auto___13236 < len__8410__auto___13235)){
args__8417__auto__.push((arguments[i__8411__auto___13236]));

var G__13237 = (i__8411__auto___13236 + (1));
i__8411__auto___13236 = G__13237;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((1) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8418__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13232){
var map__13233 = p__13232;
var map__13233__$1 = ((((!((map__13233 == null)))?((((map__13233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13233):map__13233);
var opts = map__13233__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13230){
var G__13231 = cljs.core.first.call(null,seq13230);
var seq13230__$1 = cljs.core.next.call(null,seq13230);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13231,seq13230__$1);
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
var G__13239 = arguments.length;
switch (G__13239) {
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
var c__13152__auto___13285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___13285){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___13285){
return (function (state_13263){
var state_val_13264 = (state_13263[(1)]);
if((state_val_13264 === (7))){
var inst_13259 = (state_13263[(2)]);
var state_13263__$1 = state_13263;
var statearr_13265_13286 = state_13263__$1;
(statearr_13265_13286[(2)] = inst_13259);

(statearr_13265_13286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (1))){
var state_13263__$1 = state_13263;
var statearr_13266_13287 = state_13263__$1;
(statearr_13266_13287[(2)] = null);

(statearr_13266_13287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (4))){
var inst_13242 = (state_13263[(7)]);
var inst_13242__$1 = (state_13263[(2)]);
var inst_13243 = (inst_13242__$1 == null);
var state_13263__$1 = (function (){var statearr_13267 = state_13263;
(statearr_13267[(7)] = inst_13242__$1);

return statearr_13267;
})();
if(cljs.core.truth_(inst_13243)){
var statearr_13268_13288 = state_13263__$1;
(statearr_13268_13288[(1)] = (5));

} else {
var statearr_13269_13289 = state_13263__$1;
(statearr_13269_13289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (13))){
var state_13263__$1 = state_13263;
var statearr_13270_13290 = state_13263__$1;
(statearr_13270_13290[(2)] = null);

(statearr_13270_13290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (6))){
var inst_13242 = (state_13263[(7)]);
var state_13263__$1 = state_13263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13263__$1,(11),to,inst_13242);
} else {
if((state_val_13264 === (3))){
var inst_13261 = (state_13263[(2)]);
var state_13263__$1 = state_13263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13263__$1,inst_13261);
} else {
if((state_val_13264 === (12))){
var state_13263__$1 = state_13263;
var statearr_13271_13291 = state_13263__$1;
(statearr_13271_13291[(2)] = null);

(statearr_13271_13291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (2))){
var state_13263__$1 = state_13263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13263__$1,(4),from);
} else {
if((state_val_13264 === (11))){
var inst_13252 = (state_13263[(2)]);
var state_13263__$1 = state_13263;
if(cljs.core.truth_(inst_13252)){
var statearr_13272_13292 = state_13263__$1;
(statearr_13272_13292[(1)] = (12));

} else {
var statearr_13273_13293 = state_13263__$1;
(statearr_13273_13293[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (9))){
var state_13263__$1 = state_13263;
var statearr_13274_13294 = state_13263__$1;
(statearr_13274_13294[(2)] = null);

(statearr_13274_13294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (5))){
var state_13263__$1 = state_13263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13275_13295 = state_13263__$1;
(statearr_13275_13295[(1)] = (8));

} else {
var statearr_13276_13296 = state_13263__$1;
(statearr_13276_13296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (14))){
var inst_13257 = (state_13263[(2)]);
var state_13263__$1 = state_13263;
var statearr_13277_13297 = state_13263__$1;
(statearr_13277_13297[(2)] = inst_13257);

(statearr_13277_13297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (10))){
var inst_13249 = (state_13263[(2)]);
var state_13263__$1 = state_13263;
var statearr_13278_13298 = state_13263__$1;
(statearr_13278_13298[(2)] = inst_13249);

(statearr_13278_13298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (8))){
var inst_13246 = cljs.core.async.close_BANG_.call(null,to);
var state_13263__$1 = state_13263;
var statearr_13279_13299 = state_13263__$1;
(statearr_13279_13299[(2)] = inst_13246);

(statearr_13279_13299[(1)] = (10));


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
});})(c__13152__auto___13285))
;
return ((function (switch__13064__auto__,c__13152__auto___13285){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_13280 = [null,null,null,null,null,null,null,null];
(statearr_13280[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_13280[(1)] = (1));

return statearr_13280;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_13263){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13281){if((e13281 instanceof Object)){
var ex__13068__auto__ = e13281;
var statearr_13282_13300 = state_13263;
(statearr_13282_13300[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13301 = state_13263;
state_13263 = G__13301;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_13263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_13263);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___13285))
})();
var state__13154__auto__ = (function (){var statearr_13283 = f__13153__auto__.call(null);
(statearr_13283[(6)] = c__13152__auto___13285);

return statearr_13283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___13285))
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
return (function (p__13302){
var vec__13303 = p__13302;
var v = cljs.core.nth.call(null,vec__13303,(0),null);
var p = cljs.core.nth.call(null,vec__13303,(1),null);
var job = vec__13303;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13152__auto___13474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___13474,res,vec__13303,v,p,job,jobs,results){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___13474,res,vec__13303,v,p,job,jobs,results){
return (function (state_13310){
var state_val_13311 = (state_13310[(1)]);
if((state_val_13311 === (1))){
var state_13310__$1 = state_13310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13310__$1,(2),res,v);
} else {
if((state_val_13311 === (2))){
var inst_13307 = (state_13310[(2)]);
var inst_13308 = cljs.core.async.close_BANG_.call(null,res);
var state_13310__$1 = (function (){var statearr_13312 = state_13310;
(statearr_13312[(7)] = inst_13307);

return statearr_13312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13310__$1,inst_13308);
} else {
return null;
}
}
});})(c__13152__auto___13474,res,vec__13303,v,p,job,jobs,results))
;
return ((function (switch__13064__auto__,c__13152__auto___13474,res,vec__13303,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0 = (function (){
var statearr_13313 = [null,null,null,null,null,null,null,null];
(statearr_13313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__);

(statearr_13313[(1)] = (1));

return statearr_13313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1 = (function (state_13310){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13314){if((e13314 instanceof Object)){
var ex__13068__auto__ = e13314;
var statearr_13315_13475 = state_13310;
(statearr_13315_13475[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13476 = state_13310;
state_13310 = G__13476;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__ = function(state_13310){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1.call(this,state_13310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___13474,res,vec__13303,v,p,job,jobs,results))
})();
var state__13154__auto__ = (function (){var statearr_13316 = f__13153__auto__.call(null);
(statearr_13316[(6)] = c__13152__auto___13474);

return statearr_13316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___13474,res,vec__13303,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13317){
var vec__13318 = p__13317;
var v = cljs.core.nth.call(null,vec__13318,(0),null);
var p = cljs.core.nth.call(null,vec__13318,(1),null);
var job = vec__13318;
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
var n__8209__auto___13477 = n;
var __13478 = (0);
while(true){
if((__13478 < n__8209__auto___13477)){
var G__13321_13479 = type;
var G__13321_13480__$1 = (((G__13321_13479 instanceof cljs.core.Keyword))?G__13321_13479.fqn:null);
switch (G__13321_13480__$1) {
case "compute":
var c__13152__auto___13482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13478,c__13152__auto___13482,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (__13478,c__13152__auto___13482,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async){
return (function (state_13334){
var state_val_13335 = (state_13334[(1)]);
if((state_val_13335 === (1))){
var state_13334__$1 = state_13334;
var statearr_13336_13483 = state_13334__$1;
(statearr_13336_13483[(2)] = null);

(statearr_13336_13483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13335 === (2))){
var state_13334__$1 = state_13334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13334__$1,(4),jobs);
} else {
if((state_val_13335 === (3))){
var inst_13332 = (state_13334[(2)]);
var state_13334__$1 = state_13334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13334__$1,inst_13332);
} else {
if((state_val_13335 === (4))){
var inst_13324 = (state_13334[(2)]);
var inst_13325 = process.call(null,inst_13324);
var state_13334__$1 = state_13334;
if(cljs.core.truth_(inst_13325)){
var statearr_13337_13484 = state_13334__$1;
(statearr_13337_13484[(1)] = (5));

} else {
var statearr_13338_13485 = state_13334__$1;
(statearr_13338_13485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13335 === (5))){
var state_13334__$1 = state_13334;
var statearr_13339_13486 = state_13334__$1;
(statearr_13339_13486[(2)] = null);

(statearr_13339_13486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13335 === (6))){
var state_13334__$1 = state_13334;
var statearr_13340_13487 = state_13334__$1;
(statearr_13340_13487[(2)] = null);

(statearr_13340_13487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13335 === (7))){
var inst_13330 = (state_13334[(2)]);
var state_13334__$1 = state_13334;
var statearr_13341_13488 = state_13334__$1;
(statearr_13341_13488[(2)] = inst_13330);

(statearr_13341_13488[(1)] = (3));


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
});})(__13478,c__13152__auto___13482,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async))
;
return ((function (__13478,switch__13064__auto__,c__13152__auto___13482,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0 = (function (){
var statearr_13342 = [null,null,null,null,null,null,null];
(statearr_13342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__);

(statearr_13342[(1)] = (1));

return statearr_13342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1 = (function (state_13334){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13343){if((e13343 instanceof Object)){
var ex__13068__auto__ = e13343;
var statearr_13344_13489 = state_13334;
(statearr_13344_13489[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_13334;
state_13334 = G__13490;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__ = function(state_13334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1.call(this,state_13334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__;
})()
;})(__13478,switch__13064__auto__,c__13152__auto___13482,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async))
})();
var state__13154__auto__ = (function (){var statearr_13345 = f__13153__auto__.call(null);
(statearr_13345[(6)] = c__13152__auto___13482);

return statearr_13345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(__13478,c__13152__auto___13482,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async))
);


break;
case "async":
var c__13152__auto___13491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13478,c__13152__auto___13491,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (__13478,c__13152__auto___13491,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async){
return (function (state_13358){
var state_val_13359 = (state_13358[(1)]);
if((state_val_13359 === (1))){
var state_13358__$1 = state_13358;
var statearr_13360_13492 = state_13358__$1;
(statearr_13360_13492[(2)] = null);

(statearr_13360_13492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (2))){
var state_13358__$1 = state_13358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13358__$1,(4),jobs);
} else {
if((state_val_13359 === (3))){
var inst_13356 = (state_13358[(2)]);
var state_13358__$1 = state_13358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13358__$1,inst_13356);
} else {
if((state_val_13359 === (4))){
var inst_13348 = (state_13358[(2)]);
var inst_13349 = async.call(null,inst_13348);
var state_13358__$1 = state_13358;
if(cljs.core.truth_(inst_13349)){
var statearr_13361_13493 = state_13358__$1;
(statearr_13361_13493[(1)] = (5));

} else {
var statearr_13362_13494 = state_13358__$1;
(statearr_13362_13494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (5))){
var state_13358__$1 = state_13358;
var statearr_13363_13495 = state_13358__$1;
(statearr_13363_13495[(2)] = null);

(statearr_13363_13495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (6))){
var state_13358__$1 = state_13358;
var statearr_13364_13496 = state_13358__$1;
(statearr_13364_13496[(2)] = null);

(statearr_13364_13496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (7))){
var inst_13354 = (state_13358[(2)]);
var state_13358__$1 = state_13358;
var statearr_13365_13497 = state_13358__$1;
(statearr_13365_13497[(2)] = inst_13354);

(statearr_13365_13497[(1)] = (3));


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
});})(__13478,c__13152__auto___13491,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async))
;
return ((function (__13478,switch__13064__auto__,c__13152__auto___13491,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0 = (function (){
var statearr_13366 = [null,null,null,null,null,null,null];
(statearr_13366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__);

(statearr_13366[(1)] = (1));

return statearr_13366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1 = (function (state_13358){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13367){if((e13367 instanceof Object)){
var ex__13068__auto__ = e13367;
var statearr_13368_13498 = state_13358;
(statearr_13368_13498[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13499 = state_13358;
state_13358 = G__13499;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__ = function(state_13358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1.call(this,state_13358);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__;
})()
;})(__13478,switch__13064__auto__,c__13152__auto___13491,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async))
})();
var state__13154__auto__ = (function (){var statearr_13369 = f__13153__auto__.call(null);
(statearr_13369[(6)] = c__13152__auto___13491);

return statearr_13369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(__13478,c__13152__auto___13491,G__13321_13479,G__13321_13480__$1,n__8209__auto___13477,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13321_13480__$1)].join('')));

}

var G__13500 = (__13478 + (1));
__13478 = G__13500;
continue;
} else {
}
break;
}

var c__13152__auto___13501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___13501,jobs,results,process,async){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___13501,jobs,results,process,async){
return (function (state_13391){
var state_val_13392 = (state_13391[(1)]);
if((state_val_13392 === (1))){
var state_13391__$1 = state_13391;
var statearr_13393_13502 = state_13391__$1;
(statearr_13393_13502[(2)] = null);

(statearr_13393_13502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13392 === (2))){
var state_13391__$1 = state_13391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13391__$1,(4),from);
} else {
if((state_val_13392 === (3))){
var inst_13389 = (state_13391[(2)]);
var state_13391__$1 = state_13391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13391__$1,inst_13389);
} else {
if((state_val_13392 === (4))){
var inst_13372 = (state_13391[(7)]);
var inst_13372__$1 = (state_13391[(2)]);
var inst_13373 = (inst_13372__$1 == null);
var state_13391__$1 = (function (){var statearr_13394 = state_13391;
(statearr_13394[(7)] = inst_13372__$1);

return statearr_13394;
})();
if(cljs.core.truth_(inst_13373)){
var statearr_13395_13503 = state_13391__$1;
(statearr_13395_13503[(1)] = (5));

} else {
var statearr_13396_13504 = state_13391__$1;
(statearr_13396_13504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13392 === (5))){
var inst_13375 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13391__$1 = state_13391;
var statearr_13397_13505 = state_13391__$1;
(statearr_13397_13505[(2)] = inst_13375);

(statearr_13397_13505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13392 === (6))){
var inst_13377 = (state_13391[(8)]);
var inst_13372 = (state_13391[(7)]);
var inst_13377__$1 = cljs.core.async.chan.call(null,(1));
var inst_13378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13379 = [inst_13372,inst_13377__$1];
var inst_13380 = (new cljs.core.PersistentVector(null,2,(5),inst_13378,inst_13379,null));
var state_13391__$1 = (function (){var statearr_13398 = state_13391;
(statearr_13398[(8)] = inst_13377__$1);

return statearr_13398;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13391__$1,(8),jobs,inst_13380);
} else {
if((state_val_13392 === (7))){
var inst_13387 = (state_13391[(2)]);
var state_13391__$1 = state_13391;
var statearr_13399_13506 = state_13391__$1;
(statearr_13399_13506[(2)] = inst_13387);

(statearr_13399_13506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13392 === (8))){
var inst_13377 = (state_13391[(8)]);
var inst_13382 = (state_13391[(2)]);
var state_13391__$1 = (function (){var statearr_13400 = state_13391;
(statearr_13400[(9)] = inst_13382);

return statearr_13400;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13391__$1,(9),results,inst_13377);
} else {
if((state_val_13392 === (9))){
var inst_13384 = (state_13391[(2)]);
var state_13391__$1 = (function (){var statearr_13401 = state_13391;
(statearr_13401[(10)] = inst_13384);

return statearr_13401;
})();
var statearr_13402_13507 = state_13391__$1;
(statearr_13402_13507[(2)] = null);

(statearr_13402_13507[(1)] = (2));


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
});})(c__13152__auto___13501,jobs,results,process,async))
;
return ((function (switch__13064__auto__,c__13152__auto___13501,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0 = (function (){
var statearr_13403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__);

(statearr_13403[(1)] = (1));

return statearr_13403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1 = (function (state_13391){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13404){if((e13404 instanceof Object)){
var ex__13068__auto__ = e13404;
var statearr_13405_13508 = state_13391;
(statearr_13405_13508[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13509 = state_13391;
state_13391 = G__13509;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__ = function(state_13391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1.call(this,state_13391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___13501,jobs,results,process,async))
})();
var state__13154__auto__ = (function (){var statearr_13406 = f__13153__auto__.call(null);
(statearr_13406[(6)] = c__13152__auto___13501);

return statearr_13406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___13501,jobs,results,process,async))
);


var c__13152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto__,jobs,results,process,async){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto__,jobs,results,process,async){
return (function (state_13444){
var state_val_13445 = (state_13444[(1)]);
if((state_val_13445 === (7))){
var inst_13440 = (state_13444[(2)]);
var state_13444__$1 = state_13444;
var statearr_13446_13510 = state_13444__$1;
(statearr_13446_13510[(2)] = inst_13440);

(statearr_13446_13510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (20))){
var state_13444__$1 = state_13444;
var statearr_13447_13511 = state_13444__$1;
(statearr_13447_13511[(2)] = null);

(statearr_13447_13511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (1))){
var state_13444__$1 = state_13444;
var statearr_13448_13512 = state_13444__$1;
(statearr_13448_13512[(2)] = null);

(statearr_13448_13512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (4))){
var inst_13409 = (state_13444[(7)]);
var inst_13409__$1 = (state_13444[(2)]);
var inst_13410 = (inst_13409__$1 == null);
var state_13444__$1 = (function (){var statearr_13449 = state_13444;
(statearr_13449[(7)] = inst_13409__$1);

return statearr_13449;
})();
if(cljs.core.truth_(inst_13410)){
var statearr_13450_13513 = state_13444__$1;
(statearr_13450_13513[(1)] = (5));

} else {
var statearr_13451_13514 = state_13444__$1;
(statearr_13451_13514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (15))){
var inst_13422 = (state_13444[(8)]);
var state_13444__$1 = state_13444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13444__$1,(18),to,inst_13422);
} else {
if((state_val_13445 === (21))){
var inst_13435 = (state_13444[(2)]);
var state_13444__$1 = state_13444;
var statearr_13452_13515 = state_13444__$1;
(statearr_13452_13515[(2)] = inst_13435);

(statearr_13452_13515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (13))){
var inst_13437 = (state_13444[(2)]);
var state_13444__$1 = (function (){var statearr_13453 = state_13444;
(statearr_13453[(9)] = inst_13437);

return statearr_13453;
})();
var statearr_13454_13516 = state_13444__$1;
(statearr_13454_13516[(2)] = null);

(statearr_13454_13516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (6))){
var inst_13409 = (state_13444[(7)]);
var state_13444__$1 = state_13444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13444__$1,(11),inst_13409);
} else {
if((state_val_13445 === (17))){
var inst_13430 = (state_13444[(2)]);
var state_13444__$1 = state_13444;
if(cljs.core.truth_(inst_13430)){
var statearr_13455_13517 = state_13444__$1;
(statearr_13455_13517[(1)] = (19));

} else {
var statearr_13456_13518 = state_13444__$1;
(statearr_13456_13518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (3))){
var inst_13442 = (state_13444[(2)]);
var state_13444__$1 = state_13444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13444__$1,inst_13442);
} else {
if((state_val_13445 === (12))){
var inst_13419 = (state_13444[(10)]);
var state_13444__$1 = state_13444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13444__$1,(14),inst_13419);
} else {
if((state_val_13445 === (2))){
var state_13444__$1 = state_13444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13444__$1,(4),results);
} else {
if((state_val_13445 === (19))){
var state_13444__$1 = state_13444;
var statearr_13457_13519 = state_13444__$1;
(statearr_13457_13519[(2)] = null);

(statearr_13457_13519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (11))){
var inst_13419 = (state_13444[(2)]);
var state_13444__$1 = (function (){var statearr_13458 = state_13444;
(statearr_13458[(10)] = inst_13419);

return statearr_13458;
})();
var statearr_13459_13520 = state_13444__$1;
(statearr_13459_13520[(2)] = null);

(statearr_13459_13520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (9))){
var state_13444__$1 = state_13444;
var statearr_13460_13521 = state_13444__$1;
(statearr_13460_13521[(2)] = null);

(statearr_13460_13521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (5))){
var state_13444__$1 = state_13444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13461_13522 = state_13444__$1;
(statearr_13461_13522[(1)] = (8));

} else {
var statearr_13462_13523 = state_13444__$1;
(statearr_13462_13523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (14))){
var inst_13424 = (state_13444[(11)]);
var inst_13422 = (state_13444[(8)]);
var inst_13422__$1 = (state_13444[(2)]);
var inst_13423 = (inst_13422__$1 == null);
var inst_13424__$1 = cljs.core.not.call(null,inst_13423);
var state_13444__$1 = (function (){var statearr_13463 = state_13444;
(statearr_13463[(11)] = inst_13424__$1);

(statearr_13463[(8)] = inst_13422__$1);

return statearr_13463;
})();
if(inst_13424__$1){
var statearr_13464_13524 = state_13444__$1;
(statearr_13464_13524[(1)] = (15));

} else {
var statearr_13465_13525 = state_13444__$1;
(statearr_13465_13525[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (16))){
var inst_13424 = (state_13444[(11)]);
var state_13444__$1 = state_13444;
var statearr_13466_13526 = state_13444__$1;
(statearr_13466_13526[(2)] = inst_13424);

(statearr_13466_13526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (10))){
var inst_13416 = (state_13444[(2)]);
var state_13444__$1 = state_13444;
var statearr_13467_13527 = state_13444__$1;
(statearr_13467_13527[(2)] = inst_13416);

(statearr_13467_13527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (18))){
var inst_13427 = (state_13444[(2)]);
var state_13444__$1 = state_13444;
var statearr_13468_13528 = state_13444__$1;
(statearr_13468_13528[(2)] = inst_13427);

(statearr_13468_13528[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13445 === (8))){
var inst_13413 = cljs.core.async.close_BANG_.call(null,to);
var state_13444__$1 = state_13444;
var statearr_13469_13529 = state_13444__$1;
(statearr_13469_13529[(2)] = inst_13413);

(statearr_13469_13529[(1)] = (10));


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
});})(c__13152__auto__,jobs,results,process,async))
;
return ((function (switch__13064__auto__,c__13152__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0 = (function (){
var statearr_13470 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__);

(statearr_13470[(1)] = (1));

return statearr_13470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1 = (function (state_13444){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13471){if((e13471 instanceof Object)){
var ex__13068__auto__ = e13471;
var statearr_13472_13530 = state_13444;
(statearr_13472_13530[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13531 = state_13444;
state_13444 = G__13531;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__ = function(state_13444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1.call(this,state_13444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto__,jobs,results,process,async))
})();
var state__13154__auto__ = (function (){var statearr_13473 = f__13153__auto__.call(null);
(statearr_13473[(6)] = c__13152__auto__);

return statearr_13473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto__,jobs,results,process,async))
);

return c__13152__auto__;
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
var G__13533 = arguments.length;
switch (G__13533) {
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
var G__13536 = arguments.length;
switch (G__13536) {
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
var G__13539 = arguments.length;
switch (G__13539) {
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
var c__13152__auto___13588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___13588,tc,fc){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___13588,tc,fc){
return (function (state_13565){
var state_val_13566 = (state_13565[(1)]);
if((state_val_13566 === (7))){
var inst_13561 = (state_13565[(2)]);
var state_13565__$1 = state_13565;
var statearr_13567_13589 = state_13565__$1;
(statearr_13567_13589[(2)] = inst_13561);

(statearr_13567_13589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (1))){
var state_13565__$1 = state_13565;
var statearr_13568_13590 = state_13565__$1;
(statearr_13568_13590[(2)] = null);

(statearr_13568_13590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (4))){
var inst_13542 = (state_13565[(7)]);
var inst_13542__$1 = (state_13565[(2)]);
var inst_13543 = (inst_13542__$1 == null);
var state_13565__$1 = (function (){var statearr_13569 = state_13565;
(statearr_13569[(7)] = inst_13542__$1);

return statearr_13569;
})();
if(cljs.core.truth_(inst_13543)){
var statearr_13570_13591 = state_13565__$1;
(statearr_13570_13591[(1)] = (5));

} else {
var statearr_13571_13592 = state_13565__$1;
(statearr_13571_13592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (13))){
var state_13565__$1 = state_13565;
var statearr_13572_13593 = state_13565__$1;
(statearr_13572_13593[(2)] = null);

(statearr_13572_13593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (6))){
var inst_13542 = (state_13565[(7)]);
var inst_13548 = p.call(null,inst_13542);
var state_13565__$1 = state_13565;
if(cljs.core.truth_(inst_13548)){
var statearr_13573_13594 = state_13565__$1;
(statearr_13573_13594[(1)] = (9));

} else {
var statearr_13574_13595 = state_13565__$1;
(statearr_13574_13595[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (3))){
var inst_13563 = (state_13565[(2)]);
var state_13565__$1 = state_13565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13565__$1,inst_13563);
} else {
if((state_val_13566 === (12))){
var state_13565__$1 = state_13565;
var statearr_13575_13596 = state_13565__$1;
(statearr_13575_13596[(2)] = null);

(statearr_13575_13596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (2))){
var state_13565__$1 = state_13565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13565__$1,(4),ch);
} else {
if((state_val_13566 === (11))){
var inst_13542 = (state_13565[(7)]);
var inst_13552 = (state_13565[(2)]);
var state_13565__$1 = state_13565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13565__$1,(8),inst_13552,inst_13542);
} else {
if((state_val_13566 === (9))){
var state_13565__$1 = state_13565;
var statearr_13576_13597 = state_13565__$1;
(statearr_13576_13597[(2)] = tc);

(statearr_13576_13597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (5))){
var inst_13545 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13546 = cljs.core.async.close_BANG_.call(null,fc);
var state_13565__$1 = (function (){var statearr_13577 = state_13565;
(statearr_13577[(8)] = inst_13545);

return statearr_13577;
})();
var statearr_13578_13598 = state_13565__$1;
(statearr_13578_13598[(2)] = inst_13546);

(statearr_13578_13598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (14))){
var inst_13559 = (state_13565[(2)]);
var state_13565__$1 = state_13565;
var statearr_13579_13599 = state_13565__$1;
(statearr_13579_13599[(2)] = inst_13559);

(statearr_13579_13599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (10))){
var state_13565__$1 = state_13565;
var statearr_13580_13600 = state_13565__$1;
(statearr_13580_13600[(2)] = fc);

(statearr_13580_13600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (8))){
var inst_13554 = (state_13565[(2)]);
var state_13565__$1 = state_13565;
if(cljs.core.truth_(inst_13554)){
var statearr_13581_13601 = state_13565__$1;
(statearr_13581_13601[(1)] = (12));

} else {
var statearr_13582_13602 = state_13565__$1;
(statearr_13582_13602[(1)] = (13));

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
});})(c__13152__auto___13588,tc,fc))
;
return ((function (switch__13064__auto__,c__13152__auto___13588,tc,fc){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_13583 = [null,null,null,null,null,null,null,null,null];
(statearr_13583[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_13583[(1)] = (1));

return statearr_13583;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_13565){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13584){if((e13584 instanceof Object)){
var ex__13068__auto__ = e13584;
var statearr_13585_13603 = state_13565;
(statearr_13585_13603[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13604 = state_13565;
state_13565 = G__13604;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_13565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_13565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___13588,tc,fc))
})();
var state__13154__auto__ = (function (){var statearr_13586 = f__13153__auto__.call(null);
(statearr_13586[(6)] = c__13152__auto___13588);

return statearr_13586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___13588,tc,fc))
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
var c__13152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto__){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto__){
return (function (state_13625){
var state_val_13626 = (state_13625[(1)]);
if((state_val_13626 === (7))){
var inst_13621 = (state_13625[(2)]);
var state_13625__$1 = state_13625;
var statearr_13627_13645 = state_13625__$1;
(statearr_13627_13645[(2)] = inst_13621);

(statearr_13627_13645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13626 === (1))){
var inst_13605 = init;
var state_13625__$1 = (function (){var statearr_13628 = state_13625;
(statearr_13628[(7)] = inst_13605);

return statearr_13628;
})();
var statearr_13629_13646 = state_13625__$1;
(statearr_13629_13646[(2)] = null);

(statearr_13629_13646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13626 === (4))){
var inst_13608 = (state_13625[(8)]);
var inst_13608__$1 = (state_13625[(2)]);
var inst_13609 = (inst_13608__$1 == null);
var state_13625__$1 = (function (){var statearr_13630 = state_13625;
(statearr_13630[(8)] = inst_13608__$1);

return statearr_13630;
})();
if(cljs.core.truth_(inst_13609)){
var statearr_13631_13647 = state_13625__$1;
(statearr_13631_13647[(1)] = (5));

} else {
var statearr_13632_13648 = state_13625__$1;
(statearr_13632_13648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13626 === (6))){
var inst_13605 = (state_13625[(7)]);
var inst_13608 = (state_13625[(8)]);
var inst_13612 = (state_13625[(9)]);
var inst_13612__$1 = f.call(null,inst_13605,inst_13608);
var inst_13613 = cljs.core.reduced_QMARK_.call(null,inst_13612__$1);
var state_13625__$1 = (function (){var statearr_13633 = state_13625;
(statearr_13633[(9)] = inst_13612__$1);

return statearr_13633;
})();
if(inst_13613){
var statearr_13634_13649 = state_13625__$1;
(statearr_13634_13649[(1)] = (8));

} else {
var statearr_13635_13650 = state_13625__$1;
(statearr_13635_13650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13626 === (3))){
var inst_13623 = (state_13625[(2)]);
var state_13625__$1 = state_13625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13625__$1,inst_13623);
} else {
if((state_val_13626 === (2))){
var state_13625__$1 = state_13625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13625__$1,(4),ch);
} else {
if((state_val_13626 === (9))){
var inst_13612 = (state_13625[(9)]);
var inst_13605 = inst_13612;
var state_13625__$1 = (function (){var statearr_13636 = state_13625;
(statearr_13636[(7)] = inst_13605);

return statearr_13636;
})();
var statearr_13637_13651 = state_13625__$1;
(statearr_13637_13651[(2)] = null);

(statearr_13637_13651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13626 === (5))){
var inst_13605 = (state_13625[(7)]);
var state_13625__$1 = state_13625;
var statearr_13638_13652 = state_13625__$1;
(statearr_13638_13652[(2)] = inst_13605);

(statearr_13638_13652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13626 === (10))){
var inst_13619 = (state_13625[(2)]);
var state_13625__$1 = state_13625;
var statearr_13639_13653 = state_13625__$1;
(statearr_13639_13653[(2)] = inst_13619);

(statearr_13639_13653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13626 === (8))){
var inst_13612 = (state_13625[(9)]);
var inst_13615 = cljs.core.deref.call(null,inst_13612);
var state_13625__$1 = state_13625;
var statearr_13640_13654 = state_13625__$1;
(statearr_13640_13654[(2)] = inst_13615);

(statearr_13640_13654[(1)] = (10));


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
});})(c__13152__auto__))
;
return ((function (switch__13064__auto__,c__13152__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13065__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13065__auto____0 = (function (){
var statearr_13641 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13641[(0)] = cljs$core$async$reduce_$_state_machine__13065__auto__);

(statearr_13641[(1)] = (1));

return statearr_13641;
});
var cljs$core$async$reduce_$_state_machine__13065__auto____1 = (function (state_13625){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13642){if((e13642 instanceof Object)){
var ex__13068__auto__ = e13642;
var statearr_13643_13655 = state_13625;
(statearr_13643_13655[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13656 = state_13625;
state_13625 = G__13656;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13065__auto__ = function(state_13625){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13065__auto____1.call(this,state_13625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13065__auto____0;
cljs$core$async$reduce_$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13065__auto____1;
return cljs$core$async$reduce_$_state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto__))
})();
var state__13154__auto__ = (function (){var statearr_13644 = f__13153__auto__.call(null);
(statearr_13644[(6)] = c__13152__auto__);

return statearr_13644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto__))
);

return c__13152__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto__,f__$1){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto__,f__$1){
return (function (state_13662){
var state_val_13663 = (state_13662[(1)]);
if((state_val_13663 === (1))){
var inst_13657 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13662__$1 = state_13662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13662__$1,(2),inst_13657);
} else {
if((state_val_13663 === (2))){
var inst_13659 = (state_13662[(2)]);
var inst_13660 = f__$1.call(null,inst_13659);
var state_13662__$1 = state_13662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13662__$1,inst_13660);
} else {
return null;
}
}
});})(c__13152__auto__,f__$1))
;
return ((function (switch__13064__auto__,c__13152__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13065__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13065__auto____0 = (function (){
var statearr_13664 = [null,null,null,null,null,null,null];
(statearr_13664[(0)] = cljs$core$async$transduce_$_state_machine__13065__auto__);

(statearr_13664[(1)] = (1));

return statearr_13664;
});
var cljs$core$async$transduce_$_state_machine__13065__auto____1 = (function (state_13662){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13665){if((e13665 instanceof Object)){
var ex__13068__auto__ = e13665;
var statearr_13666_13668 = state_13662;
(statearr_13666_13668[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13669 = state_13662;
state_13662 = G__13669;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13065__auto__ = function(state_13662){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13065__auto____1.call(this,state_13662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13065__auto____0;
cljs$core$async$transduce_$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13065__auto____1;
return cljs$core$async$transduce_$_state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto__,f__$1))
})();
var state__13154__auto__ = (function (){var statearr_13667 = f__13153__auto__.call(null);
(statearr_13667[(6)] = c__13152__auto__);

return statearr_13667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto__,f__$1))
);

return c__13152__auto__;
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
var G__13671 = arguments.length;
switch (G__13671) {
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
var c__13152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto__){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto__){
return (function (state_13696){
var state_val_13697 = (state_13696[(1)]);
if((state_val_13697 === (7))){
var inst_13678 = (state_13696[(2)]);
var state_13696__$1 = state_13696;
var statearr_13698_13719 = state_13696__$1;
(statearr_13698_13719[(2)] = inst_13678);

(statearr_13698_13719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13697 === (1))){
var inst_13672 = cljs.core.seq.call(null,coll);
var inst_13673 = inst_13672;
var state_13696__$1 = (function (){var statearr_13699 = state_13696;
(statearr_13699[(7)] = inst_13673);

return statearr_13699;
})();
var statearr_13700_13720 = state_13696__$1;
(statearr_13700_13720[(2)] = null);

(statearr_13700_13720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13697 === (4))){
var inst_13673 = (state_13696[(7)]);
var inst_13676 = cljs.core.first.call(null,inst_13673);
var state_13696__$1 = state_13696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13696__$1,(7),ch,inst_13676);
} else {
if((state_val_13697 === (13))){
var inst_13690 = (state_13696[(2)]);
var state_13696__$1 = state_13696;
var statearr_13701_13721 = state_13696__$1;
(statearr_13701_13721[(2)] = inst_13690);

(statearr_13701_13721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13697 === (6))){
var inst_13681 = (state_13696[(2)]);
var state_13696__$1 = state_13696;
if(cljs.core.truth_(inst_13681)){
var statearr_13702_13722 = state_13696__$1;
(statearr_13702_13722[(1)] = (8));

} else {
var statearr_13703_13723 = state_13696__$1;
(statearr_13703_13723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13697 === (3))){
var inst_13694 = (state_13696[(2)]);
var state_13696__$1 = state_13696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13696__$1,inst_13694);
} else {
if((state_val_13697 === (12))){
var state_13696__$1 = state_13696;
var statearr_13704_13724 = state_13696__$1;
(statearr_13704_13724[(2)] = null);

(statearr_13704_13724[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13697 === (2))){
var inst_13673 = (state_13696[(7)]);
var state_13696__$1 = state_13696;
if(cljs.core.truth_(inst_13673)){
var statearr_13705_13725 = state_13696__$1;
(statearr_13705_13725[(1)] = (4));

} else {
var statearr_13706_13726 = state_13696__$1;
(statearr_13706_13726[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13697 === (11))){
var inst_13687 = cljs.core.async.close_BANG_.call(null,ch);
var state_13696__$1 = state_13696;
var statearr_13707_13727 = state_13696__$1;
(statearr_13707_13727[(2)] = inst_13687);

(statearr_13707_13727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13697 === (9))){
var state_13696__$1 = state_13696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13708_13728 = state_13696__$1;
(statearr_13708_13728[(1)] = (11));

} else {
var statearr_13709_13729 = state_13696__$1;
(statearr_13709_13729[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13697 === (5))){
var inst_13673 = (state_13696[(7)]);
var state_13696__$1 = state_13696;
var statearr_13710_13730 = state_13696__$1;
(statearr_13710_13730[(2)] = inst_13673);

(statearr_13710_13730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13697 === (10))){
var inst_13692 = (state_13696[(2)]);
var state_13696__$1 = state_13696;
var statearr_13711_13731 = state_13696__$1;
(statearr_13711_13731[(2)] = inst_13692);

(statearr_13711_13731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13697 === (8))){
var inst_13673 = (state_13696[(7)]);
var inst_13683 = cljs.core.next.call(null,inst_13673);
var inst_13673__$1 = inst_13683;
var state_13696__$1 = (function (){var statearr_13712 = state_13696;
(statearr_13712[(7)] = inst_13673__$1);

return statearr_13712;
})();
var statearr_13713_13732 = state_13696__$1;
(statearr_13713_13732[(2)] = null);

(statearr_13713_13732[(1)] = (2));


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
});})(c__13152__auto__))
;
return ((function (switch__13064__auto__,c__13152__auto__){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_13714 = [null,null,null,null,null,null,null,null];
(statearr_13714[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_13714[(1)] = (1));

return statearr_13714;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_13696){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13715){if((e13715 instanceof Object)){
var ex__13068__auto__ = e13715;
var statearr_13716_13733 = state_13696;
(statearr_13716_13733[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13734 = state_13696;
state_13696 = G__13734;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_13696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_13696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto__))
})();
var state__13154__auto__ = (function (){var statearr_13717 = f__13153__auto__.call(null);
(statearr_13717[(6)] = c__13152__auto__);

return statearr_13717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto__))
);

return c__13152__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async13735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13735 = (function (ch,cs,meta13736){
this.ch = ch;
this.cs = cs;
this.meta13736 = meta13736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13737,meta13736__$1){
var self__ = this;
var _13737__$1 = this;
return (new cljs.core.async.t_cljs$core$async13735(self__.ch,self__.cs,meta13736__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13737){
var self__ = this;
var _13737__$1 = this;
return self__.meta13736;
});})(cs))
;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13735.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13736","meta13736",1710898726,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13735";

cljs.core.async.t_cljs$core$async13735.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async13735");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13735 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13735(ch__$1,cs__$1,meta13736){
return (new cljs.core.async.t_cljs$core$async13735(ch__$1,cs__$1,meta13736));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13735(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13152__auto___13957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___13957,cs,m,dchan,dctr,done){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___13957,cs,m,dchan,dctr,done){
return (function (state_13872){
var state_val_13873 = (state_13872[(1)]);
if((state_val_13873 === (7))){
var inst_13868 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13874_13958 = state_13872__$1;
(statearr_13874_13958[(2)] = inst_13868);

(statearr_13874_13958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (20))){
var inst_13771 = (state_13872[(7)]);
var inst_13783 = cljs.core.first.call(null,inst_13771);
var inst_13784 = cljs.core.nth.call(null,inst_13783,(0),null);
var inst_13785 = cljs.core.nth.call(null,inst_13783,(1),null);
var state_13872__$1 = (function (){var statearr_13875 = state_13872;
(statearr_13875[(8)] = inst_13784);

return statearr_13875;
})();
if(cljs.core.truth_(inst_13785)){
var statearr_13876_13959 = state_13872__$1;
(statearr_13876_13959[(1)] = (22));

} else {
var statearr_13877_13960 = state_13872__$1;
(statearr_13877_13960[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (27))){
var inst_13820 = (state_13872[(9)]);
var inst_13815 = (state_13872[(10)]);
var inst_13740 = (state_13872[(11)]);
var inst_13813 = (state_13872[(12)]);
var inst_13820__$1 = cljs.core._nth.call(null,inst_13813,inst_13815);
var inst_13821 = cljs.core.async.put_BANG_.call(null,inst_13820__$1,inst_13740,done);
var state_13872__$1 = (function (){var statearr_13878 = state_13872;
(statearr_13878[(9)] = inst_13820__$1);

return statearr_13878;
})();
if(cljs.core.truth_(inst_13821)){
var statearr_13879_13961 = state_13872__$1;
(statearr_13879_13961[(1)] = (30));

} else {
var statearr_13880_13962 = state_13872__$1;
(statearr_13880_13962[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (1))){
var state_13872__$1 = state_13872;
var statearr_13881_13963 = state_13872__$1;
(statearr_13881_13963[(2)] = null);

(statearr_13881_13963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (24))){
var inst_13771 = (state_13872[(7)]);
var inst_13790 = (state_13872[(2)]);
var inst_13791 = cljs.core.next.call(null,inst_13771);
var inst_13749 = inst_13791;
var inst_13750 = null;
var inst_13751 = (0);
var inst_13752 = (0);
var state_13872__$1 = (function (){var statearr_13882 = state_13872;
(statearr_13882[(13)] = inst_13751);

(statearr_13882[(14)] = inst_13750);

(statearr_13882[(15)] = inst_13752);

(statearr_13882[(16)] = inst_13790);

(statearr_13882[(17)] = inst_13749);

return statearr_13882;
})();
var statearr_13883_13964 = state_13872__$1;
(statearr_13883_13964[(2)] = null);

(statearr_13883_13964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (39))){
var state_13872__$1 = state_13872;
var statearr_13887_13965 = state_13872__$1;
(statearr_13887_13965[(2)] = null);

(statearr_13887_13965[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (4))){
var inst_13740 = (state_13872[(11)]);
var inst_13740__$1 = (state_13872[(2)]);
var inst_13741 = (inst_13740__$1 == null);
var state_13872__$1 = (function (){var statearr_13888 = state_13872;
(statearr_13888[(11)] = inst_13740__$1);

return statearr_13888;
})();
if(cljs.core.truth_(inst_13741)){
var statearr_13889_13966 = state_13872__$1;
(statearr_13889_13966[(1)] = (5));

} else {
var statearr_13890_13967 = state_13872__$1;
(statearr_13890_13967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (15))){
var inst_13751 = (state_13872[(13)]);
var inst_13750 = (state_13872[(14)]);
var inst_13752 = (state_13872[(15)]);
var inst_13749 = (state_13872[(17)]);
var inst_13767 = (state_13872[(2)]);
var inst_13768 = (inst_13752 + (1));
var tmp13884 = inst_13751;
var tmp13885 = inst_13750;
var tmp13886 = inst_13749;
var inst_13749__$1 = tmp13886;
var inst_13750__$1 = tmp13885;
var inst_13751__$1 = tmp13884;
var inst_13752__$1 = inst_13768;
var state_13872__$1 = (function (){var statearr_13891 = state_13872;
(statearr_13891[(18)] = inst_13767);

(statearr_13891[(13)] = inst_13751__$1);

(statearr_13891[(14)] = inst_13750__$1);

(statearr_13891[(15)] = inst_13752__$1);

(statearr_13891[(17)] = inst_13749__$1);

return statearr_13891;
})();
var statearr_13892_13968 = state_13872__$1;
(statearr_13892_13968[(2)] = null);

(statearr_13892_13968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (21))){
var inst_13794 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13896_13969 = state_13872__$1;
(statearr_13896_13969[(2)] = inst_13794);

(statearr_13896_13969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (31))){
var inst_13820 = (state_13872[(9)]);
var inst_13824 = done.call(null,null);
var inst_13825 = cljs.core.async.untap_STAR_.call(null,m,inst_13820);
var state_13872__$1 = (function (){var statearr_13897 = state_13872;
(statearr_13897[(19)] = inst_13824);

return statearr_13897;
})();
var statearr_13898_13970 = state_13872__$1;
(statearr_13898_13970[(2)] = inst_13825);

(statearr_13898_13970[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (32))){
var inst_13815 = (state_13872[(10)]);
var inst_13814 = (state_13872[(20)]);
var inst_13813 = (state_13872[(12)]);
var inst_13812 = (state_13872[(21)]);
var inst_13827 = (state_13872[(2)]);
var inst_13828 = (inst_13815 + (1));
var tmp13893 = inst_13814;
var tmp13894 = inst_13813;
var tmp13895 = inst_13812;
var inst_13812__$1 = tmp13895;
var inst_13813__$1 = tmp13894;
var inst_13814__$1 = tmp13893;
var inst_13815__$1 = inst_13828;
var state_13872__$1 = (function (){var statearr_13899 = state_13872;
(statearr_13899[(10)] = inst_13815__$1);

(statearr_13899[(22)] = inst_13827);

(statearr_13899[(20)] = inst_13814__$1);

(statearr_13899[(12)] = inst_13813__$1);

(statearr_13899[(21)] = inst_13812__$1);

return statearr_13899;
})();
var statearr_13900_13971 = state_13872__$1;
(statearr_13900_13971[(2)] = null);

(statearr_13900_13971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (40))){
var inst_13840 = (state_13872[(23)]);
var inst_13844 = done.call(null,null);
var inst_13845 = cljs.core.async.untap_STAR_.call(null,m,inst_13840);
var state_13872__$1 = (function (){var statearr_13901 = state_13872;
(statearr_13901[(24)] = inst_13844);

return statearr_13901;
})();
var statearr_13902_13972 = state_13872__$1;
(statearr_13902_13972[(2)] = inst_13845);

(statearr_13902_13972[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (33))){
var inst_13831 = (state_13872[(25)]);
var inst_13833 = cljs.core.chunked_seq_QMARK_.call(null,inst_13831);
var state_13872__$1 = state_13872;
if(inst_13833){
var statearr_13903_13973 = state_13872__$1;
(statearr_13903_13973[(1)] = (36));

} else {
var statearr_13904_13974 = state_13872__$1;
(statearr_13904_13974[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (13))){
var inst_13761 = (state_13872[(26)]);
var inst_13764 = cljs.core.async.close_BANG_.call(null,inst_13761);
var state_13872__$1 = state_13872;
var statearr_13905_13975 = state_13872__$1;
(statearr_13905_13975[(2)] = inst_13764);

(statearr_13905_13975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (22))){
var inst_13784 = (state_13872[(8)]);
var inst_13787 = cljs.core.async.close_BANG_.call(null,inst_13784);
var state_13872__$1 = state_13872;
var statearr_13906_13976 = state_13872__$1;
(statearr_13906_13976[(2)] = inst_13787);

(statearr_13906_13976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (36))){
var inst_13831 = (state_13872[(25)]);
var inst_13835 = cljs.core.chunk_first.call(null,inst_13831);
var inst_13836 = cljs.core.chunk_rest.call(null,inst_13831);
var inst_13837 = cljs.core.count.call(null,inst_13835);
var inst_13812 = inst_13836;
var inst_13813 = inst_13835;
var inst_13814 = inst_13837;
var inst_13815 = (0);
var state_13872__$1 = (function (){var statearr_13907 = state_13872;
(statearr_13907[(10)] = inst_13815);

(statearr_13907[(20)] = inst_13814);

(statearr_13907[(12)] = inst_13813);

(statearr_13907[(21)] = inst_13812);

return statearr_13907;
})();
var statearr_13908_13977 = state_13872__$1;
(statearr_13908_13977[(2)] = null);

(statearr_13908_13977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (41))){
var inst_13831 = (state_13872[(25)]);
var inst_13847 = (state_13872[(2)]);
var inst_13848 = cljs.core.next.call(null,inst_13831);
var inst_13812 = inst_13848;
var inst_13813 = null;
var inst_13814 = (0);
var inst_13815 = (0);
var state_13872__$1 = (function (){var statearr_13909 = state_13872;
(statearr_13909[(10)] = inst_13815);

(statearr_13909[(20)] = inst_13814);

(statearr_13909[(12)] = inst_13813);

(statearr_13909[(27)] = inst_13847);

(statearr_13909[(21)] = inst_13812);

return statearr_13909;
})();
var statearr_13910_13978 = state_13872__$1;
(statearr_13910_13978[(2)] = null);

(statearr_13910_13978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (43))){
var state_13872__$1 = state_13872;
var statearr_13911_13979 = state_13872__$1;
(statearr_13911_13979[(2)] = null);

(statearr_13911_13979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (29))){
var inst_13856 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13912_13980 = state_13872__$1;
(statearr_13912_13980[(2)] = inst_13856);

(statearr_13912_13980[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (44))){
var inst_13865 = (state_13872[(2)]);
var state_13872__$1 = (function (){var statearr_13913 = state_13872;
(statearr_13913[(28)] = inst_13865);

return statearr_13913;
})();
var statearr_13914_13981 = state_13872__$1;
(statearr_13914_13981[(2)] = null);

(statearr_13914_13981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (6))){
var inst_13804 = (state_13872[(29)]);
var inst_13803 = cljs.core.deref.call(null,cs);
var inst_13804__$1 = cljs.core.keys.call(null,inst_13803);
var inst_13805 = cljs.core.count.call(null,inst_13804__$1);
var inst_13806 = cljs.core.reset_BANG_.call(null,dctr,inst_13805);
var inst_13811 = cljs.core.seq.call(null,inst_13804__$1);
var inst_13812 = inst_13811;
var inst_13813 = null;
var inst_13814 = (0);
var inst_13815 = (0);
var state_13872__$1 = (function (){var statearr_13915 = state_13872;
(statearr_13915[(10)] = inst_13815);

(statearr_13915[(29)] = inst_13804__$1);

(statearr_13915[(20)] = inst_13814);

(statearr_13915[(12)] = inst_13813);

(statearr_13915[(30)] = inst_13806);

(statearr_13915[(21)] = inst_13812);

return statearr_13915;
})();
var statearr_13916_13982 = state_13872__$1;
(statearr_13916_13982[(2)] = null);

(statearr_13916_13982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (28))){
var inst_13831 = (state_13872[(25)]);
var inst_13812 = (state_13872[(21)]);
var inst_13831__$1 = cljs.core.seq.call(null,inst_13812);
var state_13872__$1 = (function (){var statearr_13917 = state_13872;
(statearr_13917[(25)] = inst_13831__$1);

return statearr_13917;
})();
if(inst_13831__$1){
var statearr_13918_13983 = state_13872__$1;
(statearr_13918_13983[(1)] = (33));

} else {
var statearr_13919_13984 = state_13872__$1;
(statearr_13919_13984[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (25))){
var inst_13815 = (state_13872[(10)]);
var inst_13814 = (state_13872[(20)]);
var inst_13817 = (inst_13815 < inst_13814);
var inst_13818 = inst_13817;
var state_13872__$1 = state_13872;
if(cljs.core.truth_(inst_13818)){
var statearr_13920_13985 = state_13872__$1;
(statearr_13920_13985[(1)] = (27));

} else {
var statearr_13921_13986 = state_13872__$1;
(statearr_13921_13986[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (34))){
var state_13872__$1 = state_13872;
var statearr_13922_13987 = state_13872__$1;
(statearr_13922_13987[(2)] = null);

(statearr_13922_13987[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (17))){
var state_13872__$1 = state_13872;
var statearr_13923_13988 = state_13872__$1;
(statearr_13923_13988[(2)] = null);

(statearr_13923_13988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (3))){
var inst_13870 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13872__$1,inst_13870);
} else {
if((state_val_13873 === (12))){
var inst_13799 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13924_13989 = state_13872__$1;
(statearr_13924_13989[(2)] = inst_13799);

(statearr_13924_13989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (2))){
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13872__$1,(4),ch);
} else {
if((state_val_13873 === (23))){
var state_13872__$1 = state_13872;
var statearr_13925_13990 = state_13872__$1;
(statearr_13925_13990[(2)] = null);

(statearr_13925_13990[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (35))){
var inst_13854 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13926_13991 = state_13872__$1;
(statearr_13926_13991[(2)] = inst_13854);

(statearr_13926_13991[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (19))){
var inst_13771 = (state_13872[(7)]);
var inst_13775 = cljs.core.chunk_first.call(null,inst_13771);
var inst_13776 = cljs.core.chunk_rest.call(null,inst_13771);
var inst_13777 = cljs.core.count.call(null,inst_13775);
var inst_13749 = inst_13776;
var inst_13750 = inst_13775;
var inst_13751 = inst_13777;
var inst_13752 = (0);
var state_13872__$1 = (function (){var statearr_13927 = state_13872;
(statearr_13927[(13)] = inst_13751);

(statearr_13927[(14)] = inst_13750);

(statearr_13927[(15)] = inst_13752);

(statearr_13927[(17)] = inst_13749);

return statearr_13927;
})();
var statearr_13928_13992 = state_13872__$1;
(statearr_13928_13992[(2)] = null);

(statearr_13928_13992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (11))){
var inst_13771 = (state_13872[(7)]);
var inst_13749 = (state_13872[(17)]);
var inst_13771__$1 = cljs.core.seq.call(null,inst_13749);
var state_13872__$1 = (function (){var statearr_13929 = state_13872;
(statearr_13929[(7)] = inst_13771__$1);

return statearr_13929;
})();
if(inst_13771__$1){
var statearr_13930_13993 = state_13872__$1;
(statearr_13930_13993[(1)] = (16));

} else {
var statearr_13931_13994 = state_13872__$1;
(statearr_13931_13994[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (9))){
var inst_13801 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13932_13995 = state_13872__$1;
(statearr_13932_13995[(2)] = inst_13801);

(statearr_13932_13995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (5))){
var inst_13747 = cljs.core.deref.call(null,cs);
var inst_13748 = cljs.core.seq.call(null,inst_13747);
var inst_13749 = inst_13748;
var inst_13750 = null;
var inst_13751 = (0);
var inst_13752 = (0);
var state_13872__$1 = (function (){var statearr_13933 = state_13872;
(statearr_13933[(13)] = inst_13751);

(statearr_13933[(14)] = inst_13750);

(statearr_13933[(15)] = inst_13752);

(statearr_13933[(17)] = inst_13749);

return statearr_13933;
})();
var statearr_13934_13996 = state_13872__$1;
(statearr_13934_13996[(2)] = null);

(statearr_13934_13996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (14))){
var state_13872__$1 = state_13872;
var statearr_13935_13997 = state_13872__$1;
(statearr_13935_13997[(2)] = null);

(statearr_13935_13997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (45))){
var inst_13862 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13936_13998 = state_13872__$1;
(statearr_13936_13998[(2)] = inst_13862);

(statearr_13936_13998[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (26))){
var inst_13804 = (state_13872[(29)]);
var inst_13858 = (state_13872[(2)]);
var inst_13859 = cljs.core.seq.call(null,inst_13804);
var state_13872__$1 = (function (){var statearr_13937 = state_13872;
(statearr_13937[(31)] = inst_13858);

return statearr_13937;
})();
if(inst_13859){
var statearr_13938_13999 = state_13872__$1;
(statearr_13938_13999[(1)] = (42));

} else {
var statearr_13939_14000 = state_13872__$1;
(statearr_13939_14000[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (16))){
var inst_13771 = (state_13872[(7)]);
var inst_13773 = cljs.core.chunked_seq_QMARK_.call(null,inst_13771);
var state_13872__$1 = state_13872;
if(inst_13773){
var statearr_13940_14001 = state_13872__$1;
(statearr_13940_14001[(1)] = (19));

} else {
var statearr_13941_14002 = state_13872__$1;
(statearr_13941_14002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (38))){
var inst_13851 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13942_14003 = state_13872__$1;
(statearr_13942_14003[(2)] = inst_13851);

(statearr_13942_14003[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (30))){
var state_13872__$1 = state_13872;
var statearr_13943_14004 = state_13872__$1;
(statearr_13943_14004[(2)] = null);

(statearr_13943_14004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (10))){
var inst_13750 = (state_13872[(14)]);
var inst_13752 = (state_13872[(15)]);
var inst_13760 = cljs.core._nth.call(null,inst_13750,inst_13752);
var inst_13761 = cljs.core.nth.call(null,inst_13760,(0),null);
var inst_13762 = cljs.core.nth.call(null,inst_13760,(1),null);
var state_13872__$1 = (function (){var statearr_13944 = state_13872;
(statearr_13944[(26)] = inst_13761);

return statearr_13944;
})();
if(cljs.core.truth_(inst_13762)){
var statearr_13945_14005 = state_13872__$1;
(statearr_13945_14005[(1)] = (13));

} else {
var statearr_13946_14006 = state_13872__$1;
(statearr_13946_14006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (18))){
var inst_13797 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13947_14007 = state_13872__$1;
(statearr_13947_14007[(2)] = inst_13797);

(statearr_13947_14007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (42))){
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13872__$1,(45),dchan);
} else {
if((state_val_13873 === (37))){
var inst_13740 = (state_13872[(11)]);
var inst_13831 = (state_13872[(25)]);
var inst_13840 = (state_13872[(23)]);
var inst_13840__$1 = cljs.core.first.call(null,inst_13831);
var inst_13841 = cljs.core.async.put_BANG_.call(null,inst_13840__$1,inst_13740,done);
var state_13872__$1 = (function (){var statearr_13948 = state_13872;
(statearr_13948[(23)] = inst_13840__$1);

return statearr_13948;
})();
if(cljs.core.truth_(inst_13841)){
var statearr_13949_14008 = state_13872__$1;
(statearr_13949_14008[(1)] = (39));

} else {
var statearr_13950_14009 = state_13872__$1;
(statearr_13950_14009[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (8))){
var inst_13751 = (state_13872[(13)]);
var inst_13752 = (state_13872[(15)]);
var inst_13754 = (inst_13752 < inst_13751);
var inst_13755 = inst_13754;
var state_13872__$1 = state_13872;
if(cljs.core.truth_(inst_13755)){
var statearr_13951_14010 = state_13872__$1;
(statearr_13951_14010[(1)] = (10));

} else {
var statearr_13952_14011 = state_13872__$1;
(statearr_13952_14011[(1)] = (11));

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
});})(c__13152__auto___13957,cs,m,dchan,dctr,done))
;
return ((function (switch__13064__auto__,c__13152__auto___13957,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13065__auto__ = null;
var cljs$core$async$mult_$_state_machine__13065__auto____0 = (function (){
var statearr_13953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13953[(0)] = cljs$core$async$mult_$_state_machine__13065__auto__);

(statearr_13953[(1)] = (1));

return statearr_13953;
});
var cljs$core$async$mult_$_state_machine__13065__auto____1 = (function (state_13872){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_13872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e13954){if((e13954 instanceof Object)){
var ex__13068__auto__ = e13954;
var statearr_13955_14012 = state_13872;
(statearr_13955_14012[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14013 = state_13872;
state_13872 = G__14013;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13065__auto__ = function(state_13872){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13065__auto____1.call(this,state_13872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13065__auto____0;
cljs$core$async$mult_$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13065__auto____1;
return cljs$core$async$mult_$_state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___13957,cs,m,dchan,dctr,done))
})();
var state__13154__auto__ = (function (){var statearr_13956 = f__13153__auto__.call(null);
(statearr_13956[(6)] = c__13152__auto___13957);

return statearr_13956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___13957,cs,m,dchan,dctr,done))
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
var G__14015 = arguments.length;
switch (G__14015) {
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
var len__8410__auto___14027 = arguments.length;
var i__8411__auto___14028 = (0);
while(true){
if((i__8411__auto___14028 < len__8410__auto___14027)){
args__8417__auto__.push((arguments[i__8411__auto___14028]));

var G__14029 = (i__8411__auto___14028 + (1));
i__8411__auto___14028 = G__14029;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((3) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8418__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14021){
var map__14022 = p__14021;
var map__14022__$1 = ((((!((map__14022 == null)))?((((map__14022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14022):map__14022);
var opts = map__14022__$1;
var statearr_14024_14030 = state;
(statearr_14024_14030[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__14022,map__14022__$1,opts){
return (function (val){
var statearr_14025_14031 = state;
(statearr_14025_14031[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14022,map__14022__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14026_14032 = state;
(statearr_14026_14032[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14017){
var G__14018 = cljs.core.first.call(null,seq14017);
var seq14017__$1 = cljs.core.next.call(null,seq14017);
var G__14019 = cljs.core.first.call(null,seq14017__$1);
var seq14017__$2 = cljs.core.next.call(null,seq14017__$1);
var G__14020 = cljs.core.first.call(null,seq14017__$2);
var seq14017__$3 = cljs.core.next.call(null,seq14017__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14018,G__14019,G__14020,seq14017__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14033 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14033 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta14034){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta14034 = meta14034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14035,meta14034__$1){
var self__ = this;
var _14035__$1 = this;
return (new cljs.core.async.t_cljs$core$async14033(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta14034__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14035){
var self__ = this;
var _14035__$1 = this;
return self__.meta14034;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14033.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14033.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14033.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14033.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14033.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14033.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14033.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14033.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14033.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta14034","meta14034",1181670376,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14033";

cljs.core.async.t_cljs$core$async14033.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async14033");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14033 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14033(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14034){
return (new cljs.core.async.t_cljs$core$async14033(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14034));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14033(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13152__auto___14197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___14197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___14197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14137){
var state_val_14138 = (state_14137[(1)]);
if((state_val_14138 === (7))){
var inst_14052 = (state_14137[(2)]);
var state_14137__$1 = state_14137;
var statearr_14139_14198 = state_14137__$1;
(statearr_14139_14198[(2)] = inst_14052);

(statearr_14139_14198[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (20))){
var inst_14064 = (state_14137[(7)]);
var state_14137__$1 = state_14137;
var statearr_14140_14199 = state_14137__$1;
(statearr_14140_14199[(2)] = inst_14064);

(statearr_14140_14199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (27))){
var state_14137__$1 = state_14137;
var statearr_14141_14200 = state_14137__$1;
(statearr_14141_14200[(2)] = null);

(statearr_14141_14200[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (1))){
var inst_14039 = (state_14137[(8)]);
var inst_14039__$1 = calc_state.call(null);
var inst_14041 = (inst_14039__$1 == null);
var inst_14042 = cljs.core.not.call(null,inst_14041);
var state_14137__$1 = (function (){var statearr_14142 = state_14137;
(statearr_14142[(8)] = inst_14039__$1);

return statearr_14142;
})();
if(inst_14042){
var statearr_14143_14201 = state_14137__$1;
(statearr_14143_14201[(1)] = (2));

} else {
var statearr_14144_14202 = state_14137__$1;
(statearr_14144_14202[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (24))){
var inst_14088 = (state_14137[(9)]);
var inst_14111 = (state_14137[(10)]);
var inst_14097 = (state_14137[(11)]);
var inst_14111__$1 = inst_14088.call(null,inst_14097);
var state_14137__$1 = (function (){var statearr_14145 = state_14137;
(statearr_14145[(10)] = inst_14111__$1);

return statearr_14145;
})();
if(cljs.core.truth_(inst_14111__$1)){
var statearr_14146_14203 = state_14137__$1;
(statearr_14146_14203[(1)] = (29));

} else {
var statearr_14147_14204 = state_14137__$1;
(statearr_14147_14204[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (4))){
var inst_14055 = (state_14137[(2)]);
var state_14137__$1 = state_14137;
if(cljs.core.truth_(inst_14055)){
var statearr_14148_14205 = state_14137__$1;
(statearr_14148_14205[(1)] = (8));

} else {
var statearr_14149_14206 = state_14137__$1;
(statearr_14149_14206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (15))){
var inst_14082 = (state_14137[(2)]);
var state_14137__$1 = state_14137;
if(cljs.core.truth_(inst_14082)){
var statearr_14150_14207 = state_14137__$1;
(statearr_14150_14207[(1)] = (19));

} else {
var statearr_14151_14208 = state_14137__$1;
(statearr_14151_14208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (21))){
var inst_14087 = (state_14137[(12)]);
var inst_14087__$1 = (state_14137[(2)]);
var inst_14088 = cljs.core.get.call(null,inst_14087__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14089 = cljs.core.get.call(null,inst_14087__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14090 = cljs.core.get.call(null,inst_14087__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14137__$1 = (function (){var statearr_14152 = state_14137;
(statearr_14152[(9)] = inst_14088);

(statearr_14152[(13)] = inst_14089);

(statearr_14152[(12)] = inst_14087__$1);

return statearr_14152;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14137__$1,(22),inst_14090);
} else {
if((state_val_14138 === (31))){
var inst_14119 = (state_14137[(2)]);
var state_14137__$1 = state_14137;
if(cljs.core.truth_(inst_14119)){
var statearr_14153_14209 = state_14137__$1;
(statearr_14153_14209[(1)] = (32));

} else {
var statearr_14154_14210 = state_14137__$1;
(statearr_14154_14210[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (32))){
var inst_14096 = (state_14137[(14)]);
var state_14137__$1 = state_14137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14137__$1,(35),out,inst_14096);
} else {
if((state_val_14138 === (33))){
var inst_14087 = (state_14137[(12)]);
var inst_14064 = inst_14087;
var state_14137__$1 = (function (){var statearr_14155 = state_14137;
(statearr_14155[(7)] = inst_14064);

return statearr_14155;
})();
var statearr_14156_14211 = state_14137__$1;
(statearr_14156_14211[(2)] = null);

(statearr_14156_14211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (13))){
var inst_14064 = (state_14137[(7)]);
var inst_14071 = inst_14064.cljs$lang$protocol_mask$partition0$;
var inst_14072 = (inst_14071 & (64));
var inst_14073 = inst_14064.cljs$core$ISeq$;
var inst_14074 = (cljs.core.PROTOCOL_SENTINEL === inst_14073);
var inst_14075 = (inst_14072) || (inst_14074);
var state_14137__$1 = state_14137;
if(cljs.core.truth_(inst_14075)){
var statearr_14157_14212 = state_14137__$1;
(statearr_14157_14212[(1)] = (16));

} else {
var statearr_14158_14213 = state_14137__$1;
(statearr_14158_14213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (22))){
var inst_14096 = (state_14137[(14)]);
var inst_14097 = (state_14137[(11)]);
var inst_14095 = (state_14137[(2)]);
var inst_14096__$1 = cljs.core.nth.call(null,inst_14095,(0),null);
var inst_14097__$1 = cljs.core.nth.call(null,inst_14095,(1),null);
var inst_14098 = (inst_14096__$1 == null);
var inst_14099 = cljs.core._EQ_.call(null,inst_14097__$1,change);
var inst_14100 = (inst_14098) || (inst_14099);
var state_14137__$1 = (function (){var statearr_14159 = state_14137;
(statearr_14159[(14)] = inst_14096__$1);

(statearr_14159[(11)] = inst_14097__$1);

return statearr_14159;
})();
if(cljs.core.truth_(inst_14100)){
var statearr_14160_14214 = state_14137__$1;
(statearr_14160_14214[(1)] = (23));

} else {
var statearr_14161_14215 = state_14137__$1;
(statearr_14161_14215[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (36))){
var inst_14087 = (state_14137[(12)]);
var inst_14064 = inst_14087;
var state_14137__$1 = (function (){var statearr_14162 = state_14137;
(statearr_14162[(7)] = inst_14064);

return statearr_14162;
})();
var statearr_14163_14216 = state_14137__$1;
(statearr_14163_14216[(2)] = null);

(statearr_14163_14216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (29))){
var inst_14111 = (state_14137[(10)]);
var state_14137__$1 = state_14137;
var statearr_14164_14217 = state_14137__$1;
(statearr_14164_14217[(2)] = inst_14111);

(statearr_14164_14217[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (6))){
var state_14137__$1 = state_14137;
var statearr_14165_14218 = state_14137__$1;
(statearr_14165_14218[(2)] = false);

(statearr_14165_14218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (28))){
var inst_14107 = (state_14137[(2)]);
var inst_14108 = calc_state.call(null);
var inst_14064 = inst_14108;
var state_14137__$1 = (function (){var statearr_14166 = state_14137;
(statearr_14166[(15)] = inst_14107);

(statearr_14166[(7)] = inst_14064);

return statearr_14166;
})();
var statearr_14167_14219 = state_14137__$1;
(statearr_14167_14219[(2)] = null);

(statearr_14167_14219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (25))){
var inst_14133 = (state_14137[(2)]);
var state_14137__$1 = state_14137;
var statearr_14168_14220 = state_14137__$1;
(statearr_14168_14220[(2)] = inst_14133);

(statearr_14168_14220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (34))){
var inst_14131 = (state_14137[(2)]);
var state_14137__$1 = state_14137;
var statearr_14169_14221 = state_14137__$1;
(statearr_14169_14221[(2)] = inst_14131);

(statearr_14169_14221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (17))){
var state_14137__$1 = state_14137;
var statearr_14170_14222 = state_14137__$1;
(statearr_14170_14222[(2)] = false);

(statearr_14170_14222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (3))){
var state_14137__$1 = state_14137;
var statearr_14171_14223 = state_14137__$1;
(statearr_14171_14223[(2)] = false);

(statearr_14171_14223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (12))){
var inst_14135 = (state_14137[(2)]);
var state_14137__$1 = state_14137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14137__$1,inst_14135);
} else {
if((state_val_14138 === (2))){
var inst_14039 = (state_14137[(8)]);
var inst_14044 = inst_14039.cljs$lang$protocol_mask$partition0$;
var inst_14045 = (inst_14044 & (64));
var inst_14046 = inst_14039.cljs$core$ISeq$;
var inst_14047 = (cljs.core.PROTOCOL_SENTINEL === inst_14046);
var inst_14048 = (inst_14045) || (inst_14047);
var state_14137__$1 = state_14137;
if(cljs.core.truth_(inst_14048)){
var statearr_14172_14224 = state_14137__$1;
(statearr_14172_14224[(1)] = (5));

} else {
var statearr_14173_14225 = state_14137__$1;
(statearr_14173_14225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (23))){
var inst_14096 = (state_14137[(14)]);
var inst_14102 = (inst_14096 == null);
var state_14137__$1 = state_14137;
if(cljs.core.truth_(inst_14102)){
var statearr_14174_14226 = state_14137__$1;
(statearr_14174_14226[(1)] = (26));

} else {
var statearr_14175_14227 = state_14137__$1;
(statearr_14175_14227[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (35))){
var inst_14122 = (state_14137[(2)]);
var state_14137__$1 = state_14137;
if(cljs.core.truth_(inst_14122)){
var statearr_14176_14228 = state_14137__$1;
(statearr_14176_14228[(1)] = (36));

} else {
var statearr_14177_14229 = state_14137__$1;
(statearr_14177_14229[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (19))){
var inst_14064 = (state_14137[(7)]);
var inst_14084 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14064);
var state_14137__$1 = state_14137;
var statearr_14178_14230 = state_14137__$1;
(statearr_14178_14230[(2)] = inst_14084);

(statearr_14178_14230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (11))){
var inst_14064 = (state_14137[(7)]);
var inst_14068 = (inst_14064 == null);
var inst_14069 = cljs.core.not.call(null,inst_14068);
var state_14137__$1 = state_14137;
if(inst_14069){
var statearr_14179_14231 = state_14137__$1;
(statearr_14179_14231[(1)] = (13));

} else {
var statearr_14180_14232 = state_14137__$1;
(statearr_14180_14232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (9))){
var inst_14039 = (state_14137[(8)]);
var state_14137__$1 = state_14137;
var statearr_14181_14233 = state_14137__$1;
(statearr_14181_14233[(2)] = inst_14039);

(statearr_14181_14233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (5))){
var state_14137__$1 = state_14137;
var statearr_14182_14234 = state_14137__$1;
(statearr_14182_14234[(2)] = true);

(statearr_14182_14234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (14))){
var state_14137__$1 = state_14137;
var statearr_14183_14235 = state_14137__$1;
(statearr_14183_14235[(2)] = false);

(statearr_14183_14235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (26))){
var inst_14097 = (state_14137[(11)]);
var inst_14104 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14097);
var state_14137__$1 = state_14137;
var statearr_14184_14236 = state_14137__$1;
(statearr_14184_14236[(2)] = inst_14104);

(statearr_14184_14236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (16))){
var state_14137__$1 = state_14137;
var statearr_14185_14237 = state_14137__$1;
(statearr_14185_14237[(2)] = true);

(statearr_14185_14237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (38))){
var inst_14127 = (state_14137[(2)]);
var state_14137__$1 = state_14137;
var statearr_14186_14238 = state_14137__$1;
(statearr_14186_14238[(2)] = inst_14127);

(statearr_14186_14238[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (30))){
var inst_14088 = (state_14137[(9)]);
var inst_14089 = (state_14137[(13)]);
var inst_14097 = (state_14137[(11)]);
var inst_14114 = cljs.core.empty_QMARK_.call(null,inst_14088);
var inst_14115 = inst_14089.call(null,inst_14097);
var inst_14116 = cljs.core.not.call(null,inst_14115);
var inst_14117 = (inst_14114) && (inst_14116);
var state_14137__$1 = state_14137;
var statearr_14187_14239 = state_14137__$1;
(statearr_14187_14239[(2)] = inst_14117);

(statearr_14187_14239[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (10))){
var inst_14039 = (state_14137[(8)]);
var inst_14060 = (state_14137[(2)]);
var inst_14061 = cljs.core.get.call(null,inst_14060,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14062 = cljs.core.get.call(null,inst_14060,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14063 = cljs.core.get.call(null,inst_14060,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14064 = inst_14039;
var state_14137__$1 = (function (){var statearr_14188 = state_14137;
(statearr_14188[(16)] = inst_14062);

(statearr_14188[(17)] = inst_14063);

(statearr_14188[(18)] = inst_14061);

(statearr_14188[(7)] = inst_14064);

return statearr_14188;
})();
var statearr_14189_14240 = state_14137__$1;
(statearr_14189_14240[(2)] = null);

(statearr_14189_14240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (18))){
var inst_14079 = (state_14137[(2)]);
var state_14137__$1 = state_14137;
var statearr_14190_14241 = state_14137__$1;
(statearr_14190_14241[(2)] = inst_14079);

(statearr_14190_14241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (37))){
var state_14137__$1 = state_14137;
var statearr_14191_14242 = state_14137__$1;
(statearr_14191_14242[(2)] = null);

(statearr_14191_14242[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14138 === (8))){
var inst_14039 = (state_14137[(8)]);
var inst_14057 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14039);
var state_14137__$1 = state_14137;
var statearr_14192_14243 = state_14137__$1;
(statearr_14192_14243[(2)] = inst_14057);

(statearr_14192_14243[(1)] = (10));


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
});})(c__13152__auto___14197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13064__auto__,c__13152__auto___14197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13065__auto__ = null;
var cljs$core$async$mix_$_state_machine__13065__auto____0 = (function (){
var statearr_14193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14193[(0)] = cljs$core$async$mix_$_state_machine__13065__auto__);

(statearr_14193[(1)] = (1));

return statearr_14193;
});
var cljs$core$async$mix_$_state_machine__13065__auto____1 = (function (state_14137){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_14137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e14194){if((e14194 instanceof Object)){
var ex__13068__auto__ = e14194;
var statearr_14195_14244 = state_14137;
(statearr_14195_14244[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14245 = state_14137;
state_14137 = G__14245;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13065__auto__ = function(state_14137){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13065__auto____1.call(this,state_14137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13065__auto____0;
cljs$core$async$mix_$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13065__auto____1;
return cljs$core$async$mix_$_state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___14197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13154__auto__ = (function (){var statearr_14196 = f__13153__auto__.call(null);
(statearr_14196[(6)] = c__13152__auto___14197);

return statearr_14196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___14197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__14247 = arguments.length;
switch (G__14247) {
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
var G__14251 = arguments.length;
switch (G__14251) {
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
return (function (p1__14249_SHARP_){
if(cljs.core.truth_(p1__14249_SHARP_.call(null,topic))){
return p1__14249_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14249_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7285__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14252 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14253){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14253 = meta14253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14254,meta14253__$1){
var self__ = this;
var _14254__$1 = this;
return (new cljs.core.async.t_cljs$core$async14252(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14253__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14254){
var self__ = this;
var _14254__$1 = this;
return self__.meta14253;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14252.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14253","meta14253",-1764115349,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14252";

cljs.core.async.t_cljs$core$async14252.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async14252");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14252 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14252(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14253){
return (new cljs.core.async.t_cljs$core$async14252(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14253));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14252(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13152__auto___14372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___14372,mults,ensure_mult,p){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___14372,mults,ensure_mult,p){
return (function (state_14326){
var state_val_14327 = (state_14326[(1)]);
if((state_val_14327 === (7))){
var inst_14322 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14328_14373 = state_14326__$1;
(statearr_14328_14373[(2)] = inst_14322);

(statearr_14328_14373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (20))){
var state_14326__$1 = state_14326;
var statearr_14329_14374 = state_14326__$1;
(statearr_14329_14374[(2)] = null);

(statearr_14329_14374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (1))){
var state_14326__$1 = state_14326;
var statearr_14330_14375 = state_14326__$1;
(statearr_14330_14375[(2)] = null);

(statearr_14330_14375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (24))){
var inst_14305 = (state_14326[(7)]);
var inst_14314 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14305);
var state_14326__$1 = state_14326;
var statearr_14331_14376 = state_14326__$1;
(statearr_14331_14376[(2)] = inst_14314);

(statearr_14331_14376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (4))){
var inst_14257 = (state_14326[(8)]);
var inst_14257__$1 = (state_14326[(2)]);
var inst_14258 = (inst_14257__$1 == null);
var state_14326__$1 = (function (){var statearr_14332 = state_14326;
(statearr_14332[(8)] = inst_14257__$1);

return statearr_14332;
})();
if(cljs.core.truth_(inst_14258)){
var statearr_14333_14377 = state_14326__$1;
(statearr_14333_14377[(1)] = (5));

} else {
var statearr_14334_14378 = state_14326__$1;
(statearr_14334_14378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (15))){
var inst_14299 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14335_14379 = state_14326__$1;
(statearr_14335_14379[(2)] = inst_14299);

(statearr_14335_14379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (21))){
var inst_14319 = (state_14326[(2)]);
var state_14326__$1 = (function (){var statearr_14336 = state_14326;
(statearr_14336[(9)] = inst_14319);

return statearr_14336;
})();
var statearr_14337_14380 = state_14326__$1;
(statearr_14337_14380[(2)] = null);

(statearr_14337_14380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (13))){
var inst_14281 = (state_14326[(10)]);
var inst_14283 = cljs.core.chunked_seq_QMARK_.call(null,inst_14281);
var state_14326__$1 = state_14326;
if(inst_14283){
var statearr_14338_14381 = state_14326__$1;
(statearr_14338_14381[(1)] = (16));

} else {
var statearr_14339_14382 = state_14326__$1;
(statearr_14339_14382[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (22))){
var inst_14311 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
if(cljs.core.truth_(inst_14311)){
var statearr_14340_14383 = state_14326__$1;
(statearr_14340_14383[(1)] = (23));

} else {
var statearr_14341_14384 = state_14326__$1;
(statearr_14341_14384[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (6))){
var inst_14307 = (state_14326[(11)]);
var inst_14305 = (state_14326[(7)]);
var inst_14257 = (state_14326[(8)]);
var inst_14305__$1 = topic_fn.call(null,inst_14257);
var inst_14306 = cljs.core.deref.call(null,mults);
var inst_14307__$1 = cljs.core.get.call(null,inst_14306,inst_14305__$1);
var state_14326__$1 = (function (){var statearr_14342 = state_14326;
(statearr_14342[(11)] = inst_14307__$1);

(statearr_14342[(7)] = inst_14305__$1);

return statearr_14342;
})();
if(cljs.core.truth_(inst_14307__$1)){
var statearr_14343_14385 = state_14326__$1;
(statearr_14343_14385[(1)] = (19));

} else {
var statearr_14344_14386 = state_14326__$1;
(statearr_14344_14386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (25))){
var inst_14316 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14345_14387 = state_14326__$1;
(statearr_14345_14387[(2)] = inst_14316);

(statearr_14345_14387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (17))){
var inst_14281 = (state_14326[(10)]);
var inst_14290 = cljs.core.first.call(null,inst_14281);
var inst_14291 = cljs.core.async.muxch_STAR_.call(null,inst_14290);
var inst_14292 = cljs.core.async.close_BANG_.call(null,inst_14291);
var inst_14293 = cljs.core.next.call(null,inst_14281);
var inst_14267 = inst_14293;
var inst_14268 = null;
var inst_14269 = (0);
var inst_14270 = (0);
var state_14326__$1 = (function (){var statearr_14346 = state_14326;
(statearr_14346[(12)] = inst_14268);

(statearr_14346[(13)] = inst_14270);

(statearr_14346[(14)] = inst_14292);

(statearr_14346[(15)] = inst_14269);

(statearr_14346[(16)] = inst_14267);

return statearr_14346;
})();
var statearr_14347_14388 = state_14326__$1;
(statearr_14347_14388[(2)] = null);

(statearr_14347_14388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (3))){
var inst_14324 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14326__$1,inst_14324);
} else {
if((state_val_14327 === (12))){
var inst_14301 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14348_14389 = state_14326__$1;
(statearr_14348_14389[(2)] = inst_14301);

(statearr_14348_14389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (2))){
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14326__$1,(4),ch);
} else {
if((state_val_14327 === (23))){
var state_14326__$1 = state_14326;
var statearr_14349_14390 = state_14326__$1;
(statearr_14349_14390[(2)] = null);

(statearr_14349_14390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (19))){
var inst_14307 = (state_14326[(11)]);
var inst_14257 = (state_14326[(8)]);
var inst_14309 = cljs.core.async.muxch_STAR_.call(null,inst_14307);
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14326__$1,(22),inst_14309,inst_14257);
} else {
if((state_val_14327 === (11))){
var inst_14281 = (state_14326[(10)]);
var inst_14267 = (state_14326[(16)]);
var inst_14281__$1 = cljs.core.seq.call(null,inst_14267);
var state_14326__$1 = (function (){var statearr_14350 = state_14326;
(statearr_14350[(10)] = inst_14281__$1);

return statearr_14350;
})();
if(inst_14281__$1){
var statearr_14351_14391 = state_14326__$1;
(statearr_14351_14391[(1)] = (13));

} else {
var statearr_14352_14392 = state_14326__$1;
(statearr_14352_14392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (9))){
var inst_14303 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14353_14393 = state_14326__$1;
(statearr_14353_14393[(2)] = inst_14303);

(statearr_14353_14393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (5))){
var inst_14264 = cljs.core.deref.call(null,mults);
var inst_14265 = cljs.core.vals.call(null,inst_14264);
var inst_14266 = cljs.core.seq.call(null,inst_14265);
var inst_14267 = inst_14266;
var inst_14268 = null;
var inst_14269 = (0);
var inst_14270 = (0);
var state_14326__$1 = (function (){var statearr_14354 = state_14326;
(statearr_14354[(12)] = inst_14268);

(statearr_14354[(13)] = inst_14270);

(statearr_14354[(15)] = inst_14269);

(statearr_14354[(16)] = inst_14267);

return statearr_14354;
})();
var statearr_14355_14394 = state_14326__$1;
(statearr_14355_14394[(2)] = null);

(statearr_14355_14394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (14))){
var state_14326__$1 = state_14326;
var statearr_14359_14395 = state_14326__$1;
(statearr_14359_14395[(2)] = null);

(statearr_14359_14395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (16))){
var inst_14281 = (state_14326[(10)]);
var inst_14285 = cljs.core.chunk_first.call(null,inst_14281);
var inst_14286 = cljs.core.chunk_rest.call(null,inst_14281);
var inst_14287 = cljs.core.count.call(null,inst_14285);
var inst_14267 = inst_14286;
var inst_14268 = inst_14285;
var inst_14269 = inst_14287;
var inst_14270 = (0);
var state_14326__$1 = (function (){var statearr_14360 = state_14326;
(statearr_14360[(12)] = inst_14268);

(statearr_14360[(13)] = inst_14270);

(statearr_14360[(15)] = inst_14269);

(statearr_14360[(16)] = inst_14267);

return statearr_14360;
})();
var statearr_14361_14396 = state_14326__$1;
(statearr_14361_14396[(2)] = null);

(statearr_14361_14396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (10))){
var inst_14268 = (state_14326[(12)]);
var inst_14270 = (state_14326[(13)]);
var inst_14269 = (state_14326[(15)]);
var inst_14267 = (state_14326[(16)]);
var inst_14275 = cljs.core._nth.call(null,inst_14268,inst_14270);
var inst_14276 = cljs.core.async.muxch_STAR_.call(null,inst_14275);
var inst_14277 = cljs.core.async.close_BANG_.call(null,inst_14276);
var inst_14278 = (inst_14270 + (1));
var tmp14356 = inst_14268;
var tmp14357 = inst_14269;
var tmp14358 = inst_14267;
var inst_14267__$1 = tmp14358;
var inst_14268__$1 = tmp14356;
var inst_14269__$1 = tmp14357;
var inst_14270__$1 = inst_14278;
var state_14326__$1 = (function (){var statearr_14362 = state_14326;
(statearr_14362[(12)] = inst_14268__$1);

(statearr_14362[(13)] = inst_14270__$1);

(statearr_14362[(15)] = inst_14269__$1);

(statearr_14362[(16)] = inst_14267__$1);

(statearr_14362[(17)] = inst_14277);

return statearr_14362;
})();
var statearr_14363_14397 = state_14326__$1;
(statearr_14363_14397[(2)] = null);

(statearr_14363_14397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (18))){
var inst_14296 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14364_14398 = state_14326__$1;
(statearr_14364_14398[(2)] = inst_14296);

(statearr_14364_14398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (8))){
var inst_14270 = (state_14326[(13)]);
var inst_14269 = (state_14326[(15)]);
var inst_14272 = (inst_14270 < inst_14269);
var inst_14273 = inst_14272;
var state_14326__$1 = state_14326;
if(cljs.core.truth_(inst_14273)){
var statearr_14365_14399 = state_14326__$1;
(statearr_14365_14399[(1)] = (10));

} else {
var statearr_14366_14400 = state_14326__$1;
(statearr_14366_14400[(1)] = (11));

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
});})(c__13152__auto___14372,mults,ensure_mult,p))
;
return ((function (switch__13064__auto__,c__13152__auto___14372,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_14367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14367[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_14367[(1)] = (1));

return statearr_14367;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_14326){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_14326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e14368){if((e14368 instanceof Object)){
var ex__13068__auto__ = e14368;
var statearr_14369_14401 = state_14326;
(statearr_14369_14401[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14402 = state_14326;
state_14326 = G__14402;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_14326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_14326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___14372,mults,ensure_mult,p))
})();
var state__13154__auto__ = (function (){var statearr_14370 = f__13153__auto__.call(null);
(statearr_14370[(6)] = c__13152__auto___14372);

return statearr_14370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___14372,mults,ensure_mult,p))
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
var G__14404 = arguments.length;
switch (G__14404) {
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
var G__14407 = arguments.length;
switch (G__14407) {
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
var G__14410 = arguments.length;
switch (G__14410) {
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
var c__13152__auto___14477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___14477,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___14477,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14449){
var state_val_14450 = (state_14449[(1)]);
if((state_val_14450 === (7))){
var state_14449__$1 = state_14449;
var statearr_14451_14478 = state_14449__$1;
(statearr_14451_14478[(2)] = null);

(statearr_14451_14478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (1))){
var state_14449__$1 = state_14449;
var statearr_14452_14479 = state_14449__$1;
(statearr_14452_14479[(2)] = null);

(statearr_14452_14479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (4))){
var inst_14413 = (state_14449[(7)]);
var inst_14415 = (inst_14413 < cnt);
var state_14449__$1 = state_14449;
if(cljs.core.truth_(inst_14415)){
var statearr_14453_14480 = state_14449__$1;
(statearr_14453_14480[(1)] = (6));

} else {
var statearr_14454_14481 = state_14449__$1;
(statearr_14454_14481[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (15))){
var inst_14445 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
var statearr_14455_14482 = state_14449__$1;
(statearr_14455_14482[(2)] = inst_14445);

(statearr_14455_14482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (13))){
var inst_14438 = cljs.core.async.close_BANG_.call(null,out);
var state_14449__$1 = state_14449;
var statearr_14456_14483 = state_14449__$1;
(statearr_14456_14483[(2)] = inst_14438);

(statearr_14456_14483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (6))){
var state_14449__$1 = state_14449;
var statearr_14457_14484 = state_14449__$1;
(statearr_14457_14484[(2)] = null);

(statearr_14457_14484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (3))){
var inst_14447 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14449__$1,inst_14447);
} else {
if((state_val_14450 === (12))){
var inst_14435 = (state_14449[(8)]);
var inst_14435__$1 = (state_14449[(2)]);
var inst_14436 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14435__$1);
var state_14449__$1 = (function (){var statearr_14458 = state_14449;
(statearr_14458[(8)] = inst_14435__$1);

return statearr_14458;
})();
if(cljs.core.truth_(inst_14436)){
var statearr_14459_14485 = state_14449__$1;
(statearr_14459_14485[(1)] = (13));

} else {
var statearr_14460_14486 = state_14449__$1;
(statearr_14460_14486[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (2))){
var inst_14412 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14413 = (0);
var state_14449__$1 = (function (){var statearr_14461 = state_14449;
(statearr_14461[(7)] = inst_14413);

(statearr_14461[(9)] = inst_14412);

return statearr_14461;
})();
var statearr_14462_14487 = state_14449__$1;
(statearr_14462_14487[(2)] = null);

(statearr_14462_14487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (11))){
var inst_14413 = (state_14449[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14449,(10),Object,null,(9));
var inst_14422 = chs__$1.call(null,inst_14413);
var inst_14423 = done.call(null,inst_14413);
var inst_14424 = cljs.core.async.take_BANG_.call(null,inst_14422,inst_14423);
var state_14449__$1 = state_14449;
var statearr_14463_14488 = state_14449__$1;
(statearr_14463_14488[(2)] = inst_14424);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14449__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (9))){
var inst_14413 = (state_14449[(7)]);
var inst_14426 = (state_14449[(2)]);
var inst_14427 = (inst_14413 + (1));
var inst_14413__$1 = inst_14427;
var state_14449__$1 = (function (){var statearr_14464 = state_14449;
(statearr_14464[(10)] = inst_14426);

(statearr_14464[(7)] = inst_14413__$1);

return statearr_14464;
})();
var statearr_14465_14489 = state_14449__$1;
(statearr_14465_14489[(2)] = null);

(statearr_14465_14489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (5))){
var inst_14433 = (state_14449[(2)]);
var state_14449__$1 = (function (){var statearr_14466 = state_14449;
(statearr_14466[(11)] = inst_14433);

return statearr_14466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14449__$1,(12),dchan);
} else {
if((state_val_14450 === (14))){
var inst_14435 = (state_14449[(8)]);
var inst_14440 = cljs.core.apply.call(null,f,inst_14435);
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14449__$1,(16),out,inst_14440);
} else {
if((state_val_14450 === (16))){
var inst_14442 = (state_14449[(2)]);
var state_14449__$1 = (function (){var statearr_14467 = state_14449;
(statearr_14467[(12)] = inst_14442);

return statearr_14467;
})();
var statearr_14468_14490 = state_14449__$1;
(statearr_14468_14490[(2)] = null);

(statearr_14468_14490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (10))){
var inst_14417 = (state_14449[(2)]);
var inst_14418 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14449__$1 = (function (){var statearr_14469 = state_14449;
(statearr_14469[(13)] = inst_14417);

return statearr_14469;
})();
var statearr_14470_14491 = state_14449__$1;
(statearr_14470_14491[(2)] = inst_14418);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14449__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (8))){
var inst_14431 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
var statearr_14471_14492 = state_14449__$1;
(statearr_14471_14492[(2)] = inst_14431);

(statearr_14471_14492[(1)] = (5));


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
});})(c__13152__auto___14477,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13064__auto__,c__13152__auto___14477,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_14472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14472[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_14472[(1)] = (1));

return statearr_14472;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_14449){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_14449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e14473){if((e14473 instanceof Object)){
var ex__13068__auto__ = e14473;
var statearr_14474_14493 = state_14449;
(statearr_14474_14493[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14494 = state_14449;
state_14449 = G__14494;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_14449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_14449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___14477,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13154__auto__ = (function (){var statearr_14475 = f__13153__auto__.call(null);
(statearr_14475[(6)] = c__13152__auto___14477);

return statearr_14475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___14477,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__14497 = arguments.length;
switch (G__14497) {
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
var c__13152__auto___14551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___14551,out){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___14551,out){
return (function (state_14529){
var state_val_14530 = (state_14529[(1)]);
if((state_val_14530 === (7))){
var inst_14508 = (state_14529[(7)]);
var inst_14509 = (state_14529[(8)]);
var inst_14508__$1 = (state_14529[(2)]);
var inst_14509__$1 = cljs.core.nth.call(null,inst_14508__$1,(0),null);
var inst_14510 = cljs.core.nth.call(null,inst_14508__$1,(1),null);
var inst_14511 = (inst_14509__$1 == null);
var state_14529__$1 = (function (){var statearr_14531 = state_14529;
(statearr_14531[(7)] = inst_14508__$1);

(statearr_14531[(9)] = inst_14510);

(statearr_14531[(8)] = inst_14509__$1);

return statearr_14531;
})();
if(cljs.core.truth_(inst_14511)){
var statearr_14532_14552 = state_14529__$1;
(statearr_14532_14552[(1)] = (8));

} else {
var statearr_14533_14553 = state_14529__$1;
(statearr_14533_14553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14530 === (1))){
var inst_14498 = cljs.core.vec.call(null,chs);
var inst_14499 = inst_14498;
var state_14529__$1 = (function (){var statearr_14534 = state_14529;
(statearr_14534[(10)] = inst_14499);

return statearr_14534;
})();
var statearr_14535_14554 = state_14529__$1;
(statearr_14535_14554[(2)] = null);

(statearr_14535_14554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14530 === (4))){
var inst_14499 = (state_14529[(10)]);
var state_14529__$1 = state_14529;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14529__$1,(7),inst_14499);
} else {
if((state_val_14530 === (6))){
var inst_14525 = (state_14529[(2)]);
var state_14529__$1 = state_14529;
var statearr_14536_14555 = state_14529__$1;
(statearr_14536_14555[(2)] = inst_14525);

(statearr_14536_14555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14530 === (3))){
var inst_14527 = (state_14529[(2)]);
var state_14529__$1 = state_14529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14529__$1,inst_14527);
} else {
if((state_val_14530 === (2))){
var inst_14499 = (state_14529[(10)]);
var inst_14501 = cljs.core.count.call(null,inst_14499);
var inst_14502 = (inst_14501 > (0));
var state_14529__$1 = state_14529;
if(cljs.core.truth_(inst_14502)){
var statearr_14538_14556 = state_14529__$1;
(statearr_14538_14556[(1)] = (4));

} else {
var statearr_14539_14557 = state_14529__$1;
(statearr_14539_14557[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14530 === (11))){
var inst_14499 = (state_14529[(10)]);
var inst_14518 = (state_14529[(2)]);
var tmp14537 = inst_14499;
var inst_14499__$1 = tmp14537;
var state_14529__$1 = (function (){var statearr_14540 = state_14529;
(statearr_14540[(11)] = inst_14518);

(statearr_14540[(10)] = inst_14499__$1);

return statearr_14540;
})();
var statearr_14541_14558 = state_14529__$1;
(statearr_14541_14558[(2)] = null);

(statearr_14541_14558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14530 === (9))){
var inst_14509 = (state_14529[(8)]);
var state_14529__$1 = state_14529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14529__$1,(11),out,inst_14509);
} else {
if((state_val_14530 === (5))){
var inst_14523 = cljs.core.async.close_BANG_.call(null,out);
var state_14529__$1 = state_14529;
var statearr_14542_14559 = state_14529__$1;
(statearr_14542_14559[(2)] = inst_14523);

(statearr_14542_14559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14530 === (10))){
var inst_14521 = (state_14529[(2)]);
var state_14529__$1 = state_14529;
var statearr_14543_14560 = state_14529__$1;
(statearr_14543_14560[(2)] = inst_14521);

(statearr_14543_14560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14530 === (8))){
var inst_14508 = (state_14529[(7)]);
var inst_14510 = (state_14529[(9)]);
var inst_14499 = (state_14529[(10)]);
var inst_14509 = (state_14529[(8)]);
var inst_14513 = (function (){var cs = inst_14499;
var vec__14504 = inst_14508;
var v = inst_14509;
var c = inst_14510;
return ((function (cs,vec__14504,v,c,inst_14508,inst_14510,inst_14499,inst_14509,state_val_14530,c__13152__auto___14551,out){
return (function (p1__14495_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14495_SHARP_);
});
;})(cs,vec__14504,v,c,inst_14508,inst_14510,inst_14499,inst_14509,state_val_14530,c__13152__auto___14551,out))
})();
var inst_14514 = cljs.core.filterv.call(null,inst_14513,inst_14499);
var inst_14499__$1 = inst_14514;
var state_14529__$1 = (function (){var statearr_14544 = state_14529;
(statearr_14544[(10)] = inst_14499__$1);

return statearr_14544;
})();
var statearr_14545_14561 = state_14529__$1;
(statearr_14545_14561[(2)] = null);

(statearr_14545_14561[(1)] = (2));


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
});})(c__13152__auto___14551,out))
;
return ((function (switch__13064__auto__,c__13152__auto___14551,out){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_14546 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14546[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_14546[(1)] = (1));

return statearr_14546;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_14529){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_14529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e14547){if((e14547 instanceof Object)){
var ex__13068__auto__ = e14547;
var statearr_14548_14562 = state_14529;
(statearr_14548_14562[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14563 = state_14529;
state_14529 = G__14563;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_14529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_14529);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___14551,out))
})();
var state__13154__auto__ = (function (){var statearr_14549 = f__13153__auto__.call(null);
(statearr_14549[(6)] = c__13152__auto___14551);

return statearr_14549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___14551,out))
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
var G__14565 = arguments.length;
switch (G__14565) {
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
var c__13152__auto___14610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___14610,out){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___14610,out){
return (function (state_14589){
var state_val_14590 = (state_14589[(1)]);
if((state_val_14590 === (7))){
var inst_14571 = (state_14589[(7)]);
var inst_14571__$1 = (state_14589[(2)]);
var inst_14572 = (inst_14571__$1 == null);
var inst_14573 = cljs.core.not.call(null,inst_14572);
var state_14589__$1 = (function (){var statearr_14591 = state_14589;
(statearr_14591[(7)] = inst_14571__$1);

return statearr_14591;
})();
if(inst_14573){
var statearr_14592_14611 = state_14589__$1;
(statearr_14592_14611[(1)] = (8));

} else {
var statearr_14593_14612 = state_14589__$1;
(statearr_14593_14612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (1))){
var inst_14566 = (0);
var state_14589__$1 = (function (){var statearr_14594 = state_14589;
(statearr_14594[(8)] = inst_14566);

return statearr_14594;
})();
var statearr_14595_14613 = state_14589__$1;
(statearr_14595_14613[(2)] = null);

(statearr_14595_14613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (4))){
var state_14589__$1 = state_14589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14589__$1,(7),ch);
} else {
if((state_val_14590 === (6))){
var inst_14584 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14596_14614 = state_14589__$1;
(statearr_14596_14614[(2)] = inst_14584);

(statearr_14596_14614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (3))){
var inst_14586 = (state_14589[(2)]);
var inst_14587 = cljs.core.async.close_BANG_.call(null,out);
var state_14589__$1 = (function (){var statearr_14597 = state_14589;
(statearr_14597[(9)] = inst_14586);

return statearr_14597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14589__$1,inst_14587);
} else {
if((state_val_14590 === (2))){
var inst_14566 = (state_14589[(8)]);
var inst_14568 = (inst_14566 < n);
var state_14589__$1 = state_14589;
if(cljs.core.truth_(inst_14568)){
var statearr_14598_14615 = state_14589__$1;
(statearr_14598_14615[(1)] = (4));

} else {
var statearr_14599_14616 = state_14589__$1;
(statearr_14599_14616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (11))){
var inst_14566 = (state_14589[(8)]);
var inst_14576 = (state_14589[(2)]);
var inst_14577 = (inst_14566 + (1));
var inst_14566__$1 = inst_14577;
var state_14589__$1 = (function (){var statearr_14600 = state_14589;
(statearr_14600[(10)] = inst_14576);

(statearr_14600[(8)] = inst_14566__$1);

return statearr_14600;
})();
var statearr_14601_14617 = state_14589__$1;
(statearr_14601_14617[(2)] = null);

(statearr_14601_14617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (9))){
var state_14589__$1 = state_14589;
var statearr_14602_14618 = state_14589__$1;
(statearr_14602_14618[(2)] = null);

(statearr_14602_14618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (5))){
var state_14589__$1 = state_14589;
var statearr_14603_14619 = state_14589__$1;
(statearr_14603_14619[(2)] = null);

(statearr_14603_14619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (10))){
var inst_14581 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14604_14620 = state_14589__$1;
(statearr_14604_14620[(2)] = inst_14581);

(statearr_14604_14620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (8))){
var inst_14571 = (state_14589[(7)]);
var state_14589__$1 = state_14589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14589__$1,(11),out,inst_14571);
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
});})(c__13152__auto___14610,out))
;
return ((function (switch__13064__auto__,c__13152__auto___14610,out){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_14605 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14605[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_14605[(1)] = (1));

return statearr_14605;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_14589){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_14589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e14606){if((e14606 instanceof Object)){
var ex__13068__auto__ = e14606;
var statearr_14607_14621 = state_14589;
(statearr_14607_14621[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14622 = state_14589;
state_14589 = G__14622;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_14589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_14589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___14610,out))
})();
var state__13154__auto__ = (function (){var statearr_14608 = f__13153__auto__.call(null);
(statearr_14608[(6)] = c__13152__auto___14610);

return statearr_14608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___14610,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14624 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14624 = (function (f,ch,meta14625){
this.f = f;
this.ch = ch;
this.meta14625 = meta14625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14626,meta14625__$1){
var self__ = this;
var _14626__$1 = this;
return (new cljs.core.async.t_cljs$core$async14624(self__.f,self__.ch,meta14625__$1));
});

cljs.core.async.t_cljs$core$async14624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14626){
var self__ = this;
var _14626__$1 = this;
return self__.meta14625;
});

cljs.core.async.t_cljs$core$async14624.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14624.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14624.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14627 = (function (f,ch,meta14625,_,fn1,meta14628){
this.f = f;
this.ch = ch;
this.meta14625 = meta14625;
this._ = _;
this.fn1 = fn1;
this.meta14628 = meta14628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14629,meta14628__$1){
var self__ = this;
var _14629__$1 = this;
return (new cljs.core.async.t_cljs$core$async14627(self__.f,self__.ch,self__.meta14625,self__._,self__.fn1,meta14628__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14629){
var self__ = this;
var _14629__$1 = this;
return self__.meta14628;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14627.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14623_SHARP_){
return f1.call(null,(((p1__14623_SHARP_ == null))?null:self__.f.call(null,p1__14623_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14627.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14625","meta14625",-1821920331,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14624","cljs.core.async/t_cljs$core$async14624",-486197348,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14628","meta14628",1530968827,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14627";

cljs.core.async.t_cljs$core$async14627.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async14627");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14627 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14627(f__$1,ch__$1,meta14625__$1,___$2,fn1__$1,meta14628){
return (new cljs.core.async.t_cljs$core$async14627(f__$1,ch__$1,meta14625__$1,___$2,fn1__$1,meta14628));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14627(self__.f,self__.ch,self__.meta14625,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async14624.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14625","meta14625",-1821920331,null)], null);
});

cljs.core.async.t_cljs$core$async14624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14624";

cljs.core.async.t_cljs$core$async14624.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async14624");
});

cljs.core.async.__GT_t_cljs$core$async14624 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14624(f__$1,ch__$1,meta14625){
return (new cljs.core.async.t_cljs$core$async14624(f__$1,ch__$1,meta14625));
});

}

return (new cljs.core.async.t_cljs$core$async14624(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14630 = (function (f,ch,meta14631){
this.f = f;
this.ch = ch;
this.meta14631 = meta14631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14632,meta14631__$1){
var self__ = this;
var _14632__$1 = this;
return (new cljs.core.async.t_cljs$core$async14630(self__.f,self__.ch,meta14631__$1));
});

cljs.core.async.t_cljs$core$async14630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14632){
var self__ = this;
var _14632__$1 = this;
return self__.meta14631;
});

cljs.core.async.t_cljs$core$async14630.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14630.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14630.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14630.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14630.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14630.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14631","meta14631",-1198360290,null)], null);
});

cljs.core.async.t_cljs$core$async14630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14630";

cljs.core.async.t_cljs$core$async14630.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async14630");
});

cljs.core.async.__GT_t_cljs$core$async14630 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14630(f__$1,ch__$1,meta14631){
return (new cljs.core.async.t_cljs$core$async14630(f__$1,ch__$1,meta14631));
});

}

return (new cljs.core.async.t_cljs$core$async14630(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14633 = (function (p,ch,meta14634){
this.p = p;
this.ch = ch;
this.meta14634 = meta14634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14635,meta14634__$1){
var self__ = this;
var _14635__$1 = this;
return (new cljs.core.async.t_cljs$core$async14633(self__.p,self__.ch,meta14634__$1));
});

cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14635){
var self__ = this;
var _14635__$1 = this;
return self__.meta14634;
});

cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14634","meta14634",1204359081,null)], null);
});

cljs.core.async.t_cljs$core$async14633.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14633";

cljs.core.async.t_cljs$core$async14633.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async14633");
});

cljs.core.async.__GT_t_cljs$core$async14633 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14633(p__$1,ch__$1,meta14634){
return (new cljs.core.async.t_cljs$core$async14633(p__$1,ch__$1,meta14634));
});

}

return (new cljs.core.async.t_cljs$core$async14633(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14637 = arguments.length;
switch (G__14637) {
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
var c__13152__auto___14677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___14677,out){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___14677,out){
return (function (state_14658){
var state_val_14659 = (state_14658[(1)]);
if((state_val_14659 === (7))){
var inst_14654 = (state_14658[(2)]);
var state_14658__$1 = state_14658;
var statearr_14660_14678 = state_14658__$1;
(statearr_14660_14678[(2)] = inst_14654);

(statearr_14660_14678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (1))){
var state_14658__$1 = state_14658;
var statearr_14661_14679 = state_14658__$1;
(statearr_14661_14679[(2)] = null);

(statearr_14661_14679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (4))){
var inst_14640 = (state_14658[(7)]);
var inst_14640__$1 = (state_14658[(2)]);
var inst_14641 = (inst_14640__$1 == null);
var state_14658__$1 = (function (){var statearr_14662 = state_14658;
(statearr_14662[(7)] = inst_14640__$1);

return statearr_14662;
})();
if(cljs.core.truth_(inst_14641)){
var statearr_14663_14680 = state_14658__$1;
(statearr_14663_14680[(1)] = (5));

} else {
var statearr_14664_14681 = state_14658__$1;
(statearr_14664_14681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (6))){
var inst_14640 = (state_14658[(7)]);
var inst_14645 = p.call(null,inst_14640);
var state_14658__$1 = state_14658;
if(cljs.core.truth_(inst_14645)){
var statearr_14665_14682 = state_14658__$1;
(statearr_14665_14682[(1)] = (8));

} else {
var statearr_14666_14683 = state_14658__$1;
(statearr_14666_14683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (3))){
var inst_14656 = (state_14658[(2)]);
var state_14658__$1 = state_14658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14658__$1,inst_14656);
} else {
if((state_val_14659 === (2))){
var state_14658__$1 = state_14658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14658__$1,(4),ch);
} else {
if((state_val_14659 === (11))){
var inst_14648 = (state_14658[(2)]);
var state_14658__$1 = state_14658;
var statearr_14667_14684 = state_14658__$1;
(statearr_14667_14684[(2)] = inst_14648);

(statearr_14667_14684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (9))){
var state_14658__$1 = state_14658;
var statearr_14668_14685 = state_14658__$1;
(statearr_14668_14685[(2)] = null);

(statearr_14668_14685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (5))){
var inst_14643 = cljs.core.async.close_BANG_.call(null,out);
var state_14658__$1 = state_14658;
var statearr_14669_14686 = state_14658__$1;
(statearr_14669_14686[(2)] = inst_14643);

(statearr_14669_14686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (10))){
var inst_14651 = (state_14658[(2)]);
var state_14658__$1 = (function (){var statearr_14670 = state_14658;
(statearr_14670[(8)] = inst_14651);

return statearr_14670;
})();
var statearr_14671_14687 = state_14658__$1;
(statearr_14671_14687[(2)] = null);

(statearr_14671_14687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (8))){
var inst_14640 = (state_14658[(7)]);
var state_14658__$1 = state_14658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14658__$1,(11),out,inst_14640);
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
});})(c__13152__auto___14677,out))
;
return ((function (switch__13064__auto__,c__13152__auto___14677,out){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_14672 = [null,null,null,null,null,null,null,null,null];
(statearr_14672[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_14672[(1)] = (1));

return statearr_14672;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_14658){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_14658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e14673){if((e14673 instanceof Object)){
var ex__13068__auto__ = e14673;
var statearr_14674_14688 = state_14658;
(statearr_14674_14688[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14689 = state_14658;
state_14658 = G__14689;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_14658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_14658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___14677,out))
})();
var state__13154__auto__ = (function (){var statearr_14675 = f__13153__auto__.call(null);
(statearr_14675[(6)] = c__13152__auto___14677);

return statearr_14675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___14677,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14691 = arguments.length;
switch (G__14691) {
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
var c__13152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto__){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto__){
return (function (state_14754){
var state_val_14755 = (state_14754[(1)]);
if((state_val_14755 === (7))){
var inst_14750 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14756_14794 = state_14754__$1;
(statearr_14756_14794[(2)] = inst_14750);

(statearr_14756_14794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (20))){
var inst_14720 = (state_14754[(7)]);
var inst_14731 = (state_14754[(2)]);
var inst_14732 = cljs.core.next.call(null,inst_14720);
var inst_14706 = inst_14732;
var inst_14707 = null;
var inst_14708 = (0);
var inst_14709 = (0);
var state_14754__$1 = (function (){var statearr_14757 = state_14754;
(statearr_14757[(8)] = inst_14707);

(statearr_14757[(9)] = inst_14706);

(statearr_14757[(10)] = inst_14709);

(statearr_14757[(11)] = inst_14731);

(statearr_14757[(12)] = inst_14708);

return statearr_14757;
})();
var statearr_14758_14795 = state_14754__$1;
(statearr_14758_14795[(2)] = null);

(statearr_14758_14795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (1))){
var state_14754__$1 = state_14754;
var statearr_14759_14796 = state_14754__$1;
(statearr_14759_14796[(2)] = null);

(statearr_14759_14796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (4))){
var inst_14695 = (state_14754[(13)]);
var inst_14695__$1 = (state_14754[(2)]);
var inst_14696 = (inst_14695__$1 == null);
var state_14754__$1 = (function (){var statearr_14760 = state_14754;
(statearr_14760[(13)] = inst_14695__$1);

return statearr_14760;
})();
if(cljs.core.truth_(inst_14696)){
var statearr_14761_14797 = state_14754__$1;
(statearr_14761_14797[(1)] = (5));

} else {
var statearr_14762_14798 = state_14754__$1;
(statearr_14762_14798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (15))){
var state_14754__$1 = state_14754;
var statearr_14766_14799 = state_14754__$1;
(statearr_14766_14799[(2)] = null);

(statearr_14766_14799[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (21))){
var state_14754__$1 = state_14754;
var statearr_14767_14800 = state_14754__$1;
(statearr_14767_14800[(2)] = null);

(statearr_14767_14800[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (13))){
var inst_14707 = (state_14754[(8)]);
var inst_14706 = (state_14754[(9)]);
var inst_14709 = (state_14754[(10)]);
var inst_14708 = (state_14754[(12)]);
var inst_14716 = (state_14754[(2)]);
var inst_14717 = (inst_14709 + (1));
var tmp14763 = inst_14707;
var tmp14764 = inst_14706;
var tmp14765 = inst_14708;
var inst_14706__$1 = tmp14764;
var inst_14707__$1 = tmp14763;
var inst_14708__$1 = tmp14765;
var inst_14709__$1 = inst_14717;
var state_14754__$1 = (function (){var statearr_14768 = state_14754;
(statearr_14768[(8)] = inst_14707__$1);

(statearr_14768[(9)] = inst_14706__$1);

(statearr_14768[(10)] = inst_14709__$1);

(statearr_14768[(12)] = inst_14708__$1);

(statearr_14768[(14)] = inst_14716);

return statearr_14768;
})();
var statearr_14769_14801 = state_14754__$1;
(statearr_14769_14801[(2)] = null);

(statearr_14769_14801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (22))){
var state_14754__$1 = state_14754;
var statearr_14770_14802 = state_14754__$1;
(statearr_14770_14802[(2)] = null);

(statearr_14770_14802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (6))){
var inst_14695 = (state_14754[(13)]);
var inst_14704 = f.call(null,inst_14695);
var inst_14705 = cljs.core.seq.call(null,inst_14704);
var inst_14706 = inst_14705;
var inst_14707 = null;
var inst_14708 = (0);
var inst_14709 = (0);
var state_14754__$1 = (function (){var statearr_14771 = state_14754;
(statearr_14771[(8)] = inst_14707);

(statearr_14771[(9)] = inst_14706);

(statearr_14771[(10)] = inst_14709);

(statearr_14771[(12)] = inst_14708);

return statearr_14771;
})();
var statearr_14772_14803 = state_14754__$1;
(statearr_14772_14803[(2)] = null);

(statearr_14772_14803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (17))){
var inst_14720 = (state_14754[(7)]);
var inst_14724 = cljs.core.chunk_first.call(null,inst_14720);
var inst_14725 = cljs.core.chunk_rest.call(null,inst_14720);
var inst_14726 = cljs.core.count.call(null,inst_14724);
var inst_14706 = inst_14725;
var inst_14707 = inst_14724;
var inst_14708 = inst_14726;
var inst_14709 = (0);
var state_14754__$1 = (function (){var statearr_14773 = state_14754;
(statearr_14773[(8)] = inst_14707);

(statearr_14773[(9)] = inst_14706);

(statearr_14773[(10)] = inst_14709);

(statearr_14773[(12)] = inst_14708);

return statearr_14773;
})();
var statearr_14774_14804 = state_14754__$1;
(statearr_14774_14804[(2)] = null);

(statearr_14774_14804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (3))){
var inst_14752 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14754__$1,inst_14752);
} else {
if((state_val_14755 === (12))){
var inst_14740 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14775_14805 = state_14754__$1;
(statearr_14775_14805[(2)] = inst_14740);

(statearr_14775_14805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (2))){
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14754__$1,(4),in$);
} else {
if((state_val_14755 === (23))){
var inst_14748 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14776_14806 = state_14754__$1;
(statearr_14776_14806[(2)] = inst_14748);

(statearr_14776_14806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (19))){
var inst_14735 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14777_14807 = state_14754__$1;
(statearr_14777_14807[(2)] = inst_14735);

(statearr_14777_14807[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (11))){
var inst_14706 = (state_14754[(9)]);
var inst_14720 = (state_14754[(7)]);
var inst_14720__$1 = cljs.core.seq.call(null,inst_14706);
var state_14754__$1 = (function (){var statearr_14778 = state_14754;
(statearr_14778[(7)] = inst_14720__$1);

return statearr_14778;
})();
if(inst_14720__$1){
var statearr_14779_14808 = state_14754__$1;
(statearr_14779_14808[(1)] = (14));

} else {
var statearr_14780_14809 = state_14754__$1;
(statearr_14780_14809[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (9))){
var inst_14742 = (state_14754[(2)]);
var inst_14743 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14754__$1 = (function (){var statearr_14781 = state_14754;
(statearr_14781[(15)] = inst_14742);

return statearr_14781;
})();
if(cljs.core.truth_(inst_14743)){
var statearr_14782_14810 = state_14754__$1;
(statearr_14782_14810[(1)] = (21));

} else {
var statearr_14783_14811 = state_14754__$1;
(statearr_14783_14811[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (5))){
var inst_14698 = cljs.core.async.close_BANG_.call(null,out);
var state_14754__$1 = state_14754;
var statearr_14784_14812 = state_14754__$1;
(statearr_14784_14812[(2)] = inst_14698);

(statearr_14784_14812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (14))){
var inst_14720 = (state_14754[(7)]);
var inst_14722 = cljs.core.chunked_seq_QMARK_.call(null,inst_14720);
var state_14754__$1 = state_14754;
if(inst_14722){
var statearr_14785_14813 = state_14754__$1;
(statearr_14785_14813[(1)] = (17));

} else {
var statearr_14786_14814 = state_14754__$1;
(statearr_14786_14814[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (16))){
var inst_14738 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14787_14815 = state_14754__$1;
(statearr_14787_14815[(2)] = inst_14738);

(statearr_14787_14815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (10))){
var inst_14707 = (state_14754[(8)]);
var inst_14709 = (state_14754[(10)]);
var inst_14714 = cljs.core._nth.call(null,inst_14707,inst_14709);
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14754__$1,(13),out,inst_14714);
} else {
if((state_val_14755 === (18))){
var inst_14720 = (state_14754[(7)]);
var inst_14729 = cljs.core.first.call(null,inst_14720);
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14754__$1,(20),out,inst_14729);
} else {
if((state_val_14755 === (8))){
var inst_14709 = (state_14754[(10)]);
var inst_14708 = (state_14754[(12)]);
var inst_14711 = (inst_14709 < inst_14708);
var inst_14712 = inst_14711;
var state_14754__$1 = state_14754;
if(cljs.core.truth_(inst_14712)){
var statearr_14788_14816 = state_14754__$1;
(statearr_14788_14816[(1)] = (10));

} else {
var statearr_14789_14817 = state_14754__$1;
(statearr_14789_14817[(1)] = (11));

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
});})(c__13152__auto__))
;
return ((function (switch__13064__auto__,c__13152__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13065__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13065__auto____0 = (function (){
var statearr_14790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14790[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13065__auto__);

(statearr_14790[(1)] = (1));

return statearr_14790;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13065__auto____1 = (function (state_14754){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_14754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e14791){if((e14791 instanceof Object)){
var ex__13068__auto__ = e14791;
var statearr_14792_14818 = state_14754;
(statearr_14792_14818[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14819 = state_14754;
state_14754 = G__14819;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13065__auto__ = function(state_14754){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13065__auto____1.call(this,state_14754);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13065__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13065__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto__))
})();
var state__13154__auto__ = (function (){var statearr_14793 = f__13153__auto__.call(null);
(statearr_14793[(6)] = c__13152__auto__);

return statearr_14793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto__))
);

return c__13152__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14821 = arguments.length;
switch (G__14821) {
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
var G__14824 = arguments.length;
switch (G__14824) {
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
var G__14827 = arguments.length;
switch (G__14827) {
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
var c__13152__auto___14874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___14874,out){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___14874,out){
return (function (state_14851){
var state_val_14852 = (state_14851[(1)]);
if((state_val_14852 === (7))){
var inst_14846 = (state_14851[(2)]);
var state_14851__$1 = state_14851;
var statearr_14853_14875 = state_14851__$1;
(statearr_14853_14875[(2)] = inst_14846);

(statearr_14853_14875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14852 === (1))){
var inst_14828 = null;
var state_14851__$1 = (function (){var statearr_14854 = state_14851;
(statearr_14854[(7)] = inst_14828);

return statearr_14854;
})();
var statearr_14855_14876 = state_14851__$1;
(statearr_14855_14876[(2)] = null);

(statearr_14855_14876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14852 === (4))){
var inst_14831 = (state_14851[(8)]);
var inst_14831__$1 = (state_14851[(2)]);
var inst_14832 = (inst_14831__$1 == null);
var inst_14833 = cljs.core.not.call(null,inst_14832);
var state_14851__$1 = (function (){var statearr_14856 = state_14851;
(statearr_14856[(8)] = inst_14831__$1);

return statearr_14856;
})();
if(inst_14833){
var statearr_14857_14877 = state_14851__$1;
(statearr_14857_14877[(1)] = (5));

} else {
var statearr_14858_14878 = state_14851__$1;
(statearr_14858_14878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14852 === (6))){
var state_14851__$1 = state_14851;
var statearr_14859_14879 = state_14851__$1;
(statearr_14859_14879[(2)] = null);

(statearr_14859_14879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14852 === (3))){
var inst_14848 = (state_14851[(2)]);
var inst_14849 = cljs.core.async.close_BANG_.call(null,out);
var state_14851__$1 = (function (){var statearr_14860 = state_14851;
(statearr_14860[(9)] = inst_14848);

return statearr_14860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14851__$1,inst_14849);
} else {
if((state_val_14852 === (2))){
var state_14851__$1 = state_14851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14851__$1,(4),ch);
} else {
if((state_val_14852 === (11))){
var inst_14831 = (state_14851[(8)]);
var inst_14840 = (state_14851[(2)]);
var inst_14828 = inst_14831;
var state_14851__$1 = (function (){var statearr_14861 = state_14851;
(statearr_14861[(10)] = inst_14840);

(statearr_14861[(7)] = inst_14828);

return statearr_14861;
})();
var statearr_14862_14880 = state_14851__$1;
(statearr_14862_14880[(2)] = null);

(statearr_14862_14880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14852 === (9))){
var inst_14831 = (state_14851[(8)]);
var state_14851__$1 = state_14851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14851__$1,(11),out,inst_14831);
} else {
if((state_val_14852 === (5))){
var inst_14831 = (state_14851[(8)]);
var inst_14828 = (state_14851[(7)]);
var inst_14835 = cljs.core._EQ_.call(null,inst_14831,inst_14828);
var state_14851__$1 = state_14851;
if(inst_14835){
var statearr_14864_14881 = state_14851__$1;
(statearr_14864_14881[(1)] = (8));

} else {
var statearr_14865_14882 = state_14851__$1;
(statearr_14865_14882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14852 === (10))){
var inst_14843 = (state_14851[(2)]);
var state_14851__$1 = state_14851;
var statearr_14866_14883 = state_14851__$1;
(statearr_14866_14883[(2)] = inst_14843);

(statearr_14866_14883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14852 === (8))){
var inst_14828 = (state_14851[(7)]);
var tmp14863 = inst_14828;
var inst_14828__$1 = tmp14863;
var state_14851__$1 = (function (){var statearr_14867 = state_14851;
(statearr_14867[(7)] = inst_14828__$1);

return statearr_14867;
})();
var statearr_14868_14884 = state_14851__$1;
(statearr_14868_14884[(2)] = null);

(statearr_14868_14884[(1)] = (2));


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
});})(c__13152__auto___14874,out))
;
return ((function (switch__13064__auto__,c__13152__auto___14874,out){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_14869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14869[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_14869[(1)] = (1));

return statearr_14869;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_14851){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_14851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e14870){if((e14870 instanceof Object)){
var ex__13068__auto__ = e14870;
var statearr_14871_14885 = state_14851;
(statearr_14871_14885[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14886 = state_14851;
state_14851 = G__14886;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_14851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_14851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___14874,out))
})();
var state__13154__auto__ = (function (){var statearr_14872 = f__13153__auto__.call(null);
(statearr_14872[(6)] = c__13152__auto___14874);

return statearr_14872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___14874,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14888 = arguments.length;
switch (G__14888) {
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
var c__13152__auto___14954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___14954,out){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___14954,out){
return (function (state_14926){
var state_val_14927 = (state_14926[(1)]);
if((state_val_14927 === (7))){
var inst_14922 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
var statearr_14928_14955 = state_14926__$1;
(statearr_14928_14955[(2)] = inst_14922);

(statearr_14928_14955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14927 === (1))){
var inst_14889 = (new Array(n));
var inst_14890 = inst_14889;
var inst_14891 = (0);
var state_14926__$1 = (function (){var statearr_14929 = state_14926;
(statearr_14929[(7)] = inst_14891);

(statearr_14929[(8)] = inst_14890);

return statearr_14929;
})();
var statearr_14930_14956 = state_14926__$1;
(statearr_14930_14956[(2)] = null);

(statearr_14930_14956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14927 === (4))){
var inst_14894 = (state_14926[(9)]);
var inst_14894__$1 = (state_14926[(2)]);
var inst_14895 = (inst_14894__$1 == null);
var inst_14896 = cljs.core.not.call(null,inst_14895);
var state_14926__$1 = (function (){var statearr_14931 = state_14926;
(statearr_14931[(9)] = inst_14894__$1);

return statearr_14931;
})();
if(inst_14896){
var statearr_14932_14957 = state_14926__$1;
(statearr_14932_14957[(1)] = (5));

} else {
var statearr_14933_14958 = state_14926__$1;
(statearr_14933_14958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14927 === (15))){
var inst_14916 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
var statearr_14934_14959 = state_14926__$1;
(statearr_14934_14959[(2)] = inst_14916);

(statearr_14934_14959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14927 === (13))){
var state_14926__$1 = state_14926;
var statearr_14935_14960 = state_14926__$1;
(statearr_14935_14960[(2)] = null);

(statearr_14935_14960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14927 === (6))){
var inst_14891 = (state_14926[(7)]);
var inst_14912 = (inst_14891 > (0));
var state_14926__$1 = state_14926;
if(cljs.core.truth_(inst_14912)){
var statearr_14936_14961 = state_14926__$1;
(statearr_14936_14961[(1)] = (12));

} else {
var statearr_14937_14962 = state_14926__$1;
(statearr_14937_14962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14927 === (3))){
var inst_14924 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14926__$1,inst_14924);
} else {
if((state_val_14927 === (12))){
var inst_14890 = (state_14926[(8)]);
var inst_14914 = cljs.core.vec.call(null,inst_14890);
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14926__$1,(15),out,inst_14914);
} else {
if((state_val_14927 === (2))){
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14926__$1,(4),ch);
} else {
if((state_val_14927 === (11))){
var inst_14906 = (state_14926[(2)]);
var inst_14907 = (new Array(n));
var inst_14890 = inst_14907;
var inst_14891 = (0);
var state_14926__$1 = (function (){var statearr_14938 = state_14926;
(statearr_14938[(10)] = inst_14906);

(statearr_14938[(7)] = inst_14891);

(statearr_14938[(8)] = inst_14890);

return statearr_14938;
})();
var statearr_14939_14963 = state_14926__$1;
(statearr_14939_14963[(2)] = null);

(statearr_14939_14963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14927 === (9))){
var inst_14890 = (state_14926[(8)]);
var inst_14904 = cljs.core.vec.call(null,inst_14890);
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14926__$1,(11),out,inst_14904);
} else {
if((state_val_14927 === (5))){
var inst_14899 = (state_14926[(11)]);
var inst_14891 = (state_14926[(7)]);
var inst_14890 = (state_14926[(8)]);
var inst_14894 = (state_14926[(9)]);
var inst_14898 = (inst_14890[inst_14891] = inst_14894);
var inst_14899__$1 = (inst_14891 + (1));
var inst_14900 = (inst_14899__$1 < n);
var state_14926__$1 = (function (){var statearr_14940 = state_14926;
(statearr_14940[(12)] = inst_14898);

(statearr_14940[(11)] = inst_14899__$1);

return statearr_14940;
})();
if(cljs.core.truth_(inst_14900)){
var statearr_14941_14964 = state_14926__$1;
(statearr_14941_14964[(1)] = (8));

} else {
var statearr_14942_14965 = state_14926__$1;
(statearr_14942_14965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14927 === (14))){
var inst_14919 = (state_14926[(2)]);
var inst_14920 = cljs.core.async.close_BANG_.call(null,out);
var state_14926__$1 = (function (){var statearr_14944 = state_14926;
(statearr_14944[(13)] = inst_14919);

return statearr_14944;
})();
var statearr_14945_14966 = state_14926__$1;
(statearr_14945_14966[(2)] = inst_14920);

(statearr_14945_14966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14927 === (10))){
var inst_14910 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
var statearr_14946_14967 = state_14926__$1;
(statearr_14946_14967[(2)] = inst_14910);

(statearr_14946_14967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14927 === (8))){
var inst_14899 = (state_14926[(11)]);
var inst_14890 = (state_14926[(8)]);
var tmp14943 = inst_14890;
var inst_14890__$1 = tmp14943;
var inst_14891 = inst_14899;
var state_14926__$1 = (function (){var statearr_14947 = state_14926;
(statearr_14947[(7)] = inst_14891);

(statearr_14947[(8)] = inst_14890__$1);

return statearr_14947;
})();
var statearr_14948_14968 = state_14926__$1;
(statearr_14948_14968[(2)] = null);

(statearr_14948_14968[(1)] = (2));


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
});})(c__13152__auto___14954,out))
;
return ((function (switch__13064__auto__,c__13152__auto___14954,out){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_14949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14949[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_14949[(1)] = (1));

return statearr_14949;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_14926){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_14926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e14950){if((e14950 instanceof Object)){
var ex__13068__auto__ = e14950;
var statearr_14951_14969 = state_14926;
(statearr_14951_14969[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14970 = state_14926;
state_14926 = G__14970;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_14926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_14926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___14954,out))
})();
var state__13154__auto__ = (function (){var statearr_14952 = f__13153__auto__.call(null);
(statearr_14952[(6)] = c__13152__auto___14954);

return statearr_14952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___14954,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14972 = arguments.length;
switch (G__14972) {
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
var c__13152__auto___15042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13152__auto___15042,out){
return (function (){
var f__13153__auto__ = (function (){var switch__13064__auto__ = ((function (c__13152__auto___15042,out){
return (function (state_15014){
var state_val_15015 = (state_15014[(1)]);
if((state_val_15015 === (7))){
var inst_15010 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15016_15043 = state_15014__$1;
(statearr_15016_15043[(2)] = inst_15010);

(statearr_15016_15043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15015 === (1))){
var inst_14973 = [];
var inst_14974 = inst_14973;
var inst_14975 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15014__$1 = (function (){var statearr_15017 = state_15014;
(statearr_15017[(7)] = inst_14974);

(statearr_15017[(8)] = inst_14975);

return statearr_15017;
})();
var statearr_15018_15044 = state_15014__$1;
(statearr_15018_15044[(2)] = null);

(statearr_15018_15044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15015 === (4))){
var inst_14978 = (state_15014[(9)]);
var inst_14978__$1 = (state_15014[(2)]);
var inst_14979 = (inst_14978__$1 == null);
var inst_14980 = cljs.core.not.call(null,inst_14979);
var state_15014__$1 = (function (){var statearr_15019 = state_15014;
(statearr_15019[(9)] = inst_14978__$1);

return statearr_15019;
})();
if(inst_14980){
var statearr_15020_15045 = state_15014__$1;
(statearr_15020_15045[(1)] = (5));

} else {
var statearr_15021_15046 = state_15014__$1;
(statearr_15021_15046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15015 === (15))){
var inst_15004 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15022_15047 = state_15014__$1;
(statearr_15022_15047[(2)] = inst_15004);

(statearr_15022_15047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15015 === (13))){
var state_15014__$1 = state_15014;
var statearr_15023_15048 = state_15014__$1;
(statearr_15023_15048[(2)] = null);

(statearr_15023_15048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15015 === (6))){
var inst_14974 = (state_15014[(7)]);
var inst_14999 = inst_14974.length;
var inst_15000 = (inst_14999 > (0));
var state_15014__$1 = state_15014;
if(cljs.core.truth_(inst_15000)){
var statearr_15024_15049 = state_15014__$1;
(statearr_15024_15049[(1)] = (12));

} else {
var statearr_15025_15050 = state_15014__$1;
(statearr_15025_15050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15015 === (3))){
var inst_15012 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15014__$1,inst_15012);
} else {
if((state_val_15015 === (12))){
var inst_14974 = (state_15014[(7)]);
var inst_15002 = cljs.core.vec.call(null,inst_14974);
var state_15014__$1 = state_15014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15014__$1,(15),out,inst_15002);
} else {
if((state_val_15015 === (2))){
var state_15014__$1 = state_15014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15014__$1,(4),ch);
} else {
if((state_val_15015 === (11))){
var inst_14982 = (state_15014[(10)]);
var inst_14978 = (state_15014[(9)]);
var inst_14992 = (state_15014[(2)]);
var inst_14993 = [];
var inst_14994 = inst_14993.push(inst_14978);
var inst_14974 = inst_14993;
var inst_14975 = inst_14982;
var state_15014__$1 = (function (){var statearr_15026 = state_15014;
(statearr_15026[(7)] = inst_14974);

(statearr_15026[(11)] = inst_14994);

(statearr_15026[(8)] = inst_14975);

(statearr_15026[(12)] = inst_14992);

return statearr_15026;
})();
var statearr_15027_15051 = state_15014__$1;
(statearr_15027_15051[(2)] = null);

(statearr_15027_15051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15015 === (9))){
var inst_14974 = (state_15014[(7)]);
var inst_14990 = cljs.core.vec.call(null,inst_14974);
var state_15014__$1 = state_15014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15014__$1,(11),out,inst_14990);
} else {
if((state_val_15015 === (5))){
var inst_14982 = (state_15014[(10)]);
var inst_14975 = (state_15014[(8)]);
var inst_14978 = (state_15014[(9)]);
var inst_14982__$1 = f.call(null,inst_14978);
var inst_14983 = cljs.core._EQ_.call(null,inst_14982__$1,inst_14975);
var inst_14984 = cljs.core.keyword_identical_QMARK_.call(null,inst_14975,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14985 = (inst_14983) || (inst_14984);
var state_15014__$1 = (function (){var statearr_15028 = state_15014;
(statearr_15028[(10)] = inst_14982__$1);

return statearr_15028;
})();
if(cljs.core.truth_(inst_14985)){
var statearr_15029_15052 = state_15014__$1;
(statearr_15029_15052[(1)] = (8));

} else {
var statearr_15030_15053 = state_15014__$1;
(statearr_15030_15053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15015 === (14))){
var inst_15007 = (state_15014[(2)]);
var inst_15008 = cljs.core.async.close_BANG_.call(null,out);
var state_15014__$1 = (function (){var statearr_15032 = state_15014;
(statearr_15032[(13)] = inst_15007);

return statearr_15032;
})();
var statearr_15033_15054 = state_15014__$1;
(statearr_15033_15054[(2)] = inst_15008);

(statearr_15033_15054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15015 === (10))){
var inst_14997 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15034_15055 = state_15014__$1;
(statearr_15034_15055[(2)] = inst_14997);

(statearr_15034_15055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15015 === (8))){
var inst_14982 = (state_15014[(10)]);
var inst_14974 = (state_15014[(7)]);
var inst_14978 = (state_15014[(9)]);
var inst_14987 = inst_14974.push(inst_14978);
var tmp15031 = inst_14974;
var inst_14974__$1 = tmp15031;
var inst_14975 = inst_14982;
var state_15014__$1 = (function (){var statearr_15035 = state_15014;
(statearr_15035[(14)] = inst_14987);

(statearr_15035[(7)] = inst_14974__$1);

(statearr_15035[(8)] = inst_14975);

return statearr_15035;
})();
var statearr_15036_15056 = state_15014__$1;
(statearr_15036_15056[(2)] = null);

(statearr_15036_15056[(1)] = (2));


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
});})(c__13152__auto___15042,out))
;
return ((function (switch__13064__auto__,c__13152__auto___15042,out){
return (function() {
var cljs$core$async$state_machine__13065__auto__ = null;
var cljs$core$async$state_machine__13065__auto____0 = (function (){
var statearr_15037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15037[(0)] = cljs$core$async$state_machine__13065__auto__);

(statearr_15037[(1)] = (1));

return statearr_15037;
});
var cljs$core$async$state_machine__13065__auto____1 = (function (state_15014){
while(true){
var ret_value__13066__auto__ = (function (){try{while(true){
var result__13067__auto__ = switch__13064__auto__.call(null,state_15014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13067__auto__;
}
break;
}
}catch (e15038){if((e15038 instanceof Object)){
var ex__13068__auto__ = e15038;
var statearr_15039_15057 = state_15014;
(statearr_15039_15057[(5)] = ex__13068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15058 = state_15014;
state_15014 = G__15058;
continue;
} else {
return ret_value__13066__auto__;
}
break;
}
});
cljs$core$async$state_machine__13065__auto__ = function(state_15014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13065__auto____1.call(this,state_15014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13065__auto____0;
cljs$core$async$state_machine__13065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13065__auto____1;
return cljs$core$async$state_machine__13065__auto__;
})()
;})(switch__13064__auto__,c__13152__auto___15042,out))
})();
var state__13154__auto__ = (function (){var statearr_15040 = f__13153__auto__.call(null);
(statearr_15040[(6)] = c__13152__auto___15042);

return statearr_15040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13154__auto__);
});})(c__13152__auto___15042,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

