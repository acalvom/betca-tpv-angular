import {Component} from '@angular/core';
import {Article} from '../../shared/article.model';
import {PopularService} from './popular.service';
import {ShoppingBasketService} from '../../shared/shopping-basket.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  popularArticles: Article[] = [];

  constructor(private popularService: PopularService, private shoppingBasketService: ShoppingBasketService) {
    this.searchPopularArticles();
  }

  searchPopularArticles(): void {
    this.popularService.searchPopularArticles()
      .subscribe(articles => this.popularArticles = articles);
  }

  addArticle(article: Article): void {
    this.shoppingBasketService.addArticle(article);
  }
}
