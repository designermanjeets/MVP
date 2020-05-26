import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DensitygridComponent } from './densitygrid.component';

describe('DensitygridComponent', () => {
  let component: DensitygridComponent;
  let fixture: ComponentFixture<DensitygridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DensitygridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DensitygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
