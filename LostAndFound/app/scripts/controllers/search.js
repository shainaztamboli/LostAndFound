'use strict';

/**
 * @ngdoc function
 * @name lostAndFoundApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the lostAndFoundApp
 */
angular.module('lostAndFoundApp')
  .controller('SearchCtrl', ['$scope', 'SearchService', function ($scope, SearchService) {
    $scope.search = {};
    $scope.items = [];
    $scope.search.showTable = true;

    SearchService.fetchAllItems(function (items) {
      $scope.allItems = items;
    });


    SearchService.fetchCategories(function (categories) {
      $scope.categories = categories;
    });


    SearchService.fetchSubCategories(function (allSubCategories) {
      $scope.allSubCategories = allSubCategories;
    });

    $scope.loadSubCategory = function () {
      $scope.subCategories = [];
      $scope.allSubCategories.forEach(function (subcategory) {
        if ($scope.search.category == subcategory.category._id) {
          $scope.subCategories.push(subcategory);
        }
      });
    }

    SearchService.fetchStates(function (states) {
      $scope.states = states;
    });

    SearchService.fetchCities(function (allCities) {
      $scope.allCities = allCities;
    });

    $scope.loadCities = function () {
      $scope.cities = [];
      $scope.allCities.forEach(function (city) {
        if ($scope.search.state == city.state._id) {
          $scope.cities.push(city);
        }
      });
    }

    $scope.reset = function(){
      $scope.cities = [];
      $scope.subCategories = [];
      $scope.search = {};
      $scope.search.showTable = true;
    }



    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }])
;
