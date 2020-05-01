import { animate, style, transition, trigger } from '@angular/animations';

export const expansionAnimation = trigger('expansionAnimation', [
  transition(':enter', [
    style(
      { height: '0', minHeight: '0' },
    ),
    animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      style(
        { height: '*' },
      ),
    ),
  ]),
  transition(':leave', [
    animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      style(
        { height: '0', minHeight: '0' },
      ),
    ),
  ]),
]);
