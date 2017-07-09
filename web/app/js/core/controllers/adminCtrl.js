app.controller('adminCtrl', ['$scope', '$state', 'authUser', function($scope, $state, authUser) {

    $scope.signin = function() {
        if ($("#pass").val() == "pass") {
            $state.go("admindash");
        }
    }
}]);