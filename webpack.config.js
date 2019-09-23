const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// https://www.jianshu.com/p/dd9afa5c4d0f
// https://segmentfault.com/a/1190000014247030

module.exports = {
  mode: "development",
  entry: {
    index: "./src/asset/js/index.js",
    about: "./src/asset/js/about.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      chunks: 'all',// 选择哪些chunk进行分割 
      cacheGroups: { // 缓存组
        styles: { // styles缓存组
          name: "common", // 提取的公共css名称
          minChunks: 2, // chunk被引用的最少次数
          minSize: 1,// chunck最小大小 单位byte
          test: /\.css$/,// 决定哪些文件使用此缓存组
        }
      }
    },
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
      filename: "about.html",
      template: "./src/pages/about.html",
      chunks: ['about']
    }),
    new MiniCssExtractPlugin(
      {
        filename: "./css/[name].css",
        chunkFilename: './css/[name].css',
      }
    )
  ]
}