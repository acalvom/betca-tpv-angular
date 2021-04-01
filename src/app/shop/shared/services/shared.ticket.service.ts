import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {map} from 'rxjs/operators';
import {Ticket} from './models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class SharedTicketService {
  constructor(private httpService: HttpService) {
  }
  tickets: string[] = [ 'Tck_Ref_3', 'Tck_Ref_4'];

  searchTicketsWithoutInvoice(): Observable<string[]> {
    return this.httpService
      .get(EndPoints.TICKETS + '/search' + '/noInvoice')
      .pipe(
        map(response => response.references)
      );;
  }
}
