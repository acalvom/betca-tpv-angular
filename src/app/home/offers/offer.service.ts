import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {Offer} from './offer.model';

@Injectable({
  providedIn: 'root',
})

export class OfferService {
  private static SEARCH = '/search';

  articleDescriptions: string[] = ['Zarzuela - Falda T2', 'Zarzuela - Falda T4', 'descrip-a3'];
  offers: Offer[] = [
    {
      reference: '123',
      description: 'offer1',
      expiryDate: new Date('2022-03-16'),
      discount: 10,
      articleDescriptions: this.articleDescriptions
    },
    {
      reference: '234',
      description: 'offer2',
      expiryDate: new Date('2022-08-08'),
      discount: 20,
      articleDescriptions: this.articleDescriptions.slice(1, 3)
    }];

  constructor(private httpService: HttpService) {
  }

  searchAll(): Observable<Offer[]> {
    return of(this.offers);
    /*return this.httpService
      .get(EndPoints.OFFERS_HOME + OfferService.SEARCH);*/
  }

  read(reference: string): Observable<Offer> {
    return of({
      reference,
      description: this.offers.find(off => off.reference === reference).description,
      expiryDate: this.offers.find(off => off.reference === reference).expiryDate,
      discount: this.offers.find(off => off.reference === reference).discount,
      articleDescriptions: this.offers.find(off => off.reference === reference).articleDescriptions
    });
    /*return this.httpService
      .get(EndPoints.OFFERS_HOME + '/' + reference);*/
  }

}


