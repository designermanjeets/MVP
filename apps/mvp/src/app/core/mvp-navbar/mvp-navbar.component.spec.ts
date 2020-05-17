import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpNavbarComponent } from './mvp-navbar.component';

describe('MvpNavbarComponent', () => {
  let component: MvpNavbarComponent;
  let fixture: ComponentFixture<MvpNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvpNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
