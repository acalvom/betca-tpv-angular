import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {Tag} from './tag.model';
import {map} from 'rxjs/operators';
import {Article} from './article.model';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  static SEARCH = '/search';
  static UNFINISHED = '/unfinished';
  tags = of([
    {
      name: 'popular',
      group: 'group 1',
      description: 'popular articles',
      articles: [{barcode: '111111', description: 'Article 1', retailPrice: 12},
                {barcode: '222222', description: 'Article 2', retailPrice: 23}]
    },
    {
      name: 'new',
      group: 'group 2',
      description: 'popular articles',
      articles: [{barcode: '111111', description: 'Article 1', retailPrice: 12},
        {barcode: '222222', description: 'Article 2', retailPrice: 23}]
    },
    {
      name: 'sale',
      group: 'group 3',
      description: 'popular articles',
      articles: [{barcode: '111111', description: 'Article 1', retailPrice: 6},
        {barcode: '222222', description: 'Article 2', retailPrice: 13}]
    }
  ]);

  constructor(private httpService: HttpService) {
  }

  read(name: string): Observable<Tag> {
    /*    return this.httpService
          .get(EndPoints.TAGS + '/' + name);*/
    return this.tags.pipe(map(tags =>
      tags.find(tagItem => tagItem.name === name))
    );
  }



}
