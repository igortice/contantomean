module.exports = function (app) {
  app.get('/', function (req, res) {
    var login = '';
    if (req.user) {
      login = req.user;
    }

    res.render('index', {"current_user": login})
  });
};
