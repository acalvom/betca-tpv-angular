import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CashMovementDialogService} from './cash-movement-dialog.service';
import {Observable} from 'rxjs';
import {CashMovementDialog} from './cash-movement-dialog.model';

@Component({
  selector: 'app-cash-movement-dialog',
  templateUrl: './cash-movement-dialog.component.html',
  styleUrls: ['./cash-movement-dialog.component.css']
})
export class CashMovementDialogComponent implements OnInit {
  cashFinal: CashMovementDialog = {deposit: null};
  cashMovementDialog: Observable<CashMovementDialog>;


  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<CashMovementDialogComponent>,
              private cashMovementDialogService: CashMovementDialogService) {
    this.cashMovementDialog = this.cashMovementDialogService.readState();
  }

  ngOnInit(): void {
  }

  cashIn(): void {
      this.cashMovementDialogService
        .movement(this.cashFinal)
        .subscribe(() => this.dialogRef.close());
  }

  cashOut(): void {
    this.cashFinal.deposit = -1 * this.cashFinal.deposit;
    this.cashMovementDialogService
      .movement(this.cashFinal)
      .subscribe(() => this.dialogRef.close());
  }
}
