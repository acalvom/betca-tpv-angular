import { Component, OnInit } from '@angular/core';
import {ArticleSearch} from '../articles/article-search.model';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {StockAuditService} from './stock-audit.service';

@Component({
  selector: 'app-stock-audit',
  templateUrl: './stock-audit.component.html',
  styleUrls: ['./stock-audit.component.css']
})
export class StockAuditComponent implements OnInit {
  displayedColumnsAudit = ['id', 'barcode', 'description', 'retailPrice', 'stock', 'realStock'];
  displayedColumnsNotAudit = ['id', 'barcode', 'description', 'retailPrice', 'stock'];
  displayedColumnsArticleLoss = ['id', 'barcode', 'description', 'amount', 'retailPrice'];
  articleSearch: ArticleSearch;
  title = 'Stock audit';
  articles = of([]);
  notAuditedArticles = of([]);
  articlesLoss = of([]);
  total = 300;
  closedAudit = false;

  constructor(private snackBar: MatSnackBar, private router: Router, private stockAuditService: StockAuditService) { }

  ngOnInit(): void {
    this.closedAudit = false;
    this.articles = this.stockAuditService.readAll();
  }
  // tslint:disable-next-line:typedef
  saveAudit() {
    this.snackBar.open('Success saving', '', {
      duration: 3500
    });

  }

  closeAudit(): void {
    this.closedAudit = true;
    // Commented but necessary when the API works
    // this.stockAuditService.closeAudit('TEST-ID', ['8904598349435'], articleLossArray);
    this.notAuditedArticles = this.stockAuditService.getNotAudit('TEST-ID');
    this.articlesLoss = this.stockAuditService.getLosses('TEST-ID');
    //
  }

  newAudit(): void {
    this.closedAudit = false;
  }
}
