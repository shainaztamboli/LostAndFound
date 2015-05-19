'use strict';

/**
 * @ngdoc service
 * @name lostAndFoundApp.FoundListService
 * @description
 * # FoundListService
 * Service in the lostAndFoundApp.
 */
angular.module('lostAndFoundApp')
  .service('FoundListService', ['$http', function ($http) {
    var service = {};

    service.baseUrl = 'http://localhost:3000';

    service.fetchFoundItems = function (success) {
      $http.get(service.baseUrl + '/lostAndFound/itemInfo').success(function (items) {
        success(items);
      });
    }

    return service;

  }]);
