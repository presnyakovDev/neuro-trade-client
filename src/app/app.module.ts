import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

//Angular material
import { MatSelectModule, MatButtonModule, MatTabsModule, MatListModule, MatGridListModule, MatRadioModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { ManageToolsComponent } from './components/manage-tools/manage-tools.component'
import { SetLabelsComponent } from './components/set-labels/set-labels.component';
import { HomeComponent } from './components/home/home.component';
import { TrainingComponent } from './components/training/training.component';
import { LabelsListComponent } from './components/labels-list/labels-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ManageToolsComponent,
    SetLabelsComponent,
    HomeComponent,
    TrainingComponent,
    LabelsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
