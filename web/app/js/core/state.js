// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/welcome');
    $stateProvider
        .state('landing', {
            url: '/welcome',
            templateUrl: 'app/js/core/templates/landingpage.html',
            controller: 'LandCtrl'

        })
    $stateProvider
        .state('app', {
            url: '/home',
            templateUrl: 'app/js/core/templates/home.html',
            controller: 'HomeCtrl'

        })
        .state('dash', {
            url: '/dash/{phoneNum}',
            params: {
                phoneNum: "",
                data: ""
            },
            templateUrl: 'app/js/core/templates/Dashboard.html',
            controller: 'DashCtrl'
        })
        .state('itemsPortal', {
            url: '/itemsPortal',
            templateUrl: 'app/js/core/templates/signup.html',
            controller: 'SignCtrl'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/js/core/templates/admin.html'
        })
        .state('donation', {
            url: '/donations',
            templateUrl: 'app/js/core/templates/donations.html'
        })
        .state('education', {
            url: '/education',
            templateUrl: 'app/js/core/templates/education.html'
        })
        .state('inventory', {
            url: '/inventory',
            templateUrl: 'app/js/core/templates/inventory.html'
        })
        .state('resetPass', {
            url: '/resetpsswd/{email}',
            templateUrl: 'app/js/core/templates/resetpassword.html',
            controller: function($stateParams, $scope, authUser) {
                $scope.resetPass = function() {
                    if ($('#resetpassword').val() != $('#confirmrepassword').val()) {
                        alert("Oops! Seems Like Your Passwords Doesnt Match");
                    } else {
                        authUser.resetPassword($stateParams.email)
                            .then(function(data) {
                                    //console.log("working");
                                },
                                function() {
                                    console.log("error");
                                });
                    }
                }
            }
        })
        .state('verifyaccount', {
            url: '/verifyaccount/{phone}',
            controller: function($stateParams, $scope, authUser) {
                authUser.verifyaccount(window.atob($stateParams.phone))
                    .then(function(data) {
                            console.log("Account Verified");
                        },
                        function() {
                            console.log("error");
                        });
            }
        });
}]);