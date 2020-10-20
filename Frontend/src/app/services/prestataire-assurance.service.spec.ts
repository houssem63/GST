import { TestBed } from '@angular/core/testing';

import { PrestataireAssuranceService } from './prestataire-assurance.service';

describe('PrestataireAssuranceService', () => {
  let service: PrestataireAssuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestataireAssuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
