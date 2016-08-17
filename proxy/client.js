var http = require('http');
http.createServer(function(req,res){
//当调用request的时候请求并不会发出
    var request = http.request({
        host:'localhost',//主机名
        method:'GET',//请求的方法
        port:9090,//端口号
        path:'/',//路径
        headers:{}//请求头
    },function(response){
        //response是一个可读可写流
        var result  = '';
        response.setEncoding('utf8');
        response.on('data',function(data){
            result+=data;
        });
        response.on('end',function(data){
           // console.log(result);
            res.end(result);
        });
    })
//表示写入请求体
    //request.write('xxx');//可写流
//结束请求 这时才真正向服务器发送了请求
    request.end();
}).listen(8088);
