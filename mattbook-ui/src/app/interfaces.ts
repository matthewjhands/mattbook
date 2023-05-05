export interface Note {
    id: number;
    body: string;
}

export interface ServerResponse {
    _embedded: {
        notes: Note[];
    }
}

export enum EventType {
    NOTE_CLICKED,
}

export interface MattbookEvent {
    event: EventType;
    note: Note;
}