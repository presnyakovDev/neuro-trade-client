import { TestBed, inject } from '@angular/core/testing';

import { DatasetManagerService } from './dataset-manager.service';

describe('DatasetManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasetManagerService]
    });
  });

  it('should be created', inject([DatasetManagerService], (service: DatasetManagerService) => {
    expect(service).toBeTruthy();
  }));
});
