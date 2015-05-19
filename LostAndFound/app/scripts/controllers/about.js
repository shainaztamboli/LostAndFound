'use strict';

/**
 * @ngdoc function
 * @name lostAndFoundApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lostAndFoundApp
 */
angular.module('lostAndFoundApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
