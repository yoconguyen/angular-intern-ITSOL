import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbangcapComponent } from './formbangcap.component';

describe('FormbangcapComponent', () => {
  let component: FormbangcapComponent;
  let fixture: ComponentFixture<FormbangcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbangcapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbangcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
