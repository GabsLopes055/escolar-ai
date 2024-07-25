/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CentralCustoDetailsService } from './central-custo-details.service';

describe('Service: CentralCustoDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentralCustoDetailsService]
    });
  });

  it('should ...', inject([CentralCustoDetailsService], (service: CentralCustoDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
