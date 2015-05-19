'use strict';

/**
 * @ngdoc service
 * @name lostAndFoundApp.LostListService
 * @description
 * # LostListService
 * Service in the lostAndFoundApp.
 */
angular.module('lostAndFoundApp')
  .service('LostListService', ['$http', function ($http) {
    var service = {};

    service.baseUrl = 'http://localhost:3000';

    service.fetchLostItems = function (success) {
      $http.get(service.baseUrl + '/lostAndFound/itemInfo').success(function (items) {
        success(items);
      });
    }

    return service;

  }]);

