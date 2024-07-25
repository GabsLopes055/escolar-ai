import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralCustoDetailsComponent } from './central-custo-details.component';

describe('CentralCustoDetailsComponent', () => {
  let component: CentralCustoDetailsComponent;
  let fixture: ComponentFixture<CentralCustoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralCustoDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentralCustoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
