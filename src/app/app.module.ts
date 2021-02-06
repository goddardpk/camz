import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {DemoMaterialModule} from './material-module';
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
import { ReviewComponent } from './review';
import { DiscoverComponent } from './discover/discover.component';
import { ActivateCamerasComponent } from './activate-cameras/activate-cameras.component';
import { ConfigureCamerasComponent } from './configure-cameras/configure-cameras.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';
import { CameraDetailComponent } from './camera-detail/camera-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CameraSessionComponent } from './camera-session/camera-session.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        DemoMaterialModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        SessionComponent,
        LandingComponent,
        ReviewComponent,
        DiscoverComponent,
        ActivateCamerasComponent,
        ConfigureCamerasComponent,
        RemoteControlComponent,
        CameraDetailComponent,
        ToolbarComponent,
        NotFoundComponent,
        CameraSessionComponent,
    ],
    entryComponents: [ToolbarComponent],
  
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent,ToolbarComponent]
})
export class AppModule { };