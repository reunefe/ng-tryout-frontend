import { Routes } from '@angular/router';
import { CatOverviewComponent } from './views/cats/cat-overview/cat-overview.component';
import { OwnerOverviewComponent } from './views/owners/owner-overview/owner-overview.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {path: 'cats', component: CatOverviewComponent},
  {path: 'owners', component: OwnerOverviewComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: '', redirectTo: '/cats', pathMatch: 'full'}
];
