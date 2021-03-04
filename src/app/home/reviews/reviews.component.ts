import { Component } from '@angular/core';
import {Review} from './review.model';
import {ReviewService} from '../shared/review.service';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  constructor(private reviewsService: ReviewService, private snackBar: MatSnackBar) {
  }
  create(review: Review): void {
    if (review.score === undefined || review.score === 0) {
      this.snackBar.open('Please, insert a score before saving the review.', '', {
        duration: 3000
      });
    } else {
      this.reviewsService.create(review);
    }
  }
  update(review: Review): void {
    this.reviewsService.update(review);
  }
  searchAll(): Observable<Review[]> {
    return this.reviewsService.searchAll();
  }
  searchIfExists(review: Review): Observable<boolean> {
    return this.reviewsService.searchIfExists(review);
  }
}
