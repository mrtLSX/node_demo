/**
 * 简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。
 */


// node所有api都支持回调函数
/**
 * node异步编程直接提现就是回调
 * 异步编程依托于回调来实现,但不能说使用了回调就是异步化
 * 回调函数完成任务后就会被调用,
 * 我们可以一遍读取文件,一遍执行其他的操作,文件读取完毕后将文件内容作为
 * 回调的参数返回,这样执行代码的时候就没有阻塞,并可以处理大量的并发请求
 * 回调函数一般作为函数的最后一个参数出现
 * fucntion foo1 (name,age,callback){}
 * fucntion foo1 (val,callback1,callback2){}
 */
/**
 * 个人理解:node无阻塞io怎么实现 , 同过异步编程, 
 * 
 */
// fs模块进行文件读取
var fs = require('fs');
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('同步(阻塞io)读取文件完毕');

// 异步读取文件
var data = fs.readFile('input.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log('异步(非阻塞io)读取文件完毕');

/**
 * 我是txt文件的内容
同步(阻塞io)读取文件完毕
异步(非阻塞io)读取文件完毕
我是txt文件的内容

观察返回的内容 
同步读取 等文件读取完毕执行后面的代码

异步读取 先执行后面的代码 io完毕执行回调函数
 * 
 */


