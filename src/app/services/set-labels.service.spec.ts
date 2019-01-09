import { TestBed, inject } from '@angular/core/testing';

import { SetLablesService } from './set-lables.service';

describe('SetLablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetLablesService]
    });
  });

  it('should be created', inject([SetLablesService], (service: SetLablesService) => {
    expect(service).toBeTruthy();
  }));
});
