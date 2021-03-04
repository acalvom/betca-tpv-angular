import {Injectable} from '@angular/core';
import {StockAlarmLine} from '../shared/services/models/stock-alarm-line.model';
import {StockAlarm} from '../shared/services/models/stock-alarm.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockAlarmsService {
  stockAlarmLine1: StockAlarmLine = {barcode: 'b84000000000171', warning: 2, critical: 4};
  stockAlarmLine2: StockAlarmLine = {barcode: 'b84000000000172', warning: 5, critical: 3};
  stockAlarmLine3: StockAlarmLine = {barcode: 'b84000000000173', critical: 4};
  stockAlarmLine4: StockAlarmLine = {barcode: 'b84000000000174'};

  stockAlarm1: StockAlarm = {
    name: 'sa1',
    description: 'desc-sa1',
    warning: 3,
    critical: 5,
    stockAlarmLines: [this.stockAlarmLine1, this.stockAlarmLine4]
  };
  stockAlarm2: StockAlarm = {
    name: 'sa2',
    description: 'desc-sa2',
    warning: 5,
    critical: 2,
    stockAlarmLines: [this.stockAlarmLine2, this.stockAlarmLine3]
  };

  constructor() {
  }

  findAlarms(): Observable<StockAlarmLine[]> {
    return of([this.stockAlarmLine2, this.stockAlarmLine3]);
  }

  search(reference: string): Observable<StockAlarm[]> {
    return of([this.stockAlarm1, this.stockAlarm2]);
  }

  create(stockAlarm: StockAlarm): Observable<StockAlarm> {
    return of(stockAlarm);
  }

  update(name: string, stockAlarm: StockAlarm): Observable<StockAlarm> {
    return of(stockAlarm);
  }

  read(name: string): Observable<StockAlarm> {
    return of(this.stockAlarm1);
  }

  readArticle(barcode: string): Observable<StockAlarmLine> {
    return of(this.stockAlarmLine2);
  }

}
