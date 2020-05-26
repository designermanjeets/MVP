import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsgridComponent } from './tripsgrid.component';

describe('TripsgridComponent', () => {
  let component: TripsgridComponent;
  let fixture: ComponentFixture<TripsgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
