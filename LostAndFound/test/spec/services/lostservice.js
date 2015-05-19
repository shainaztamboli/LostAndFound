'use strict';

describe('Service: LostService', function () {

  // load the service's module
  beforeEach(module('lostAndFoundApp'));

  // instantiate service
  var LostService;
  beforeEach(inject(function (_LostService_) {
    LostService = _LostService_;
  }));

  it('should do something', function () {
    expect(!!LostService).toBe(true);
  });

});
