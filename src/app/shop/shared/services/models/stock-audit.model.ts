import {ArticleLoss} from './article-loss.model';

export interface StockAudit {
  idAudit?: string;
  creationDate: Date;
  closeDate?: Date;
  barcodesWithoutAudit: string[];
  lossValue?: number;
  losses: ArticleLoss[];
}
