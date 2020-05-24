import {  OnInit, Optional, ViewChild, Output, Component, ChangeDetectionStrategy, EventEmitter,
          ChangeDetectorRef }
from '@angular/core';

import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

import * as Highcharts from 'highcharts/highcharts';
import * as _ from 'lodash';

@Component({
  selector: 'workspace-chart',
  exportAs: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class ChartComponent implements OnInit {
  @Output() readonly chartLoad = new EventEmitter<void>();

  // For child reference
  @ViewChild(ChartComponent, { static: true }) chartComponent: ChartComponent;

  // Highcharts Angular
  highcharts = Highcharts;
  chartConstructor = 'chart';
  chartOptions: Highcharts.Options = {};
  chartCallback = this.callback.bind(this)
  oneToOneFlag = true;

  private updateFlagSubject = new BehaviorSubject<boolean>(false);
  updateFlag$ = this.updateFlagSubject.asObservable().pipe(filter(u => !!u));

  private chartObjectSubject: Subject<any | undefined> = new BehaviorSubject(undefined);
  // tslint:disable-next-line:member-ordering
  chartObject$: Observable<any> = this.chartObjectSubject.asObservable().pipe(filter(c => !!c), tap(t => console.log(t)));

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.initChart();
  }

  private initChart = () => {
    const chartOptions: Highcharts.Options = {};
    // chartOptions.chart = { type: 'pie', height: 400 },
    chartOptions.title = { text: null };
    chartOptions.tooltip = { shared: true }
    chartOptions.credits = { enabled: false };

    chartOptions.series = [];

    chartOptions.lang = { loading: 'Loading ...', noData: 'No data available, please try again' };

    // Exporting Module settings
    chartOptions.exporting = {
      enabled: false,
      fallbackToExportServer: false,
      chartOptions: {
        chart: { backgroundColor: 'white' }
      }
    };

    // Nodata module settings
    chartOptions.noData = {
      style: { fontSize: '15px', color: 'gray' },
      position: { align: 'left' }
    };

    this.chartOptions = chartOptions;
    this.updateFlagSubject.next(true);

    this.chartLoad.emit();
  }

  onUpdateChange = (flag: boolean) => this.updateFlagSubject.next(flag);

  updateFromParent = () => {
    console.log('updateFromParent/ChartComponent');
    this.updateChart(this.highcharts, { chart: { type: 'column' } });
  }

  /** Add serie
   * @deprecated
   */
  addSerie = <T>(newSerie: T) => {
    const newSeries = this.chartOptions.series ? [...this.chartOptions.series, newSerie] : [newSerie];
    console.log(newSeries);
    // this.updateChart({ series: [...newSeries] });
  };

  updateChart = (highcharts, options: any) => {
    this.highcharts = highcharts;
    // By default if the value of the object property is undefined lodash won't use this but keeps
    // the original after using _.merge(). We can customize the merge with _.mergeWith().
    // If we return undefined inside the customizer function lodash handles the merge like above not keeping the undefined value.
    // With deleting the property we trick lodash and with this the property gets undefined value after the merge.
    // this.highcharts = highcharts;
    const customizer = (_objValue: Optional, srcValue: Optional, key: any, object: any) => {
      if (srcValue === undefined) delete object[key];
    };

    (this.chartOptions = _.mergeWith(this.chartOptions, options, customizer));
    this.updateFlagSubject.next(true);
  };

  private callback(chart) {
    console.log('callback');
    const options: Highcharts.Options = chart.options;
    // console.log(options.chart.type);
    chart.showLoading();

    // Emit the chart object once initialised
    // this.chartObjectSubject.next(chart);

    this.chartLoad.emit();

  }

}