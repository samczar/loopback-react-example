const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  cache: true,
  colors: true,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '*': "http://localhost:3000"
  }
});

server.listen(3001, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
