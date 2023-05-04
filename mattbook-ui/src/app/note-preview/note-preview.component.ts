import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.css']
})
export class NotePreviewComponent implements OnInit {

  @Input() noteBody!: string;
  previewText: string = "Loading..";
  PREVIEW_LENGTH: number = 40;

  ngOnInit() {
    // parse the HTML from the server
    const domParser = new DOMParser();
    const htmlElement : Document = domParser.parseFromString(this.noteBody, 'text/html');

    // FIX ME - Cannot invoke an object which is possibly 'null'
    /*
    if (htmlElement != null){
      this.previewText = htmlElement.textContent().substring(0,this.PREVIEW_LENGTH)
    }
    */
    
  }

}
