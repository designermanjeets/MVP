import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetgridComponent } from './fleetgrid.component';

describe('FleetgridComponent', () => {
  let component: FleetgridComponent;
  let fixture: ComponentFixture<FleetgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
