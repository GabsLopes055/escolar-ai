import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoosIdaComponent } from './voos-ida.component';

describe('VoosIdaComponent', () => {
  let component: VoosIdaComponent;
  let fixture: ComponentFixture<VoosIdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoosIdaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoosIdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
