import {StockAlarmLine} from '../shared/services/models/stock-alarm-line.model';

export interface StockAlarms {
  warningAlarms: StockAlarmLine[];
  criticalAlarms: StockAlarmLine[];
}
