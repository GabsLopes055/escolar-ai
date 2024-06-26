import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarAtentimentoComponent } from './finalizar-atentimento.component';

describe('FinalizarAtentimentoComponent', () => {
  let component: FinalizarAtentimentoComponent;
  let fixture: ComponentFixture<FinalizarAtentimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizarAtentimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalizarAtentimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
