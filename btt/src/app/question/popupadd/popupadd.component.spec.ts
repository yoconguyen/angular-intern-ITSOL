import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupaddComponent } from './popupadd.component';

describe('PopupaddComponent', () => {
  let component: PopupaddComponent;
  let fixture: ComponentFixture<PopupaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
