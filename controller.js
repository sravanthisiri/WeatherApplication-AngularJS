weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    
}]);


weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', '$routeParams', function($scope, $resource, cityService, $routeParams) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?&appid=edca562ffff60f1ce76bbeb8cb765a92", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days});
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000);
        
    };
    
    
}]);
