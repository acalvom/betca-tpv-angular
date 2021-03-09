import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {ArticleSizeFamily} from '../shared/services/models/article-size-family.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesSizeFamilyCreationService {
  static SEARCH = '/search';
  static UNFINISHED = '/unfinished';

  constructor(private httpService: HttpService) {
  }

  create(articleSizeFamily: ArticleSizeFamily): Observable<void> {
    return of(console.log('Success'));
    // return this.httpService
    //   .post(EndPoints.ARTICLES_SIZE_FAMILY, articleSizeFamily);
  }
}
