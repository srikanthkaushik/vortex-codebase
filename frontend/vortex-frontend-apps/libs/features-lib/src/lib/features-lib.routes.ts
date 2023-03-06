import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'featuresearch',
    pathMatch: 'full',
  },
  {
    path: 'featuresearch',
    loadComponent: async () =>
      (await import('./features-lib/components/features-search-component/features-search.component')).FeaturesSearchComponent,
  },
  {
    path: 'featurelist',
    loadComponent: async () =>
      (await import('./features-lib/components/features-list-component/features-list.component')).FeaturesListComponent,
  }
];
