# <center>webapck之css打包</center>

### 前言

在学习webpack打包的时候，发现自己在打包css时，简单的使用mini-css-extract-plugin并不能实现一些需求，比如：多页面打包的css公共部分被重复引入。且在这个过程中有太多不明白的地方，所以特此记录下

### 安装：

```
  yarn add -D webpack webpack-cli
  yarn add -D html-webpack-plugin 使webpack能处理html文件
  yarn add -D css-loader // 使webpack能处理css文件
  yarn add -D mini-css-extract-plugin // 将处理后的css文件，抽离出来
```

