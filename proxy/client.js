var http = require('http');
//当调用request的时候请求并不会发出
var req = http.request({
  host:'localhost',//主机名
  method:'GET',//请求的方法
  port:9090,//端口号
  path:'/',//路径
  headers:{}//请求头
},function(response){
    //response是一个可读可写流
    var res  = '';
    response.setEncoding('utf8');
    response.on('data',function(data){
        res+=data;
    });
    response.on('data',function(data){
        console.log(res);
    });
})
//表示写入请求体
req.write('xxx');//可写流
//结束请求 这时才真正向服务器发送了请求
req.end();