'use strict';

describe('Controller: LostlistCtrl', function () {

  // load the controller's module
  beforeEach(module('lostAndFoundApp'));

  var LostlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LostlistCtrl = $controller('LostlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
