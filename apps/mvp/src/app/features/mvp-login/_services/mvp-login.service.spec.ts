import { TestBed } from '@angular/core/testing';

import { MvpLoginService } from './mvp-login.service';

describe('MvpLoginService', () => {
  let service: MvpLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
