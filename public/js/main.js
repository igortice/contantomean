angular
  .module('cm', [
    'ngRoute',
    'ngResource'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({redirectTo: '/contatos'})
      .when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller : 'ContatosController'
      })
      .when('/contatos/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller : 'ContatoController'
      })
    ;
  })
;
