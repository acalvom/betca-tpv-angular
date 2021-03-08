import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {OfferSearch} from './offer-search.model';
import {Offer} from './offer-creation-updating.model';
import {OfferMenu} from './offer-menu.model';


@Injectable({
  providedIn: 'root',
})

export class OfferService {
  private static SEARCH = '/search';

  articleBarcodes: string[] = ['8400000000017', '8400000000024', '8400000000031'];
  newOffers: Offer[] = [
    {
      reference: '123abc',
      description: 'offer1',
      expiryDate: new Date('2020-03-16'),
      discount: 10,
      articleBarcodes: this.articleBarcodes
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
      articleBarcodes: this.articleBarcodes.slice(0, 1)
    }];
  offers: OfferMenu[] = [
    {
      reference: '123abc',
      description: 'offer1',
      expiryDate: new Date('2020-03-16'),
      discount: 10,
    },
    {
      reference: '234bcd',
      description: 'offer2',
      expiryDate: new Date('2020-08-08'),
      discount: 20,
    },
    {
      reference: '345cde',
      description: 'offer3',
      expiryDate: new Date('2021-08-13'),
      discount: 30,
    }];

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
    console.log(updatedOffer);
    return this.httpService
      .successful()
      .put(EndPoints.OFFERS + '/' + oldOffer, updatedOffer);
  }

  printOffer(reference: string): Observable<void> {
    return of(console.log('Implementado'));
    /*return this.httpService
      .pdf()
      .get(EndPoints.OFFERS + '/' + reference);*/
  }

  deleteOffer(reference: string): Observable<void> {
    const offerToDelete = this.offers.find(off => off.reference === reference);
    const index = this.offers.indexOf(offerToDelete);
    if (index > -1) {
      this.offers.splice(index, 1);
    }
    this.search(new OfferSearch());
    return of(console.log('Offer ' + reference + ' deleted successfully'));
    /*return this.httpService
      .successful()
      .delete(EndPoints.OFFERS + '/' + reference);*/
  }
}


