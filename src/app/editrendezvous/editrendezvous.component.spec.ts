import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrendezvousComponent } from './editrendezvous.component';

describe('EditrendezvousComponent', () => {
  let component: EditrendezvousComponent;
  let fixture: ComponentFixture<EditrendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
