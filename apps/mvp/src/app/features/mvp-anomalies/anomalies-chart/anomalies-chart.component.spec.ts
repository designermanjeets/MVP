import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomaliesChartComponent } from './anomalies-chart.component';

describe('AnomaliesChartComponent', () => {
  let component: AnomaliesChartComponent;
  let fixture: ComponentFixture<AnomaliesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnomaliesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnomaliesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
