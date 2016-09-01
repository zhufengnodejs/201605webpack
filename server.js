var express = require('express');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
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
        readFileAsync(FILE_NAME,'utf8').then(function(data){
            res.send(JSON.parse(data));
        })
    })
    //当向/comments这个路径发起post 请求的时候如何处理
    .post(function(req,res){
        var comment = req.body;
        console.log(comment);
        readFileAsync(FILE_NAME,'utf8').then(function(data){
            //先取出原来所有的留言
            var comments = JSON.parse(data);
            //给新传过来的留言赋ID等于 原来最大的ID加1
            comment.id = comments[comments.length-1].id+1;
            comments.push(comment);
            return writeFileAsync(FILE_NAME,JSON.stringify(comments),'utf8');
        }).then(function(result){
            res.send(comment);
        }).catch(function(err){
            res.statusCode = 500;
            res.send(err);
        });
    })
app.listen(9090);