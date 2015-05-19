'use strict';

describe('Service: LostListService', function () {

  // load the service's module
  beforeEach(module('lostAndFoundApp'));

  // instantiate service
  var LostListService;
  beforeEach(inject(function (_LostListService_) {
    LostListService = _LostListService_;
  }));

  it('should do something', function () {
    expect(!!LostListService).toBe(true);
  });

});
