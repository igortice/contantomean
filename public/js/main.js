angular
  .module('cm', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({redirectTo: '/contatos'})
      .when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller : 'ContatosController'
      })
      .when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller : 'ContatoController'
      })
    ;
  })
;
