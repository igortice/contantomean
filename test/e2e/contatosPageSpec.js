var LoginPage = require('./pages/LoginPage');

describe('Página Inicial', function () {
  var loginPage = new LoginPage();

  beforeEach(function () {
    loginPage.visitar();
    loginPage.logarGitHub('igortice@gmail.com', 'Da0644123');
  });

  it('Deve estar logado', function () {
    element(by.id('current_user'))
      .getText()
      .then(function (texto) {
        expect(texto.trim().length).toBeGreaterThan(0);
      });
  });
});
