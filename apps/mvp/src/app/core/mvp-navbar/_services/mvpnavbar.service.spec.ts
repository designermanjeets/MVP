import { TestBed } from '@angular/core/testing';

import { MvpnavbarService } from './mvpnavbar.service';

describe('MvpnavbarService', () => {
  let service: MvpnavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpnavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
