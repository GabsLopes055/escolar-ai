import { TestBed } from '@angular/core/testing';

import { AbrirChamadoService } from './abrir-chamado.service';

describe('AbrirChamadoService', () => {
  let service: AbrirChamadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbrirChamadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
