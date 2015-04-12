var contatos = [
  { _id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br' },
  { _id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br' },
  { _id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br' }
];

var ID_CONTATOS_INC = 3;

module.exports = function () {
  var controller = {};

  controller.contatos = function (req, res) {
    res.json(contatos);
  };

  controller.salvar = function (req, res) {
    var contato = req.body;
    var status  = contato._id ? 200 : 201;
    contato     = contato._id ?
      atualizar(contato) :
      adicionar(contato);

    res.status(status).json(contato);
  };

  function adicionar (contato) {
    contato._id = ++ID_CONTATOS_INC;
    contatos.push(contato);

    return contato;
  }

  function atualizar (newContato) {
    contatos = contatos.map(function (oldContato) {
      if (oldContato._id == newContato._id) {
        return newContato;
      }

      return oldContato
    });

    return newContato
  }

  controller.contato = function (req, res) {
    var contato = contatos.filter(function (contato) {
      return contato._id == req.params.id;
    })[ 0 ];

    contato ?
      res.json(contato) :
      res.status(404).send('Contato não encontrado');
  };

  controller.remover = function (req, res) {
    contatos = contatos.filter(function (contato) {
      return contato._id != req.params.id;
    });

    res.status(204).end();
  };

  return controller;
};
