import { NgModule } from '@angular/core';
import { MvpMarginTopDirective, MvpMarginRightDirective, 
MvpMarginBottomDirective, MvpMarginLeftDirective } from './mvp-margin/mvp-margin.directive';
import { MvpPaddingTopDirective, MvpPaddingRightDirective,
MvpPaddingBottomDirective, MvpPaddingLeftDirective } from './mvp-padding/mvp-padding.directive';
import { MvpMaterialModule } from './mvp-material/mvp-material.module';
import { TranslateModule } from '@ngx-translate/core';


const components = [
  MvpMarginTopDirective,
  MvpMarginRightDirective,
  MvpMarginBottomDirective,
  MvpMarginLeftDirective,
  MvpPaddingTopDirective,
  MvpPaddingRightDirective,
  MvpPaddingBottomDirective,
  MvpPaddingLeftDirective
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    MvpMaterialModule,
    TranslateModule
  ],
  exports: [
    ...components,
    MvpMaterialModule,
    TranslateModule
  ]
})

export class MvpSharedModule { }
