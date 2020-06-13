import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChartComponent } from './../../../shared/components/chart/chart.component';
import { chartColors } from './../../mvp-dashboard/_models/fleet.models';

import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

@Component({
  selector: 'workspace-anomalies-chart',
  templateUrl: './anomalies-chart.component.html',
  styleUrls: ['./anomalies-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class AnomaliesChartComponent extends ChartComponent {

  highcharts = Highcharts;
  localOptions: Highcharts.Options = {};
  private _chartData: any;

  @Input('chartData') 
  set chartData(value: any) {
    if(value && value.length > 0) {
      this._chartData = value;
    }
  }

  onChartLoad() {
  
    this.localOptions = {
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

    this.localOptions.series = this._chartData;

    this.chartComponent.updateChart(this.highcharts, this.localOptions);
  }

}