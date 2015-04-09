module.exports = function (app) {
  var controller = app.controllers.contato;

  app.get('/contatos', controller.contatos);
  app.get('/contato/:id', controller.contato);
};
