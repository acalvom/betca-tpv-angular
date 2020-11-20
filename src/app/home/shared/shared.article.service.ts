import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../../core/http.service';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class SharedArticleService {
  static END_POINT = environment.REST_CORE + '/articles';
  static BARCODE = '/barcode';

  constructor(private httpService: HttpService) {
  }

  searchBarcode(barcode: string): Observable<string[]> {
    return this.httpService
      .param('barcode', barcode)
      .get(SharedArticleService.END_POINT + SharedArticleService.BARCODE)
      .pipe(
        map(response => response.barcodes)
      );
  }

}
