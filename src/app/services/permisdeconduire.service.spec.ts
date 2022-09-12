import { TestBed } from '@angular/core/testing';

import { PermisdeconduireService } from './permisdeconduire.service';

describe('PermisdeconduireService', () => {
  let service: PermisdeconduireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisdeconduireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
