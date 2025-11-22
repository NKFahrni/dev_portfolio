import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
        {
        path: '',
        loadComponent: () =>
          import('./features/home/home').then(m => m.Home),
      },
      {
        path: 'journey',
        loadComponent: () =>
          import('./features/journey/journey').then(m => m.Journey),
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./features/skills/skills').then(m => m.Skills),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects').then(m => m.Projects),
      },
    ],
  },
  {
    path: '*',
    redirectTo: '',
  },
];
