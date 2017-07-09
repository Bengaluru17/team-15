app.controller('admindashCtrl', ['$scope', '$state', 'authUser', function($scope, $state, authUser) {
    $scope.name = "";
    $scope.amount = "";
    $scope.title = "";
    $scope.options = true;
    $scope.approval = false;
    $scope.finance = false;

    $scope.onapproval = function() {
        authUser.getApprovalItems().then(function(data) {
                console.log(data);
                $scope.toapprov = data.data;
            },
            function() {
                console.log("error");
            });
        $scope.options = false;
        $scope.approval = true;
        $scope.finance = false;
    }
    $scope.onfinance = function() {
        $scope.options = false;
        $scope.approval = false;
        $scope.finance = true;
    }

    $scope.approvitem = function() {
        var datatosend = {
            name: $("#oldname").html(),
            title: $("#oldtitle").html(),
            amount: $("#oldamount").html()
        }
        authUser.setApprovedlItems(datatosend).then(function(data) {
                $scope.options = true;
                $scope.approval = false;
                $scope.finance = false;
            },
            function() {
                console.log("error");
            });
    }
    $scope.financeitem = function() {
        alert("Yet to update");
    }
    $scope.onitems = function() {
        $state.go("itemsPortal");
    }
    $scope.onupdateitem = function(titleval, amountval, nameval) {
        console.log(nameval);
        $("#oldname").html($scope.name);
        $("#oldtitle").html($scope.title);
        $("#oldamount").html($scope.amount);
    }
    $scope.updateitem = function() {
        $scope.name = $("#oldname").html();
        $scope.title = $("#oldtitle").html();
        $scope.amount = $("#oldamount").html();
    }
}]);