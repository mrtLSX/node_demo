// 创建node.js应用
// 1.引入required 模块 require指令载入http模块 并创建实例

var http = require('http');

// 2.创建服务器    req,res  参数 请求,响应
http.createServer(function(req,res){
    //发送http头部
    // http状态值 200:ok
    // 内容类型 : text/plain

    // 响应头内容
    res.writeHead(200,{'Content-Type':'text-plain'});
    // 发送响应数据
    res.end('hellow world\n');
}).listen(8888);
// 3.listen方法 监听 127.0.0.1: 8888 端口,客户端请求该端口的时候响应数据
console.log('服务器 运行在 8888 端口');