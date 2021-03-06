module.exports = function (app) {
  var Contato = app.models.contato;

  var controller = {};

  var sanitaze = require('mongo-sanitize');

  controller.contatos = function (req, res) {
    Contato.find().populate('emergencia').exec().then(
      function (contatos) {
        res.json(contatos);
      }, function (erro) {
        console.log(erro);
        res.status(500).json(erro);
      }
    );
  };

  controller.salvar = function (req, res) {
    var _id = req.body._id;

    var dados = {
      'nome'      : req.body.nome,
      'email'     : req.body.email,
      'emergencia': req.body.emergencia || null
    };

    if (_id) {
      Contato.findByIdAndUpdate(_id, req.body).exec()
        .then(function (contato) {
          res.json(contato);
        }, function (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
      );
    } else {
      Contato.create(req.body)
        .then(function (contato) {
          res.status(201).json(contato);
        }, function (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
      );
    }
  };

  controller.contato = function (req, res) {
    var _id = sanitaze(req.params.id);
    Contato.findById(_id).exec()
      .then(function (contato) {
        if (!contato) throw new Error("Contato não encontrado.");
        res.json(contato);
      }, function (erro) {
        console.log(erro);
        res.status(404).json(erro);
      }
    );
  };

  controller.remover = function (req, res) {
    var _id = sanitaze(req.params.id);
    Contato.remove({'_id': _id}).exec()
      .then(function () {
        res.status(204).end();
      }, function (erro) {
        return console.log(erro);
      }
    );
  };

  return controller;
};
