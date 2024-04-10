import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajantesComponent } from './viajantes.component';

describe('ViajantesComponent', () => {
  let component: ViajantesComponent;
  let fixture: ComponentFixture<ViajantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViajantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViajantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
