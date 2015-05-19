'use strict';

/**
 * @ngdoc function
 * @name lostAndFoundApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the lostAndFoundApp
 */

angular.module('lostAndFoundApp')
  .controller('AdminCtrl', ['$scope', 'AdminService', function ($scope, AdminService) {
    $scope.isAdmin = false;
    AdminService.isAdminLogin(function (isAdmin) {
      $scope.isAdmin = isAdmin;
    });

    $scope.submitForm = function () {

      // check to make sure the form is completely valid
      if ($scope.userForm.$valid) {
        //alert($scope.user.username +""+$scope.user.password);
        if ($scope.user.username == "admin" && $scope.user.password == "admin") {
          alert("Login Successful!!!");
          $('#myModal').modal('hide');
          $scope.user = {};
          $scope.isAdmin = true;

          AdminService.updateAdminLogin($scope.isAdmin, function (isAdmin) {
            $scope.isAdmin = isAdmin;
          });

        } else {
          alert("Invalid Credentials!!!");
        }
      }

    };

    $scope.removeItemInfo = function () {
      console.log($scope.item);
      AdminService.removeItemInfos($scope.item);
      alert("Items Information Deleted Successfully.");
      $scope.item = {};
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);






