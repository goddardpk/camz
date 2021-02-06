import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { SessionComponent } from './session';
import { LandingComponent } from './landing';
import { ReviewComponent } from './review';
import { DiscoverComponent } from './discover/discover.component';
import { ActivateCamerasComponent } from './activate-cameras/activate-cameras.component';
import { ConfigureCamerasComponent } from './configure-cameras/configure-cameras.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';
import { CameraDetailComponent } from './camera-detail/camera-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CameraSessionComponent } from './camera-session/camera-session.component';

const routes: Routes = [
    { path: '', component: LandingComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'session', component: SessionComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'remote-control', component: RemoteControlComponent },
    { path: 'camera-detail/:id', component: CameraDetailComponent },
    { path: 'review', component: ReviewComponent },
    { path: 'discover', component: DiscoverComponent },
    { path: 'activate-cameras/:id', component: ActivateCamerasComponent },
    { path: 'activate-cameras', component: ActivateCamerasComponent },
    { path: 'configure-cameras/:id', component: ConfigureCamerasComponent },
    { path: 'configure-cameras', component: ConfigureCamerasComponent },
    { path: 'home', component: HomeComponent },
    { path: 'app-camera-session', component: CameraSessionComponent },
    { path: 'not-found', component: NotFoundComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'not-found' }
];

export const appRoutingModule = RouterModule.forRoot(routes);