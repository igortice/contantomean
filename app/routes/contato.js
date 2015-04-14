function estaAutenticado (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json('Não Autorizado');
  }
}

module.exports = function (app) {
  var controller = app.controllers.contato;

  app.route('/contatos')
    .get(estaAutenticado, controller.contatos)
    .post(estaAutenticado, controller.salvar)
  ;

  app.route('/contatos/:id')
    .get(estaAutenticado, controller.contato)
    .delete(estaAutenticado, controller.remover)
  ;
};
