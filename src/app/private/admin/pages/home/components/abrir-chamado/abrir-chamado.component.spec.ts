import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirChamadoComponent } from './abrir-chamado.component';

describe('AbrirChamadoComponent', () => {
  let component: AbrirChamadoComponent;
  let fixture: ComponentFixture<AbrirChamadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirChamadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbrirChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
