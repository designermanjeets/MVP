import { Component, OnInit, ViewChild } from '@angular/core';
import { MvpdashboardService } from './../_services/mvpdashboard.service';
import { colorScheme, puposeInputCols } from './../_models/trip.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as shape from 'd3-shape';
import * as moment from 'moment'

@Component({
  selector: 'workspace-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})

export class TripsComponent implements OnInit {
  // Chart
  chartData: any[] = [];
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = false;
  timeline: boolean = false;
  curve = shape.curveBasis;
  colorScheme = colorScheme;
  // Grid Trip
  gridData: any;
  inputColumns = puposeInputCols;
  inputData: any;
  displayColumns: string[];
  displayData: any;

  @ViewChild(MatSort, {static: true }) sort: MatSort;

  constructor(
    private mvpdashboardService: MvpdashboardService
  ) {}

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips() {
    this.mvpdashboardService.getTrips().subscribe(val => {
      if (val) {
        this.chartData = this.extractTrips(val);
        this.inputData = this.gridData;
        this.getTripGridData();
      };
    });
  }

  getTripGridData() {
    this.displayColumns = ['0'].concat(this.inputData.map(x => x.trip.toString()));
    this.displayData = new MatTableDataSource(this.inputColumns.map(x => this.formatInputRow(x)));
    this.displayData.sort = this.sort;
  }

  formatInputRow(row) {
    const output = {};
    output[0] = row;
    for (let i = 0; i < this.inputData.length; ++i) {
      output[this.inputData[i].trip] = this.inputData[i][row];
    }
    return output;
  }

  extractTrips(val) {
    const temp = [];
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
                const series = [];
                for (const ele2 in timeline.timeline[el]) {
                  if(ele2) {
                    const time = moment.utc(ele2, "HH:mm");
                    const name = time.format('LT');
                    series.push({value: timeline.timeline[el][ele2], name})
                  }
                }
                temp.push({'name': item, 'series': series});
              }
            }
          });
        }
      }
    });
    return temp;
  }

}