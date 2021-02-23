import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Ticket} from './ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  search(key: string): Observable<Ticket[]> {
    return of(
      [
        {id: '1', reference: '111', mobile: '123456789', amount: 10, state: 'COMMITED'},
        {id: '2', reference: '222', mobile: '987654321', amount: 20, state: 'COMMITED'}
      ]
    );
  }
}
