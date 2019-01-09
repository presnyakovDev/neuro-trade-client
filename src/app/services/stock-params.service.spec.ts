import { TestBed, inject } from '@angular/core/testing';

import { StockParamsService } from './stock-params.service';

describe('StockParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockParamsService]
    });
  });

  it('should be created', inject([StockParamsService], (service: StockParamsService) => {
    expect(service).toBeTruthy();
  }));
});
