import { Component, Input } from '@angular/core';
import { ChartComponent } from './../../../../shared/components/chart/chart.component';
import { chartColors } from './../../_models/trip.model';

import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

@Component({
  selector: 'workspace-policypie',
  templateUrl: './policypie.component.html',
  styleUrls: ['./policypie.component.scss']
})

export class PolicypieComponent extends ChartComponent {

  highcharts = Highcharts;
  localOptions: Highcharts.Options = {};
  private _limePolicyPieRes: any;

  @Input('limePolicyPieRes')
  set limePolicyPieRes(value: any) {
    if(value && value.length > 0) {
      this._limePolicyPieRes = value;
    }
  }

  onChartLoad = () => {

    this.localOptions = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: false,
          alpha: 35,
          beta: 0
        },
        margin: [0, 0, 0, 0],
        width: 160,
        height: 160
      },
      credits : { enabled: false },
      colors : chartColors,
      plotOptions: {
        pie: {
            showInLegend: false,
            allowPointSelect: true,
            size: '100%',
            cursor: 'pointer',
            depth: 25,
            innerSize: 100,
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
          events: {
            click: this._callback.bind(this)
        },
      }
      },
      series : [{
          type: 'pie',
          name: 'Trip Purpose',
          animation: false,
          data: this._limePolicyPieRes,
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
      }
    }

    this.chartComponent.updateChart(this.highcharts, this.localOptions);
  }

  private _callback(chart) {
    console.log(chart);
  }

}