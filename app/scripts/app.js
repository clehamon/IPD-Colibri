'use strict';

/**
 * @ngdoc overview
 * @name eventifyApp
 * @description
 * # eventifyApp
 *
 * Main module of the application.
 */
angular
  .module('eventifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/newEvent', {
        templateUrl: 'views/newevent.html',
        controller: 'NeweventCtrl',
        controllerAs: 'newEvent'
      })
      .when('/createAccount', {
        templateUrl: 'views/createaccount.html',
        controller: 'CreateaccountCtrl',
        controllerAs: 'createAccount'
      })
      .when('/userProfile', {
        templateUrl: 'views/userprofile.html',
        controller: 'UserprofileCtrl',
        controllerAs: 'userProfile'
      })
      .when('/event', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl',
        controllerAs: 'event'
      })
      .when('/logIn', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'logIn'
      })
      .otherwise({
        redirectTo: '/'
      });

    uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });

  });
