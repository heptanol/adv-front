import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { AuthGuard } from './_guard/index';

import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationService } from './authentication/authentication.service';
import { HomepageComponent } from './homepage/homepage.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import { UserRepositoryService } from './user/user-repository.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthenticationComponent,
    UserListComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    NgProgressModule,
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr},
    AuthGuard,
    AuthenticationService,
    UserRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
