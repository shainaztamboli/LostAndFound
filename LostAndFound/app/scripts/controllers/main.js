'use strict';

/**
 * @ngdoc function
 * @name lostAndFoundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lostAndFoundApp
 */
angular.module('lostAndFoundApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
