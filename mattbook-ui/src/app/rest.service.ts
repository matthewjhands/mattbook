import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  public getAllNotes(){
    return this.http.get('http://localhost:8080/api/notes');
  }
}