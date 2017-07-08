app.controller('SignCtrl', ['$scope', '$state', 'authUser', function($scope, $state, authUser) {
    $scope.showitems = true;
    $scope.items = [{
        name: "joey",
        item: "chandler",
        quantity: 4,
        amount: 6,
    }];
    $(function() {
        authUser.getApprovedItems().then(function(data) {
                console.log(data);
                $scope.items = data.data;
            },
            function() {
                console.log("error");
            });
    })
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
        console.log("calling function", itemVal);
    }
    $scope.onAdditem = function() {
        var newItem = {
            name: $("#name").val(),
            item: $("#item").val(),
            quantity: $("#quantity").val(),
            amount: $("#amount").val(),
        }
        authUser.sendForApproval(newItem).then(function(data) {

                console.log("success");
            },
            function() {
                console.log("error");
            });
        authUser.getApprovedItems().then(function(data) {
                console.log(data);
                $scope.items = data.data;
            },
            function() {
                console.log("error");
            });
    }
}]);