import { Injectable } from '@angular/core';
import {Review} from '../reviews/review.model';
import {Observable, of} from 'rxjs';
import {AuthService} from '@core/auth.service';
import {User} from '@core/user.model';
import {Role} from '@core/role.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Article} from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  // Data mock
  private reviews: Review[];
  private user: User = {
    mobile: this.authService.getMobile(),
    name: this.authService.getName(),
    role: Role.CUSTOMER,
    token: this.authService.getToken()
  };
  constructor(private authService: AuthService, private snackBar: MatSnackBar) {
    this.reviews = [
      { user: this.user, articleBarcode: '#00000001', score: 2.5, opinion: 'Is ok but not that much' },
      { user: this.user, articleBarcode: '#00000002', score: 5, opinion: 'Best product' },
      { user: this.user, articleBarcode: '#00000003', score: 0.5, opinion: 'Really bad' },
      { user: this.user, articleBarcode: '#00000004' },
      { user: this.user, articleBarcode: '#00000006' },
      { user: this.user, articleBarcode: '#00000007' },
      { user: this.user, articleBarcode: '#00000009' }
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
    if (review.articleBarcode === '#00000004' || review.articleBarcode === '#00000006' ||
        review.articleBarcode === '#00000007' || review.articleBarcode === '#00000009') {
      return of(false);
    } else {
      return of(true);
    }
  }
  searchTopRatedArticles(): Observable<Article[]> {
    return of([
      {
        barcode: '#00000002',
        description: 'Mock most rated article',
        retailPrice: 30
      },
      {
        barcode: '#00000001',
        description: 'Mock second most rated article',
        retailPrice: 5,
        stock: 15
      },
      {
        barcode: '#00003208',
        description: 'Mock third most rated article',
        retailPrice: 305
      }
    ]);
  }
}
