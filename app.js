(function() {
  var app, express, http, server;

  express = require('express');

  app = module.exports = express();

  http = require('http');

  app.use(express["static"](__dirname + '/public'));

  app.set('port', 4444);

  server = http.createServer(app).listen(app.get('port'), function() {
    return console.log(' running on port ' + app.get('port'));
  });

}).call(this);
