import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VooConfirmadoComponent } from './voo-confirmado.component';

describe('VooConfirmadoComponent', () => {
  let component: VooConfirmadoComponent;
  let fixture: ComponentFixture<VooConfirmadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VooConfirmadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VooConfirmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
