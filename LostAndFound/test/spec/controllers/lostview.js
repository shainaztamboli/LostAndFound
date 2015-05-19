'use strict';

describe('Controller: LostviewCtrl', function () {

  // load the controller's module
  beforeEach(module('lostAndFoundApp'));

  var LostviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LostviewCtrl = $controller('LostviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
