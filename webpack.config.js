const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

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
      cacheGroups: { // 缓存组
        common: { // styles缓存组
          name: "commons", // 提取出来chunk的文件名,
          chunks: 'all',// 选择哪些chunk进行分割 
          minChunks: 2, // chunk被引用的最少次数
          minSize: 0,// chunck最小大小 单位byte
        },
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
      // 在html中需要使用的chunk都要写上，包括sliptChunks中的
      chunks: ['index', 'commons']
    }),
    new HTMLWebpackPlugin({
      title: "首页",
      filename: "about.html",
      template: "./src/pages/about.html",
      chunks: ['about', 'commons']
    }),
    new MiniCssExtractPlugin(
      {
        filename: "./css/[name].css",
        chunkFilename: './css/[name].css',
      }
    ),
  ]
}