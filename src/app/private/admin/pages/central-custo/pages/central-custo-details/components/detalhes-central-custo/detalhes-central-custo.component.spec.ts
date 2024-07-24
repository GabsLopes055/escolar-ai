import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCentralCustoComponent } from './detalhes-central-custo.component';

describe('DetalhesCentralCustoComponent', () => {
  let component: DetalhesCentralCustoComponent;
  let fixture: ComponentFixture<DetalhesCentralCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesCentralCustoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesCentralCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
