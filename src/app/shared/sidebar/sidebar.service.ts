import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private overlayRef: OverlayRef | null = null;

  constructor(
    private overlay: Overlay,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  openSide(component: any): ComponentRef<any> {
    // Close any existing side panel
    this.closeSide();

    // Create overlay
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global()
    });

    // Create component portal
    const componentPortal = new ComponentPortal(component);

    // Attach component to overlay
    const componentRef = this.overlayRef.attach(componentPortal);

    // Make sure to detach the component when overlay is detached
    this.overlayRef.detachments().subscribe(() => {
      if (componentRef) {
        componentRef.destroy();
      }
    });

    // Insert component into Angular's component tree
    this.appRef.attachView(componentRef.hostView);

    return componentRef;
  }

  closeSide() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

}
