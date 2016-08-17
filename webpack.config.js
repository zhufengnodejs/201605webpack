
//导出一个配置对象
module.exports = {
    entry: './src/index.js',//指定入口文件
    output: {//指定输出
        path: './build',//指定输出的目录
        filename: 'bundle.js'//指定输出的文件名
    }
}