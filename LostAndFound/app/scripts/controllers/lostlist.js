'use strict';

/**
 * @ngdoc function
 * @name lostAndFoundApp.controller:LostlistCtrl
 * @description
 * # LostlistCtrl
 * Controller of the lostAndFoundApp
 */
angular.module('lostAndFoundApp')
  .controller('LostListCtrl', ['$scope', 'LostListService', function ($scope, LostListService) {

    LostListService.fetchLostItems(function (lostItems) {
      var temp = [];
      angular.forEach(lostItems, function (item) {
        if (item.lostItem) {
          item.date = new Date(item.date);
          temp.push(item);
        }
      });
      $scope.lostItems = temp;
    });


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
