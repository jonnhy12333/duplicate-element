import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/**
 * This is basically just a stock custom reuse strategy copied from Astra with the ability to enable / disable it.
 */
export class CustomReuseStrategy implements RouteReuseStrategy {

  enabled = true;

  storedRouteHandles = new Map<string, DetachedRouteHandle>();

  // Decides if the route should be stored
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.enabled && route.routeConfig && route.data.shouldDetach;
  }

  // Store the information for the route we're destructing
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (this.enabled) {
      this.storedRouteHandles.set(this.getPath(route), handle);
    }
  }

  // Return true if we have a stored route object for the next route
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.enabled && this.storedRouteHandles.has(this.getPath(route));
  }

  // If we returned true in shouldAttach(), now return the actual route data for restoration
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRouteHandles.get(this.getPath(route)) as DetachedRouteHandle;
  }

  // Reuse the route if we're going to and from the same route
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return this.enabled && future.routeConfig === curr.routeConfig;
  }

  private getPath(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot.map(r => {
      if (r.routeConfig) {
        return r.routeConfig.path;
      }
    }).join('/');
  }

}
