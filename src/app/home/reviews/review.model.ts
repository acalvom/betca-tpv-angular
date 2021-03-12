import {Article} from '../shared/article.model';

export interface Review {
  id?: string;
  article: Article;
  score?: number;
  opinion?: string;
}

export interface OutReview {
  id: string;
  barcode: string;
  score: number;
  opinion?: string;
}

export function toOutReview(review: Review): OutReview {
  const outReview: OutReview = {
    id: review.id,
    barcode: review.article.barcode,
    score: review.score
  };
  if (review.opinion !== undefined) {
    outReview.opinion = review.opinion;
  }
  return outReview;
}
