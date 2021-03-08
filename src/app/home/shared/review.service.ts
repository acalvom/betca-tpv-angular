import { Injectable } from '@angular/core';
import {Review} from '../reviews/review.model';
import {Observable, of} from 'rxjs';
import {AuthService} from '@core/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Article} from './article.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private endPoint = EndPoints.REVIEWS;
  private articles: Article[];
  private reviews: Review[]; // Data mock
  constructor(private authService: AuthService, private snackBar: MatSnackBar) {
    this.articles = [
      { barcode: '#00000002', description: 'Mock most rated article', retailPrice: 30 },
      { barcode: '#00000001', description: 'Mock second most rated article', retailPrice: 5, stock: 15 },
      { barcode: '#00003201', description: 'Mock third most rated article', retailPrice: 305 },
      { barcode: '#00003202', description: 'Nothing', retailPrice: 305 },
      { barcode: '#00003203', description: 'Another article', retailPrice: 305 },
      { barcode: '#00003204', description: 'Another of another article', retailPrice: 305 },
      { barcode: '#00003205', description: 'Look at this article', retailPrice: 305 }
    ];
    this.reviews = [
      { article: this.articles[0], score: 2.5, opinion: 'Is ok but not that much' },
      { article: this.articles[1], score: 5, opinion: 'Best product' },
      { article: this.articles[2], score: 0.5, opinion: 'Really bad' },
      { article: this.articles[3] },
      { article: this.articles[4] },
      { article: this.articles[5] },
      { article: this.articles[6] }
    ];
  }
  create(review: Review): Observable<Review> {
    // Snackbar MOCK. Call httpService.successful() instead
    this.snackBar.open('Review created successfully', '', {
      duration: 2000
    });
    return of(review);
  }
  update(review: Review): Observable<Review> {
    // Snackbar MOCK. Call httpService.successful() instead
    this.snackBar.open('Review updated successfully', '', {
      duration: 2000
    });
    return of(review);
  }
  searchAll(): Observable<Review[]> {
    return of(this.reviews);
  }
  searchIfExists(review: Review): Observable<boolean> {
    if (review.article.barcode === '#00003202' || review.article.barcode === '#00003203' ||
        review.article.barcode === '#00003204' || review.article.barcode === '#00003205') {
      return of(false);
    } else {
      return of(true);
    }
  }
  searchTopRatedArticles(): Observable<Article[]> {
    return of([this.articles[0], this.articles[1], this.articles[2]]);
  }
}
