// config express
var express = require('express');
var app     = express();

// middleware
app.use(express.static('./public'));

// export app
module.exports = app;