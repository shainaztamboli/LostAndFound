'use strict';

/**
 * @ngdoc function
 * @name lostAndFoundApp.controller:FoundviewCtrl
 * @description
 * # FoundviewCtrl
 * Controller of the lostAndFoundApp
 */
angular.module('lostAndFoundApp')
  .controller('FoundViewCtrl', ['$scope', '$state', '$stateParams',
    'FoundViewService', function ($scope, $state, $stateParams, FoundViewService) {

      if($stateParams.itemId){
        FoundViewService.fetchItemInfoById($stateParams.itemId, function(item){
          $scope.item = item;
          $scope.item.date = new Date(item.date);
          console.log(item);
        });
      }
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);
