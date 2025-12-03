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
      {
        path: 'openf1',
        loadComponent: () =>
          import('./features/openf1/openf1-layout').then(m => m.OpenF1Layout),
      },
      {
        path: 'openf1/meetings',
        loadComponent: () =>
          import('./features/openf1/meetings/meetings').then(m => m.MeetingsComponent),
      },
      {
        path: 'openf1/drivers',
        loadComponent: () =>
          import('./features/openf1/drivers/drivers').then(m => m.DriversComponent),
      },
      {
        path: 'driver/:driverNumber',
        loadComponent: () =>
          import('./features/openf1/drivers/driver/driver').then(m => m.DriverComponent),
      },
    ],
  },
  {
    path: '*',
    redirectTo: '',
  },
];
