export interface Note {
    id: number;
    body: string;
}

export interface ServerResponse {
    _embedded: {
        notes: Note[];
    }
}