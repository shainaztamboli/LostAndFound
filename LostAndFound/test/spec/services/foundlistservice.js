'use strict';

describe('Service: FoundListService', function () {

  // load the service's module
  beforeEach(module('lostAndFoundApp'));

  // instantiate service
  var FoundListService;
  beforeEach(inject(function (_FoundListService_) {
    FoundListService = _FoundListService_;
  }));

  it('should do something', function () {
    expect(!!FoundListService).toBe(true);
  });

});
