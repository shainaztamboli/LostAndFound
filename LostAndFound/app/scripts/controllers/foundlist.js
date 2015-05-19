'use strict';

/**
 * @ngdoc function
 * @name lostAndFoundApp.controller:FoundlistCtrl
 * @description
 * # FoundlistCtrl
 * Controller of the lostAndFoundApp
 */
angular.module('lostAndFoundApp')
  .controller('FoundListCtrl', ['$scope', 'FoundListService', function ($scope, FoundListService) {

    FoundListService.fetchFoundItems(function (foundItems) {
      var temp = [];
      angular.forEach(foundItems, function (item) {
        if (!item.lostItem) {
          item.date = new Date(item.date);
          temp.push(item);
        }
      });
      $scope.foundItems = temp;
    });


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
