import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Ticket} from '../../shared/services/models/ticket.model';
import {Shopping} from '../../shared/services/models/shopping.model';
import {TicketEdition} from './ticket-edition.model';
import {EndPoints} from '@shared/end-points';
import {HttpService} from '@core/http.service';
import {TicketSearch} from './ticket-search.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private static SEARCH = '/search';
  shopping1: Shopping = new Shopping('12345', 'description1', 5);
  shopping2: Shopping = new Shopping('54321', 'description2', 10);

  constructor(private httpService: HttpService) { }

  search(ticketSearch: TicketSearch): Observable<Ticket[]> {
    return this.httpService
      .paramsFrom(ticketSearch)
      .get(EndPoints.TICKETS + TicketService.SEARCH);
  }

  read(id: string): Observable<TicketEdition> {
    const ticketEdition: TicketEdition = {id, shoppingList: [this.shopping1, this.shopping2]};
    return of(ticketEdition);
  }

  update(id: string, shoppingList: Shopping[]): Observable<TicketEdition> {
    return of({id, shoppingList});
  }
}
