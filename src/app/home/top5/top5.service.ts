import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {Article} from '../shared/article.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class Top5Service {
  static TOP5 = '/top5';

  constructor(private httpService: HttpService) { }
  searchTop5Articles(): Observable<Article[]>{
    return this.httpService
      .get(EndPoints.ARTICLES + Top5Service.TOP5);
  }
}
