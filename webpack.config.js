var path = require('path');
function rewriteUrl(replacePath){
    //req 代表请求对象
    // options代表 proxy数组里的一个对象
    return function(req,options){
        req.url = req.path.replace(options.path
            ,replacePath
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
    devServer:{
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
            }
        ]
    }
}