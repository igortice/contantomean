angular.module('cm').controller('ContatosController',
  function ($scope) {
    $scope.total = 0;

    $scope.contatos = [
      {_id: 1, nome: 'Igor Rocha', email: 'cont1@empresa.com.br'},
      {_id: 2, nome: 'Neto Oliveira', email: 'cont2@empresa.com.br'},
      {_id: 3, nome: 'Gabriel Girão', email: 'cont3@empresa.com.br'}
    ];

    $scope.filtro = '';

    $scope.incrementar = function () {
      $scope.total++;
    }
  })
;
