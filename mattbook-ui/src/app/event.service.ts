import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MattbookEvent } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public events = new Subject<MattbookEvent>();

  private eventsMonitor! : Subscription;

  constructor() {
    this.eventsMonitor = this.events.subscribe(
      (event : MattbookEvent)=> {
        console.info("Event published: ", event);
      });
   }
}
