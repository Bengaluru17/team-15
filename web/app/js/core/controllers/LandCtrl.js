app.controller('LandCtrl', ['$scope', '$state', 'authUser', function($scope, $state, authUser) {


    $scope.login = function() {
        $state.go('app');
    };
    $scope.itemsPortal = function() {
        $state.go('itemsPortal');
    };
}]);