import {Component, OnInit} from '@angular/core';
import {ArticleSearch} from './article-search';
import {of} from 'rxjs';
import {StockService} from './stock-service';
import {MatDialog} from '@angular/material/dialog';
import {ArticleStock} from './article-stock';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css']
})
export class StockManagementComponent implements OnInit {

  stockArticle: ArticleSearch;
  articles = of([]);
  articlesByDate = of([]);
  stockFuture = of();
  stockZero = of();
  title = 'Stock management';
  start: any;
  end: any;
  soldProducts = false;
  stock = false;
  stockForescat = false;
  stockEmpty = false;

  constructor(private dialog: MatDialog, private stockService: StockService) {
    this.stockArticle = {};
  }

  ngOnInit(): void {
  }

  searchByStock(): void {
    this.stock = true;
    this.articles = this.stockService.searchStock(this.stockArticle.stock);
  }

  searchSoldProducts(): void {
    this.soldProducts = true;
    const firstDate = new Date(this.start);
    const secondDate = new Date(this.start);
    this.articlesByDate = this.stockService.searchSoldProducts(firstDate, secondDate);
  }

  searchFutureStock(): void {
    this.stockForescat = true;
    this.stockFuture = this.stockService.searchFutureStock(this.stockArticle.barcode);

  }

  searchEmptyStock(): void {
    this.stockEmpty = true;
    this.stockZero = this.stockService.searchEmptyStock(this.stockArticle.barcode);
  }
}
