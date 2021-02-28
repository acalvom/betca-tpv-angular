import { Injectable } from '@angular/core';
import {Review} from './review.model';
import {Observable, of} from 'rxjs';
import {AuthService} from '@core/auth.service';
import {User} from '@core/user.model';
import {Role} from '@core/role.model';
import {MatSnackBar} from '@angular/material/snack-bar';

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
      { user: this.user, articleBarcode: '#00000003', score: 0, opinion: 'Really bad' },
      { user: this.user, articleBarcode: '#00000004', score: 0, opinion: '' },
      { user: this.user, articleBarcode: '#00000006', score: 0, opinion: '' },
      { user: this.user, articleBarcode: '#00000007', score: 0, opinion: '' },
      { user: this.user, articleBarcode: '#00000009', score: 0, opinion: '' }
    ];
  }
  update(review: Review): Observable<Review> {
    // Call API to create or update Review
    // Snackbar MOCK. Call httpService.successful() instead
    this.snackBar.open('Review updated successfully', '', {
      duration: 2000
    });
    return of(review);
  }
  searchAll(): Observable<Review[]> {
    return of(this.reviews);
  }
}
