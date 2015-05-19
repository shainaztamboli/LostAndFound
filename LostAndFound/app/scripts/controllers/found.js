'use strict';

/**
 * @ngdoc function
 * @name lostAndFoundApp.controller:FoundCtrl
 * @description
 * # FoundCtrl
 * Controller of the lostAndFoundApp
 */
angular.module('lostAndFoundApp')
  .controller('FoundCtrl', ['$scope', 'FoundService', function ($scope, FoundService) {
    $scope.item = {};
    $scope.item.contact = {};
    FoundService.fetchCategories(function (categories) {
      $scope.categories = categories;
    });


    FoundService.fetchSubCategories(function (allSubCategories) {
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

    FoundService.fetchStates(function (states) {
      $scope.states = states;
    });

    FoundService.fetchCities(function (allCities) {
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
      console.log("$scope.FoundItem.$valid"+$scope.FoundItem.$valid);
      console.log("$scope.FoundItemLocation.$valid"+$scope.FoundItemLocation.$valid);
      console.log("$scope.FoundContactForm.$valid"+$scope.FoundContactForm.$valid);
      if ($scope.FoundItem.$valid && $scope.FoundItemLocation.$valid && $scope.FoundContactForm.$valid) {
        $scope.item.foundItem = true;
        $scope.item.lostItem = false;
        console.log($scope.item);
        FoundService.saveFoundItem($scope.item, function (item) {
          alert("Found Item Information Saved Successfully.");
          console.log(item);
          $scope.reset();
        });
      } else {
        alert("Please enter the Found Item Details.");
      }
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
  ])
;

