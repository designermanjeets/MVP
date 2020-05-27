import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MvpdashboardService } from './../_services/mvpdashboard.service';
import { colorScheme, tripData } from './../_models/trip.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment'

@Component({
  selector: 'workspace-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TripsComponent implements OnInit {
  // Chart
  chartData: any[];
  // Grid Trip
  gridData: any;
  tripGridData: MatTableDataSource<any>;
  displayColumns: string[];
  enTable: string;

  @ViewChild(MatSort, {static: true }) sort: MatSort;

  constructor(
    private mvpdashboardService: MvpdashboardService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.getTrips(); // Load Data from Service
    this.getInitData(tripData); // Load Stub Data
  }

  getInitData(val) {
    this.chartData = this.extractTrips(val);
    this.tripGridData = new MatTableDataSource(this.gridData); // Table Data

    this.displayColumns = Object.keys(this.gridData[0]);
    this.tripGridData.sort = this.sort;
  }

  getTrips() {
    this.mvpdashboardService.getTrips().subscribe(val => {
      if (val) {
        this.getInitData(val);
        this.cdr.detectChanges();
      };
    });
  }

  extractTrips(val) {
    const temp = [];
    this.enTable = Object.keys(val)[0];
    val.TRIP.forEach(ele => {
      let grid = [];
      for (const item in ele) {
        if(Array.isArray(ele[item])) {
          ele[item].forEach((timeline, i) => {
            // gridData
            grid.push({'trip': item, ...timeline});
            grid = JSON.parse(JSON.stringify(grid));
            this.gridData = grid;
            this.gridData = grid.filter(p => delete p.timeline);
            // \\ gridData
            for (const el in timeline.timeline) {
              if(el) {
                const data = [];
                for (const ele2 in timeline.timeline[el]) {
                  if(ele2) {
                    const time = moment.utc(ele2, "HH:mm");
                    const name = time.format('LT');
                    data.push(Number(timeline.timeline[el][ele2]))
                  }
                }
                temp.push({'name': item, data});
              }
            }
          });
        }
      }
    });
    return temp;
  }

}