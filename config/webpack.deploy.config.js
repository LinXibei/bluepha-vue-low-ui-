
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const appConfig = require("./webpack.app.config");
const Webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  entry: {
    app: path.join(__dirname, "..", "examples/main.js"), // 项目总入口js文件
  },
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "[name].js",
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
        {
          loader: "postcss-loader",
        }
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
    }, {
      test: /\.md$/,
      use: [{
        loader: "vue-loader",
        options: {
          hotReload: true,
          loaders: {
            ts: "ts-loader",
          }
        }
      }, {
        loader: path.resolve(__dirname, "./md-loader/index.js")
      }]
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
    // new CopyWebpackPlugin({
    //   patterns: [{
    //     from: path.join(__dirname, "..", "public"),
    //     to: "public",
    //     globOptions: {
    //       dot: true,
    //       ignore: [".*"]
    //     }
    //   }]
    // }),
    new Webpack.DefinePlugin({
      "process.env": {
        SERVER_ENV: JSON.stringify(process.env.SERVER_ENV ? process.env.SERVER_ENV.trim() : "development"),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "development"),
        BUILD_ENV: JSON.stringify(process.env.BUILD_ENV ? process.env.BUILD_ENV.trim() : "development"),
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html", // 生成的文件名称
      template: "./examples/index.tpl", // 指定用index.html做模版
      inject: false, // 指定插入的<script>标签在body底部
      chunksSortMode: "none",
      favicon: "./public/favicon.ico",
      BUILD_ENV: "production"
    }),
    new CleanWebpackPlugin()
  ]
};

module.exports = config;
