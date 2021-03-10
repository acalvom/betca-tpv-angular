import {Component, Inject, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {StockAlarm} from '../shared/services/models/stock-alarm.model';
import {StockAlarmsService} from './stock-alarms.service';
import {StockAlarmLine} from '../shared/services/models/stock-alarm-line.model';

@Component({
  selector: 'app-stock-alarms-creation-updating-dialog',
  templateUrl: './stock-alarms-creation-updating-dialog.component.html',
  styleUrls: ['./stock-alarms-creation-updating-dialog.component.css']
})
export class StockAlarmsCreationUpdatingDialogComponent implements OnInit {

  title: string;
  stockAlarm: StockAlarm;
  barcodes: Observable<string[]> = of([]);
  oldName: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: StockAlarm, private stocksAlarmsSerive: StockAlarmsService, private dialog: MatDialog) {
    this.title = data ? 'Update Stock Alarma' : 'Create Stock Alarm';
    this.stockAlarm = data ? data :
      {
        name: undefined, description: undefined,
        warning: 5, critical: 5, stockAlarmLines: []
      };
    this.oldName = data ? data.name : undefined;
  }

  ngOnInit(): void {
  }

  isCreate(): boolean {
    return this.oldName === undefined;
  }

  create(): void {
    this.stocksAlarmsSerive
      .create(this.stockAlarm)
      .subscribe(() => {
          this.dialog.closeAll();
        }
      );
  }

  update(): void {
    this.stocksAlarmsSerive
      .update(this.oldName, this.stockAlarm)
      .subscribe(() => this.dialog.closeAll());
  }

  addAlarmLine(barcode): void {
    this.stocksAlarmsSerive.readArticle(barcode).subscribe(data => this.stockAlarm.stockAlarmLines.push(data));
  }

  removeAlarmLine(value: StockAlarmLine): void {
    this.stockAlarm.stockAlarmLines = this.stockAlarm.stockAlarmLines.filter(line => line.barcode !== value.barcode);
  }

  updateAlarmLine(value: StockAlarmLine): void {
    this.stockAlarm.stockAlarmLines.map(value1 => (value1.barcode === value.barcode ? {...value1, value} : value1));
  }

}
