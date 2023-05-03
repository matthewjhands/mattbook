import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotePreviewComponent } from './note-preview/note-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    NotesListComponent,
    NotePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorAllModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
