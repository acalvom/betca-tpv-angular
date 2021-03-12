import { Injectable } from '@angular/core';
import {OutReview, Review} from '../reviews/review.model';
import {Observable} from 'rxjs';
import {Article} from './article.model';
import {EndPoints} from '@shared/end-points';
import {HttpService} from '@core/http.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private static SEARCH = '/search';
  private static TOP_ARTICLES = '/topArticles';
  constructor(private httpService: HttpService) {
  }
  create(review: OutReview): Observable<Review> {
    return this.httpService
      .successful('Review created successfully')
      .post(EndPoints.REVIEWS, review);
  }
  update(review: OutReview): Observable<Review> {
    return this.httpService
      .successful('Review updated successfully')
      .put(EndPoints.REVIEWS + '/' + review.id, review);
  }
  searchAll(): Observable<Review[]> {
    return this.httpService
      .get(EndPoints.REVIEWS + ReviewService.SEARCH);
  }
  searchTopRatedArticles(): Observable<Article[]> {
    return this.httpService
      .get(EndPoints.REVIEWS + ReviewService.TOP_ARTICLES);
  }
}
