'use strict';

describe('Controller: FoundlistCtrl', function () {

  // load the controller's module
  beforeEach(module('lostAndFoundApp'));

  var FoundlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoundlistCtrl = $controller('FoundlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
