import { TestBed } from '@angular/core/testing';

import { SuportAtendimentoService } from './suport-atendimento.service';

describe('SuportAtendimentoService', () => {
  let service: SuportAtendimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuportAtendimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
