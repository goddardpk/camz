export class CameraSessionInstance {
    static cameraCount = 0;
    id: number;
    desc: string;
    token: string;
    sessionId: number; 
    
    constructor(desc: string, sessionId: number) {
        this.id = sessionId + CameraSessionInstance.cameraCount++;
        this.desc = desc;
        this.sessionId = sessionId;
    }
    
    getDescription() {
        return this.desc;
    }
}

export class CameraHub {
    id: number;
    cameras: CameraSessionInstance[];
    remoteControlId: number; 
    
    getAvailableCameras() {
        return this.cameras;
    }
}

export class MockCameraHub extends CameraHub {

    mockSessioinId  = Number(new Date());
    mockCameras: CameraSessionInstance[] = [
        new CameraSessionInstance('Pauls phone',this.mockSessioinId),
        new CameraSessionInstance('Sams phone',this.mockSessioinId),
        new CameraSessionInstance('Audreys phone',this.mockSessioinId)
      ];

      getAvailableCameras() {
        return this.mockCameras;
    }
}

export class CameraState {
    cameraId: number;
    stateKey: string;
    stateValue: string;
    sequence: number;
}

export class CameraEvent {
    id: number;
    key: number;
    keyState: number;
}