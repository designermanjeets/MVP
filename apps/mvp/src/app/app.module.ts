import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MVPRoutingModule } from './core/routing/mvp-routing.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { AppComponent } from './app.component';
import { MvpLoginComponent } from './features/mvp-login/mvp-login.component';
import { MvpNavbarComponent } from './core/mvp-navbar/mvp-navbar.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { MvpSharedModule } from './shared/shared.module';

import { MdePopoverModule } from '@material-extended/mde';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuditLogsComponent } from './features/mvp-audit/audit-logs/audit-logs.component';
import { AnomaliesComponent } from './features/mvp-anomalies/anomalies/anomalies.component';
import { AnomaliesChartComponent } from './features/mvp-anomalies/anomalies-chart/anomalies-chart.component';

@NgModule({
  declarations: [
    AppComponent, 
    MvpLoginComponent,
    MvpNavbarComponent,
    AuditLogsComponent,
    AnomaliesComponent,
    AnomaliesChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    FlexLayoutModule,
    MVPRoutingModule,
    NgxUiLoaderModule,
    MvpSharedModule,
    MdePopoverModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
