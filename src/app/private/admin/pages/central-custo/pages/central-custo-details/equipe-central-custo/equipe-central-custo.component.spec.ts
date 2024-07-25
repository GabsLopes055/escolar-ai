import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeCentralCustoComponent } from './equipe-central-custo.component';

describe('EquipeCentralCustoComponent', () => {
  let component: EquipeCentralCustoComponent;
  let fixture: ComponentFixture<EquipeCentralCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipeCentralCustoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipeCentralCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
