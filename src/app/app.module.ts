import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './app.config';
import { TokenInterceptorService } from './services/interceptors/token-interceptor.service';
import { ErrorInterceptorService } from './services/interceptors/error-interceptor.service';
import { CommonHeadersInterceptorService } from './services/interceptors/common-headers-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SignButtonsComponent } from './components/sign-buttons/sign-buttons.component';
import { BannerComponent } from './components/banner/banner.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SignButtonsComponent,
    BannerComponent,
    WelcomeCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment },
    { provide: HTTP_INTERCEPTORS, useClass: CommonHeadersInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
