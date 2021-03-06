import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageDatasetsComponent } from './components/manage-datasets/manage-datasets.component';
import { CreateDatasetComponent } from './components/create-dataset/create-dataset.component';
import { TrainingComponent } from './components/training/training.component';
import { SetLabelsComponent } from './components/set-labels/set-labels.component';
import { ManageExamplesComponent } from './components/manage-examples/manage-examples.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manage-datasets', component: ManageDatasetsComponent },
  { path: 'manage-examples/:id', component: ManageExamplesComponent },
  { path: 'create-dataset', component: CreateDatasetComponent },
  { path: 'set-labels/:id', component: SetLabelsComponent },
  { path: 'training', component: TrainingComponent }
]
