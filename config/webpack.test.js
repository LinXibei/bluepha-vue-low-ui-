const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, "..", "src/test.js"), // 项目总入口js文件
  },
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(process.cwd(), "./lib"),
    publicPath: "/dist/",
    filename: "[name].js",
    chunkFilename: "[id].js",
    // libraryTarget: "commonjs2",
    library: {
      name: "MyLibrary",
      type: "umd",
      auxiliaryComment: "Test Comment",
    }
  }
};