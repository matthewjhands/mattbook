import { Component, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  @ViewChild('editor')
  public rteObj!: RichTextEditorComponent;

  onChange(): void {
    console.log('Rich Text Editor <b>change</b> event called<hr>');
    console.log(this.rteObj.getHtml());
  }

}
