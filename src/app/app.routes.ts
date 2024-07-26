import { Routes } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';


export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./components/pages/pages.component').then(m => m.PagesComponent),
    loadChildren: () => import('./components/components.routes')
  }
];
