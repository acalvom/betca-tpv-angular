import { Component, OnInit } from '@angular/core';
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
  articlesByDate =  of([]);
  title = 'Stock management';
  start: any;
  end: any;
  articleFuture: any;

  constructor(private dialog: MatDialog, private stockService: StockService) {
    this.stockArticle = {};
  }

  ngOnInit(): void {
  }
  searchByStock(): void {
    this.articles = this.stockService.searchStock(this.stockArticle.stock);
  }
  searchByDate(): void {
    //
    const firstDate = new Date(this.start);
    const secondDate = new Date(this.start);
    this.articlesByDate = this.stockService.searchByDate(firstDate, secondDate);
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
