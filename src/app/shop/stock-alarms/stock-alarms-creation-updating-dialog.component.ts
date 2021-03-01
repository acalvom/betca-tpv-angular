import {Component, Inject, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {StockAlarm} from '../shared/services/models/stock-alarm.model';
import {StockAlarmsService} from './stock-alarms.service';

@Component({
  selector: 'app-stock-alarms-creation-updating-dialog',
  templateUrl: './stock-alarms-creation-updating-dialog.component.html',
  styleUrls: ['./stock-alarms-creation-updating-dialog.component.css']
})
export class StockAlarmsCreationUpdatingDialogComponent implements OnInit {

  title: string;
  stockAlarm: StockAlarm;
  barcodes: Observable<string[]> = of([]);


  constructor(@Inject(MAT_DIALOG_DATA) data: StockAlarm, private stocksAlarmsSerive: StockAlarmsService, private dialog: MatDialog) {
    this.title = data ? 'Update Stock Alarma' : 'Create Stock Alarm';
    this.stockAlarm = data ? data : {name: undefined, description: undefined, warning: 5, critical: 5, stockAlarmLines: undefined};
  }

  ngOnInit(): void {
  }

  isCreated(): boolean {
    return this.stockAlarm.name === undefined;
  }

  create(): void {
    this.stocksAlarmsSerive
      .create(this.stockAlarm)
      .subscribe(() => this.dialog.closeAll());
  }

}
