export interface ArticleFamilyModel {
  id: string;
  name: string;
  children?: ArticleFamilyModel[];
}
