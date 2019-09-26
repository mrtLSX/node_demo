/**
 * Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
Node.js 里面的许多对象都会分发事件：一个 net.Server 
对象会在每次有新连接时触发一个事件， 一个 fs.readStream 
对象会在文件被打开的时候触发一个事件。 
所有这些产生事件的对象都是 events.EventEmitter 的实例。
 * 
 */

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
// 绑定事件

// 同一个事件监听 多个回调函数,依次执行
event.on('some_event',function(){
    console.log('some_event1 事件触发');
})

event.on('some_event',function(){
    console.log('some_event2 事件触发');
})
setTimeout(function(){
    event.emit('some_event');
},1000)

var events = require('events');
var count = events.emitter.listenerCount('some_event');
console.log(count);



