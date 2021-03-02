export interface OfferCreateUpdate {
  reference: string;
  description: string;
  expiryDate: Date;
  discount: number;
  articleBarcodes: string[];
}
