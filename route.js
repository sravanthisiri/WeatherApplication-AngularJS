//Angular Router
weatherApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
        controller:'homeController',
        templateUrl: 'home.html'
    })
        .when('/forecast', {
        controller:'forecastController',
        templateUrl: 'forecast.html'
    })
        .when('/forecast/:days', {
        controller: 'forecastController',
        templateUrl: 'forecast.html'
    })
});
