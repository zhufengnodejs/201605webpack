var express = require('express');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
//是一个promisey库，用于把一个异步方法转成返回一个promise的方法
var readFileAsync = Promise.promisify(require('fs').readFile);
var writeFileAsync = Promise.promisify(require('fs').writeFile);
var app = express();
//输出请求的url的方法
app.use(function (req, res, next) {
    console.log(req.url, req.method);
    next();
});
app.use(bodyParser.urlencoded({extended: true}));
const FILE_NAME = './comments.json';
//先根据路径创建一个路由的实例
app.route('/comments')
    //当向/comments这个路径发起get请求的时候如何处理
    .get(function (req, res) {
        //读取json的文件内容，然后在成功的回调里把得到的结果转成对象，并发回给客户端
        res.setHeader('Access-Control-Allow-Origin', "*");
        readFileAsync(FILE_NAME, 'utf8').then(function (data) {//成功的回调
            res.send(JSON.parse(data));
        })
    })
    //当向/comments这个路径发起post 请求的时候如何处理
    .post(function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        //使用bodyParser中间件之后，会把请求体转成对象放在req.body上
        var comment = req.body;
        var comments = [];
        readFileAsync(FILE_NAME, 'utf8').then(function (data) {
            //先取出原来所有的留言
            comments = JSON.parse(data);
            //给新传过来的留言赋ID等于 原来最大的ID加1
            //如果原来有元素，则在最大ID加1
            comment.date = new Date();
            if (comments.length > 0)
                comment.id = comments[comments.length - 1].id + 1;
            else //如果原来没有元素，则ID赋为1
                comment.id = 1;
            //在原来的留言列表上添加新的评论
            comments.push(comment);
            //把最新的列表写入到文件系统中
            return writeFileAsync(FILE_NAME, JSON.stringify(comments), 'utf8');
        }).then(function (result) {
            //返回添加ID后的留言对象
            res.send(comments);
        }).catch(function (err) {
            res.statusCode = 500;
            res.send(err);
        });
    }).delete(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //使用bodyParser中间件之后，会把请求体转成对象放在req.body上
    var comment = req.body;
    var deletedId = comment.id;
    var comments = [];
    readFileAsync(FILE_NAME, 'utf8').then(function (data) {
        comments = JSON.parse(data);//先取出原来所有的留言,并转成JSON数组
        comments = comments.filter(function (item) {//对数组进行过滤，得到新的数组
            return item.id != deletedId;
        });//再将过滤后的数组保存在文件里
        return writeFileAsync(FILE_NAME, JSON.stringify(comments), 'utf8');
    }).then(function (result) {
        //返回添加ID后的留言对象
        res.send(comments);
    }).catch(function (err) {
        res.statusCode = 500;
        res.send(err);
    });
    //用来询问服务器支持哪些请求的方法
}).options(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods',"DELETE");
    res.end();
})
/**
 * MLHttpRequest cannot load http://localhost:9090/comments. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.
 当客户端上服务器发送带请求体的delete请求的时候，会先发一个options请求，询问服务器可以接收的方法名
 如果支持delete方法，就会继续发送delete请求，如果不支持就不发送
 */
app.listen(9090);