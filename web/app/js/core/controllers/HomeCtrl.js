app.controller('HomeCtrl', ['$scope', '$state', 'authUser', function($scope, $state, authUser) {
    $scope.emailregistered = false;
    $scope.userNotFound = false;
    $scope.buttonVal = "Next";
    $scope.loggingIn = false;
    $scope.emailNotVerified = false;
    $scope.signupUser = function() {
        $state.go('signup');
    }
    $scope.onload = function() {
        document.body.style.backgroundImage = "";
    };

}]);