export class RemoteControl {
    id: number;
    userId: number;
    sessionId: number;
}

export class RemoteControlEvent {
    id: number;
    key: number;
    keyState: number;
}

export class RemoteControlState {
    id: number;
    stateKey: string;
    stateValue: string;
    sequence: number;
}