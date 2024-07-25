import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHistoricoComponent } from './sidebar-historico.component';

describe('SidebarHistoricoComponent', () => {
  let component: SidebarHistoricoComponent;
  let fixture: ComponentFixture<SidebarHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
