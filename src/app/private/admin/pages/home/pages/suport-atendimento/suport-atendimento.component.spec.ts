import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuportAtendimentoComponent } from './suport-atendimento.component';

describe('SuportAtendimentoComponent', () => {
  let component: SuportAtendimentoComponent;
  let fixture: ComponentFixture<SuportAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuportAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuportAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
