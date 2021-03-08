import {TreetypeModel} from '../../../shared/services/models/treetype.model';

export interface ArticleFamilyViewModel {
  reference: string;
  description: string;
  type: TreetypeModel;
  price?: number;
}
