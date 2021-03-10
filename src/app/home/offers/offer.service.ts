import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {Offer} from './offer.model';

@Injectable({
  providedIn: 'root',
})

export class OfferService {

  constructor(private httpService: HttpService) {
  }

  read(reference: string): Observable<Offer> {
    // reference = 'cmVmZXJlbmNlb2ZmZXIx';
    console.log('Reference: ' + reference);
    return this.httpService
      .get(EndPoints.OFFERS + '/' + reference);
  }
}


