'use strict';

angular.module('hl7MessagesApp')
  .controller('DataVizCtrl', function ($scope, $http) {
    $scope.messages = [];

    $http.get('/api/messages').success(function(messages) {
      $scope.messages = messages;
    });


  });
