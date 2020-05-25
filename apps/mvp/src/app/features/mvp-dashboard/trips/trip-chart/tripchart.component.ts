import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ChartComponent } from './../../../../shared/components/chart/chart.component';
import { chartColors } from './../../_models/trip.model';

import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

@Component({
  selector: 'workspace-tripchart',
  templateUrl: './tripchart.component.html',
  styleUrls: ['./tripchart.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class TripChartComponent extends ChartComponent {

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