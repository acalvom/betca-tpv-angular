import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {Offer} from './models/offer.model';
import {Article} from './models/article.model';
import {Tax} from './models/Tax';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})

export class SharedOfferService {

  articles: Article[] = [
    {
      barcode: '8400000000017',
      description: 'Zarzuela - Falda T2',
      retailPrice: 20,
      reference: 'zz-falda-T2',
      stock: 10,
      discontinued: false,
      registrationDate: new Date('2021-02-26 10:36:30'),
      providerCompany: 'pro1'
    },
    {
      barcode: '8400000000024',
      description: 'Zarzuela - Falda T4',
      retailPrice: 27.8,
      reference: 'zz-falda-T4',
      stock: 5,
      discontinued: false,
      registrationDate: new Date('2021-02-26 10:36:30'),
      providerCompany: 'pro1'
    },
    {
      barcode: '8400000000031',
      description: 'descrip-a3',
      retailPrice: 10.12,
      reference: 'ref-a3',
      stock: 8,
      tax: Tax.FREE,
      discontinued: false,
      registrationDate: new Date('2021-02-26 10:36:30'),
      providerCompany: 'pro1'
    }];
  offers: Offer[] =
    [{
      reference: '123abc',
      description: 'offer1',
      creationDate: new Date('2019-03-16'),
      expiryDate: new Date('2020-03-16'),
      discount: 10,
      articles: this.articles
    },
      {
        reference: '234bcd',
        description: 'offer2',
        creationDate: new Date('2019-03-16'),
        expiryDate: new Date('2020-08-08'),
        discount: 20,
        articles: []
      },
      {
        reference: '345cde',
        description: 'offer3',
        creationDate: new Date('2019-03-16'),
        expiryDate: new Date('2021-08-13'),
        discount: 30,
        articles: this.articles.slice(0, 1)
      }];

  constructor(private httpService: HttpService) {
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
}
