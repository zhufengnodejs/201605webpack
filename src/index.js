var msg = require('./component');
var $ = require('jquery');
require('./less/index.less');
require('bootstrap/dist/css/bootstrap.css');
var img = document.createElement('img');
img.className = 'img-circle';
img.src=require('./imgs/feng.jpg');
document.body.appendChild(img);
$('#app').html(msg);