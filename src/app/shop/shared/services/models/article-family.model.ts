export interface ArticleFamilyModel {
  reference: string;
  description: string;
  type: string;
  children?: ArticleFamilyModel[];
}
