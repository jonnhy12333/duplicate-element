import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'a',
    loadChildren: () => import('./components/component-a/a.module').then(m => m.AModule),
  },
  {
    path: 'b',
    loadChildren: () => import('./components/component-b/b.module').then(m => m.BModule),
  },
  {
    path: '',
    redirectTo: 'a',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
