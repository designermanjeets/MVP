import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilzichartComponent } from './utilzichart.component';

describe('UtilzichartComponent', () => {
  let component: UtilzichartComponent;
  let fixture: ComponentFixture<UtilzichartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilzichartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilzichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
