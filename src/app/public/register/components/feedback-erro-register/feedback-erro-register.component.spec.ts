import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackErroRegisterComponent } from './feedback-erro-register.component';

describe('FeedbackErroRegisterComponent', () => {
  let component: FeedbackErroRegisterComponent;
  let fixture: ComponentFixture<FeedbackErroRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackErroRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackErroRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
