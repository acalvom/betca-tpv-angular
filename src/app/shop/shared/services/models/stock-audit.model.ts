import {ArticleLoss} from './article-loss.model';

export interface StockAudit {
  creationDate: Date;
  closeDate?: Date;
  barcodesWithoutAudit: string[];
  lossValue: number;
  losses: ArticleLoss[];
}
