'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('HeaderCtrl', function ($scope, $location) {

  	$scope.showLogin = false;

  	$scope.changeLogin = function(){
    	$scope.showLogin = !$scope.showLogin;
    };


  	$scope.showSignup = false;

  	$scope.changeSignup = function(){
    	$scope.showSignup = !$scope.showSignup;
    };

    $scope.isActive = function(route) {
        return route === $location.path();
    }

  });
