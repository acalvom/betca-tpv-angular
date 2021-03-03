import { Component, OnInit } from '@angular/core';
import {ArticleSearch} from '../articles/article-search.model';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

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

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.closedAudit = false;
  }
  // tslint:disable-next-line:typedef
  saveAudit() {
    this.snackBar.open('Success saving', '', {
      duration: 3500
    });

    this.router.navigate(['/shop/cashier-opened']);

  }

  // tslint:disable-next-line:typedef
  closeAudit() {
    this.closedAudit = true;
  }

  // tslint:disable-next-line:typedef
  newAudit() {
    this.closedAudit = false;
  }
}
