'use strict';

/**
 * @ngdoc service
 * @name lostAndFoundApp.LostViewService
 * @description
 * # LostViewService
 * Service in the lostAndFoundApp.
 */
angular.module('lostAndFoundApp')
  .service('LostViewService', ['$http', function ($http) {
    var service = {};

    service.baseUrl = 'http://localhost:3000';

    service.fetchItemInfoById = function (itemId, success) {
      $http.get(service.baseUrl + '/lostAndFound/itemInfo/'+itemId).success(function (item) {
        success(item);
      });
    }

    return service;

  }]);
