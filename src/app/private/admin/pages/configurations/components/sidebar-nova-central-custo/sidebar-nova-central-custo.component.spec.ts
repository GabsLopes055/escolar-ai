import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNovaCentralCustoComponent } from './sidebar-nova-central-custo.component';

describe('SidebarNovaCentralCustoComponent', () => {
  let component: SidebarNovaCentralCustoComponent;
  let fixture: ComponentFixture<SidebarNovaCentralCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNovaCentralCustoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarNovaCentralCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
