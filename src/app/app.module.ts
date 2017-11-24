import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';

import {JwtModule} from '@auth0/angular-jwt';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgProgressModule, NgProgressInterceptor} from 'ngx-progressbar';


import {AppComponent} from './app.component';
import {Routing} from './app.routing';
import {AuthGuard} from './_guard/index';

import {AuthenticationComponent} from './authentication/authentication.component';
import {AuthenticationService} from './authentication/authentication.service';
import {HomepageComponent} from './homepage/homepage.component';
import {UserListComponent} from './user/user-list.component';
import {UserComponent} from './user/user.component';
import {UserRepositoryService} from './user/user-repository.service';
import {RegistrationComponent} from './registration/registration.component';
import {RegistrationService} from './registration/registration.service';
import {NodeComponent} from './node/node.component';
import {MapComponent} from './map/map.component';


@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        AuthenticationComponent,
        UserListComponent,
        UserComponent,
        RegistrationComponent,
        MapComponent,
        NodeComponent
    ],
    entryComponents: [NodeComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        Routing,
        NgProgressModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        HttpClientModule,
        MatDialogModule,
        MatTooltipModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('token');
                },
                whitelistedDomains: ['127.0.0.1:15001']
            }
        }),
        BsDatepickerModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA3TWIbC60GZFx0_E0m2Fb7x7SSLVQ-kuw'
        })
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true},
        AuthGuard,
        AuthenticationService,
        RegistrationService,
        UserRepositoryService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
