import {Article} from '../shared/article.model';

export interface Offer {
  reference: string;
  description: string;
  expiryDate: Date;
  discount: number;
  articles: Article[];
}
