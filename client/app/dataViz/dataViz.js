'use strict';

angular.module('hl7MessagesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dataViz', {
        templateUrl: 'app/dataViz/dataViz.html',
        controller: 'DataVizCtrl'
      });
  });
