var app = require('./config/express');

module.exports = app;

require('./config/passport')();
require('./config/database')('mongodb://localhost/contatomean');
