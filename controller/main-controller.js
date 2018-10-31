appModule.controller("MainController",function($scope, $location){
    $scope.route = function(route) {
        $location.path(route);
    }
});