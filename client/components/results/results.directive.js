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
        searchTerm: '='
      },
      controller: ResultsController,
      controllerAs: 'ctrl',
      bindToController: true,
      link: resultLinkFunction
    };

    return directive;

    function resultLinkFunction(scope, element, attr) {
      scope.ctrl.processResults();
      scope.ctrl.searchTerm = "ekg";
      //console.log('scope term', scope.ctrl);
    }

    /** @ngInject */
    function ResultsController($location, $sce) {
      var ctrl = this;

      // util functions
      var definitionMap = {
        'MSH': 'Message Header',
        'EVN': 'Event Type',
        'PID': 'Patient Identification',
        'PD1': 'Pateint Additional Demographic',
        'PV1': 'Patient Visit',
        'NK1': 'Next of Kin/Associated Parties',
        'OBR': 'Observation Request',
        'OBX': 'Obervation Result',

      };

      Array.prototype.clean = function(deleteValue) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
          }
        }
        return this;
      };

      // end util functions

      ctrl.highlight = function(text, search) {
        if (text) {
          if (!search) {
              return $sce.trustAsHtml(text);
          }
          return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlight">$&</span>'));
        }
      };

      ctrl.processResults = function() {
        var resultObj = {
          segment: []
        };
        if (ctrl.result) {
          if (ctrl.result.message) {
            var segments = ctrl.result.message.split("\n");
            //console.log('segments', segments);
            segments.map(function(s) {
              //console.log('s', s);
              var fields = s.split("\|").clean("");
              var data = {
                segmentName: definitionMap[fields[0]],
                fieldData: fields.join(', ')
              }
              resultObj.segment.push(data);
            });
          }
        }
        //console.log('resultOb', resultObj);
        ctrl.resultObj = resultObj;
      }


    }
  }

})();
