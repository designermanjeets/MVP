import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPurposesComponent } from './trip-purposes.component';

describe('TripPurposesComponent', () => {
  let component: TripPurposesComponent;
  let fixture: ComponentFixture<TripPurposesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPurposesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPurposesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
