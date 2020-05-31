import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterChartComponent } from './encounter-chart.component';

describe('EncounterChartComponent', () => {
  let component: EncounterChartComponent;
  let fixture: ComponentFixture<EncounterChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
