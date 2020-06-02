import { Component, Input } from '@angular/core';
import { ChartComponent } from './../../../../shared/components/chart/chart.component';

import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
import { chartColors } from '../../_models/fleet.models';
highcharts3D(Highcharts);

@Component({
  selector: 'workspace-enctrmodespie',
  templateUrl: './enctrmodespie.component.html',
  styleUrls: ['./enctrmodespie.component.scss']
})

export class EnctrmodespieComponent extends ChartComponent {

  highcharts = Highcharts;
  localOptions: Highcharts.Options = {};

  @Input() encntrPieResult: any[];

  onChartLoad = () => {

    console.log(this.encntrPieResult);

    this.localOptions = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
       },
       margin: [0, 0, 0, 0],
       height: 260,
       width: 325
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
            click: this._callback.bind(this),
        },
      }
      },
      series: [{
          type: 'pie',
          name: 'MODES',
          animation: false,
          data: this.encntrPieResult,
        }
      ],
      tooltip: {
        headerFormat: '',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        shadow: true,
        useHTML: true,
        className: 'myTool',
        pointFormat: `
            <div style="font-size:14px;">
              <h3 style="margin-top:5px; margin-bottom:5px">
                <mat-icon class="material-icons color-green vtop" [marginTop]="-2" [marginRight]="5">info</mat-icon>
                Related Insights
              </h3>
              <b>{point.percentage:.1f} %</b> of the total encounters were from
               the {point.name} between ` + `{point.insights.timestamp}` + ` - now.
            </div>`,
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
    // console.log(chart);
  }

  private _getTooltipHTML(point) {

    return `<div>
            <h3>Related Insights</h3>
            <b>{point.percentage:.1f} %</b> of the total encounters were from the {point.name}
            between May 22, 10:30 pm - now.
          </div>`
  }

}