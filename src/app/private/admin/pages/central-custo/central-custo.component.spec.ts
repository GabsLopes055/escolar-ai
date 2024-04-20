import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralCustoComponent } from './central-custo.component';

describe('CentralCustoComponent', () => {
  let component: CentralCustoComponent;
  let fixture: ComponentFixture<CentralCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralCustoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentralCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
