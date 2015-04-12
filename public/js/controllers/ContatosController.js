angular.module('cm').controller('ContatosController',
  function ($scope, $resource) {
    $scope.contatos = [];
    $scope.filtro   = '';

    var Contatos = $resource('/contatos/:id');

    function buscarContatos () {
      Contatos.query(
        function (contatos) {
          $scope.contatos = contatos;
        },
        function (erro) {
          console.log(erro);
        });
    }

    $scope.remover = function (contato) {
      Contatos.delete(
        { id: contato._id },
        function () {
          $scope.contatos.splice($scope.contatos.indexOf(contato), 1);
        },
        function (erro) {
          console.log(erro);
        }
      );
    };

    $scope.init = function () {
      buscarContatos();
    };

    $scope.init();
  })
;
