var LoginPage = function () {

  var uri          = 'http://localhost:3000/#/auth',
      linkGitHub   = element(by.id('entrar'))
  ;

  this.visitar = function () {
    return browser.get(uri).then(function () {
      linkGitHub.click();
    });
  };

  this.logarGitHub = function (email, password) {
    browser.driver.findElement(by.id('login_field')).sendKeys(email);
    browser.driver.findElement(by.id('password')).sendKeys(password);
    browser.driver.findElement(by.name('commit')).click();
  };
};

module.exports = LoginPage;
