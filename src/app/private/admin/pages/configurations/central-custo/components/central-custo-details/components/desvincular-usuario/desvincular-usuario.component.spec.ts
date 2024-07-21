import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesvincularUsuarioComponent } from './desvincular-usuario.component';

describe('DesvincularUsuarioComponent', () => {
  let component: DesvincularUsuarioComponent;
  let fixture: ComponentFixture<DesvincularUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesvincularUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesvincularUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
