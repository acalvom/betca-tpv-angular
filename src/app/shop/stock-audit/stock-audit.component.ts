import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {StockAuditService} from './stock-audit.service';
import {StockAudit} from '../shared/services/models/stock-audit.model';

@Component({
  selector: 'app-stock-audit',
  templateUrl: './stock-audit.component.html',
  styleUrls: ['./stock-audit.component.css']
})
export class StockAuditComponent implements OnInit {
  displayedColumnsAudit = ['id', 'barcode', 'description', 'retailPrice', 'stock', 'realStock'];
  displayedColumnsNotAudit = ['id', 'barcode', 'description', 'retailPrice', 'stock'];
  displayedColumnsArticleLoss = ['id', 'barcode', 'description', 'amount', 'retailPrice'];
  title = 'Stock audit';
  auditArticles = of([]);
  notAuditedArticles = of([]);
  articlesLoss = of([]);
  total = 300;
  closedAudit = false;
  stockAudit: StockAudit;

  constructor(private snackBar: MatSnackBar, private router: Router, private stockAuditService: StockAuditService) { }

  ngOnInit(): void {
    this.stockAudit = null;
    this.closedAudit = false;
    this.stockAuditService.readSingleOpenedAudit()
      .subscribe((stockAuditFound) => {
        if (stockAuditFound == null){
          this.stockAuditService.createAudit({
            creationDate: new Date(),
            closeDate: null,
            barcodesWithoutAudit: [],
            lossValue: null,
            losses: []
          }).subscribe((auditCreated) => {
            this.stockAudit = auditCreated;
            this.auditArticles = this.stockAuditService.readAuditArticles(auditCreated.idAudit);
          });
        } else {
          this.stockAudit = stockAuditFound;
          this.auditArticles = this.stockAuditService.readAuditArticles(stockAuditFound.idAudit);
        }
      });
  }

  saveAudit(): void {
    this.auditArticles
      .subscribe((auditArticles) => {
      this.stockAuditService.saveAudit(this.stockAudit.idAudit, auditArticles)
        .subscribe(() => {
          // Controlar que haya ido bien
          this.snackBar.open('Success saving', '', {
            duration: 3500
          });
        }
      );
    });
  }

  closeAudit(): void {
    this.auditArticles
      .subscribe((auditArticles) => {
        this.stockAuditService.closeAudit(this.stockAudit.idAudit, auditArticles)
          .subscribe(() => {
              // Controlar que haya ido bien
              this.closedAudit = true;
              this.snackBar.open('Success audit closed', '', {
                duration: 3500
              });
              this.notAuditedArticles = this.stockAuditService.getNotAudit(this.stockAudit.idAudit);
              this.articlesLoss = this.stockAuditService.getLosses(this.stockAudit.idAudit);
            }
          );
      });
  }

  newAudit(): void {
    this.closedAudit = false;
  }
}
