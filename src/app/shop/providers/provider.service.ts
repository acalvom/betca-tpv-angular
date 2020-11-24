import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {SharedProviderService} from '../shared/services/shared.provider.service';
import {Provider} from './provider.model';
import {ProviderSearch} from './provider-search.model';

@Injectable()
export class ProviderService {
  static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  create(provider: Provider): Observable<Provider> {
    return this.httpService
      .post(SharedProviderService.END_POINT, provider);
  }

  read(company: string): Observable<Provider> {
    return this.httpService
      .get(SharedProviderService.END_POINT + '/' + company);
  }

  update(oldCompany: string, provider: Provider): Observable<Provider> {
    return this.httpService
      .successful()
      .put(SharedProviderService.END_POINT + '/' + oldCompany, provider);
  }

  search(providerSearch: ProviderSearch): Observable<Provider[]> {
    return this.httpService
      .paramsFrom(providerSearch)
      .get(SharedProviderService.END_POINT + ProviderService.SEARCH);
  }

}
