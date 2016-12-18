weatherApp.config(function($routeProvider) {
                  $routeProvider
                    .when('/', {
                        templateUrl: 'home.html',
                        controller: 'homeController'
                  })

                    .when('/forecast', {
                        templateUrl: 'forecast.html',
                        controller: 'forecastController'
                    })
                    
                  .when('/forecast/:days', {
                        templateUrl: 'forecast.html',
                        controller: 'forecastController'
                    })
        });