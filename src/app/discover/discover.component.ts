import { Component, OnInit } from '@angular/core';
import { CameraHub, CameraSessionInstance, MockCameraHub } from '../_models/camera';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  cameraHub: CameraHub;
  
  
  constructor() { }

  ngOnInit(): void {
    
  }

  getAvailableCameras() {
      //return this.cameraHub.getAvailableCameras();
      return new MockCameraHub().getAvailableCameras();
  }
  
  getCamera(id:number) {
    return this.getAvailableCameras().filter(x=>x.id = id);
  }

}
