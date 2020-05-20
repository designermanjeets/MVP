import { Component, OnInit } from '@angular/core';
import { fleetModes, fleetInsights, colorScheme } from './../_models/fleet.models';
import * as shape from 'd3-shape';
import * as moment from 'moment'

@Component({
  selector: 'workspace-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})

export class FleetComponent implements OnInit {

  fleetModesArr = fleetModes['Modes'];
  fleetInsightsArr = fleetInsights['Fleet insights'];

  // Chart
  chartData: any[] = [];
  legend: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  timeline: boolean = false;
  curve = shape.curveBasis;
  viewChart = [400, 245]

  
  //Pie
  commutePieResult: any[] = [];
  view: any[] = [400, 200];
  showLegend = true;
  colorScheme = colorScheme;
  showLabelsPie = false;
  explodeSlices = false;
  doughnut = false;
  gradient = false;

  constructor() { }

  ngOnInit(): void {
    this.commutePieResult = this.convertFleetModes();
    this.chartData = this.extractTrips(this.fleetInsightsArr);
  }

  convertFleetModes() {
    const pieArr = [];
    this.fleetModesArr.forEach(ele => {
      pieArr.push({name: ele.modeName, value: ele.percentage})
    });
    return pieArr;
  }

  

  extractTrips(val) {
    const temp = [];
    val.forEach(ele => {
      // let grid = [];
      for (const item in ele) {
        if(item) {
          ele[item]['Utilization']['timeline'].forEach((timeline, i) => {

            // gridData
            // grid.push({'trip': item, ...timeline});
            // grid = JSON.parse(JSON.stringify(grid));
            // this.gridData = grid;
            // this.gridData = grid.filter(p => delete p.timeline);
            // \\ gridData

            const series = [];
            for (const ele2 in timeline) {
              if(ele2) {
                const time = moment.utc(ele2, "HH:mm");
                const name = time.format('LT');
                series.push({value: timeline[ele2], name})
              }
            }
            temp.push({'name': item, 'series': series});
          });
        }
      }
    });
    return temp;
  }

}
