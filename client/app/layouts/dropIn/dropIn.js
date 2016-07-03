angular.module('dropInApp')
.controller('dropInApp.controllers.dropInController', ['$scope', 'dropInApp.services.api',
		
	function($scope, api) {
  		
  		api.get('/boxes')
  			.then(function(result) {
          console.log(result);
  				$scope.boxes = result.data;
  			}, function (error) {
  				console.log(error);
  			});	
	}
]);