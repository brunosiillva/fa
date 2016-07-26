(function(){
	'use strict';

	var myApp = angular.module('fa',['ui.bootstrap']);


	myApp.controller('homeController', function( $scope ){
		$scope.title = "Primeira Jarda - O seu site sobre Futebol Americano";
	});

	myApp.controller('menuController', function( $location ){
		var location = $location.absUrl().substr(1);
		console.log(location);
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

	myApp.controller('ListaTimes', ['$scope','$http', function($scope, $http, $sce){
		$http.get('json/times.json').success(function(data){
			$scope.timeslista = data;
		});
	}]);
	
})();