import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {OfferShoppingCart} from '../../cashier-opened/shopping-cart/offer-shopping-cart.model';

@Injectable({
  providedIn: 'root',
})

export class SharedOfferService {

  articleBarcodes: string[] = ['8400000000017', '8400000000024', '8400000000031'];
  offers: OfferShoppingCart[] = [
    {
      reference: '123',
      expiryDate: new Date('2022-03-16'),
      discount: 10,
      articleBarcodes: this.articleBarcodes
    },
    {
      reference: '234',
      expiryDate: new Date('2022-08-08'),
      discount: 20,
      articleBarcodes: []
    },
    {
      reference: '345',
      expiryDate: new Date('2022-08-13'),
      discount: 30,
      articleBarcodes: this.articleBarcodes.slice(0, 1)
    },
    {
      reference: '456',
      expiryDate: new Date('2020-08-13'),
      discount: 40,
      articleBarcodes: this.articleBarcodes.slice(1, 3)
    }];

  constructor(private httpService: HttpService) {
  }

  read(reference: string): Observable<OfferShoppingCart> {
    return of({
      reference,
      expiryDate: this.offers.find(off => off.reference === reference).expiryDate,
      discount: this.offers.find(off => off.reference === reference).discount,
      articleBarcodes: this.offers.find(off => off.reference === reference).articleBarcodes
    });
    /*return this.httpService
      .get(EndPoints.OFFERS + '/' + reference);*/
  }
}
