import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {Tag} from './tag.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  read(name: string): Observable<Tag> {
    return this.httpService
      .get(EndPoints.TAGS + '/' + name);
  }


}
