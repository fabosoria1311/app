var map;
var currPosition;
var markers = [];

climbApp.controller('DataCtrl', function($scope, $routeParams) {

	$scope.showChangeRegion = false;

	$scope.sLoadHome = function() {
		$('#carState').owlCarousel({
			autoPlay : 3500,
			goToFirst : true,
			goToFirstSpeed : 2000,
			navigation : false,
			slideSpeed : 700,
			pagination : false,
			transitionStyle : "fade",
			singleItem : true,
			mouseDrag : false,
			items : 1,
		});

	}

	$scope.sLoadRegion = function() {

		$('#carRegions').owlCarousel({
			autoPlay : 3500,
			goToFirst : true,
			goToFirstSpeed : 2000,
			navigation : false,
			slideSpeed : 700,
			pagination : false,
			transitionStyle : "fade",
			singleItem : true,
			mouseDrag : false,
			items : 1,
		});

	};

	/*
	 * REGION
	 */

	$scope.showRegionPicker = function() {
		$scope.showChangeRegion = true;
	}

});
