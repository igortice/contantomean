require('dotenv').load();

exports.config = {
  specs    : [ '../test/e2e/**/*.js' ]
  //framework: 'cucumber',
  //
  //// Spec patterns are relative to this directory.
  //specs: [
  //  '../test/cucumber/*.feature'
  //],
  //
  //baseUrl: 'http://localhost:3000',
  //
  //cucumberOpts: {
  //  require: '../test/cucumber/stepDefinitions.js',
  //  format : 'summary'
  //}
};
