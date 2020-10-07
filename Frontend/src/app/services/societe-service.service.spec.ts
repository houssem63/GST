import { TestBed } from '@angular/core/testing';

import { SocieteServiceService } from './societe-service.service';

describe('SocieteServiceService', () => {
  let service: SocieteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocieteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
