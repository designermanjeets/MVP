import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicydonutsComponent } from './policydonuts.component';

describe('PolicydonutsComponent', () => {
  let component: PolicydonutsComponent;
  let fixture: ComponentFixture<PolicydonutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicydonutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicydonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
