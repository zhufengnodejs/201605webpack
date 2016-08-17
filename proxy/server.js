var http = require('http');
http.createServer(function(req,res){
    var urlObj = require('url').parse(req.url);
    var pathname = urlObj.pathname;
    if(pathname=='/books.json'){
        res.end(JSON.stringify([{id:1,name:'node.js'}]));
    }else{
        res.end('404');
    }

}).listen(9090);