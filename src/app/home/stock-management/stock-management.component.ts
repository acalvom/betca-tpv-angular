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
  title = 'Stock manager';
  start: Date;
  end: Date;
  soldProducts = false;
  stock = false;
  stockForescat = false;
  stockEmpty = false;
  stockForescatError = false;
  soldProductsError = false;
  barcodeEmpty: string;
  stockEmptyError = false;

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

    if (this.start != null && this.end != null) {
      const firstDate = this.setDateFormat(this.start);
      const secondDate = this.setDateFormat(this.end);
      this.soldProductsError = false;
      this.soldProducts = true;
      this.articlesByDate = this.stockService.searchSoldProducts(firstDate, secondDate);
    } else {
      this.soldProductsError = true;
      this.soldProducts = false;
    }
  }

  searchFutureStock(): void {
    if (this.stockArticle.barcode != null) {
      this.stockForescatError = false;
      this.stockForescat = true;
      this.stockFuture = this.stockService.searchFutureStock(this.stockArticle.barcode);
    } else {
      this.stockForescatError = true;
      this.stockForescat = false;
    }
  }

  searchEmptyStock(): void {
    if (this.barcodeEmpty != null) {
      this.stockEmptyError = false;
      this.stockEmpty = true;
      this.stockZero = this.stockService.searchEmptyStock(this.barcodeEmpty);
    } else {
      this.stockEmptyError = true;
      this.stockEmpty = false;
    }
  }

  setDateFormat(datePicker: Date): string {
    return moment(datePicker).format('YYYY-MM-DD[T]HH:mm:ss');
  }
}
