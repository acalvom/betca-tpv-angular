import {TreetypeModel} from '../../../shared/services/models/treetype.model';

export interface ArticleFamilyViewModel {
  reference: string;
  description: string;
  treeType: TreetypeModel;
  barcode?: string;
  retailPrice?: number;
}
