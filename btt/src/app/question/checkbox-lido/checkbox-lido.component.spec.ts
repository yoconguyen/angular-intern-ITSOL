import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxLidoComponent } from './checkbox-lido.component';

describe('CheckboxLidoComponent', () => {
  let component: CheckboxLidoComponent;
  let fixture: ComponentFixture<CheckboxLidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxLidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxLidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
