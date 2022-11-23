import { TestBed } from '@angular/core/testing';

import { ActiveguardService } from './activeguard.service';

describe('ActiveguardService', () => {
  let service: ActiveguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
