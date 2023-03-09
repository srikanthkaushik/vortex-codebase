import { Route, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: async () =>
      (await import('./components/scheduler-home/scheduler-home.component')).SchedulerHomeComponent,

  },
  {
    path: 'features',
    loadChildren: async () =>
      (
        await loadRemoteModule<{ routes: Routes }>({
          type: 'module',
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          exposedModule: './Routes',
        })
      ).routes,
  },
  {
    path: 'roles',
    loadChildren: async () =>
      (
        await loadRemoteModule<{ routes: Routes }>({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './Routes',
        })
      ).routes,
  },
];
