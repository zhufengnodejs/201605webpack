var express = require('express');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
//是一个promisey库，用于把一个异步方法转成返回一个promise的方法
var readFileAsync = Promise.promisify(require('fs').readFile);
var writeFileAsync = Promise.promisify(require('fs').writeFile);
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
const FILE_NAME = './comments.json';
//先根据路径创建一个路由的实例
app.route('/comments')
    //当向/comments这个路径发起get请求的时候如何处理
    .get(function(req,res){
        //读取json的文件内容，然后在成功的回调里把得到的结果转成对象，并发回给客户端
        res.setHeader('Access-Control-Allow-Origin',"*");
        readFileAsync(FILE_NAME,'utf8').then(function(data){//成功的回调
            res.send(JSON.parse(data));
        })
    })
    //当向/comments这个路径发起post 请求的时候如何处理
    .post(function(req,res){
        //使用bodyParser中间件之后，会把请求体转成对象放在req.body上
        var comment = req.body;
        readFileAsync(FILE_NAME,'utf8').then(function(data){
            //先取出原来所有的留言
            var comments = JSON.parse(data);
            //给新传过来的留言赋ID等于 原来最大的ID加1
            comment.id = comments[comments.length-1].id+1;
            //在原来的留言列表上添加新的评论
            comments.push(comment);
            //把最新的列表写入到文件系统中
            return writeFileAsync(FILE_NAME,JSON.stringify(comments),'utf8');
        }).then(function(result){
            //返回添加ID后的留言对象
            res.send(comment);
        }).catch(function(err){
            res.statusCode = 500;
            res.send(err);
        });
    })
app.listen(9090);