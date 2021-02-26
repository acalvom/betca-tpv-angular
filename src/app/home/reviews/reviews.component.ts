import { Component } from '@angular/core';
import {Review} from './review.model';
import {ReviewService} from './review.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  constructor(private reviewsService: ReviewService) {
  }
  searchAll(): Observable<Review[]> {
    return this.reviewsService.searchAll();
  }
  saveReview(review: Review): void {
    // Modificating mocks instead of calling API.
    // Create or update?
    // this.reviewsService.create(review);
  }
}
