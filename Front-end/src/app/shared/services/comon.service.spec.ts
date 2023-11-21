import { TestBed } from '@angular/core/testing';

import { ComonService } from './comon.service';

describe('ComonService', () => {
  let service: ComonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
