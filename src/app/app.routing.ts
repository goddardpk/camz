import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { SessionComponent } from './session';
import { LandingComponent } from './landing';
import { CameraConfigComponent } from './camera-config';
import { ReviewComponent } from './review';
import { DiscoverComponent } from './discover/discover.component';
import { ActivateCamerasComponent } from './activate-cameras/activate-cameras.component';
import { ConfigureCamerasComponent } from './configure-cameras/configure-cameras.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';

const routes: Routes = [
    { path: '', component: LandingComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'session', component: SessionComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'remote-control', component: RemoteControlComponent },
    { path: 'camera-config', component: CameraConfigComponent },
    { path: 'review', component: ReviewComponent },
    { path: 'discover', component: DiscoverComponent },
    { path: 'activate-cameras', component: ActivateCamerasComponent },
    { path: 'configure-cameras', component: ConfigureCamerasComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);