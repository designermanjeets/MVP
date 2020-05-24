import { Component, Input } from '@angular/core';
import { ChartComponent } from './../../../../shared/components/chart/chart.component';

import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
import { chartColors } from '../../_models/fleet.models';
highcharts3D(Highcharts);

@Component({
  selector: 'workspace-utilzichart',
  templateUrl: './utilzichart.component.html',
  styleUrls: ['./utilzichart.component.scss']
})

export class UtilzichartComponent extends ChartComponent {

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
          },
          pointStart: 500
        }
      }
    };
  
    localOptions.series = this.chartData

    this.chartComponent.updateChart(this.highcharts, localOptions);
  
  }

}