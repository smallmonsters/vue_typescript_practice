const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// https://www.jianshu.com/p/dd9afa5c4d0f
// https://segmentfault.com/a/1190000014247030

module.exports = {
  entry: {
    index: "./src/asset/js/index.js",
    home: "./src/asset/js/home.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})  // use OptimizeCSSAssetsPlugin
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',  // 提取出来的文件命名
          // name： ‘common/common’ //  即先生成common文件夹
          chunks: 'initial',   // initial表示提取入口文件的公共css及
          // js部分
          // chunks: 'all' // 提取所有文件的公共部分
          // test： '/\.css$/'  // 只提取公共css ，命名可改styles 
          minChunks: 2, // 表示提取公共部分最少的文件数
          minSize: 0  // 表示提取公共部分最小的大小 
          // 如果发现页面中未引用公共文件，加上enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, "css-loader"]
      }
    ]
  },
  devServer: {
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "登录",
      filename: "index.html",
      template: "./src/pages/index.html",
      chunks: ['index']
    }),
    new HTMLWebpackPlugin({
      title: "首页",
      filename: "home.html",
      template: "./src/pages/home.html",
      chunks: ['home']
    }),
    new MiniCssExtractPlugin(
      {
        filename: "./css/[name].css",
        chunkFilename: '[id].css',
      }
    )
  ]
}