import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Article} from '../../shared/article.model';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class PopularService {
  static TOPARTICLES = '/topArticles';

  constructor(private httpService: HttpService) { }
  searchPopularArticles(): Observable<Article[]>{
    return this.httpService
      .get(EndPoints.REVIEWS + PopularService.TOPARTICLES);
  }
}
