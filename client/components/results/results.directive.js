(function() {
  'use strict';

  angular
    .module('hl7MessagesApp')
    .directive('result', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/results/results.html',
      controller: ResultsController,
      scope: {
        result: '=data',
        resultType: '=type',
        searchTerm: '=searchText'
      },
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ResultsController($location) {
      var ctrl = this;
      console.log('result', ctrl.result, ctrl.resultType, ctrl.searchTerm);
      ctrl.processResults = function() {
        if (ctrl.result) {
          var resultObj = {};
          var segments = ctrl.result.split("\n");
          console.log('segments', segments);
          segments.map(function(s) {
            console.log('s', s);
            s.split("\|");
            resultObj.segment = s[0];

          });
        }
      }

    }
  }

})();
