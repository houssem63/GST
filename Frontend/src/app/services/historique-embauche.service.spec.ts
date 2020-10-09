import { TestBed } from '@angular/core/testing';

import { HistoriqueEmbaucheService } from './historique-embauche.service';

describe('HistoriqueEmbaucheService', () => {
  let service: HistoriqueEmbaucheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueEmbaucheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
