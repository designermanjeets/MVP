import { Component, Input } from '@angular/core';
import { ChartComponent } from './../../../../shared/components/chart/chart.component';
import { chartColors } from './../../_models/trip.model';

import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

@Component({
  selector: 'workspace-piepurpose-chart',
  templateUrl: './pie.component.html',
  styles: ['./pie.component.css']
})

export class PieComponent extends ChartComponent {

  highcharts = Highcharts;
  localOptions: Highcharts.Options = {};
  private _commutePieResult: any;

  @Input('commutePieResult') 
  set commutePieResult(value: any) {
    if(value && value.length > 0) {
      this._commutePieResult = value;
    }
  }

  onChartLoad = () => {

    this.localOptions = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      credits : { enabled: false },
      colors : chartColors,
      plotOptions: {
        pie: {
            showInLegend: true,
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 65,
            dataLabels: {
              enabled: true,
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
          data: this._commutePieResult,
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