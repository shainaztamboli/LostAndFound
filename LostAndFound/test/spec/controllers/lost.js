'use strict';

describe('Controller: LostCtrl', function () {

  // load the controller's module
  beforeEach(module('lostAndFoundApp'));

  var LostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LostCtrl = $controller('LostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
