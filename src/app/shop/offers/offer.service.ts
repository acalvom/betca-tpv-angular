import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {OfferSearch} from './offer-search.model';
import {Offer} from '../shared/services/models/offer.model';


@Injectable({
  providedIn: 'root',
})

export class OfferService {
  private static SEARCH = '/search';
  private static PRINT = '/print';

  constructor(private httpService: HttpService) {
  }

  search(offerSearch: OfferSearch): Observable<Offer[]> {
    return this.httpService
      .paramsFrom(offerSearch)
      .get(EndPoints.OFFERS + OfferService.SEARCH);
  }

  create(newOffer: Offer): Observable<Offer> {
    return this.httpService
      .post(EndPoints.OFFERS, newOffer);
  }

  read(reference: string): Observable<Offer> {
    return this.httpService
      .get(EndPoints.OFFERS + '/' + reference);
  }

  update(oldOffer: string, updatedOffer: Offer): Observable<Offer> {
    return this.httpService
      .successful()
      .put(EndPoints.OFFERS + '/' + oldOffer, updatedOffer);
  }

  print(reference: string): Observable<void> {
    return this.httpService
      .pdf()
      .get(EndPoints.OFFERS + '/' + reference + OfferService.PRINT);
  }

  delete(reference: string): Observable<void> {
    return this.httpService
      .successful()
      .delete(EndPoints.OFFERS + '/' + reference);
  }
}


