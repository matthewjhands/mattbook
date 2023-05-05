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
      this.notes = data['_embedded'].notes
      
      for (let index = 0; index < this.notes.length; index++) {
        const element = this.notes[index];
        console.debug(element)
      }
    });
  }

}
