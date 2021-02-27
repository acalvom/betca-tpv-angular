import { Injectable } from '@angular/core';
import {Review} from './review.model';
import {Observable, of} from 'rxjs';
import {AuthService} from '@core/auth.service';
import {User} from '@core/user.model';
import {Role} from '@core/role.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  // Data mock
  private reviews: Review[];
  constructor(authService: AuthService) {
    const user: User = {
      mobile: authService.getMobile(),
      name: authService.getName(),
      role: Role.CUSTOMER,
      token: authService.getToken()
    };
    this.reviews = [
      {
        user, articleBarcode: '#00000001', score: 2.5, opinion: 'Is ok but not that much'
      },
      {
        user, articleBarcode: '#00000002', score: 5, opinion: 'Best product'
      },
      {
        user, articleBarcode: '#00000003', score: 0, opinion: 'Really bad'
      },
    ];
  }
  create(review: Review): Observable<Review> {
    this.reviews.push(review);
    return of(review);
  }
  searchAll(): Observable<Review[]> {
    return of(this.reviews);
  }
}
