var home_ctrl = require('../controllers/home')();

module.exports = function (app) {
  app.get('/index', home_ctrl.index);
  app.get('/', home_ctrl.index);
};