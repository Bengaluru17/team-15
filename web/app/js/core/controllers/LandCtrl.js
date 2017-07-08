app.controller('LandCtrl', ['$scope', '$state', 'authUser', function($scope, $state, authUser) {


    $scope.login = function() {
        $state.go('app');
    };
    $scope.itemsPortal = function() {
        $state.go('itemsPortal');
    };
    $scope.adminPortal = function() {
        $state.go('admin');
    };
    $scope.donationPortal = function() {
        $state.go('donation');
    };
    $scope.inventoryPortal = function() {
        $state.go('inventory');
    };
    $scope.educationPortal = function() {
        $state.go('education');
    };
}]);