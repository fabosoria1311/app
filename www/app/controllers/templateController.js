climbApp.controller('TemplateCtrl', function($scope) {

	$scope.toggleSidebar = function() {
		$('#wrapper').toggleClass('toggled');
	};

	$scope.toHome = function() {
		$('#wrapper').removeClass('toggled');
	};

});