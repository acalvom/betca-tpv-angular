import {Component, OnInit} from '@angular/core';
import {ArticleSearch} from './article-search';
import {of} from 'rxjs';
import {StockService} from './stock-service';
import * as moment from 'moment';

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
  start: Date;
  end: Date;
  soldProducts = false;
  stock = false;
  stockForescat = false;
  stockEmpty = false;
  stockForescatError = false;

  constructor(private stockService: StockService) {
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
    const firstDate = this.setDateFormat(this.start);
    const secondDate = this.setDateFormat(this.end);
    this.articlesByDate = this.stockService.searchSoldProducts(firstDate, secondDate);
  }

  searchFutureStock(): void {
    if (this.stockArticle.barcode != null) {
      this.stockForescatError = false;
      this.stockForescat = true;
      this.stockFuture = this.stockService.searchFutureStock(this.stockArticle.barcode);
    } else {
      this.stockForescatError = true;
    }

  }

  searchEmptyStock(): void {
    this.stockEmpty = true;
    this.stockZero = this.stockService.searchEmptyStock(this.stockArticle.barcode);
  }

  setDateFormat(datePicker: Date): string {
    return moment(datePicker).format('YYYY-MM-DD[T]HH:mm:ss');

  }
}
