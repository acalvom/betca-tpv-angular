import { Component } from '@angular/core';
import {Review} from './review.model';
import {ReviewService} from './review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews: Review[];
  constructor(private reviewsService: ReviewService) {
    this.searchAll();
  }
  searchAll(): void {
    this.reviewsService.findAll().subscribe(data => {
      this.reviews = data;
    });
  }
  saveReview(review: Review): void {
    // Modificating mocks instead of calling API.
    // const index = this.reviews.findIndex(r => r.articleBarcode === review.articleBarcode);
    // this.reviews[index] = review;
  }
}
