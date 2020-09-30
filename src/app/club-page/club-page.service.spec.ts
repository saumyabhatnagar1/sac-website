import { TestBed } from '@angular/core/testing';

import { ClubPageService } from './club-page.service';

describe('ClubPageService', () => {
  let service: ClubPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
