import { Routes } from '@angular/router';
import { AppMainDeclarations } from './app.main.declarations';

export const AppRoutes: Routes = [
  {
    path: 'add-user-details',
    component: AppMainDeclarations.AddUserDetailsComponent,
    data: { title: 'User Details' }
  },
  {
    path: 'add-user-address',
    component: AppMainDeclarations.AddUserAddressComponent,
    data: { title: 'User Address' }
  },
  {
    path: '**',
    component: AppMainDeclarations.PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  },
  {
    path: '',
    redirectTo: '/add-user-details',
    pathMatch: 'full'
  }
];