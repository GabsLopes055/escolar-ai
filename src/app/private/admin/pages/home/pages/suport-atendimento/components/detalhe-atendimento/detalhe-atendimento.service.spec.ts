import { TestBed } from '@angular/core/testing';

import { DetalheAtendimentoService } from './detalhe-atendimento.service';

describe('DetalheAtendimentoService', () => {
  let service: DetalheAtendimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalheAtendimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
