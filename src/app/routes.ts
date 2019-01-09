import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrainingComponent } from './components/training/training.component';
import { SetLabelsComponent } from './components/set-labels/set-labels.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'set-datasets', component: SetLabelsComponent },
  { path: 'training', component: TrainingComponent }
]
