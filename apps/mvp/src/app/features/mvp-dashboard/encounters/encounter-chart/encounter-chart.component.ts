import { Component, Input, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { ChartComponent } from './../../../../shared/components/chart/chart.component';
import { chartColors } from './../../_models/trip.model';

import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

@Component({
  selector: 'workspace-encounter-chart',
  templateUrl: './encounter-chart.component.html',
  styleUrls: ['./encounter-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EncounterChartComponent extends ChartComponent {

  highcharts = Highcharts;
  localOptions: Highcharts.Options = {};
  private _chartData: any;

  @Input('enctrChart') 
  set enctrChart(value: any) {
    if(value && value.length > 0) {
      this._chartData = value;
      setTimeout(() => {
        const c = this.highcharts.chart(this.localOptions);
        c.reflow(); // Use this with renderTo Option
      }, 1);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
   const c = this.highcharts.chart(this.localOptions);
   c.reflow(); // Use this with renderTo Option
  }

  onChartLoad() {

    this.localOptions = {
      chart: { 
        type: 'spline',
        height: 270,
        renderTo: 'chartwrap'
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