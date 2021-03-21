export interface ArticleFamilyModel {
  id?: string;
  reference: string;
  barcode?: string;
  description: string;
  treeType: string;
  parentReference?: string;
  articleFamilyCrudList?: ArticleFamilyModel[];
}
