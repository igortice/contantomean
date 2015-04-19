var LoginPage = require('./pages/LoginPage');

describe('Página Inicial', function () {
  var loginPage = new LoginPage();

  beforeEach(function () {
    loginPage.visitar();
    loginPage.logarGitHub(process.env.GITHUB_USERNAME, process.env.GITHUB_PASSWORD);
  });

  it('Deve estar logado', function () {
    element(by.id('current_user'))
      .getText()
      .then(function (texto) {
        expect(texto.trim().length).toBeGreaterThan(0);
      });
  });
});
