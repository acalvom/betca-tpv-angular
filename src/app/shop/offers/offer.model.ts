import {Article} from '../shared/services/models/article.model';

export interface Offer {
  reference: string;
  description: string;
  creationDate: Date;
  expiryDate: Date;
  discount: number;
  articles: Article[];
}
