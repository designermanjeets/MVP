import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fleetModes, fleetInsights, colorScheme } from './../_models/fleet.models';
import { MvpdashboardService } from './../_services/mvpdashboard.service';
import * as moment from 'moment'

@Component({
  selector: 'workspace-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FleetComponent implements OnInit {

  fleetModesArr = fleetModes['Modes'];
  fleetInsightsArr = fleetInsights['Fleet insights'];

  // Chart
  chartData: any[];
  //Pie
  commutePieResult: any[];

  gridData: any;
  displayColumns: string[];
  fleetGridData: any;
  @ViewChild(MatSort, {static: true }) sort: MatSort;

  desData: any;

  displayedColumns: string[] = ['trip', 'Vehicledensity', 'VehicleActivity'];
  desnityDataSource: any;
  enTable: string;

  constructor(
    private mvpdashboardService: MvpdashboardService,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.getInitData(); // Load Stub Datas
    // this.getInsights(); // From Service
    // this.getModes(); // From Service
  }

  getInitData() {
    this.commutePieResult = this.convertFleetModes();

    this.chartData = this.extractTrips(this.fleetInsightsArr);
    this.enTable = Object.keys(fleetInsights)[0]; // Translator

    this.fleetGridData = new MatTableDataSource(this.gridData);
    this.fleetGridData.sort = this.sort;

    this.displayColumns = Object.keys(this.gridData[0]);
    this.displayColumns.forEach((element, i) => {
      if( element === 'trip' ) {
        this.displayColumns.splice(i, 1);
        this.displayColumns.unshift('trip');
      }
    });

    this.desnityDataSource = this.desData;
  }

  getInsights() {
    this.mvpdashboardService.getFleetInsights().subscribe(val => {
      this.fleetInsightsArr = val['Fleet insights'];
      this.getInitData();
      this.cdr.detectChanges();
    });
  }

  getModes() {
    this.mvpdashboardService.getFleetModes().subscribe(val => {
      if(val) {
        this.fleetModesArr = val['Modes'];
        this.commutePieResult = this.convertFleetModes();
        this.cdr.detectChanges();
      }
    });
  }

  convertFleetModes() {
    const pieArr = [];
    this.fleetModesArr.forEach(ele => {
      pieArr.push({name: ele.modeName, y: Number(ele.percentage)})
    });
    return pieArr;
  }

  extractTrips(val) {
    let grid = [];
    let density = [];
    const temp = [];
    val.forEach(ele => {
      for (const item in ele) {
        if(item) {
          // gridData
            const t = {};
            const el = {};
            for (const ite in ele[item]) {
              if( ite && typeof ele[item][ite] !== 'object') {
                t[ite] = ele[item][ite]; t['trip'] = item.toLowerCase();
              } else {
                el[ite] = ele[item][ite]; el['trip'] = item.toLowerCase();
              }
            }
            grid.push(t);
            density.push(el);
            grid = JSON.parse(JSON.stringify(grid));
            density = JSON.parse(JSON.stringify(density));
            this.gridData = grid;
            this.desData = density;
            // \\ gridData
            ele[item]['Utilization']['timeline'].forEach((timeline, i) => {
              const data = [];
              for (const ele2 in timeline) {
                if(ele2) {
                  const time = moment.utc(ele2, "HH:mm");
                  const name = time.format('LT');
                  data.push(Number(timeline[ele2]))
                }
              }
              temp.push({'name': item, data});
            });
          }
      }
    });
    return temp;
  }

}
