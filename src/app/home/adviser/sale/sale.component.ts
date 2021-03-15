import {Article} from '../../shared/article.model';
import {ShoppingBasketService} from '../../shared/shopping-basket.service';
import {Component} from '@angular/core';
import {SaleService} from './sale.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {
  saleArticles: Article[] = [];

  constructor(private saleService: SaleService, private shoppingBasketService: ShoppingBasketService) {
    this.searchSaleArticles();
  }

  searchSaleArticles(): void {
    this.saleService.searchSaleArticles()
      .subscribe(articles => this.saleArticles = articles);
  }

  addArticle(article: Article): void {
    this.shoppingBasketService.addArticle(article);
  }
}
