import {Article} from '../shared/article.model';

export interface Review {
  id?: string;
  article: Article;
  score?: number;
  opinion?: string;
}
