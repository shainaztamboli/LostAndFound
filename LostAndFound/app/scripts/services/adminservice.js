'use strict';

/**
 * @ngdoc service
 * @name lostAndFoundApp.AdminService
 * @description
 * # AdminService
 * Service in the lostAndFoundApp.
 */
angular.module('lostAndFoundApp')
  .service('AdminService', ['$http', function ($http) {
    var service = {};
    service.isAdmin = false;
    service.baseUrl = 'http://localhost:3000';

    service.removeItemInfos = function (item) {
      console.log(item);
      $http.put(service.baseUrl + '/lostAndFound/itemInfo', item).success(function (items) {
       console.log(items);
      });
    }

    service.isAdminLogin = function (success) {
        success(service.isAdmin);
    }

    service.updateAdminLogin = function (isAdmin, success) {
      service.isAdmin = isAdmin;
      success(service.isAdmin);
    }

    return service;

  }]);

