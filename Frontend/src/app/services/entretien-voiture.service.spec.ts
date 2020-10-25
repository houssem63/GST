import { TestBed } from '@angular/core/testing';

import { EntretienVoitureService } from './entretien-voiture.service';

describe('EntretienVoitureService', () => {
  let service: EntretienVoitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntretienVoitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
