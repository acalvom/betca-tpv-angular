import { Injectable } from '@angular/core';
import {Article} from '../../shared/article.model';
import {Observable} from 'rxjs';
import { HttpService } from '@core/http.service';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  static NEWS = '/news';

  constructor(private httpService: HttpService) { }

  searchNewArticleByDay(): Observable<Article[]>{
    return this.httpService
      .get(EndPoints.ARTICLES + NewsService.NEWS);
  }
}
