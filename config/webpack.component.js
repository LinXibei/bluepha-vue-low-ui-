"use strict";
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const components = require("../component.json");
module.exports = {
  mode: "production",
  entry: components,
  output: {
    path: path.resolve(process.cwd(), "./lib"),
    publicPath: "/dist/",
    filename: "[name].js",
    chunkFilename: "[id].js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
        loader: "vue-loader",
        options: {
          hotReload: true,
          loaders: {
            ts: "ts-loader",
          }
        }
      }]
    }, {
      test: /\.(css|postcss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
          }
        },
      ],
      sideEffects: true
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      type: "asset/inline"
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      type: "asset/inline"
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      type: "asset/inline"
    }, {
      test: /\.tsx?$/,
      loader: "ts-loader",
      options: {
        transpileOnly: true,
        appendTsSuffixTo: [/\.vue$/],
      },
      exclude: [
        /require/,
        /node_modules/,
        /public/
      ],
    }, {
      test: /\.html$/,
      loader: "underscore-template-loader" 
    }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      vue: "vue/dist/vue.js",
      "@": path.resolve(__dirname, "../src"),
    }
  },
  plugins: [
    new VueLoaderPlugin(), // 最新版的vue-loader需要配置插件
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
};