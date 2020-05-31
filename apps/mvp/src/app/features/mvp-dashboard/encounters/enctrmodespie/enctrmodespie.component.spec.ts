import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnctrmodespieComponent } from './enctrmodespie.component';

describe('EnctrmodespieComponent', () => {
  let component: EnctrmodespieComponent;
  let fixture: ComponentFixture<EnctrmodespieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnctrmodespieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnctrmodespieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
