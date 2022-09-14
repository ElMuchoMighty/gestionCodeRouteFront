import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmoniteurComponent } from './editmoniteur.component';

describe('EditmoniteurComponent', () => {
  let component: EditmoniteurComponent;
  let fixture: ComponentFixture<EditmoniteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmoniteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
