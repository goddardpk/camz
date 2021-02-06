import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';
import { OnInit } from '@angular/core';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    currentUser: User;
    title = 'camz';
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit(): void { 
        console.log("ngOnInit called.")
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}