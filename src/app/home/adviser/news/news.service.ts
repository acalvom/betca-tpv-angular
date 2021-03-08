import { Injectable } from '@angular/core';
import {Article} from '../../shared/article.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  article1: Article = {barcode: '23222222', description: 'Mock of News articles', retailPrice: 250};
  article2: Article = {barcode: '23333333', description: 'Mock of News article more', retailPrice: 350};
  articlesNew = [this.article1, this.article2, this.article2, this.article1];
  serviceMock = of(this.articlesNew);

  constructor() { }

  searchNewArticleByDay(): Observable<Article[]>{
    return this.serviceMock;
  }
}
