const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry:"./src/index.ts",
  // entry: {
  //   index: "./src/index.ts",
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][hash:3].js",
  },
  resolve: {
    // extensions: ['vue','ts','js','json'],
    alias: {
      "@": path.resolve(__dirname, "src"),
      vue: "vue/dist/vue.esm.js",
    },
  },
  stats: {
    // copied from `'minimal'`
    all: false,
    modules: true,
    maxModules: 0,
    errors: true,
    warnings: true,
    // our additional options
    moduleTrace: true,
    errorDetails: true
  },
  // webapck 优化项
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: { // 缓存组
        common: { // styles缓存组
          name: "commons", // 提取出来chunk的文件名,
          chunks: "all", // 选择哪些chunk进行分割
          minChunks: 2, // chunk被引用的最少次数
          minSize: 0, // chunck最小大小 单位byte
        },
      },
    },
  },
  // 使用babel只能将es6的语法转换成es5语法，如let => var,但是依然转换es6新增的api 如Promise
  // 还需要 polyfill插件
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: { appendTsSuffixTo: [/\.vue$/] },
          },
          {
            loader: "tslint-loader",
            options: {
            },
          },
        ],
      },
      {
        test: /\.(sc|c|sa)ss$/,
        use: [process.env.NODE_ENV !== "production"
          ? "vue-style-loader"
          : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        {
          loader: "sass-resources-loader",
          options: {
            resources: "./src/asset/css/style.scss",
          },
        },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    // contentBase: path.join(__dirname, "src/pages"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "首页",
      filename: "index.html",
      template: "./src/index.html",
      // 在html中需要使用的chunk都要写上，包括sliptChunks中的
      chunks: ["index", "commons", "vendors~index"],
    }),
    new MiniCssExtractPlugin(
      {
        filename: "./css/[name].css",
        chunkFilename: "./css/[name].css",
      },
    ),
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin({}),
    // 使用vue必须要使用
    new VueLoaderPlugin(),
  ],
};
