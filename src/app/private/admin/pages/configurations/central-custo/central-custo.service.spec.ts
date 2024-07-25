import { TestBed } from '@angular/core/testing';

import { CentralCustoService } from '../../central-custo/central-custo.service';

describe('CentralCustoService', () => {
  let service: CentralCustoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralCustoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
