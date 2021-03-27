import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {StockAuditService} from './stock-audit.service';
import {StockAudit} from '../shared/services/models/stock-audit.model';
import {Article} from '../shared/services/models/article.model';

@Component({
  selector: 'app-stock-audit',
  templateUrl: './stock-audit.component.html',
  styleUrls: ['./stock-audit.component.css']
})
export class StockAuditComponent implements OnInit {
  displayedColumnsAudit = ['id', 'barcode', 'description', 'stock', 'realStock'];
  displayedColumnsNotAudit = ['id', 'barcode', 'description', 'stock'];
  displayedColumnsArticleLoss = ['id', 'barcode', 'amount'];
  title = 'Stock audit';
  auditArticles = of([]);
  notAuditedArticles = [];
  articlesLoss = [];
  lossValue: number;
  closedAudit = false;
  stockAudit: StockAudit;
  arrRealStock: number[];
  barcodesWithoutAudit: string[];

  constructor(private snackBar: MatSnackBar, private router: Router, private stockAuditService: StockAuditService) { }

  ngOnInit(): void {
    this.initAudit();
  }

  initAudit(): void {
    this.stockAudit = null;
    this.closedAudit = false;
    this.auditArticles = this.stockAuditService.search({});

    this.auditArticles.subscribe((articles) => {
      this.resetRealStockArray(articles);
    });

    this.stockAuditService.readSingleOpenedAudit()
      .subscribe((stockAuditFound) => {
        if (stockAuditFound == null){
          this.stockAuditService.createAudit({
            creationDate: new Date(),
            closeDate: null,
            barcodesWithoutAudit: this.barcodesWithoutAudit,
            lossValue: null,
            losses: []
          }).subscribe((auditCreated) => {
            this.stockAudit = auditCreated;
            this.assignSavedRealStockValues(auditCreated);
          });
        } else {
          this.stockAudit = stockAuditFound;
          console.log(stockAuditFound.barcodesWithoutAudit);
          console.log(stockAuditFound.losses);
          console.log(stockAuditFound.id);
          this.assignSavedRealStockValues(stockAuditFound);
        }
      });
  }

  resetRealStockArray(arr: Article[]): void {
    this.arrRealStock = [];
    this.barcodesWithoutAudit = [];
    // tslint:disable-next-line:forin
    for (let i in arr) {
      this.arrRealStock.push(null);
      this.barcodesWithoutAudit.push(arr[i].barcode);
    }
  }

  saveAudit(): void {
    this.auditArticles.subscribe((articles) => {
      let barcodesWithoutAudit = [];
      let losses = [];
      for (let i in articles) {
        let currentArticle = articles[i];
        let currentRealStock = this.arrRealStock[i];

        if (currentRealStock == null) {
          barcodesWithoutAudit.push(currentArticle.barcode);
        } else {
          if (currentRealStock < currentArticle.stock) {
            let left = currentArticle.stock - currentRealStock;
            losses.push({barcode: currentArticle.barcode, amount: left});
          }
        }
      }
      this.stockAudit.barcodesWithoutAudit = barcodesWithoutAudit;
      this.stockAudit.losses = losses;
      this.stockAuditService.saveAudit(this.stockAudit)
        .subscribe(() => {
            this.snackBar.open('Success saving', '', {
              duration: 3500
            });
          }
        );
    });
  }

  closeAudit(): void {
    this.auditArticles.subscribe((articles) => {
      let barcodesWithoutAudit = [];
      let losses = [];
      let lossValue = 0;
      for (let i in articles) {
        let currentArticle = articles[i];
        let currentRealStock = this.arrRealStock[i];

        if (currentRealStock == null) {
          barcodesWithoutAudit.push(currentArticle.barcode);
        } else {
          if (currentRealStock < currentArticle.stock) {
            let left = currentArticle.stock - currentRealStock;
            // DONT HAVE PROPERTY RETAIL PRICE READING ARTICLES. SO CALCULATE IT IN BACKEND. IN OTHER CASE HAVE TO READ EACH ARTICLE DETAILS
            //lossValue = lossValue + (left * currentArticle.retailPrice);
            losses.push({barcode: currentArticle.barcode, amount: left});
          }
        }
      }
      this.stockAudit.barcodesWithoutAudit = barcodesWithoutAudit;
      this.stockAudit.losses = losses;
      this.stockAudit.closeDate = new Date();
      //this.stockAudit.lossValue = lossValue;
      this.stockAuditService.closeAudit(this.stockAudit)
        .subscribe((stockAuditClosed) => {
            this.notAuditedArticles = stockAuditClosed.barcodesWithoutAudit;
            this.articlesLoss = stockAuditClosed.losses;
            this.lossValue = stockAuditClosed.lossValue;
            this.closedAudit = true;
            this.snackBar.open('Success audit closure', '', {
              duration: 3500
            });
          }
        );
    });
  }

  assignSavedRealStockValues(stockAudit: StockAudit): void {
    this.auditArticles.subscribe((articles) => {
      for (let i in articles) {
        let currentArticle = articles[i];
        let barcodesWithoutAudit = stockAudit.barcodesWithoutAudit;
        let losses = stockAudit.losses;
        let foundW = barcodesWithoutAudit.find(barcodeWithoutAudit => barcodeWithoutAudit === currentArticle.barcode);
        if (foundW != null) {
            this.arrRealStock[i] = null;
        } else {
          let foundL = losses.find(articleLoss => articleLoss.barcode === currentArticle.barcode);
          if (foundL != null) {
            this.arrRealStock[i] = currentArticle.stock - foundL.amount;
          } else {
            this.arrRealStock[i] = currentArticle.stock;
          }
        }
      }
    });
  }
}
