"use strict";

angular.module('clientApp').directive("selectize", ['$timeout',function($timeout) {
  return {
    restrict: "AE",
    link: function(scope, element, attrs) {
      
      var selectize_inst = null
      
      var load_angularjs_data = function() {
        if (selectize_inst === null || !('selectizeData' in attrs)) { 
          return
        }
        var data_array = scope.$eval(attrs.selectizeData)
        if (!$.isArray(data_array)) {
          return
        }
        for (var i in data_array) {
          selectize_inst.addOption(data_array[i])
        }
      }
      
      if ('selectizeData' in attrs) {
        scope.$watch(attrs.selectizeData,load_angularjs_data)
      }
      return $timeout(function() {
        var result = $(element).selectize(scope.$eval(attrs.selectize))
        selectize_inst = result[0].selectize
        load_angularjs_data()
        return result
      });
    }
  };
}]);