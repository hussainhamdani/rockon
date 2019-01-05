import { TestBed, inject } from '@angular/core/testing';

import { StoreDateService } from './store-date.service';

describe('StoreDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreDateService]
    });
  });

  it('should be created', inject([StoreDateService], (service: StoreDateService) => {
    expect(service).toBeTruthy();
  }));
});
