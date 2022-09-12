import { TestBed } from '@angular/core/testing';

import { ExamenfinalService } from './examenfinal.service';

describe('ExamenfinalService', () => {
  let service: ExamenfinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamenfinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
