'use strict';

describe('Service: FoundViewService', function () {

  // load the service's module
  beforeEach(module('lostAndFoundApp'));

  // instantiate service
  var FoundViewService;
  beforeEach(inject(function (_FoundViewService_) {
    FoundViewService = _FoundViewService_;
  }));

  it('should do something', function () {
    expect(!!FoundViewService).toBe(true);
  });

});
