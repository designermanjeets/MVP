import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModespieComponent } from './modespie.component';

describe('ModespieComponent', () => {
  let component: ModespieComponent;
  let fixture: ComponentFixture<ModespieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModespieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModespieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
