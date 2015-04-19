// Use the external Chai As Promised to deal with resolving promises in
// expectations.
//var chai           = require('chai');
//var chaiAsPromised = require('chai-as-promised');
//chai.use(chaiAsPromised);
//
//var expect = chai.expect;
var LoginPage = require('../e2e/pages/LoginPage');

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

module.exports = function () {
  var loginPage = new LoginPage();

  this.Given(/^Eu estiver na tela de login do siteam e clicar para fazer login no GitHub$/, function (done) {
    loginPage.visitar();

    done()
  });

  this.Then(/^Devo ser levado para tela de login do GitHub$/, function (done) {
    done()
  });

  this.Given(/^Eu fizer login no GitHub$/, function (done) {
    loginPage.logarGitHub(process.env.GITHUB_USERNAME, process.env.GITHUB_PASSWORD);

    done()
  });

  this.Then(/^Devo ser levado para a tela de Home do Sistema$/, function (done) {
    //browser.driver.findElement(by.id('current_user').click())
    //done.pending()
  });

};
