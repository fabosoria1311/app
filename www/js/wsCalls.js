window.ws = window.ws || {};

ws = {

	/*
	 * **** USERS ****
	 */
	userLogin : function(data) {
		var deferred = $.Deferred();
		callWs({
			service : 'appconsulta',
			addData : '/' + data.username,
			data : {
				username : data.username,
				password : data.password,
				cia : config.ciaParameter
			},
			success : function(response) {
				if (response.codigo == 200) {
					deferred.resolve(response.resultado);
				}
			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

	register : function(data) {
		var deferred = $.Deferred();
		callWsPost({
			service : 'registerUser',
			dataText : JSON.stringify(data),
			success : function(response) {
				deferred.resolve(response);
			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

	getUserData : function(data) {
		var deferred = $.Deferred();
		callWs({
			service : 'appconsulta',
			addData : '/' + data.userDocument,
			data : {
				username : data.username,
				password : data.password,
				cia : config.ciaParameter
			},
			success : function(response) {
				if (response.codigo == 200) {
					deferred.resolve(response.resultado);
				}

			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

	/*
	 * ACCOUNT
	 */

	getAccountBalance : function(data) {
		var deferred = $.Deferred();

		callWs({
			service : 'getAccountBalance',
			data : {
				cia : config.ciaParameter,
				key : data.type,
				fdate : data.username,
				tdate : data.password,
			},
			success : function(response) {
				deferred.resolve(response);
			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

	getAccountStatus : function(data) {
		var deferred = $.Deferred();

		callWs({
			service : 'appestcta',
			addData : '/' + data.userDocument,
			success : function(response) {
				if (response.codigo == 200) {
					deferred.resolve(response.resultado);
				}
			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

	getAccountStatusDetails : function(data) {
		var deferred = $.Deferred();

		callWs({
			service : 'appestctadet',
			addData : '/' + data.userDocument,
			success : function(response) {
				if (response.codigo == 200) {
					deferred.resolve(response.resultado);
				}
			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

	generatePin : function(data) {
		var deferred = $.Deferred();
		callWs({
			service : 'apppin',
			addData : '/' + data.userDocument + '/' + data.amount,
			data : {},
			success : function(response) {
				if (response.codigo == 200) {
					deferred.resolve(response.resultado);
				}

			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

	getCategories : function() {
		var deferred = $.Deferred();
		callWs({
			service : 'categories',
			addData : '',
			data : {},
			success : function(response) {
				if (response.codigo == '200') {
					deferred.resolve(response.data);
				}

			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

	getCategoriesById : function(catId) {
		var deferred = $.Deferred();
		callWs({
			service : 'promosPerIdCategorie',
			addData : '/' + catId,
			data : {},
			success : function(response) {
				if (response.codigo == '200') {
					deferred.resolve(response.data);
				}

			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

	registerAction : function(catId) {
		var deferred = $.Deferred();
		callWsPost({
			service : 'registerUserAction',
			dataText : JSON.stringify(data),
			success : function(response) {
				deferred.resolve(response);
			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

	getPlaces : function(catId) {
		
		var deferred = $.Deferred();
		callWs({
			service : 'locals',
			addData : '',
			data : {},
			success : function(response) {
				if (response.codigo == '200') {
					deferred.resolve(response.data);
				}

			},
			error : function() {
				deferred.reject();
			}
		});
		return deferred.promise();
	},

};

window.callWs = function(options) {

	options.addData = options.addData == null ? '' : options.addData;

	var url = config.wsUrl + options.service + options.addData;
	$.ajax({
		method : "GET",
		url : url,
		dataType : 'json',
		data : options.data,
		success : function(data) {
			options.success(data);
		},
		error : function(jqXHR, exception) {
			if (jqXHR.status === 405) {
				console.error("METHOD NOT ALLOWED!");
			}
			options.error();
		}
	});

};

window.callWsPost = function(options) {

	// options.addData = options.addData == null ? '' : options.addData;

	// var url = config.wsUrl + options.service + options.addData;
	var url = config.wsUrl + options.service;
	$.ajax({
		method : "POST",
		url : url,
		dataType : 'json',
		contentType : 'application/json',
		data : options.dataText,
		// data
		// :'{"codigo":"4000","array":{"mail":"prueba2@eta.com","txtPassword":"12345678","strFrbsToken":"ALFA"}}',
		success : function(data) {
			options.success(data);
		},
		error : function(jqXHR, exception) {
			if (jqXHR.status === 405) {
				console.error("METHOD NOT ALLOWED!");
			}
			options.error();
		}
	});

};
