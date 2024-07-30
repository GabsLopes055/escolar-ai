import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoosEscolhidosComponent } from './voos-escolhidos.component';

describe('VoosEscolhidosComponent', () => {
  let component: VoosEscolhidosComponent;
  let fixture: ComponentFixture<VoosEscolhidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoosEscolhidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoosEscolhidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
