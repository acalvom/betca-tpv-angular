import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../../core/http.service';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

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
        map(dto => dto.companies)
      );
  }

}
