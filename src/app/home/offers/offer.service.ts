import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {Offer} from './offer.model';
import {Article} from '../shared/article.model';

@Injectable({
  providedIn: 'root',
})

export class OfferService {
  private static SEARCH = '/search';

  articles: Article[] = [
    {
      barcode: '8400000000017',
      description: 'Zarzuela - Falda T2',
      retailPrice: 20
    },
    {
      barcode: '8400000000024',
      description: 'Zarzuela - Falda T4',
      retailPrice: 27.8
    },
    {
      barcode: '8400000000031',
      description: 'descrip-a3',
      retailPrice: 10.12
    }];
  offers: Offer[] = [
    {
      reference: '123abc',
      description: 'offer1',
      expiryDate: new Date('2020-03-16'),
      discount: 10,
      articleBarcodes: this.articles.map(art => art.barcode)
    },
    {
      reference: '234bcd',
      description: 'offer2',
      expiryDate: new Date('2020-08-08'),
      discount: 20,
      articleBarcodes: []
    },
    {
      reference: '345cde',
      description: 'offer3',
      expiryDate: new Date('2021-08-13'),
      discount: 30,
      articleBarcodes: this.articles.slice(0, 1).map(art => art.barcode)
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
      articleBarcodes: this.offers.find(off => off.reference === reference).articleBarcodes
    });
    /*return this.httpService
      .get(EndPoints.OFFERS_HOME + '/' + reference);*/
  }

}


