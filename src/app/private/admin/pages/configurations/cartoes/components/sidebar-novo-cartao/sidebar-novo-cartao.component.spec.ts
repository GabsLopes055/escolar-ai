import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNovoCartaoComponent } from './sidebar-novo-cartao.component';

describe('SidebarNovoCartaoComponent', () => {
  let component: SidebarNovoCartaoComponent;
  let fixture: ComponentFixture<SidebarNovoCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNovoCartaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarNovoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
