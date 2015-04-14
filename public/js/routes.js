angular.module('cm')
  .constant('CONTATOS_PATH', '/contatos')

  .config(function ($routeProvider) {
    $routeProvider
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

      .when('/auth', {
        templateUrl: 'partials/auth.html'
      })

      .otherwise({ redirectTo: '/contatos' })
    ;
  })
;
