import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Ticket} from '../../shared/services/models/ticket.model';
import {Shopping} from '../../shared/services/models/shopping.model';
import {TicketEdition} from './ticket-edition.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ticket1: Ticket = {id: '1', reference: '123', mobile: 654987125};
  ticket2: Ticket = {id: '2', reference: '789', mobile: 698875321};
  shopping1: Shopping = new Shopping('12345', 'description1', 5);
  shopping2: Shopping = new Shopping('54321', 'description2', 10);

  constructor() { }

  search(key: string): Observable<Ticket[]> {
    return of(
      [this.ticket1, this.ticket2]
    );
  }

  read(id: string): Observable<TicketEdition> {
    const ticketEdition: TicketEdition = {id, shoppingList: [this.shopping1, this.shopping2]};
    return of(ticketEdition);
  }

  update(id: string, shoppingList: Shopping[]): Observable<TicketEdition> {
    return of({id, shoppingList});
  }
}
