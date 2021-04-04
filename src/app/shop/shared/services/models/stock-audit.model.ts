import {ArticleLoss} from './article-loss.model';

export interface StockAudit {
  id?: string;
  barcodesWithoutAudit: string[];
  losses: ArticleLoss[];
}
