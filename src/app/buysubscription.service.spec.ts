import { TestBed } from '@angular/core/testing';

import { BuysubscriptionService } from './buysubscription.service';

describe('BuysubscriptionService', () => {
  let service: BuysubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuysubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
