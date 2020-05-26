import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetcirclesComponent } from './fleetcircles.component';

describe('FleetcirclesComponent', () => {
  let component: FleetcirclesComponent;
  let fixture: ComponentFixture<FleetcirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetcirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetcirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
