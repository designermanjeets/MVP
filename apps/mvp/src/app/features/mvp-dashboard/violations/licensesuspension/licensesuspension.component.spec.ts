import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensesuspensionComponent } from './licensesuspension.component';

describe('LicensesuspensionComponent', () => {
  let component: LicensesuspensionComponent;
  let fixture: ComponentFixture<LicensesuspensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensesuspensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensesuspensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
