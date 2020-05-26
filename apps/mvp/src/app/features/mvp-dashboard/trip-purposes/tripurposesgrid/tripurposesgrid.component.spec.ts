import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripurposesgridComponent } from './tripurposesgrid.component';

describe('TripurposesgridComponent', () => {
  let component: TripurposesgridComponent;
  let fixture: ComponentFixture<TripurposesgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripurposesgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripurposesgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
