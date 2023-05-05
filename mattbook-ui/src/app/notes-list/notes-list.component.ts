import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { EventType, MattbookEvent, Note, ServerResponse } from '../interfaces';
import { Subscription } from 'rxjs';
import { EventService } from '../event.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  public notes : Note[] = [];
  events: Subscription;

  constructor(private restService: RestService,
    private eventService: EventService){
    this.events = this.eventService.events.subscribe({
      next: (event: MattbookEvent) => {
        console.debug("Note List has received event:", event);
        if(event.event == EventType.SAVE_NOTE){
          this.reload();
        }
      }
    })
  }

  ngOnInit(): void {
    this.reload();
    this.eventService.events.next({event: EventType.NOTE_CLICKED, note: this.notes[0]}); // open first note
  }

  reload() {
    this.restService.getAllNotes().subscribe((data: ServerResponse) => {
      // slight hack - manually readd id which doesn't get sent by server
      const newNotes : Note[] = [];
      for (let index = 0; index < data['_embedded'].notes.length; index++) {
        const element = data['_embedded'].notes[index];
        const newNote : Note = {id: index+1, body: element.body};
        newNotes.push(newNote);
      }

      this.notes = newNotes;
      console.debug("Notes list reloaded.");
      
    }); 
  }

  onCreate(){
    this.restService.createNewNote();
  }

}
