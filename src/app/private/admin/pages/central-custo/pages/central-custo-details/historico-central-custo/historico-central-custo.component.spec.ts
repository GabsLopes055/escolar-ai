import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCentralCustoComponent } from './historico-central-custo.component';

describe('HistoricoCentralCustoComponent', () => {
  let component: HistoricoCentralCustoComponent;
  let fixture: ComponentFixture<HistoricoCentralCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoCentralCustoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricoCentralCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
