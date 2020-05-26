import { Component, Input } from '@angular/core';
import { ChartComponent } from './../../../../shared/components/chart/chart.component';

import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
import { chartColors } from '../../_models/fleet.models';
highcharts3D(Highcharts);

@Component({
  selector: 'workspace-modespie',
  templateUrl: './modespie.component.html',
  styleUrls: ['./modespie.component.scss']
})

export class ModespieComponent extends ChartComponent {

  highcharts = Highcharts;
  localOptions: Highcharts.Options = {};

  @Input() commutePieResult: any[];

  onChartLoad = () => {

    this.localOptions = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
       },
       margin: [0, 0, 0, 0],
       height: 260
      },
      credits: { enabled: false },
      colors: chartColors,
      plotOptions: {
        pie: {
            showInLegend: true,
            allowPointSelect: true,
            size: '90%',
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
              enabled: false,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                 color: 'black'
              }
           }
        },
        series: {
          label: {
              connectorAllowed: true
          },
          pointStart: 500,
          events: {
            click: this._callback.bind(this)
        },
      }
      },
      series: [{
          type: 'pie',
          name: 'MODES',
          animation: false,
          data: this.commutePieResult,
        }
      ],
      tooltip: {
        headerFormat: '',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        shadow: true,
        useHTML: true,
        pointFormat: `
          <div>{point.name}: <b>{point.percentage:.1f} %</b></div>
        `,
        style: {
            padding: '0',
            fontSize: '17px'
        }
      },
      legend: {
        align: 'center',
        verticalAlign: 'top',
        layout: 'horizontal',
        x: 0,
        y: -15
      },
    };

    this.chartComponent.updateChart(this.highcharts, this.localOptions);

  }

  private _callback(chart) {
    console.log(chart);
  }

}