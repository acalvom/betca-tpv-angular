import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {Offer} from './offer.model';

@Injectable({
  providedIn: 'root',
})

export class OfferService {

  constructor(private httpService: HttpService) {
  }

  read(reference: string): Observable<Offer> {
    return this.httpService
      .get(EndPoints.OFFERS + '/' + reference);
  }
}


