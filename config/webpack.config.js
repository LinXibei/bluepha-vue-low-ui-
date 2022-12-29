
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const appConfig = require("./webpack.app.config");
const Webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development";
const moduleConfig = isDev ? require("./webpack.dev.config") : require("./webpack.prod.config");
const config = {
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
        isDev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
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
    new CopyWebpackPlugin({
      patterns: [{
        from: path.join(__dirname, "..", "public"),
        to: "public",
        globOptions: {
          dot: true,
          ignore: [".*"]
        }
      }]
    }),
    new Webpack.DefinePlugin({
      "process.env": {
        SERVER_ENV: JSON.stringify(process.env.SERVER_ENV ? process.env.SERVER_ENV.trim() : "development"),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "development"),
        BUILD_ENV: JSON.stringify(process.env.BUILD_ENV ? process.env.BUILD_ENV.trim() : "development")
      }
    })
  ]
};

let outputConfig = merge(config, moduleConfig);
if (process.env.NODE_ENV !== "development") {
  outputConfig = [merge(config, moduleConfig)];
}
module.exports = outputConfig;
