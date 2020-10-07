import { TestBed } from '@angular/core/testing';

import { SocieteInscriptionService } from './societe-inscription.service';

describe('SocieteInscriptionService', () => {
  let service: SocieteInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocieteInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
