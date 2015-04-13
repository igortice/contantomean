module.exports = function (app) {
  var Contato = app.models.contato;

  var controller = {};

  controller.contatos = function (req, res) {
    Contato.find().exec().then(
      function (contatos) {
        res.json(contatos);
      }, function (error) {
        console.log(error);
        res.status(500).json(error);
      }
    );
  };

  controller.salvar = function (req, res) {};

  controller.contato = function (req, res) {};

  controller.remover = function (req, res) {};

  return controller;
};
