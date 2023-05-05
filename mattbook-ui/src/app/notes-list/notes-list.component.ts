import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Note, ServerResponse } from '../interfaces';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  public notes : Note[] = [];

  constructor(private restService: RestService){
  }

  ngOnInit(): void {
    this.restService.getAllNotes().subscribe((data: ServerResponse) => {
      // slight hack - manually readd id which doesn't get sent by server
      for (let index = 0; index < data['_embedded'].notes.length; index++) {
        const element = data['_embedded'].notes[index];
        const newNote : Note = {id: index, body: element.body};
        this.notes.push(newNote);
        console.debug(newNote);
      }
    });
  }

}
