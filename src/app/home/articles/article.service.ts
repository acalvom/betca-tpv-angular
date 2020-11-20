import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../../core/http.service';
import {Article} from '../shared/services/models/article.model';
import {ArticleSearch} from './article-search.model';
import {SharedArticleService} from '../shared/services/shared.article.service';

@Injectable()
export class ArticleService {
  static SEARCH = '/search';
  static UNFINISHED = '/unfinished';

  constructor(private httpService: HttpService) {
  }

  create(article: Article): Observable<Article> {
    return this.httpService
      .post(SharedArticleService.END_POINT, article);
  }

  read(barcode: string): Observable<Article> {
    return this.httpService
      .get(SharedArticleService.END_POINT + '/' + barcode);
  }

  update(oldBarcode: string, article: Article): Observable<Article> {
    return this.httpService
      .successful()
      .put(SharedArticleService.END_POINT + '/' + oldBarcode, article);
  }

  search(articleSearch: ArticleSearch): Observable<Article[]> {
    return this.httpService
      .paramsFrom(articleSearch)
      .get(SharedArticleService.END_POINT + ArticleService.SEARCH);
  }

  searchUnfinished(): Observable<Article[]> {
    return this.httpService
      .get(SharedArticleService.END_POINT + ArticleService.UNFINISHED);
  }
}
