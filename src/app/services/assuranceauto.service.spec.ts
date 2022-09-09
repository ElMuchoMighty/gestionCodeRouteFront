import { TestBed } from '@angular/core/testing';

import { AssuranceautoService } from './assuranceauto.service';

describe('AssuranceautoService', () => {
  let service: AssuranceautoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssuranceautoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
