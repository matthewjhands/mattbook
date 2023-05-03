import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(private restService: RestService){

  }

  ngOnInit(): void {
    this.restService.getAllNotes().subscribe((data) => {
      console.log(data)
    });
  }

}
