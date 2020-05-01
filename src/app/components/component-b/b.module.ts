import { ComponentBComponent } from './component-b.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CoreModule } from '../core.module';

const routes: Route[] = [
  {
    path: 'home',
    component: ComponentBComponent,
    data: {
      shouldDetach: true,
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CoreModule,
  ],
  declarations: [
    ComponentBComponent,
  ],
})
export class BModule { }
