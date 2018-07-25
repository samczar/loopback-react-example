const loopback    = require('loopback');
const boot        = require('loopback-boot');
const consolidate = require('consolidate');

require('babel/register');

const app = module.exports = loopback();

app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', 'public/views');

app.start = function() {
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) {
    throw err;
  }

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});
