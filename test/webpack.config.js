const path = require("path");
const rvLoader = path.join(__dirname, "./");

module.exports = {
  entry: path.resolve(__dirname, "./main.js"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.hb$/,
        use: [rvLoader]
      }
    ]
  }
};
