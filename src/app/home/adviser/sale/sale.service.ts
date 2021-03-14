import {Injectable} from '@angular/core';
import {Article} from '../../shared/article.model';
import {TagService} from '../../shared/tag.service';
import {ShoppingBasketService} from '../../shared/shopping-basket.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  article1: Article = {barcode: '111111', description: 'First Observable article of Service', retailPrice: 12};
  article2: Article = {barcode: '222222', description: 'Second Observable article of Service', retailPrice: 23};
  popularArticles: Article[] = [this.article1, this.article2];

  constructor(private tagService: TagService, private shoppingBasketService: ShoppingBasketService) {
  }

  searchSaleArticles(): Observable<Article[]> {
    // return of(this.popularArticles);
    return this.tagService.read('sale').pipe(map(tag => tag.articles));
  }
}
