import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgiadinhComponent } from './formgiadinh.component';

describe('FormgiadinhComponent', () => {
  let component: FormgiadinhComponent;
  let fixture: ComponentFixture<FormgiadinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgiadinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgiadinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
