// app.routing.ts
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { AuthGuard } from './_guard/index';
import {MapComponent} from "./map/map.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'login',
        component: AuthenticationComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'user/:id',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'map',
        component: MapComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'map/:id',
        component: MapComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);