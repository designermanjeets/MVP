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
import { FleetComponent } from './fleet/fleet.component';
import { PieComponent } from './trip-purposes/pie/pie.component';
import { TripChartComponent } from './trips/trip-chart/tripchart.component';
import { ModespieComponent } from './fleet/modespie/modespie.component';
import { UtilzichartComponent } from './fleet/utilzichart/utilzichart.component';
import { MaintenanceComponent } from './fleet/maintenance/maintenance.component';
import { DensitygridComponent } from './fleet/densitygrid/densitygrid.component';
import { FleetcirclesComponent } from './fleet/fleetcircles/fleetcircles.component';
import { FleetgridComponent } from './fleet/fleetgrid/fleetgrid.component';
import { TripurposesgridComponent } from './trip-purposes/tripurposesgrid/tripurposesgrid.component';
import { TripsgridComponent } from './trips/tripsgrid/tripsgrid.component';

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
    TripPurposesComponent,
    FleetComponent,
    PieComponent,
    TripChartComponent,
    ModespieComponent,
    UtilzichartComponent,
    MaintenanceComponent,
    DensitygridComponent,
    FleetcirclesComponent,
    FleetgridComponent,
    TripurposesgridComponent,
    TripsgridComponent
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
