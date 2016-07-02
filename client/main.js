var dropInApp = angular.module('dropInApp', ['ui.router']);
angular.module('dropInApp')
.controller('dropInApp.controllers.aboutController', ['$scope', 'dropInApp.services.api',
		
	function($scope, api) {
  		
  		api.get('/about')
  			.then(function(result) {
  				var owners = [];
  				result.data.forEach(function (owner) {
  					owners.push(owner.name);
  				})
  				$scope.owners = owners;
  			}, function (error) {
  				console.log(error);
  			});	
	}
]);
angular.module('dropInApp')
.controller('dropInApp.controllers.myAccountDetailsController', ['$scope', 'dropInApp.services.api',
		
	function($scope, api) {
  		
  		api.get('/about/details/1')
  			.then(function(result) {
          console.log(result);
          $scope.name = result.data.name;
          $scope.address = result.data.address;
          $scope.country = result.data.country;
          $scope.email = result.data.email;

          console.log($scope);
  			}, function (error) {
  				console.log(error);
  			});	
	}
]);
angular.module('dropInApp').service('dropInApp.services.api', ['$http', function($http) {
  
  var endPoint = 'localhost:3000';

  var apiClient = {
  	get: function (path) {
  		return $http.get(path);
  	}
  };
  return apiClient;
}]);
angular.module('dropInApp').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/layouts/home/home.html'
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'app/layouts/home/home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        .state('about', { 
            url: '/about',
            templateUrl: 'app/layouts/about/about.html',
            controller: 'dropInApp.controllers.aboutController'
        })

        .state('myAccount', {
            url: '/myAccount',
            templateUrl: 'app/layouts/myAccount/myAccount.html',
        })

        .state('myAccount.details', {
            url: '/myAccount/details',
            templateUrl: 'app/layouts/myAccount/details.html',
            controller: 'dropInApp.controllers.myAccountDetailsController'
        })

        .state('myAccount.dropIns', {
            url: '/myAccount/dropIns',
            templateUrl: 'app/layouts/myAccount/dropIns.html',
            // controller: 'dropInApp.controllers.myAccountDropInsController'
        })
});
