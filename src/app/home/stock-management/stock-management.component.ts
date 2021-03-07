import {Component, OnInit} from '@angular/core';
import {ArticleSearch} from './article-search';
import {of} from 'rxjs';
import {StockService} from './stock-service';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Article} from '../shared/article.model';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css']
})
export class StockManagementComponent implements OnInit {

  stockArticle: ArticleSearch;
  articles = of([]);
  articlesByDate = of([]);
  title = 'Stock management';
  start: any;
  end: any;
  soldProducts = false;
  stock = false;

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

  read(article: Article): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Stock Details',
        object: this.stockService.read(article.barcode)
      }
    });
  }
}
