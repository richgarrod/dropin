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
            controller: 'dropInApp.controllers.myAccountDropInsController'
        })
});
