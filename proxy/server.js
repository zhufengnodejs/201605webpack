var http = require('http');
http.createServer(function(req,res){
    res.end('9090');
}).listen(9090);