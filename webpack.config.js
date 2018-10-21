var path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
