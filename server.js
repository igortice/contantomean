// config express
var express = require('express');
var app     = express();
require('./config/database')('mongodb://localhost/contatomean');

// config path
var path = require('path');

// config logger
var logger = require('morgan');
app.use(logger('dev'));

// config body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('method-override')());

// config passport
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport     = require('passport');
app.use(cookieParser());
app.use(session({
  secret           : 'pode ser qualquer secret',
  resave           : true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

// load scripts
var load = require('express-load');
load('models', { cwd: 'app' })
  .then('controllers')
  .then('routes')
  .into(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err    = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error  : err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error  : {}
  });
});

// export app
module.exports = app;
