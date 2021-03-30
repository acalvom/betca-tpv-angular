import {Component, OnInit} from '@angular/core';
import {ArticleSearch} from './article-search';
import {of} from 'rxjs';
import {StockService} from './stock-service';
import * as moment from 'moment';
import {ArticleStock} from './article-stock';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css']
})
export class StockManagementComponent implements OnInit {

  stockArticleEmpty: ArticleStock;
  stockProduct: number;
  barcodeFuture: string;
  barcodeEmpty: string;
  articles = of([]);
  articlesByDate = of([]);
  stockFuture = of();
  title = 'Stock manager';
  start: Date;
  end: Date;
  soldProducts = false;
  stock = false;
  stockForescat = false;
  stockEmpty = false;
  stockForescatError = false;
  soldProductsError = false;
  stockEmptyError = false;
  stockNoEmpty = false;
  stockError = false;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {}

  searchByStock(): void {
    if (this.stockProduct != null) {
      this.stock = true;
      this.stockError = false;
      this.articles = this.stockService.searchStock(this.stockProduct);
    } else {
      this.stock = false;
      this.stockError = true;
    }
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
    if (this.barcodeFuture != null) {
      this.stockForescatError = false;
      this.stockForescat = true;
      this.stockFuture = this.stockService.searchFutureStock(this.barcodeFuture);
    } else {
      this.stockForescatError = true;
      this.stockForescat = false;
    }
  }

  searchEmptyStock(): void {
    if (this.barcodeEmpty != null) {
      this.stockService.searchEmptyStock(this.barcodeEmpty)
        .subscribe(stock => {
          if (stock.dateStockEmpty != null) {
            this.stockArticleEmpty = stock;
            this.stockEmptyError = false;
            this.stockEmpty = true;
            this.stockNoEmpty = false;
          } else {
            this.stockNoEmpty = true;
            this.stockEmpty = false;
            this.stockEmptyError = false;
          }
        });
    } else {
      this.stockEmptyError = true;
      this.stockEmpty = false;
      this.stockNoEmpty = false;
    }
  }

  setDateFormat(datePicker: Date): string {
    return moment(datePicker).format('YYYY-MM-DD[T]HH:mm:ss');
  }
}
