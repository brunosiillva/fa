(function(){
	'use strict';
	var myApp = angular.module('fa',[]);

	myApp.controller('homeController', function( $scope ){
		var title = "Primeira Jarda - O seu site sobre Futebol Americano";
	});

	myApp.controller('footerController', ['$scope', '$location',  function($scope, $location, $anchorScroll){

		var host = $location.absUrl();
		$scope.link = host;

	}]);

	myApp.controller('ListaTermos', ['$scope','$http', function($scope, $http){

		$http.get('json/termos.json').success(function(data){
			$scope.termoslista = data;
		});
	}]);
	
})();