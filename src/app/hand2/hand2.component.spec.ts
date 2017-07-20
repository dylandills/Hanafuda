import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hand2Component } from './hand2.component';

describe('Hand2Component', () => {
  let component: Hand2Component;
  let fixture: ComponentFixture<Hand2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hand2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hand2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
