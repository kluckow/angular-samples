var chartApp = angular.module('chartApp', ['directive.highcharts']);

chartApp.controller('HighchartCtrl', ['$scope', function($scope) {
	$scope.chartSize = {
		width : 1000,
		height: 500
	};
	$scope.chartData = {
			chart: {
				type: 'line',
//				width: 0,
//				height: 0
			},
			title: {
	            text: 'title.text'
	        },
	        subtitle: {
	            text: 'subtitle.text'
	        },
	        xAxis: {
	            categories: ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5'],
	            title: {
	                text: null
	            }
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: 'yAxis.title.text',
	                align: 'high'
	            },
	            labels: {
	                overflow: 'justify'
	            }
	        },
	        tooltip: {
	            valueSuffix: ' tooltip.valueSuffix'
	        },
	        plotOptions: {
	            bar: {
	                dataLabels: {
	                    enabled: false
	                }
	            }
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'top',
	            x: -40,
	            y: 80,
	            floating: true,
	            borderWidth: 1,
	            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
	            shadow: true
	        },
	        credits: {
	            enabled: false
	        },
	        series: [{
	        	type: 'column',
	            name: 'column',
	            data: [1070, 310, 6350, 2030, 200]
	        }, {
	        	type: 'line',
	            name: 'Line',
	            data: [133, 1560, 947, 408, 6]
	        }, {
	        	type: 'spline',
	            name: 'Spline',
	            data: [1052, 954, 4250, 740, 38]
	        }, {
	            type: 'column',
	            name: 'Column',
	            data: [3000, 2670, 3000, 6330, 3330]
	        }, {
	            type: 'area',
	            name: 'Area',
	            data: [300, 2670, 300, 633, 3330]
	        }, {
	        	type: 'areaspline',
	            name: 'Areaspline',
	            data: [3000, 2670, 3000, 6330, 3330]
	        }]
	};
	
//	$scope.finalChart = { 
//	chart: {
//        type: 'line'
//    },
//    title: {
//        text: 'Fruit Consumption'
//    },
//    xAxis: {
//        categories: ['Apples', 'Bananas', 'Oranges']
//    },
//    yAxis: {
//        title: {
//            text: 'Fruit eaten'
//        }
//    },
//    series: [{
//        name: 'Jane',
//        data: [1, 0, 4]
//    }, {
//        name: 'John',
//        data: [5, 7, 3]
//    }]
//	};
	
//	$scope.chartData = {
//			width: 250,
//			height: 250,
//			type: 'line'
//	};
	
	$scope.chartConfig = {
			options: {
			// This is the Main Highcharts chart config. Any Highchart
			// options are valid here.
		    // will be overriden by values specified below.
			    chart: {
			        type: 'bar'
			    },
			    tooltip: {
			          style: {
			              padding: 10,
			              fontWeight: 'bold'
			          }
			      }
			 },
			 
	    	// The below properties are watched separately for changes.
			 
		    //Series object (optional) - a list of series using normal highcharts series options.
		    series: [{
		       data: [10, 15, 12, 8, 7]
		    }],
		    //Title configuration (optional)
		    title: {
		       text: 'Hello'
		    },
		    //Boolean to control showng loading status on chart (optional)
		    //Could be a string if you want to show specific loading text.
		    loading: false,
		    //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
		    //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
		    xAxis: {
		    currentMin: 0,
		    currentMax: 20,
		    title: {text: 'values'}
		    },
		    //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
		    useHighStocks: false,
		    //size (optional) if left out the chart will default to size of the div or something sensible.
		    size: {
		     width: 400,
		     height: 300
		    },
		    //function (optional)
//		    func: function (chart) {
//		     //setup some logic for the chart
//		    }
	}
}]);