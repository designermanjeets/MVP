import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpLoginComponent } from './mvp-login.component';

describe('MvpLoginComponent', () => {
  let component: MvpLoginComponent;
  let fixture: ComponentFixture<MvpLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvpLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
