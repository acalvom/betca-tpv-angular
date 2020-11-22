import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../../../core/http.service';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

import {Article} from './models/article.model';

@Injectable()
export class SharedArticleService {
  static END_POINT = environment.REST_CORE + '/articles';
  static BARCODE = '/barcode';

  constructor(private httpService: HttpService) {
  }

  read(barcode: string): Observable<Article> {
    return this.httpService
      .get(SharedArticleService.END_POINT + '/' + barcode);
  }

  create(article: Article): Observable<Article> {
    return this.httpService
      .post(SharedArticleService.END_POINT, article);
  }

  searchBarcode(barcode: string): Observable<number[]> {
    return this.httpService
      .param('barcode', barcode)
      .get(SharedArticleService.END_POINT + SharedArticleService.BARCODE)
      .pipe(
        map(response => response.barcodes)
      );
  }

}
