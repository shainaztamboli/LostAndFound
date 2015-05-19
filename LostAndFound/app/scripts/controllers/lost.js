'use strict';

/**
 * @ngdoc function
 * @name lostAndFoundApp.controller:LostCtrl
 * @description
 * # LostCtrl
 * Controller of the lostAndFoundApp
 */
angular.module('lostAndFoundApp')
  .controller('LostCtrl', ['$scope', 'LostService', function ($scope, LostService) {
    $scope.item = {};
    $scope.item.contact = {};
    LostService.fetchCategories(function (categories) {
      $scope.categories = categories;
    });


    LostService.fetchSubCategories(function (allSubCategories) {
      $scope.allSubCategories = allSubCategories;
    });

    $scope.loadSubCategory = function () {
      $scope.subCategories = [];
      $scope.allSubCategories.forEach(function (subcategory) {
        if ($scope.item.category == subcategory.category._id) {
          $scope.subCategories.push(subcategory);
        }
      });
    }

    LostService.fetchStates(function (states) {
      $scope.states = states;
    });

    LostService.fetchCities(function (allCities) {
      $scope.allCities = allCities;
    });

    $scope.loadCities = function () {
      $scope.cities = [];
      $scope.allCities.forEach(function (city) {
        if ($scope.item.state == city.state._id) {
          $scope.cities.push(city);
        }
      });
    }

    $scope.reset = function () {
      $scope.item = {};
      $scope.item.contact = {};
      $scope.subCategories = [];
      $scope.cities = [];
    }

    $scope.saveItem = function () {
      console.log("$scope.LostItem.$invalid" + $scope.LostItem.$invalid);
      console.log("$scope.LostItemLocation.$invalid" + $scope.LostItemLocation.$invalid);
      console.log("$scope.contactForm.$invalid" + $scope.contactForm.$invalid);
      if ($scope.LostItem.$valid && $scope.LostItemLocation.$valid && $scope.contactForm.$valid) {
        $scope.item.lostItem = true;
        console.log($scope.item);
        LostService.saveLostItem($scope.item, function (item) {
          alert("Lost Item Information Saved Successfully.");
          console.log(item);
          $scope.reset();
        });
      } else {
        alert("Please enter the Lost Item Details.");
      }
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
