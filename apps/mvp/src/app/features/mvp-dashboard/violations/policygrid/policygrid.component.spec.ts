import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicygridComponent } from './policygrid.component';

describe('PolicygridComponent', () => {
  let component: PolicygridComponent;
  let fixture: ComponentFixture<PolicygridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicygridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
