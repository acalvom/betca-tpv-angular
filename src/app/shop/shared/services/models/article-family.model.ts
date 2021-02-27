import {Article} from "./article.model";


export interface ArticleFamilyModel {
  reference: string;
  description: string;
  type: string;
  children?: (ArticleFamilyModel | Article)[];
}
