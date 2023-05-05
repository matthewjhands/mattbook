import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventType, Note, ServerResponse } from './interfaces';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private DEFAULT_NOTE_BODY = "<p>Enter your note here!</p>";

  constructor(private http: HttpClient,
    private eventService: EventService) { }

  public createNewNote(){
    return this.http.post('http://localhost:8080/api/notes', {body: this.DEFAULT_NOTE_BODY}).subscribe(
      (data: any) => {
        const id = data["_links"].note.href.match(/\d*$/);
        const newNote : Note = {id: id, body: data.body};
        this.eventService.events.next({ event: EventType.NOTE_CLICKED, note: newNote }); // load the new note in the editor
        this.eventService.events.next({ event: EventType.SAVE_NOTE, note: newNote}); // reload the notes list
        console.debug("Created new note with id="+ newNote.id);
      }
    );
  }

  public getAllNotes() {
    return this.http.get<ServerResponse>('http://localhost:8080/api/notes');
  }

  public updateNote(newNote: Note) {
    return this.http.put<any>('http://localhost:8080/api/notes/' + newNote.id, newNote).subscribe(
      () => {
        this.eventService.events.next({ event: EventType.SAVE_NOTE, note: newNote });
      }
    )
  }

  public deleteNote(note: Note){
    return this.http.delete<any>('http://localhost:8080/api/notes/' + note.id).subscribe(
      () => {
        this.eventService.events.next({ event: EventType.SAVE_NOTE, note: note }); // not a great event name - needs some work
      }
    )
  }

}
