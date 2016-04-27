var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    'uc': ['webpack-dev-server/client?http://localhost:7777', 'webpack/hot/dev-server', './index.js']
  },
  output: {
    // path: path.resolve(__dirname, 'build'),
    filename: 'uc.js'
  },
  devtool: 'cheap-source-map',
  // 本地服务器配置 
  devServer: {
    hot: true,
    port: 7777
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
  // 开启热加载
  new webpack.HotModuleReplacementPlugin()
  ]
};