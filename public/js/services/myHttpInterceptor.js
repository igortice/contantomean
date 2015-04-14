angular.module('cm')
  .factory('myHttpInterceptor', function ($location, $q) {
    return {
      'responseError': function (rejection) {
        if (rejection.status == 401) {
          $location.path('/auth');
        }
        return $q.reject(rejection);
      }
    }
  });
