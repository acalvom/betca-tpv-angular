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

  articles: Article[] = [{barcode: '123', description: '...', retailPrice: 10, providerCompany: 'pro1'},
    {barcode: '234', description: '...', retailPrice: 20, providerCompany: 'pro2'},
    {barcode: '345', description: '...', retailPrice: 30, providerCompany: 'pro3'}];

  offers: Offer[] =
    [{
      reference: '123abc',
      description: 'offer1',
      expiryDate: new Date('2019-03-16'),
      discount: 10,
      articles: this.articles
    },
      {reference: '234bcd', description: 'offer2', expiryDate: new Date('2019-08-08'), discount: 20, articles: []},
      {
        reference: '345cde',
        description: 'offer3',
        expiryDate: new Date('2021-08-13'),
        discount: 30,
        articles: this.articles.slice(0, 1)
      }];

  constructor(private httpService: HttpService) {
  }

  search(offerSearch: OfferSearch): Observable<Offer[]> {
    return of(this.offers);

    /*return this.httpService
      .paramsFrom(offerSearch)
      .get(EndPoints.OFFERS + OfferService.SEARCH);*/
  }

  create(offer: Offer): Observable<Offer> {
    this.offers.push(offer);
    return of(offer);
    /*return this.httpService
      .post(EndPoints.OFFERS, offer);*/
  }

  read(reference: string): Observable<Offer> {
    return of({
      reference,
      description: this.offers.find(off => off.reference === reference).description,
      creationDate: this.offers.find(off => off.reference === reference).creationDate,
      expiryDate: this.offers.find(off => off.reference === reference).expiryDate,
      discount: this.offers.find(off => off.reference === reference).discount,
      articles: this.offers.find(off => off.reference === reference).articles
    });
    /*return this.httpService
      .get(EndPoints.OFFERS + '/' + reference);*/
  }

  update(oldOfferReference: string, offer: Offer): Observable<Offer> {
    this.offers.push(offer); // No es lo más óptimo pero es para visualizar el cambio
    return of(offer);
    /*return this.httpService
      .successful()
      .put(EndPoints.OFFERS + '/' + oldOffer, offer);*/
  }
}
