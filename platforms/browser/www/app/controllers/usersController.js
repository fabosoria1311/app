impApp.controller('UserCtrl', function($scope) {
	
	$scope.name = '';
	$scope.username = '0100005602';
	$scope.password = 'password';
	$scope.password2 = 'password';

	$scope.login = function() {
		showLoading('Iniciando');
		localStorage.setItem('userDocument', this.username);
		ws.userLogin({
			username : this.username,
			password : this.password
		}).done(function(response) {

			showCloseMessage('Bienvenido ' + response.nombres)
			window.location = '#/home';

		}).fail(function(error) {
			if (error && error) {
				showMessage(error);
			} else {
				showMessage(config.defaultWsErrorMsg);
			}
		}).always(function() {
			hideLoading();
		})

	};

});