import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {Offer} from './models/offer.model';

@Injectable({
  providedIn: 'root',
})

export class SharedOfferService {

  constructor(private httpService: HttpService) {
  }

  read(reference: string): Observable<Offer> {
    return this.httpService
      .get(EndPoints.OFFERS + '/' + reference);
  }
}
