import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEmpresariaisComponent } from './dados-empresariais.component';

describe('DadosEmpresariaisComponent', () => {
  let component: DadosEmpresariaisComponent;
  let fixture: ComponentFixture<DadosEmpresariaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosEmpresariaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosEmpresariaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
