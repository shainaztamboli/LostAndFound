'use strict';

/**
 * @ngdoc filter
 * @name lostAndFoundApp.filter:SearchFilter
 * @function
 * @description
 * # SearchFilter
 * Filter in the lostAndFoundApp.
 */
angular.module('lostAndFoundApp')
  .filter('SearchFilter', function () {
    return function (items, search) {
      var out = [], temp = [];
      if (search && search.lost != undefined) {
        angular.forEach(items, function (item) {
          if (search.lost == item.lostItem) {
            temp.push(item);
          }
        })
      } else {
        temp = items;
      }
      out = temp;
      if (search && search.category) {
        out = [];
        angular.forEach(temp, function (item) {
          if (item.category._id == search.category) {
            out.push(item);
          }
        });
      }
      temp = out;
      if (search && search.subCategory) {
        temp = [];
        angular.forEach(out, function (item) {
          if (item.subCategory._id == search.subCategory) {
            temp.push(item);
          }
        });
      }
      out = temp;
      if (search && search.street) {
        out = [];
        angular.forEach(temp, function (item) {
          if (item.street.toLowerCase().indexOf(search.street.toLowerCase())>=0 ) {
            out.push(item);
          }
        });
      }
      temp = out;
      if (search && search.state) {
        temp = [];
        angular.forEach(out, function (item) {
          if (item.state._id == search.state) {
            temp.push(item);
          }
        });
      }
      out = temp;
      if (search && search.city) {
        out = [];
        angular.forEach(temp, function (item) {
          if (item.city._id == search.city) {
            out.push(item);
          }
        });
      }
      temp = out;
      if (search && search.fromDate) {
        temp = [];
        angular.forEach(out, function (item) {
          if (search.fromDate.getTime() <= new Date(item.date).getTime()) {
            temp.push(item);
          }
        });
      }
      out = temp;
      if (search && search.toDate) {
        out = [];
        angular.forEach(temp, function (item) {
          if (search.toDate.getTime() >= new Date(item.date).getTime()) {
            out.push(item);
          }
        });
      }
      if(out && out.length == 0){
        search.showTable = false;
      }else{
        search.showTable = true;
      }
      return out;
    };
  })
