'use strict';

/**
 * @ngdoc overview
 * @name lostAndFoundApp
 * @description
 * # lostAndFoundApp
 *
 * Main module of the application.
 */
angular
  .module('lostAndFoundApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ]).config(function ($stateProvider) {
    $stateProvider
      .state("lost", {
        templateUrl: "../views/lost.html",
        controller: "LostCtrl",
        url: "/lost"
      })
    $stateProvider
      .state("found", {
        templateUrl: "../views/found.html",
        controller: "FoundCtrl",
        url: "/found"
      })
    $stateProvider
      .state("lostList", {
        templateUrl: "../views/lost.list.html",
        controller: "LostListCtrl",
        url: "/lostList"
      })
    $stateProvider
      .state("lostView", {
        templateUrl: "../views/lost.view.html",
        controller: "LostViewCtrl",
        url: "/lostView/:itemId"
      })
    $stateProvider
      .state("foundList", {
        templateUrl: "../views/found.list.html",
        controller: "FoundListCtrl",
        url: "/foundList"
      })
    $stateProvider
      .state("foundView", {
        templateUrl: "../views/found.view.html",
        controller: "FoundViewCtrl",
        url: "/foundView/:itemId"
      })
    $stateProvider
      .state("search", {
        templateUrl: "../views/search.html",
        controller: "SearchCtrl",
        url: "/search"
      })
    $stateProvider
      .state("contact", {
        templateUrl: "../views/contact.html",
        controller: "ContactCtrl",
        url: "/contact"
      })
    $stateProvider
      .state("about", {
        templateUrl: "../views/about.html",
        controller: "AboutCtrl",
        url: "/about"
      })

    $stateProvider
      .state("admin", {
        templateUrl: "../views/admin.html",
        controller: "AdminCtrl",
        url: "/admin"
      })

    $stateProvider
      .state("home", {
        templateUrl: "../views/main.html",
        controller: "MainCtrl",
        url: "/home"
      })
  }).run(function ($state) {
    $state.go("home");
  });
