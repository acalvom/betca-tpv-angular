import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {OfferSearch} from './offer-search.model';
import {Offer} from './offer.model';

@Injectable({
  providedIn: 'root',
})

export class OfferService {
  private static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  search(offerSearch: OfferSearch): Observable<Offer[]> {
    return this.httpService
      .paramsFrom(offerSearch)
      .get(EndPoints.OFFERS + OfferService.SEARCH);
  }
}
