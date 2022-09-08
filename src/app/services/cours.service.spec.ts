import { TestBed } from '@angular/core/testing';

import { CoursService } from './test.service';

describe('CoursService', () => {
  let service: CoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
