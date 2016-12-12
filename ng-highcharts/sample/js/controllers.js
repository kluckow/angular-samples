'use strict';

angular.module('chartsExample.controllers',[]).controller('MainCtrl', ['$scope','$http', function($scope,$http) {
	
//		this will contain a reference to the highcharts' chart object
	    $scope.chartObj;
	    
 		$http.get("charts/basicAreaChart.json").success(function(data) {
    		$scope.basicAreaChart = data;
		});
}]);