var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: path.resolve('./route/index.js'),
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
        port: 8080,
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: path.resolve('./route'),
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                loader:'style!css'
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)/,
                loader:'url'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './route/index.html'
        }),
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8080'
        })
    ]
}