import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {OfferSearch} from './offer-search.model';
import {Offer} from './offer.model';
import {Article} from '../shared/services/models/article.model';


@Injectable({
  providedIn: 'root',
})

export class OfferService {
  private static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  /*  articles: Article[] = [{barcode: '123', description: '...', retailPrice: 10, providerCompany: 'pro1'},
      {barcode: '234', description: '...', retailPrice: 20, providerCompany: 'pro2'},
      {barcode: '345', description: '...', retailPrice: 30, providerCompany: 'pro3'}];*/

  search(offerSearch: OfferSearch): Observable<Offer[]> {
    return of([
      {reference: '123abc', description: 'offer1', expiryDate: new Date('2019-03-16'), discount: 10},
      {reference: '234bcd', description: 'offer2', expiryDate: new Date('2019-08-08'), discount: 20},
      {reference: '345cde', description: 'offer3', expiryDate: new Date('2021-08-13'), discount: 30}
    ]);

    /*return this.httpService
      .paramsFrom(offerSearch)
      .get(EndPoints.OFFERS + OfferService.SEARCH);*/
  }
}
