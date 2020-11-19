import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../../core/http.service';
import {environment} from '../../../environments/environment';
import {Article} from './article.model';
import {ArticleSearch} from './article-search.model';
import {map} from 'rxjs/operators';
import {Barcodes} from './barcodes.model';

@Injectable()
export class ArticleService {
  static END_POINT = environment.REST_CORE + '/articles';
  static SEARCH = '/search';
  static BARCODE = '/barcode';

  constructor(private httpService: HttpService) {
  }

  create(article: Article): Observable<Article> {
    return this.httpService
      .post(ArticleService.END_POINT, article);
  }

  read(barcode: string): Observable<Article> {
    return this.httpService
      .get(ArticleService.END_POINT + '/' + barcode);
  }

  update(oldBarcode: string, article: Article): Observable<Article> {
    return this.httpService
      .put(ArticleService.END_POINT + '/' + oldBarcode, article);
  }

  search(articleSearch: ArticleSearch): Observable<Article[]> {
    return this.httpService
      .paramsFrom(articleSearch)
      .get(ArticleService.END_POINT + ArticleService.SEARCH);
  }

  searchByBarcode(barcode: string): Observable<string[]> {
    return this.httpService
      .param('barcode', barcode)
      .get(ArticleService.END_POINT + ArticleService.BARCODE)
      .pipe(
        map((dto: Barcodes) => dto.barcodes)
      );
  }
}
