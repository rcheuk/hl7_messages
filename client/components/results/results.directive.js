(function() {
  'use strict';

  angular
    .module('hl7MessagesApp')
    .directive('results', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/results/results.html',
      controller: ResultsController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ResultsController($location) {
      var ctrl = this;

    }
  }

})();
