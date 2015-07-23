(function() {
  'use strict';

  angular
    .module('hl7MessagesApp')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($location) {
      var ctrl = this;

      ctrl.menu = [{
        'title': 'Home',
        'link': '/'
      },{
        'title': 'Data Viz',
        'link': '/dataViz'
      }, {
        'title': 'Help',
        'link': '/help'
      }];

      ctrl.isCollapsed = true;

      ctrl.isActive = function(route) {
        return route === $location.path();
      };

    }
  }

})();
