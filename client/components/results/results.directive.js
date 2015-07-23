(function() {
  'use strict';

  angular
    .module('hl7MessagesApp')
    .directive('result', [results]);

    // would want to abstract data parsing to a util method

  /** @ngInject */
  function results() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/results/results.html',
      scope: {
        result: '=data',
        resultType: '=type',
        searchTerm: '=searchText'
      },
      controller: ResultsController,
      controllerAs: 'ctrl',
      bindToController: true,
      link: resultLinkFunction
    };

    return directive;

    function resultLinkFunction(scope, element, attr) {
      console.log('result', scope);
      scope.ctrl.processResults();
    }

    /** @ngInject */
    function ResultsController($location) {
      var ctrl = this;

      ctrl.processResults = function() {
        console.log('ctrl result', ctrl.result);
        if (ctrl.result) {
          if (ctrl.result.message) {
            var resultObj = {};
            var segments = ctrl.result.message.split("\n");
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
  }

})();
