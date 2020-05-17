import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MvpSharedModule } from '../../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MvpDashboardComponent } from './mvp-dashboard.component';
import { DashboardBarComponent } from './dashboard-bar/dashboard-bar.component';
import { TripsComponent } from './trips/trips.component';
import { TripPurposesComponent } from './trip-purposes/trip-purposes.component';

const routes: Routes = [
  {
    path: '',
    component: MvpDashboardComponent
  }
];

@NgModule({
  declarations: [
    MvpDashboardComponent,
    DashboardBarComponent,
    TripsComponent,
    TripPurposesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MvpSharedModule,
    NgxChartsModule,
    RouterModule.forChild(routes)
  ]
})

export class MvpDashboardModule { }
