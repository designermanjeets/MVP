import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpDashboardComponent } from './mvp-dashboard.component';

describe('MvpDashboardComponent', () => {
  let component: MvpDashboardComponent;
  let fixture: ComponentFixture<MvpDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvpDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
