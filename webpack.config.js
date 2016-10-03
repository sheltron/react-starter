var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');


module.exports = {
  entry: './index',
  quiet: true,
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: 'browser-bundle.js'
  },
  plugins: [
    new DashboardPlugin()
  ],
  resolve: {
    root: path.resolve('./'),
    extensions: ['', '.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      { test: [/\.jsx?$/, /\.js$/], loader: 'babel-loader', query: { presets: ['es2015', 'react'] } },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] }
    ]
  }
};
