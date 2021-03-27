import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shopping } from '../../shop/shared/services/models/shopping.model';
import { HttpService } from '@core/http.service';
import { EndPoints } from '@shared/end-points';


@Injectable({
  providedIn: 'root'
})
export class TicketTrackingService {
  static REFERENCE = '/reference';

  constructor(private httpService: HttpService) { }

  read(reference: string): Observable<Shopping[]> {
    return this.httpService.get(EndPoints.TICKETS + '/' + reference + TicketTrackingService.REFERENCE);
  }
}

