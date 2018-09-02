import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SetLabelsComponent } from './set-labels/set-labels.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'set-labels', component: SetLabelsComponent }
]
