var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
///得到jquery模块的绝对路径
//var jqueryPath = path.resolve('node_modules/jquery/dist/jquery.js');
//path.join(__dirname,'lib/jquery.js')
var jqueryPath = path.resolve('lib/jquery.js');
var webpack = require('webpack');
//定义一个全局变量,变量的key是__DEV__
var definePlugin = new webpack.DefinePlugin({
    __DEV__: (process.env.NODE_ENV||'dev').trim() == 'dev'
});
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
function rewriteUrl(replacePath){
    //req 代表请求对象
    // options代表 proxy数组里的一个对象
    //此函数用来实现路径转换的
    return function(req,options){
        //req.path是原始的请求路径
        //经过转换后赋给了req.url
        req.url = req.path.replace(/^\/api\/(.+)/
            ,'\/$1\.json'
        );
    }
}
//导出一个配置对象
module.exports = {
    entry: path.resolve('src/index.js'),//指定入口文件
    output: {//指定输出
        path: path.resolve('build'),//指定输出的目录
        filename: 'bundle.js'//指定输出的文件名
    },
    //解析模块配置项
    resolve:{
        //指定很多的扩展名，当有加载文件的时候可以不需要指定扩展名了
        extensions:['','.js','.json','.css'],
        alias:{ //别名
            //设置jquery别名
            jquery:jqueryPath
        }
    },
    devServer:{
      //如果为true的话当源代码修改过后
      //webpack会自动打包并实时刷新浏览器
      inline:true,
      stats:{colors:true},//在控制台执行命令的时候显示颜色
      port:8080,//指定启动http服务器时候使用的端口号
      contentBase:'./build',
        //设置代理 模拟后端接口
    // http://localhost:8080/api/books -> http://localhost:8080/books.json
      proxy:[
            {
                path:/^\/api\/(.+)/,//这是一个要替换路径的正则,也就是请求服务器的路径如果符合此正则
                target:'http://localhost:8080',//要把此请求交由哪个服务器服务器进行处理
                rewrite:rewriteUrl('\/$1\.json'),//把原来的路径替换成什么样的路径
                changeOrigin:true
            }
        ]
    },

    //设置模块加载器
    module:{
        //这是一个数组,所以需要加s
        //针对不同类型的文件要设置不同类型的加载器
        loaders:[
            {
                test:/\.js$/,//设置的针对哪一类文件 匹配的是文件名
                loader:'babel',//设置加载器babel-loader
                include:path.resolve('./src'),//扫描处理哪个文件夹下的文件
                exclude:/node_modules/ // 解析描述的时候排除掉node_modules下面的文件
            },
            {
                test:/\.less$/,//设置针地less文件的加载器
                //使用三个loader来进行加载
                //loader:'style!css!less',
                //不再住bundle.js中打入了，而把这份资源抽出来
                loader:ExtractTextWebpackPlugin.extract('style','css!less')
            },
            //css文件的加载
            {
              test:/\.css$/,
              //loader:'style!css'
              loader:ExtractTextWebpackPlugin.extract('style','css')
            },
            //如何加载图标
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                loader:'url?limit=8192'
            },
            //如何加载图片
            {
                test:/\.(png|jpg|bmp|gif)$/,
                loader:'url?limit=8192'
            },
            {
                test:/jquery\.js$/,
                //参数是全局变量
                loader:'expose?jQuery'
            }
        ]
    },
    plugins:[
        definePlugin,
        //把刚才抽取到的所有的css文件全部打包输出到bundle.css文件中
        new ExtractTextWebpackPlugin('bundle.css'),
        new HtmlWebpackPlugin({
          //模板文件路径
          template:'./src/index.html',
          //产出的文件的文件名
          filename:'index.html'
        }),
        new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080'
        })
    ]
}