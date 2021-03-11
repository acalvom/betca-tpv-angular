import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../../shared/article.model';

@Injectable({
  providedIn: 'root'
})
export class PopularService {
  article1: Article = {barcode: '111111', description: 'First Observable article of Service', retailPrice: 12};
  article2: Article = {barcode: '222222', description: 'Second Observable article of Service', retailPrice: 23};
  popularArticles: Article[] = [this.article1, this.article2];

  constructor() { }
  searchPopularArticles(): Observable<Article[]>{
    return of(this.popularArticles);
  }
}
