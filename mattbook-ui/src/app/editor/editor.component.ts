import { Component, OnInit, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { EventService } from '../event.service';
import { Subscription } from 'rxjs';
import { EventType, MattbookEvent, Note } from '../interfaces';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent  {

  @ViewChild('editor')
  public rteObj!: RichTextEditorComponent;
  private events : Subscription;
  private currentNote! : Note;

  constructor(private eventService: EventService){
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

  onChange(): void {
    console.log('Rich Text Editor <b>change</b> event called<hr>');
    console.log(this.rteObj.getHtml());
  }

}
