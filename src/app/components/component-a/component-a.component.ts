import { Component, OnInit } from '@angular/core';
import { expansionAnimation } from '../component.animation';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
  animations: [ expansionAnimation ],
})
export class ComponentAComponent {
  show = true;
}
