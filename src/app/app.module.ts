import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { SessionComponent } from './session';
import { LandingComponent } from './landing';
import { CameraConfigComponent } from './camera-config';
import { ReviewComponent } from './review';
import { DiscoverComponent } from './discover/discover.component';
import { ActivateCamerasComponent } from './activate-cameras/activate-cameras.component';
import { ConfigureCamerasComponent } from './configure-cameras/configure-cameras.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        SessionComponent,
        LandingComponent,
        CameraConfigComponent,
        ReviewComponent,
        DiscoverComponent,
        ActivateCamerasComponent,
        ConfigureCamerasComponent,
        RemoteControlComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };