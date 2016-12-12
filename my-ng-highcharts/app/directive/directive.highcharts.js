var highchartsDirectives = angular.module('directive.highcharts', []);

highchartsDirectives.directive('highChart', function() {
	return {
		restrict: 'E',
//		template: '<div></div>',
		scope: {
			data: '=',
//			chartsize: '='
		},
		link: function(scope, element, attrs) {
//			scope.data.chart.width = scope.chartsize.width;
//			scope.data.chart.height = scope.chartsize.height;
			console.log(scope.data);
			setTimeout(function () {
//				$(element).css({
//				});
			    $(element).highcharts(scope.data);
		    }, 500);
		}
	}
});