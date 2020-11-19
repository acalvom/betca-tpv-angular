import {Tax} from './Tax';

export interface Article {
  barcode: string;
  description: string;
  retailPrice: number;
  providerCompany: string;
  reference?: string;
  stock?: string;
  tax?: Tax;
  discontinued?: boolean;
  registrationDate?: Date;
}
