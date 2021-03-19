import {Injectable} from '@angular/core';
import {StockAlarmLine} from '../shared/services/models/stock-alarm-line.model';
import {StockAlarm} from '../shared/services/models/stock-alarm.model';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {HttpService} from '@core/http.service';
import {SharedArticleService} from '../shared/services/shared.article.service';
import {map} from 'rxjs/operators';
import {StockAlarms} from './stock-alarms.model';


@Injectable({
  providedIn: 'root'
})
export class StockAlarmsService {
  static NAME = '/name';
  static ALARMS = '/alarms';

  stockAlarmLine1: StockAlarmLine = {barcode: 'b84000000000171', warning: 2, critical: 4, stock: 4};
  stockAlarmLine2: StockAlarmLine = {barcode: 'b84000000000172', warning: 5, critical: 3, stock: 4};
  stockAlarmLine3: StockAlarmLine = {barcode: 'b84000000000173', critical: 4, stock: 4};
  stockAlarmLine4: StockAlarmLine = {barcode: 'b84000000000174', stock: 4};

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
  stockAlarms: StockAlarms = {
    criticalAlarms: [this.stockAlarmLine2, this.stockAlarmLine3],
    warningAlarms: [this.stockAlarmLine2]
  };

  constructor(private httpService: HttpService, private articleService: SharedArticleService) {
  }

  findAlarms(alarms: string): Observable<StockAlarms> {
    return this.httpService
      .param('alarms', alarms)
      .get(EndPoints.STOCKS_ALARMS + StockAlarmsService.ALARMS);
  }

  search(name: string): Observable<StockAlarm[]> {
    return this.httpService
      .param('name', name)
      .get(EndPoints.STOCKS_ALARMS + StockAlarmsService.NAME);
  }

  create(stockAlarm: StockAlarm): Observable<StockAlarm> {
    return this.httpService
      .post(EndPoints.STOCKS_ALARMS, stockAlarm);
  }

  update(name: string, stockAlarm: StockAlarm): Observable<StockAlarm> {
    return this.httpService
      .put(EndPoints.STOCKS_ALARMS + '/' + name, stockAlarm);
  }

  delete(name: string): Observable<StockAlarm> {
    return this.httpService
      .delete(EndPoints.STOCKS_ALARMS + '/' + name);
  }

  read(name: string): Observable<StockAlarm> {
    return this.httpService
      .get(EndPoints.STOCKS_ALARMS + '/' + name);
  }

  readArticle(barcode: string): Observable<StockAlarmLine> {
    return this.articleService
      .read(barcode)
      .pipe(
        map(article => {
            return new StockAlarmLine(article.barcode, article.stock);
          }
        )
      );
  }

}
