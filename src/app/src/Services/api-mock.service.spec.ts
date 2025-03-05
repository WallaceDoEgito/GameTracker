import { TestBed } from '@angular/core/testing';

import { ApiMockService } from './api-mock.service';

describe('ApiTestService', () => {
  let service: ApiMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
