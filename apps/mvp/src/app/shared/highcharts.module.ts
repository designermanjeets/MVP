import { NgModule } from '@angular/core';

import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highcharts.src';

// Highcharts modules
// import BoostCanvas from 'highcharts/modules/boost-canvas.src';
// import Boost from 'highcharts/modules/boost.src';
// import HighchartsMore from 'highcharts/highcharts-more.src';
// import Exporting from 'highcharts/modules/exporting.src';
// import Heatmap from 'highcharts/modules/heatmap.src.js';
// import NoDataToDisplay from 'highcharts/modules/no-data-to-display.src';
// import OfflineExporting from 'highcharts/modules/offline-exporting.src';
// import SolidGauge from 'highcharts/modules/solid-gauge.src.js';
// import highcharts3D from 'highcharts/highcharts-3d.src';
// import Annotations from 'highcharts/modules/annotations.src';

@NgModule({
  exports: [
    HighchartsChartModule
  ],
})

export class HighchartsModule {
  constructor() {
    const globalOptions: any = {
      // http://api.highcharts.com/highstock/global.timezoneOffset
      timezoneOffset: new Date().getTimezoneOffset()
    };

    Highcharts.setOptions({
      global: globalOptions
    });
  }
}
