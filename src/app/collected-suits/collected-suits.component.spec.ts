import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedSuitsComponent } from './collected-suits.component';

describe('CollectedSuitsComponent', () => {
  let component: CollectedSuitsComponent;
  let fixture: ComponentFixture<CollectedSuitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectedSuitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedSuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
