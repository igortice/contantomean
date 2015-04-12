angular.module('cm')
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({ redirectTo: '/contatos' })

      .when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller : 'ContatosController'
      })

      .when('/contato', {
        templateUrl: 'partials/contato.html',
        controller : 'ContatoController'
      })

      .when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller : 'ContatoController'
      })
    ;
  })
;
