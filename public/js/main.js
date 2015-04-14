angular
  .module('cm', [
    'ngRoute',
    'ngResource',
    'jlareau.pnotify'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
  })
;
