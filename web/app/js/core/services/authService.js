app.factory('authUser', ['$http', '$state', '$q', function($http, $state, $q) {

    var host = "http://localhost:3000"; // backend server praj
    //var host = "https://1efb982e.ngrok.io"; // backend server td







    return {

        getApprovedItems: function() {
            var def = $q.defer();
            var req = {
                method: 'GET',
                url: host + '/getitems'
            }
            $http(req).success(
                    function(resp) {
                        console.log();
                        def.resolve(resp);
                        //user found
                    })
                .error(
                    function() {
                        def.reject("error");
                        console.log("error");
                    });
            return def.promise;
        },
        sendForApproval: function(data) {
            var def = $q.defer();
            var req = {
                method: 'POST',
                url: host + '/additems',
                data: data
            }
            $http(req).success(
                    function(resp) {
                        console.log();
                        def.resolve(resp);
                        //user found
                    })
                .error(
                    function() {
                        def.reject("error");
                        console.log("error");
                    });
            return def.promise;
        },
        signupUser: function(data) {
            //create an user acccount
            var def = $q.defer();
            var req = {
                method: 'POST',
                url: host + '/users/signup',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                data: data
            }
            $http(req).success(
                    function(resp) {
                        def.resolve(resp);
                        //user found
                        $state.go('app');
                    })
                .error(
                    function() {
                        def.reject("error");
                        console.log("error");
                    });
            return def.promise;
        },
        sendResetLink: function(email) {
            //send a reset link mail to the requested email
            var dataToSend = { email: email }
            var def = $q.defer();
            var req = {
                method: 'POST',
                url: host + '/sendresetlink',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                data: dataToSend
            };
            $http(req)
                .success(function(resp) {
                    //user found
                    def.resolve(resp);
                    alert("Reset Link Has Been Sent To Your Mail ")
                    $('#email').val("");
                    $state.go('app');
                })
                .error(function() {
                    def.reject("error");
                    console.log("error");
                });
            return def.promise;
        },
        resetPassword: function(email) {
            //reset the password when the reset link was clicked in the user's email
            var dataToSend = { email: window.atob(email), pass: $('#resetpassword').val() };
            var def = $q.defer();
            var req = {
                method: 'POST',
                url: host + '/resetpsswd',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                data: dataToSend
            }
            $http(req)
                .success(function(resp) {
                    def.resolve(resp);
                    //user found
                    alert("Password Changed Succesfully!!");
                    window.location.reload();
                    $state.go('app');

                })
                .error(function() {
                    def.reject("error");
                    console.log("error");
                });
            return def.promise;
        },
        getrecommendedbooks: function(dataToSend) {
            var def = $q.defer();
            $http.post(host + '/authenticate', { userName: window.btoa("bookShare"), password: window.btoa("nodejs") }).success(
                function(resp) {
                    token = resp.token;

                    var req = {
                        method: 'POST',
                        url: host + '/users/recommendedbooks',
                        headers: {
                            'Authorization': 'Bearer ' + token
                        },
                        data: { interests: dataToSend }
                    }
                    $http(req).success(
                            function(resp) {
                                def.resolve(resp);
                                //user found
                            })
                        .error(
                            function() {
                                def.reject("error");
                                console.log("error");
                            });

                });
            //create an user acccount
            return def.promise;
        },
        requestbook: function(book) {
            var def = $q.defer();
            $http.post(host + '/authenticate', { userName: window.btoa("bookShare"), password: window.btoa("nodejs") }).success(
                function(resp) {
                    token = resp.token;

                    var req = {
                        method: 'POST',
                        url: host + '/users/books/request',
                        headers: {
                            'Authorization': 'Bearer ' + token
                        },
                        data: book
                    }
                    $http(req).success(
                            function(resp) {
                                def.resolve(resp);
                                //user found
                            })
                        .error(
                            function() {
                                def.reject("error");
                                console.log("error");
                            });

                });
            //create an user acccount
            return def.promise;
        },
        getsoldbooks: function(email) {
            var def = $q.defer();
            $http.post(host + '/authenticate', { userName: window.btoa("bookShare"), password: window.btoa("nodejs") }).success(
                function(resp) {
                    token = resp.token;

                    var req = {
                        method: 'GET',
                        url: host + '/users/sellbox?email=' + email,
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    }
                    $http(req).success(
                            function(resp) {
                                def.resolve(resp);
                                //user found
                            })
                        .error(
                            function() {
                                def.reject("error");
                                console.log("error");
                            });

                });
            //create an user acccount
            return def.promise;
        },
        getreqbooks: function(email) {
            var def = $q.defer();
            $http.post(host + '/authenticate', { userName: window.btoa("bookShare"), password: window.btoa("nodejs") }).success(
                function(resp) {
                    token = resp.token;

                    var req = {
                        method: 'GET',
                        url: host + '/users/books/getrequests',
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    }
                    $http(req).success(
                            function(resp) {
                                console.log('success');
                                def.resolve(resp);
                                //user found
                            })
                        .error(
                            function() {
                                def.reject("error");
                                console.log("error");
                            });

                });
            return def.promise;
        }
    }
}]);