import { TestBed, inject } from '@angular/core/testing';

import { NagivationService } from './nagivation.service';

describe('NagivationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NagivationService]
    });
  });

  it('should be created', inject([NagivationService], (service: NagivationService) => {
    expect(service).toBeTruthy();
  }));
});
