'use strict';

angular.module('handsApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
