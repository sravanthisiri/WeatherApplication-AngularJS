weatherApp.directive('weatherApplication', function() {
    return {
        restrict: 'AECM',
        templateUrl:'template.html',
        replace: true,
        scope: {
            weatherDay: '=',
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'
        }
    }
});