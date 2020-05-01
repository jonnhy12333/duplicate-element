import { Component } from '@angular/core';
import { expansionAnimation } from '../component.animation';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss'],
  animations: [ expansionAnimation ],
})
export class ComponentBComponent {
  show = true;
}
