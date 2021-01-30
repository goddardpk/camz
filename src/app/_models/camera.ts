export class CameraSessionInstance {
    id: number;
    token: string;
    sessionId: number;   
}

export class CameraHub {
    id: number;
    cameras: CameraSessionInstance[];   
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