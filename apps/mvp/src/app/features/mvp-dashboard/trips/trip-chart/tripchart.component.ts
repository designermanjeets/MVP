import { Component, Input } from '@angular/core';
import { ChartComponent } from './../../../../shared/components/chart/chart.component';
import { chartColors } from './../../_models/trip.model';

import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

@Component({
  selector: 'workspace-tripchart',
  templateUrl: './tripchart.component.html',
  styleUrls: ['./tripchart.component.scss']
})

export class TripChartComponent extends ChartComponent {

  highcharts = Highcharts;

  @Input() chartData: any;
  
  onChartLoad = () => {
  
    const localOptions: Highcharts.Options = {
      chart: { 
        type: 'spline',
        height: 270
      },
      xAxis: [{
        labels: {
          enabled: false
        }
      }],
      yAxis: [{
        labels: {
          enabled: false
        },
        title: {
          text: undefined
        }
      }],
      colors: chartColors,
      plotOptions: {
        series: {
          label: {
              connectorAllowed: true
          }
        }
      }
    };
  
    localOptions.series = this.chartData

    this.chartComponent.updateChart(this.highcharts, localOptions);
  }

}