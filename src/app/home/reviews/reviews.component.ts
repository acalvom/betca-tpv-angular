import {Component, OnInit} from '@angular/core';
import {OutReview, Review, toOutReview} from './review.model';
import {ReviewService} from '../shared/review.service';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<Review[]>;
  constructor(private reviewsService: ReviewService, private snackBar: MatSnackBar) {
  }
  ngOnInit(): void{
    this.reviews = this.searchAll();
  }
  create(review: Review): void {
    if (review.score === undefined || review.score === 0) {
      this.snackBar.open('Please, insert a score before saving the review.', '', {
        duration: 3000
      });
    } else {
      this.reviewsService.create(toOutReview(review))
        .subscribe(inReview => this.reviews = this.searchAll());
    }
  }
  update(review: Review): void {
    this.reviewsService.update(toOutReview(review))
      .subscribe(inReview => {
        review.opinion = inReview.opinion;
        review.score = inReview.score;
      });
  }
  searchAll(): Observable<Review[]> {
    return this.reviewsService.searchAll();
  }
}
