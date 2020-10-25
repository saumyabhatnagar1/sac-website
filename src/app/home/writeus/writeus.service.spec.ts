import { TestBed } from '@angular/core/testing';

import { WriteusService } from './writeus.service';

describe('WriteusService', () => {
  let service: WriteusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriteusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
