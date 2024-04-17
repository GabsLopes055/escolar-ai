import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetralCustoComponent } from './central-custo.component';

describe('CetralCustoComponent', () => {
  let component: CetralCustoComponent;
  let fixture: ComponentFixture<CetralCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CetralCustoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CetralCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
