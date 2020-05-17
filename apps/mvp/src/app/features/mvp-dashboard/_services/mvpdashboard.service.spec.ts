import { TestBed } from '@angular/core/testing';

import { MvpdashboardService } from './mvpdashboard.service';

describe('MvpdashboardService', () => {
  let service: MvpdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
