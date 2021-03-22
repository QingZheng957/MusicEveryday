var path = require('path')
module.exports = {
  build: {
    env: require('./prod.env'),
    // 下面是相对路径的拼接，假如当前跟目录是config，那么下面配置的index属性的属性值就是dist/index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // 下面定义的是静态资源的根目录 也就是dist目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 下面定义的是静态资源根目录的子目录static，也就是dist目录下面的static
    assetsSubDirectory: 'static',
    // 下面定义的是静态资源的公开路径，也就是真正的引用路径
    assetsPublicPath: './',
    // 下面定义是否生成生产环境的sourcmap，sourcmap是用来debug编译后文件的，通过映射到编译前文件来实现
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 下面是是否在生产环境中压缩代码，如果要压缩必须安装compression-webpack-plugin
    productionGzip: false,
    // 下面定义要压缩哪些类型的文件
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    // 引入当前目录下的dev.env.js，用来指明开发环境
    env: require('./dev.env'),
    port: 8080, // 下面是dev-server的端口号，可以自行更改
    assetsSubDirectory: 'static',    // 编译输出的二级目录
    assetsPublicPath: '/',  // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    //proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    proxyTable: {
      '/api163':{
        target:'http://music.163.com/api',
        changeOrigin:true,
        pathRewrite:{
          '^/api163':''
        },
        headers:{
            'Referer': 'http://music.163.com/search/'
        }
      }
    }
  }
}
