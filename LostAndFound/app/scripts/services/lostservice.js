'use strict';

/**
 * @ngdoc service
 * @name lostAndFoundApp.LostService
 * @description
 * # LostService
 * Service in the lostAndFoundApp.
 */
angular.module('lostAndFoundApp')
  .service('LostService', ['$http', function ($http) {
    var service = {};

    service.baseUrl = 'http://localhost:3000';

    service.fetchCategories = function (success) {
      $http.get(service.baseUrl + '/lostAndFound/category').success(function (categories) {
        success(categories);
      });
    }

    service.fetchSubCategories = function (success) {
      $http.get(service.baseUrl + '/lostAndFound/subCategory').success(function (subCategories) {
        success(subCategories);
      });
    }

    service.fetchStates = function (success) {
      $http.get(service.baseUrl + '/lostAndFound/state').success(function (states) {
        success(states);
      });
    }
    service.fetchCities = function (success) {
      $http.get(service.baseUrl + '/lostAndFound/city').success(function (cities) {
        success(cities);
      });
    }
    service.saveLostItem = function (item, success) {
      $http.post(service.baseUrl + '/lostAndFound/itemInfo', item).success(function (item) {
        success(item);
      });
    }
    return service;

  }]);

