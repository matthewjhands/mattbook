import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventType, Note } from '../interfaces';
import { EventService } from '../event.service';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.css']
})
export class NotePreviewComponent implements OnInit {

  @Input() note!: Note;
  previewText: string | null = "";
  PREVIEW_LENGTH: number = 40;

  constructor(private eventService : EventService){

  }

  ngOnInit() {
    // parse the HTML from the server to get preview text
    const domParser = new DOMParser(); 
    this.previewText = domParser.parseFromString(this.note.body, 'text/html').documentElement.textContent;
    if(this.previewText == null) {
      this.previewText = "";
    } else {
      this.previewText = this.previewText.substring(0, this.PREVIEW_LENGTH);
    } 
  }

  noteClicked(){
    this.eventService.events.next({event: EventType.NOTE_CLICKED, note: this.note});
    console.debug("Note clicked, id=" + this.note.id);

  }
}
