'use strict';

/**
 * @ngdoc function
 * @name lostAndFoundApp.controller:LostviewCtrl
 * @description
 * # LostviewCtrl
 * Controller of the lostAndFoundApp
 */
angular.module('lostAndFoundApp')
  .controller('LostViewCtrl', ['$scope', '$state', '$stateParams',
    'LostViewService', function ($scope, $state, $stateParams, LostViewService) {

      if($stateParams.itemId){
        LostViewService.fetchItemInfoById($stateParams.itemId, function(item){
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
