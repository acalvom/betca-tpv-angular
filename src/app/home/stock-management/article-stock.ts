export interface ArticleStock {
  barcode: string;
  retailPrice: number;
  description: string;
  stock?: number;
  dateSell?: Date;
}
