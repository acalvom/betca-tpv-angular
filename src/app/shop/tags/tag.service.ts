import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {Tag} from '../shared/services/models/tag.model';
import {TagSearch} from './tag-search.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  create(tag: Tag): Observable<Tag> {
    return this.httpService
      .post(EndPoints.TAGS, tag);
  }

  read(name: string): Observable<Tag> {
    return this.httpService
      .get(EndPoints.TAGS + '/' + name);
  }

  update(oldName: string, tag: Tag): Observable<Tag> {
    return this.httpService
      .successful()
      .put(EndPoints.TAGS + '/' + oldName, tag);
  }

  search(tagSearch: TagSearch): Observable<Tag[]> {
    return this.httpService
      .paramsFrom(tagSearch)
      .get(EndPoints.TAGS + TagService.SEARCH);
  }
}
