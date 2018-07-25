import React from 'react';
import Router from 'react-router';
import httpProxy from 'http-proxy';
import reactRoutes from 'common/react/routes';

const proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  ws: true
});

export default function routes(app) {

  app.get('/*', function (req, res) {
    const router = Router.create({
      location: req.url,
      routes: reactRoutes
    });

    router.run(function (Handler) {
      const { Review } = app.models;

      // Example of how to retrieve a model
      Review.findById(1).then(function(model) {
        const { date, rating, comments, id } = model;

        const html = React.renderToString(
          <Handler bootstrap={{...model.__data}} />
        );

        res.render('index', {
          markup: html,
          bootstrap: JSON.stringify(model)
        });
      });

    });
  });

  // Webpack related assets
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://127.0.0.1:3001'
    });
  });

  // Webpack HMR config
  app.all('/socket.io*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://127.0.0.1:3001'
    });
  });

  proxy.on('error', function() {
    // Just catch it
  });
}
