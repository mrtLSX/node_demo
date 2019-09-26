// 1.引入events模块
var event = require('events');
// 创建eventEmitter 对象
// 通过实例化 EventEmitter 类来绑定和监听事件
var eventEmitter = new event.EventEmitter();

//事件处理程序
var eventHandler = function(){
    console.log('连接成功');
    // 连接成功后,触发data_received事件
    eventEmitter.emit('data_received');
};

// 绑定事件和  事件处理程序(回调函数)
eventEmitter.on('connection',eventHandler);
eventEmitter.on('data_received',function(){
    console.log('数据接收成功')
});

// 触发事件
eventEmitter.emit('connection');
console.log('程序执行完毕');

