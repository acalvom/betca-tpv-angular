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
