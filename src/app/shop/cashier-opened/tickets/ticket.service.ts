import {Injectable} from '@angular/core';
import {iif, merge, Observable, of} from 'rxjs';
import {Ticket} from '../../shared/services/models/ticket.model';
import {Shopping} from '../../shared/services/models/shopping.model';
import {TicketEdition} from './ticket-edition.model';
import {EndPoints} from '@shared/end-points';
import {HttpService} from '@core/http.service';
import {TicketSearch} from './ticket-search.model';
import {SharedVoucherService} from '../../shared/services/shared-voucher.service';
import {concatMap, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private static SEARCH = '/search';

  constructor(private httpService: HttpService, private sharedVoucherService: SharedVoucherService) { }

  search(ticketSearch: TicketSearch): Observable<Ticket[]> {
    return this.httpService
      .paramsFrom(ticketSearch)
      .get(EndPoints.TICKETS + TicketService.SEARCH);
  }

  read(id: string): Observable<TicketEdition> {
    return this.httpService
      .get(EndPoints.TICKETS + '/' + id);
  }

  update(id: string, shoppingList: Shopping[], returnedMoney: number): Observable<void> {
    return this.httpService
      .successful()
      .put(EndPoints.TICKETS + '/' + id, shoppingList)
      .pipe(
        mergeMap(() => {
          return iif(() => returnedMoney > 0, this.sharedVoucherService.printVoucher(returnedMoney));
        })
      );
  }
}
