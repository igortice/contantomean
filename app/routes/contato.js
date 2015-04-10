module.exports = function (app) {
  var controller = app.controllers.contato;

  app.route('/contatos').
    get(controller.contatos)
  ;

  app.route('/contatos/:id')
    .get(controller.contato)
    .delete(controller.remover)
  ;
};
