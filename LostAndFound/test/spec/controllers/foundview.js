'use strict';

describe('Controller: FoundviewCtrl', function () {

  // load the controller's module
  beforeEach(module('lostAndFoundApp'));

  var FoundviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoundviewCtrl = $controller('FoundviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
