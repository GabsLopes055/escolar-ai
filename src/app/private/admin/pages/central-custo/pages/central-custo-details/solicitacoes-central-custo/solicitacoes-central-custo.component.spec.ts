import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesCentralCustoComponent } from './solicitacoes-central-custo.component';

describe('SolicitacoesCentralCustoComponent', () => {
  let component: SolicitacoesCentralCustoComponent;
  let fixture: ComponentFixture<SolicitacoesCentralCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacoesCentralCustoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitacoesCentralCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
