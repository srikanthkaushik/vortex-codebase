import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'rolesearch',
    pathMatch: 'full',
  },
  {
    path: 'rolesearch',
    loadComponent: async () =>
      (await import('./roles-lib/components/roles-search-component/roles-search.component')).RolesSearchComponent,
  },
  {
    path: 'rolelist',
    loadComponent: async () =>
      (await import('./roles-lib/components/roles-list-component/roles-list.component')).RolesListComponent,
  }
];
