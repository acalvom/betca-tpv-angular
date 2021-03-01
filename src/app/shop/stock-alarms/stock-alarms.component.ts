import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {StockAlarm} from '../shared/services/models/stock-alarm.model';
import {StockAlarmsService} from './stock-alarms.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-stock-alarms',
  templateUrl: './stock-alarms.component.html',
  styleUrls: ['./stock-alarms.component.css']
})
export class StockAlarmsComponent implements OnInit {
  breakpoint: number;
  reference: string;
  title = 'Stock Alarm';
  data = of([]);

  constructor(private stockAlarmsService: StockAlarmsService) {
  }

  search(): void {

    this.data = this.stockAlarmsService.search(this.reference)
      .pipe(map(value => value.map(value1 => ({...value1, stockAlarmLines: JSON.stringify(value1.stockAlarmLines)}))));

  }

  resetSearch(): void {

  }

  create(): void {
  }

  read(stockAlarm: StockAlarm): void {
  }

  update(stockAlarm: StockAlarm): void {
  }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 700 ? 1 : 3;
    this.search();
  }

  onResize(event): void {
    this.breakpoint = event.target.innerWidth <= 700 ? 1 : 3;
  }
}
