"use strict";
const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "eval-cheap-source-map",
  entry: {
    app: path.join(__dirname, "..", "examples/main.js"), // 项目总入口js文件
  },
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    port: 9999,
    host: "0.0.0.0", // 配置成0.0.0.0的话通过ip，localhost都能访问
    proxy: {
      "/api/base": {
        // target: "http://10.169.10.137:8080",
        target: "http://10.122.20.18:8889",
        changeOrigin: true,
        pathRewrite: {
          "^/api/base": ""
        }
      },
      "/api/blueMatrix": {
        target: "http://10.122.20.18:9000",
        // target: "http://10.168.10.179:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api/blueMatrix": "/blueMatrix"
        }
      },
      "/api": {
        target: "http://10.122.20.18:8866",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    },
    hot: true,
    compress: true,
    historyApiFallback: true, //避免刷屏白屏必须
  },
  target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // 生成的文件名称
      template: "./examples/index.tpl", // 指定用index.html做模版
      inject: false, // 指定插入的<script>标签在body底部
      chunksSortMode: "none",
      favicon: "./public/favicon.ico",
      BUILD_ENV: process.env.BUILD_ENV ? process.env.BUILD_ENV.trim() : "development"
    }),
    new ESLintPlugin({
      fix: true, /* 自动帮助修复 */
      extensions: ["js", "json", "coffee", "vue"],
      exclude: "node_modules"
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ]
};