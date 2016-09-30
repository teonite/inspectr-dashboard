/* eslint consistent-return:0 */

const express = require('express');
const proxy = require('http-proxy-middleware');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;

// In production we need to pass these values in instead of relying on webpack
const app = setup(express(), {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
const httpProxy = proxy({
  target: 'http://localhost:8181', // target host
  changeOrigin: true,               // needed for virtual hosted sites
  ws: true,                         // proxy websockets
  pathRewrite: {},
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    // 'dev.localhost:3000' : 'http://localhost:8000'
  }
});
app.use('/horizon', httpProxy);

// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3000;

// Start your app.
const httpServer = app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});

httpServer.on('upgrade', httpProxy.upgrade);