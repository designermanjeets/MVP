import { Component, OnInit, ViewChild } from '@angular/core';
import { MvpdashboardService } from './../_services/mvpdashboard.service';
import { TRIPCONST, displayedColsTrips, colorScheme, TripElement } from './../_models/trip.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'workspace-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})

export class TripsComponent implements OnInit {
  chartData: any[];
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Total Trips';
  timeline: boolean = false;
  colorScheme = colorScheme;

  displayedColumns: string[] = displayedColsTrips;
  dataSource: MatTableDataSource<TripElement>;
  TRIPCONST = TRIPCONST;
  @ViewChild(MatSort, {static: true }) sort: MatSort;

  constructor(
    private mvpdashboardService: MvpdashboardService
  ) {}

  ngOnInit(): void {
    this.getTrips();
    this.getTripsTable();
  }

  getTrips() {
    this.mvpdashboardService.getTrips().subscribe(val => {
      val && (this.chartData = val);
    });
  }

  getTripsTable() {
    this.mvpdashboardService.getTripsTable().subscribe(val => {
      if (val) {
        this.dataSource = new MatTableDataSource(val.payload);
        this.dataSource.sort = this.sort;
      }
    });
  }

}