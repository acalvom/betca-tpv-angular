import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {Tag} from '../shared/services/models/tag.model';
import {TagSearch} from './tag-search.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  static SEARCH = '/search';
  tags = of([]);

  constructor(private httpService: HttpService) {
  }

  create(tag: Tag): Observable<Tag> {
    /*    return this.httpService
          .post(EndPoints.TAGS, tag);*/
    return this.tags.pipe(map(tags => {
        tags.push(tag);
        return tag;
      }
      )
    );
  }

  read(name: string): Observable<Tag> {
    /*    return this.httpService
          .get(EndPoints.TAGS + '/' + name);*/
    return this.tags.pipe(map(tags =>
      tags.find(tagItem => tagItem.name === name))
    );
  }

  update(oldName: string, tag: Tag): Observable<Tag> {
    /*    return this.httpService
          .successful()
          .put(EndPoints.TAGS + '/' + oldName, tag);*/
    return this.tags.pipe(map(tags => {
        const index = tags.findIndex(tagItem => tagItem.name === oldName);
        tags[index] = tag;
        return tag;
      }
      )
    );
  }

  search(tagSearch: TagSearch): Observable<Tag[]> {
    /*    return this.httpService
          .paramsFrom(tagSearch)
          .get(EndPoints.TAGS + TagService.SEARCH);*/
    return this.tags.pipe(map(tags =>
      tags.filter(tagItem =>
        (tagSearch.name === undefined || tagSearch.name === '' || tagItem.name === tagSearch.name) &&
        (tagSearch.description === undefined || tagSearch.description === '' || tagItem.description === tagSearch.description) &&
        (tagSearch.group === undefined || tagSearch.group === '' || tagItem.group === tagSearch.group)
      )));
  }
}
