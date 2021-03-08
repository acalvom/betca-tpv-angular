import { Injectable } from '@angular/core';
import {Article} from '../../shared/article.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  article1: Article = {barcode: '222222', description: 'News articles', retailPrice: 20};
  article2: Article = {barcode: '333333', description: 'News article more', retailPrice: 30};
  articlesNew = [this.article1, this.article2, this.article1, this.article2, this.article1];

  constructor() { }

  searchNewArticleByDay(): Article[]{
    return this.articlesNew;
  }
}
