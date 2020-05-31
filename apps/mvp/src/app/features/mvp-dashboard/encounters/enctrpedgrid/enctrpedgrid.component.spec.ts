import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnctrpedgridComponent } from './enctrpedgrid.component';

describe('EnctrpedgridComponent', () => {
  let component: EnctrpedgridComponent;
  let fixture: ComponentFixture<EnctrpedgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnctrpedgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnctrpedgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
