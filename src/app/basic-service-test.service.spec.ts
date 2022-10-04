import { TestBed } from '@angular/core/testing';

import { BasicServiceTestService } from './basic-service-test.service';

describe('BasicServiceTestService', () => {
  let service: BasicServiceTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicServiceTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
