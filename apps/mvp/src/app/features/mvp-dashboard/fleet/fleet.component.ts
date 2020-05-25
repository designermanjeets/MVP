import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fleetModes, fleetInsights, colorScheme } from './../_models/fleet.models';
import * as shape from 'd3-shape';
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
  inputColumns: any;
  inputData: any;
  displayColumns: string[];
  displayData: any;
  @ViewChild(MatSort, {static: true }) sort: MatSort;

  desData: any;

  displayedColumns: string[] = ['trip', 'Vehicledensity', 'VehicleActivity'];
  desnityDataSource: any;
  enTable: string;

  constructor() { }

  ngOnInit(): void {
    this.getInitData(); // Load Stub Data
  }

  getInitData() { 
    this.commutePieResult = this.convertFleetModes();
    this.chartData = this.extractTrips(this.fleetInsightsArr);
    this.enTable = Object.keys(fleetInsights)[0]; // Translator
    this.inputData = this.gridData;
    this.desnityDataSource = this.desData;

    this.inputColumns = Object.keys(this.gridData[0]);
    this.inputColumns.filter(key => key.trip)
    this.inputColumns.forEach((element, i) => {
      element === 'trip' && this.inputColumns.splice(i, 1);
    });
  
    this.getTripGridData();
  }

  getTripGridData() {
    this.displayColumns = ['0'].concat(this.inputData.map(x => x.trip.toString()));
    this.displayData = new MatTableDataSource(this.inputColumns.map(x => this.formatInputRow(x)));
    this.displayData.sort = this.sort;
  }

  convertFleetModes() {
    const pieArr = [];
    this.fleetModesArr.forEach(ele => {
      pieArr.push({name: ele.modeName, y: Number(ele.percentage)})
    });
    return pieArr;
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
