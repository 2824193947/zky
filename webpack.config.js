//绝对路径
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    //编译模式
    mode: 'development', //development production

    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'), // 输出文件的存放路径
        filename: 'bundle.js' // 输出文件的名称
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    }
}