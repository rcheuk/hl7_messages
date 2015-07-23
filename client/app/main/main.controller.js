'use strict';

angular.module('hl7MessagesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.results = null;
    $scope.resultType = 'List';

    $scope.search = function(searchTerm) {
      $scope.searchTerm = searchTerm;
      // normally would append search term to url request, but since unimplemented, just using basic query
      // results are expected to be the same format

      //$http.get('/api/messages/' + encodeString($scope.searchTerm)).success(function(messages) {
      if ($scope.searchTerm) {
        $http.get('/api/messages').success(function(messages) {
          $scope.results = messages;
        });
      }
    }

    $scope.setResultType = function(type) {
      $scope.resultType = type;
    };

  });
