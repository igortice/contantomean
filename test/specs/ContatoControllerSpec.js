describe('ContatoController', function () {
  beforeEach(module('cm'));

  var $scope, $httpBackend;

  beforeEach(inject(function ($rootScope, _$httpBackend_) {
    $scope       = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/contatos/1').respond({ _id: '1' });
    $httpBackend.when('GET', '/contatos').respond([ {} ]);
  }));

  it('Devemos criar um novo contato vazio quando nenhum parametro de rota for passado',
    inject(function ($controller) {
      $controller('ContatoController', { '$scope': $scope });
      expect($scope.contato._id).toBeUndefined();
    }));

  it('Devemos preencher um novo contato quando um parametro de rota for passado',
    inject(function ($controller) {
      $controller('ContatoController', {
        $routeParams: { contatoId: 1 },
        '$scope'    : $scope
      });
      $httpBackend.flush();
      expect($scope.contato._id).toBeDefined();
    }));
});
