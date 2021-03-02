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
  title = 'Stock management';
  constructor(private dialog: MatDialog, private stockService: StockService) {
    this.stockArticle = {};
  }

  ngOnInit(): void {
  }
  searchStock(): void {
    this.articles = this.stockService.searchStock(this.stockArticle.stock);
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
