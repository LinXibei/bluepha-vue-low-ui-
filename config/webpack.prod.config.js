"use strict";
const path = require("path");
// const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    app: path.join(__dirname, "..", "src/main.ts"), // 项目总入口js文件
  },
  module: {

  },
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "[name]_[fullhash:8].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html", // 生成的文件名称
      template: "index.html", // 指定用index.html做模版
      inject: false, // 指定插入的<script>标签在body底部
      chunksSortMode: "none",
      favicon: "favicon.ico",
      BUILD_ENV: process.env.BUILD_ENV ? process.env.BUILD_ENV.trim() : "development"
    }),
    new CleanWebpackPlugin(),
  ],
};