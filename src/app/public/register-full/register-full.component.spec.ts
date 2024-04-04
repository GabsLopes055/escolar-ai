import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFullComponent } from './register-full.component';

describe('RegisterFullComponent', () => {
  let component: RegisterFullComponent;
  let fixture: ComponentFixture<RegisterFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
