module.exports = {
    entry: "./src/js/main.js",
    mode: "development",
    output: {
      path: __dirname + "/dist",
      publicPath: "dist",
      filename: "bundle.js"
    },
    devtool: "sourcemap"
  };