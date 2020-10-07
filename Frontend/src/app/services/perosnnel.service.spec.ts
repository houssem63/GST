import { TestBed } from '@angular/core/testing';

import { PerosnnelService } from './perosnnel.service';

describe('PerosnnelService', () => {
  let service: PerosnnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerosnnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
