'use strict';

angular.module('hl7MessagesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/help', {
        templateUrl: 'app/help/help.html',
        controller: 'HelpCtrl'
      })
  });
