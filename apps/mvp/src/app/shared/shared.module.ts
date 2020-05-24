import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvpMarginTopDirective, MvpMarginRightDirective, MvpMarginBottomDirective, MvpMarginLeftDirective }
from './mvp-margin/mvp-margin.directive';
import { MvpPaddingTopDirective, MvpPaddingRightDirective, MvpPaddingBottomDirective, MvpPaddingLeftDirective }
from './mvp-padding/mvp-padding.directive';
import { MvpMaterialModule } from './mvp-material/mvp-material.module';
import { TranslateModule } from '@ngx-translate/core';
import { HighchartsModule } from './highcharts.module';
import { ChartComponent } from './components/chart/chart.component';


const components = [
  MvpMarginTopDirective,
  MvpMarginRightDirective,
  MvpMarginBottomDirective,
  MvpMarginLeftDirective,
  MvpPaddingTopDirective,
  MvpPaddingRightDirective,
  MvpPaddingBottomDirective,
  MvpPaddingLeftDirective,
  ChartComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MvpMaterialModule,
    TranslateModule,
    HighchartsModule
  ],
  exports: [
    ...components,
    MvpMaterialModule,
    TranslateModule
  ]
})

export class MvpSharedModule { }
