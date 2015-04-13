var mongoose = require('mongoose');
mongoose.set('debug', true);

module.exports = function (uri) {
  mongoose.connect(uri);

  var db = mongoose.connection;

  db.on('connected', function () {
    console.log("Conectado db");
  });

  db.on('disconnected', function () {
    console.log("Disconectado db");
  });

  db.on('error', function () {
    console.log("Error conect db");
  });

  db.on('SIGINT', function () {
    db.close(function () {
      console.log("Mongoose desconectado.");

      process.exit(0);
    })
  })
};
