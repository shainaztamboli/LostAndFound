'use strict';

describe('Service: LostViewService', function () {

  // load the service's module
  beforeEach(module('lostAndFoundApp'));

  // instantiate service
  var LostViewService;
  beforeEach(inject(function (_LostViewService_) {
    LostViewService = _LostViewService_;
  }));

  it('should do something', function () {
    expect(!!LostViewService).toBe(true);
  });

});
