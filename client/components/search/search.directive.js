(function() {
  'use strict';

  angular
    .module('hl7MessagesApp')
    .directive('search', search);

  /** @ngInject */
  function search() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/search/search.html',
      controller: SearchController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SearchController($scope, $http, $q, $log, $timeout) {
      var ctrl = this;

      ctrl.getSuggestions = function(val) {
        return $http.get('/api/suggestions', {
          params: {
            address: val,
            sensor: false
          }
        }).then(function(response){
          return response.data.map(function(item){
            return item;
          });
        });
      }
    }
  }

})();
