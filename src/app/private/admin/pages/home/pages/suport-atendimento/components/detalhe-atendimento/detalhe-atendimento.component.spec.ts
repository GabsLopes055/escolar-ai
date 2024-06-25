import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAtendimentoComponent } from './detalhe-atendimento.component';

describe('DetalheAtendimentoComponent', () => {
  let component: DetalheAtendimentoComponent;
  let fixture: ComponentFixture<DetalheAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
