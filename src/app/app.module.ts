import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

//Components
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ManageToolsComponent } from './manage-tools/manage-tools.component'
import { SetLabelsComponent } from './set-labels/set-labels.component';
import { HomeComponent } from './home/home.component';

//Angular material
import {MatSelectModule, MatButtonModule, MatTabsModule, MatListModule, MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ManageToolsComponent,
    SetLabelsComponent,
    HomeComponent
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
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
