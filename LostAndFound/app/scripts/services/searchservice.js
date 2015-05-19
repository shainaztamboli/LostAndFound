'use strict';

/**
 * @ngdoc service
 * @name lostAndFoundApp.SearchService
 * @description
 * # SearchService
 * Service in the lostAndFoundApp.
 */
angular.module('lostAndFoundApp')
  .service('SearchService', ['$http', function ($http) {
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

    service.fetchAllItems = function (success) {
      $http.get(service.baseUrl + '/lostAndFound/itemInfo').success(function (items) {
        success(items);
      });
    }
    return service;

  }]);

