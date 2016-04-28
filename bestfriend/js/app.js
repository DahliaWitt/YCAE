// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('best-friend', ['ionic', 'ngCordova'])

    .run(function($ionicPlatform, $cordovaStatusbar) {
        $ionicPlatform.ready(function() {
            $cordovaStatusbar.styleColor('white');
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .controller('MainCtrl', function($scope, $http, $cordovaSocialSharing, $ionicModal) {
        $scope.fetch = function() {
            $http.get("http://api.fayetteycae.org/v2/quotes").success(function(data) {
                $scope.quote = data[0];
            })
        }
        $scope.fetch();

        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        $scope.share = function() {
            console.log("aloha snackbar");
            /*$cordovaSocialSharing
                .share("Bush did 9/11") // Share via native share sheet
                .then(function(result) {
                    // Success!
                    console.log(result);
                }, function(err) {
                    console.error(err);
                    // An error occured. Show a message to the user
                });*/
                window.plugins.socialsharing.share('The message', 'The subject', null, null);
        }
    })
