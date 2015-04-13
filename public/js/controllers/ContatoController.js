angular.module('cm').controller('ContatoController',
  function ($scope, $resource, $routeParams, notificationService, $location, $timeout, ContatoService) {

    $scope.salvar = function () {
      $scope.contato.$save()
        .then(function (data) {
          $location.path('/');
          $timeout(function () {
            var new_or_update = data.$promise ? 'atualizado' : 'criado';
            notificationService.success("<h4>Sucesso</h4>Contato " + new_or_update + " com êxito.");
          }, 500);

        })
        .catch(function (erro) {
          notificationService.error("<h4>Atenção</h4>Não foi possível criar o contato.");
          console.log(erro);
        })
    };

    function checkRouteNewOrEdit () {
      if ($routeParams.contatoId) {
        ContatoService.get(
          { id: $routeParams.contatoId },
          function (contato) {
            $scope.contato = contato;
          },
          function (erro) {
            notificationService.error("<h4>Atenção</h4>Não foi possível atualizar o contato.");
            console.log(erro);
          }
        );
      } else {
        $scope.contato = new ContatoService();
      }
    }

    $scope.init = function () {
      checkRouteNewOrEdit();
    };

    $scope.init();

  })
;
