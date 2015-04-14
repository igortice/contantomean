var passport       = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose       = require('mongoose');

module.exports = function () {
  var Usuario = mongoose.model('Usuario');

  passport.use(new GitHubStrategy({
      clientID    : "659a9f876eebfb9c516a",
      clientSecret: "107753d365ce08bf18ec9e9d1c918f637728b93f",
      callbackURL : "http://localhost:3000/auth/github/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      Usuario.findOrCreate(
        { "login": profile.username },
        { "nome": profile.username },
        function (erro, usuario) {
          if (erro) {
            console.log(erro);
            return done(erro);
          }
          return done(null, usuario);
        }
      );
    }
  ));

  passport.serializeUser(function (usuario, done) {
    done(null, usuario._id);
  });

  passport.deserializeUser(function (id, done) {
    Usuario.findById(id).exec()
      .then(function (usuario) {
        done(null, usuario);
      });
  });
};


