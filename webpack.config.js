
// 这个配置文件就是一个JS文件 通过node中的模块操作 向外暴露了一个配置对象

const path = require('path');

// 在内存中 根据指定的模板页面 生成一份内存中的index.html 同时自动把打包好的bundle.js注入到index.html底部
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {

    entry: path.join(__dirname,'./src/main.js'),// 入口 表示要使用webpack打包哪个文件

    output: {   // 输出文件相关配置

        path:path.join(__dirname,'./dist'),// 指定打包好的文件 输出到哪个目录
        
        filename:'bundle.js',// 指定输出文件的名称

    },
    // 要配置插件 就要在暴露出去的对象中 挂载一个plugins节点
    plugins:[// 所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),// 指定模板文件路径
            filename:'index.html' // 设置生成的内存文件的名称
        })

    ],
    module:{// 配置所有第三方loader模块的
        rules:[// 第三方lloader模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},// 处理CSS文件的loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            
            {test:/\.(jpg|png|gif|bpm|jpeg)$/,use:'url-loader'},
            // 处理字体文件的loader
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            // 处理.vue文件
            {test:/\.vue$/,use:'vue-loader'}

        ]

    },
    resolve: {
        alias: {// 修改vue被导入时候加载包的路径
            // "vue$":"vue/dist/vue.js"

        }
    }
    

}