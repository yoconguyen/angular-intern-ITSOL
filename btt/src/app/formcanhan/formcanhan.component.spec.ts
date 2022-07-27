import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcanhanComponent } from './formcanhan.component';

describe('FormcanhanComponent', () => {
  let component: FormcanhanComponent;
  let fixture: ComponentFixture<FormcanhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcanhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcanhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
