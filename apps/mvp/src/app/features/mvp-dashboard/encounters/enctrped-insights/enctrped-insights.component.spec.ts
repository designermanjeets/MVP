import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnctrpedInsightsComponent } from './enctrped-insights.component';

describe('EnctrpedInsightsComponent', () => {
  let component: EnctrpedInsightsComponent;
  let fixture: ComponentFixture<EnctrpedInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnctrpedInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnctrpedInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
