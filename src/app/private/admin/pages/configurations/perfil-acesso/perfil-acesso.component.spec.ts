import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAcessoComponent } from './perfil-acesso.component';

describe('PerfilAcessoComponent', () => {
  let component: PerfilAcessoComponent;
  let fixture: ComponentFixture<PerfilAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilAcessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
