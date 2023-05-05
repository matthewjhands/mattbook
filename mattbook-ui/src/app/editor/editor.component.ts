import { Component, OnInit, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { EventService } from '../event.service';
import { Subscription } from 'rxjs';
import { EventType, MattbookEvent, Note } from '../interfaces';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  @ViewChild('editor')
  public rteObj!: RichTextEditorComponent;
  private events : Subscription;
  private currentNote! : Note;

  constructor(private eventService: EventService,
    private restService: RestService){
    this.events = this.eventService.events.subscribe({
      next: (event: MattbookEvent) => {
        console.debug("Editor has received event:", event);
        if(event.event == EventType.NOTE_CLICKED){
          this.load(event.note);
        }
      }
    })
  }

  ngOnDestroy(){
    this.events.unsubscribe();
  }

  load(note: Note){
    this.rteObj.updateValue(note.body);
    this.currentNote = note;
    console.debug("Editor has loaded note:", note);

  }

  onSave(): void {
    console.log("Editor Save button clicked");
    console.log(this.rteObj.getHtml());
    const newNote : Note = {id: this.currentNote.id, body: this.rteObj.getHtml()};
    this.restService.updateNote(newNote);
  }

  onDelete(): void {
    console.log("Editor Delete button clicked");
    this.restService.deleteNote(this.currentNote);
    console.log(this.rteObj.getHtml());
  }

}
