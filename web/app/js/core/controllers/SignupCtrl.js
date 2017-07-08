app.controller('SignCtrl', ['$scope', '$state', 'authUser', function($scope, $state, authUser) {
    $scope.showitems = true;
    $scope.items = [{
        name: "item1",
        amount: "5",
        data: "a failjfoaisjf asfjsad;ifj lmdf;idhfiads fj"
    }];
    $scope.onAddItem = function() {
        $scope.showitems = false;
    }
    $scope.onAddedItem = function() {
        $scope.showitems = true;
    }
}]);