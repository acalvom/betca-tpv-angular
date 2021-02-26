import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Ticket} from '../../shared/services/models/ticket.model';
import {Shopping} from '../../shared/services/models/shopping.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  search(key: string): Observable<Ticket[]> {
    return of(
      [
        {id: '1', reference: '111', mobile: 123456789},
        {id: '2', reference: '222', mobile: 987654321}
      ]
    );
  }

  read(id: string): Observable<Shopping[]> {
    const shopping1: Shopping = new Shopping('12345', 'description1', 5);
    const shopping2: Shopping = new Shopping('54321', 'description2', 10);
    return of([shopping1, shopping2]);
  }
}
