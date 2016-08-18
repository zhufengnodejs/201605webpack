var msg = require('./component');
//引入jquery
var $ = require('jquery');
//引入less文件
require('./less/index.less');
//加载bootstrap的css文件
require('bootstrap/dist/css/bootstrap.css');
//创建img标签
var img = document.createElement('img');
img.className = 'img-circle';//指定bootstrap类名
img.src=require('./imgs/feng.jpg');//指定图片路径
document.body.appendChild(img);//将此图片追加到body中
$('#app').html(msg);//使用jquery得到app层，然后放入msg消息