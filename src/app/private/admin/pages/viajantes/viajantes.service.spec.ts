import { TestBed } from '@angular/core/testing';

import { ViajantesService } from './viajantes.service';

describe('ViajantesService', () => {
  let service: ViajantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
