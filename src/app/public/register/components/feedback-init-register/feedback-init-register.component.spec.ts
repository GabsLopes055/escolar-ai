import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackInitRegisterComponent } from './feedback-init-register.component';

describe('FeedbackInitRegisterComponent', () => {
  let component: FeedbackInitRegisterComponent;
  let fixture: ComponentFixture<FeedbackInitRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackInitRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackInitRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
