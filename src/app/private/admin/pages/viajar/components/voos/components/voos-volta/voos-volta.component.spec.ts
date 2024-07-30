import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoosVoltaComponent } from './voos-volta.component';

describe('VoosVoltaComponent', () => {
  let component: VoosVoltaComponent;
  let fixture: ComponentFixture<VoosVoltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoosVoltaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoosVoltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
