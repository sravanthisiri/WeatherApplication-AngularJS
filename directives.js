weatherApp.directive('weatherReport', function() {
    return {
        restrict: 'AECM',
        templateUrl: 'template.html',
        replace: true,
        scope: {
            weatherDay: '=',
            convertToDate: '&',
            convertToStandard: '&',
            weatherDate: '@'
        }
    }
});
