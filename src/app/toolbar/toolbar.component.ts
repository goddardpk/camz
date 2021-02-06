import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl('home'); 
  }
  setupCameraSession() {
    this.router.navigateByUrl('app-camera-session');
  }
  remoteControl() {
    this.router.navigateByUrl('remote-control');
  }
  review() {
    this.router.navigateByUrl('review');
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
