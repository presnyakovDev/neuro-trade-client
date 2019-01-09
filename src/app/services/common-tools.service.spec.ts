import { TestBed, inject } from '@angular/core/testing';

import { CommonToolsService } from './common-tools.service';

describe('CommonToolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonToolsService]
    });
  });

  it('should be created', inject([CommonToolsService], (service: CommonToolsService) => {
    expect(service).toBeTruthy();
  }));
});
