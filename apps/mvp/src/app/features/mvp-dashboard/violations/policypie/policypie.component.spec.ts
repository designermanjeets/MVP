import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicypieComponent } from './policypie.component';

describe('PolicypieComponent', () => {
  let component: PolicypieComponent;
  let fixture: ComponentFixture<PolicypieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicypieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicypieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
