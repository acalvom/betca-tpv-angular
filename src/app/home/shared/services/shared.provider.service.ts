import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';
import {HttpService} from '../../../core/http.service';

@Injectable()
export class SharedProviderService {
  static END_POINT = environment.REST_CORE + '/providers';
  static COMPANY = '/company';

  constructor(private httpService: HttpService) {
  }

  searchCompanies(company: string): Observable<string[]> {
    return this.httpService
      .param('company', company)
      .get(SharedProviderService.END_POINT + SharedProviderService.COMPANY)
      .pipe(
        map(response => response.companies)
      );
  }

}
