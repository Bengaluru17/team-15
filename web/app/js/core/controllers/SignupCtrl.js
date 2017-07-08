app.controller('SignCtrl', ['$scope', '$state', 'authUser', function($scope, $state, authUser) {
    $scope.showitems = true;
    $scope.items = [];
    $scope.onAddItem = function() {
        $scope.showitems = false;
    }
    $scope.onAddedItem = function() {
        $scope.showitems = true;
        var newItem = {
            name: $("#name").val(),
            item: $("#item").val(),
            quantity: $("#quantity").val(),
            amount: $("#amount").val(),
        }
        $scope.items.push(newItem);

    }
    $scope.buyItem = function(itemVal) {
        console.log("calling function");
        authUser.testcall();
    }
}]);