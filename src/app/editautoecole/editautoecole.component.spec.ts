import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditautoecoleComponent } from './editautoecole.component';

describe('EditautoecoleComponent', () => {
  let component: EditautoecoleComponent;
  let fixture: ComponentFixture<EditautoecoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditautoecoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditautoecoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
