app.controller('SignCtrl', ['$scope', '$state', 'authUser', function($scope, $state, authUser) {
    $scope.showitems = true;
    $scope.onAddItem = function() {
        $scope.showitems = false;
    }
    $scope.onAddedItem = function() {
        $scope.showitems = true;
    }
}]);