// 项目的JS入口文件

console.log('ok')
import './css/index.css'
import './css/index.less'
import './css/index.scss'

// class关键字 ES6语法 实现面向编程

class Person {

    // 使用static关键字 定义静态属性(可以直接通过类名直接访问的属性) 实力属性(只能通过类的实例来访问的属性)
    static info = {name:'Yoona',age:28};
}

console.log(Person.info)
// var p1 = new Person()
// p1.name// 实例属性

// 1.webpack配置 webpack-dev-server 安装 html-webpack-plugin

// webpack-dev-server 可以帮我们自动打包编译代码
// 单数webpack-dev-server 依赖于 webpack 所以需要在本地安装webpack
// 然后在package.json文件中配置命令 "dev":"webpack-dev-server --open --port 4000 --contentBase src --hot"
// --contentBase src 表示应用的根目录为src
// 此时运行npm run dev 会报错 是因为此时的根目录为src 而index.html中<script src="../dist/bundle.js"></script>路径错误
// 直接写成/bundle.js即可 
// 或者安装另一个webpack的插件(html-webpack-plugin)来实现 它可以在内存中帮我们生成一份一样的index.html 会把bundle.js自动注入到页面的最底部
// cnpm i html-webpack-plugin -D
// 安装完成后再webpack.config.js中配置
// 

// 2.webpack 使用CSS sass less等样式文件

// webpack处理样式表需要安装loader加载器
// 安装style-loader css-loader 

// 3.webpack 中使用url-loader
// 默认情况下webpack无法处理css文件中的url地址 无论是图片还是字体库
// 安装 url-loader file-loader
// 在webpack中配置 可以加参数(修改编译图片地址的方式)url-loader?limit=xxx
// limit给定的值是图片的大小 单位byte(字节) 若引用的图片大于或等于给定的值 则不会被转为base64 若小于 则会
//  url-loader?limit=xxx&name=[name].[ext]表示图片名字不变 拓展名不变 (固定写法)
//  url-loader?limit=xxx&name=[hash:8]-[name].[ext]表示截取32位的hash值中的8位 

// 4.webpack中babel的配置
// webpack 默认只能处理一部分ES6新语法 一些高级的语法需要借助第三方loader
// cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// cnpm i babel-preset-env babel-preset-stage-0 -D
// 安装完成后 在webpack.config.js 中配置{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
// 在项目跟目录中创建一个.babelrc的文件 属于json格式  

// 这个项目是在webpack3.x  所以babel有问题