import { Routes } from '@angular/router';
import { AppMainDeclarations } from './app.main.declarations';
import { ReviewDetailsComponent } from './main-components/review-details/review-details.component';

export const AppRoutes: Routes = [
  {
    path: 'user-details',
    component: AppMainDeclarations.UserDetailsComponent,
    data: { title: 'User Details' }
  },
  {
    path: 'user-address',
    component: AppMainDeclarations.UserAddressComponent,
    data: { title: 'User Address' }
  }, 
  {
    path: 'review-details',
    component : AppMainDeclarations.ReviewDetailsComponent
  },
  {
    path: '',
    redirectTo: '/user-details',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: AppMainDeclarations.PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];