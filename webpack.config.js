var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    'uc': './index.js'
  },
  output: {
    // path: path.resolve(__dirname, 'build'),
    filename: 'uc.js'
  },
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
        loader: 'style-loader!css-loader?modules'
      },
    ]
  },
  plugins: [
  // 开启热加载
  new webpack.HotModuleReplacementPlugin()
  ]
};