import {Tax} from './Tax';

export interface ArticleSizeFamily {
  description: string;
  retailPrice: number;
  providerCompany: string;
  size: string;
  tax?: Tax;
}
