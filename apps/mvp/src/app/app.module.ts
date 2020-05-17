import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent, 
    MvpLoginComponent,
    MvpNavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MVPRoutingModule,
    NgxUiLoaderModule,
    MvpSharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
