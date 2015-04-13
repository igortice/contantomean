angular.module('cm').controller('ContatosController',
  function ($scope, $resource, notificationService, ContatoService) {
    $scope.contatos = [];
    $scope.filtro   = '';

    function buscarContatos () {
      ContatoService.query(
        function (contatos) {
          $scope.contatos = contatos;
        },
        function (erro) {
          notificationService.error("<h4>Atenção</h4>Não foi possível obter a lista de contatos");
          console.log(erro);
        });
    }

    $scope.remover = function (contato) {
      contato.disabled = true;
      notificationService.notify({
        title    : 'Atenção!',
        text     : 'Você realmente deseja remover o contato: ' + contato.email,
        hide     : false,
        confirm  : {
          confirm: true,
          buttons: [ {
            addClass: 'btn-danger',
            text    : 'remover'
          }, {
            text: 'cancelar'
          } ]
        },
        type     : 'info',
        buttons  : {
          closer : false,
          sticker: false
        },
        history  : {
          history: false
        },
        animation: 'fade'
      }).get().on('pnotify.confirm', function () {
        contato.disabled = false;
        $scope.$apply();
        ContatoService.delete(
          { id: contato._id },
          function () {
            $scope.contatos.splice($scope.contatos.indexOf(contato), 1);
            notificationService.success("<h4>Sucesso!</h4> Contato removido com êxito.")
          },
          function (erro) {
            notificationService.error("<h4>Atenção</h4>Não foi possível remover o contato");
            console.log(erro);
          }
        );
      }).on('pnotify.cancel', function () {
        contato.disabled = false;
        $scope.$apply();
      });
    };

    $scope.init = function () {
      buscarContatos();
    };

    $scope.init();
  })
;
