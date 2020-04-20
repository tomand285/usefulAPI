var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

var testing = true;
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var err = new Error('Not Found: '+ req.path + ' ' + ip);
  err.status = 404;
  next(err);
});

// error handlers
process.on('uncaughtException', function(err){
    console.log(err.stack);
});

// development error handler
// will print stacktraced
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    if(err.status == 404){
      res.json({msg: 'Not Found', Error: err});
    }else{
      res.json({Error: err});
    }
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
