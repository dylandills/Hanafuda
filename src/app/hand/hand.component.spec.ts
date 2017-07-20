import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hand1Component } from './hand1.component';

describe('Hand1Component', () => {
  let component: Hand1Component;
  let fixture: ComponentFixture<Hand1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hand1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hand1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
