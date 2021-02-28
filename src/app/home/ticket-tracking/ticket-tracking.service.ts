import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shopping } from '../../shop/shared/services/models/shopping.model';


@Injectable({
  providedIn: 'root'
})
export class TicketTrackingService {

  constructor() { }

  read(): Observable<Shopping[]> {
    const shopping1: Shopping = new Shopping('11111', 'description1', 6);
    const shopping2: Shopping = new Shopping('11112', 'description2', 90);
    return of([shopping1, shopping2]);
  }
}
