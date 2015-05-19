'use strict';

describe('Service: FoundService', function () {

  // load the service's module
  beforeEach(module('lostAndFoundApp'));

  // instantiate service
  var FoundService;
  beforeEach(inject(function (_FoundService_) {
    FoundService = _FoundService_;
  }));

  it('should do something', function () {
    expect(!!FoundService).toBe(true);
  });

});
