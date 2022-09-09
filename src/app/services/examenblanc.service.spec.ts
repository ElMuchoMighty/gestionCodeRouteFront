import { TestBed } from '@angular/core/testing';

import { ExamenblancService } from './examenblanc.service';

describe('ExamenblancService', () => {
  let service: ExamenblancService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamenblancService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
