import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {StockAlarm} from '../shared/services/models/stock-alarm.model';
import {StockAlarmsService} from './stock-alarms.service';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {StockAlarmsCreationUpdatingDialogComponent} from './stock-alarms-creation-updating-dialog.component';
import {StockAlarmLine} from '../shared/services/models/stock-alarm-line.model';
import {Alarms} from './alarms.enum';
import {StockAlarms} from './stock-alarms.model';


@Component({
  selector: 'app-stock-alarms',
  templateUrl: './stock-alarms.component.html',
  styleUrls: ['./stock-alarms.component.css']
})
export class StockAlarmsComponent implements OnInit {
  name: string;
  title = 'Stock Alarm';
  data = of([]);
  stockAlarms: StockAlarms;
  alarms: StockAlarmLine[];

  constructor(private stockAlarmsService: StockAlarmsService, private dialog: MatDialog) {
  }

  findAlarms(): void {
    this.stockAlarmsService.findAlarms(Alarms.WARNING + ',' + Alarms.CRITICAL)
      .subscribe(value => {
        this.stockAlarms = value;
      });
  }

  search(): void {
    this.data = this.stockAlarmsService.search(this.name)
      .pipe(map(value => value.map(value1 => ({...value1, stockAlarmLines: JSON.stringify(value1.stockAlarmLines)}))));
  }

  resetSearch(): void {
    this.name = '';
  }

  create(): void {
    this.dialog.open(StockAlarmsCreationUpdatingDialogComponent);
  }

  update(stockAlarm: StockAlarm): void {
    this.stockAlarmsService.read(stockAlarm.name)
      .subscribe(fullStockAlarm => this.dialog.open(StockAlarmsCreationUpdatingDialogComponent, {data: fullStockAlarm}));
  }

  delete(stockAlarm: StockAlarm): void {
    this.stockAlarmsService.delete(stockAlarm.name).subscribe();
  }

  ngOnInit(): void {
    this.findAlarms();
  }

}
