const webpack = require('webpack');
const config = require('./webpack.dev.js');
const compiler = webpack(config);

const express = require('express');
const path = require('path');
const app = express();
app.use('/', express.static(path.join(__dirname, './')));
app.set('port', (process.env.PORT || 7777));

const webpackDevMiddleware = require('webpack-dev-middleware');
app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
    chunks: false
  },
  noInfo: true,
  // publicPath: config.output.publicPath
}));

const webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackHotMiddleware(compiler));

const proxy = require('proxy-middleware');
const url = require('url');
// app.use('/', proxy(url.parse('http://localhost:9999/mysqlTest')));
app.use('/', proxy(url.parse('http://localhost:80/FitnessWeb')));

app.listen(app.get('port'), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening at http://localhost:${app.get('port')}`);
});
