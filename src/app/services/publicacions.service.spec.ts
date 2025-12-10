import { TestBed } from '@angular/core/testing';

import { PublicacionsService } from './publicacions.service';

describe('PublicacionsService', () => {
  let service: PublicacionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
