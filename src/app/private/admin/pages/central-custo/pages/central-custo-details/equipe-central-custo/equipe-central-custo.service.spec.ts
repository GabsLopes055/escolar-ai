import { TestBed } from '@angular/core/testing';

import { EquipeCentralCustoService } from './equipe-central-custo.service';

describe('EquipeCentralCustoService', () => {
  let service: EquipeCentralCustoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeCentralCustoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
