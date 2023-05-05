import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../interfaces';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.css']
})
export class NotePreviewComponent implements OnInit {

  @Input() note!: Note;
  previewText: string | null = "";
  PREVIEW_LENGTH: number = 40;

  ngOnInit() {
    // parse the HTML from the server to get preview text
    const domParser = new DOMParser(); 
    this.previewText = domParser.parseFromString(this.note.body, 'text/html').documentElement.textContent ;
    if(this.previewText == null) {
      this.previewText = "";
    } else {
      this.previewText = this.previewText.substring(0, this.PREVIEW_LENGTH);
    }
    
  }

}
