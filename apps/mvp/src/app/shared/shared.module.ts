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
import { MdePopoverModule } from '@material-extended/mde';


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
    HighchartsModule,
    MdePopoverModule
  ],
  exports: [
    ...components,
    MvpMaterialModule,
    TranslateModule,
    MdePopoverModule
  ]
})

export class MvpSharedModule { }
