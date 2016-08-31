var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
module.exports = {
    //指定打包的入口文件是react/js
    entry:path.resolve('./react/index.js'),
    //输出设置
    output:{
        //输出的目录
        path:'./build',
        //文件名
        filename:'bundle.js'
    },
    devServer:{
      contentBase:'./build',//静态文件根目录
      port:8080, //启动的服务器的端口号
      hot:true,//启动热模块更新
      inline:true//当源代码发生改变的时候自动刷新浏览器
    },
    //配置模块
    module:{
        //设置加载器是一个数组 s
        loaders:[
            {
                //匹配 js 和jsx后缀
                test:/\.jsx?$/,
                //babel是一个通用编译器，默认什么都不做
                //指定react-hot加载器
                loaders:['react-hot','babel'],
                //指要包含的文件夹
                include:path.resolve('./react'),
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                //重命名类名 name=组件名字 local=原来的类名 hash是内容计算出来的hash字符串
                loaders:['style-loader','css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]']
            }
        ]
    },
    plugins:[
        //热模块替换插件
        //用来在build目录下生成html文件
        new HtmlWebpackPlugin({
            template:'./react/index.html'
        }),
        //当打包成功之后自动打开浏览器显示url地址
        new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

}