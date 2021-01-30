
export class Session {
    id: number;
    timelineId : number;
    locationId : number;
    token: string;
}
export class SessionLocation {
    id: number;
    lat: number;
    long: number;  
}

export class SessionTimeline {
    id: number;
    sequence: number;
    token: string;  
}
export class RecordingSession {
    id: number;
    sessions: Session[];
}

export class ReviewSession {
    id: number;
    sessions: Session[];
}