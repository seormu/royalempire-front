import { TestBed } from '@angular/core/testing';

import { WebTraderService } from './web-trader.service';

describe('WebTraderService', () => {
  let service: WebTraderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebTraderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
