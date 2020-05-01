import { Component } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  disableAnimations = false;

  constructor(private reuseStrategy: RouteReuseStrategy) { }

  isEnabled(): boolean {
    return (this.reuseStrategy as any).enabled;
  }

  toggleEnabled(): void {
    (this.reuseStrategy as any).enabled = !(this.reuseStrategy as any).enabled;
  }
}
