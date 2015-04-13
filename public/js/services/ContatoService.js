angular.module('cm')
  .factory('ContatoService', function ($resource, CONTATOS_PATH) {
    return $resource(CONTATOS_PATH + '/:id');
  });
