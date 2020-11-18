import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../../core/http.service';
import {Provider} from './provider.model';
import {ProviderSearch} from './provider-search.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProviderService {
  static END_POINT = environment.REST_CORE + '/providers';
  static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  create(provider: Provider): Observable<Provider> {
    return this.httpService
      .post(ProviderService.END_POINT, provider);
  }

  read(company: string): Observable<Provider> {
    return this.httpService
      .get(ProviderService.END_POINT + '/' + company);
  }

  update(oldCompany: string, provider: Provider): Observable<Provider> {
    return this.httpService
      .put(ProviderService.END_POINT + '/' + oldCompany, provider);
  }

  search(providerSearch: ProviderSearch): Observable<Provider[]> {
    return this.httpService
      .paramsFrom(providerSearch)
      .get(ProviderService.END_POINT + ProviderService.SEARCH);
  }

}
