export interface Offer {
  reference?: string;
  description: string;
  creationDate?: Date;
  expiryDate: Date;
  discount: number;
  articleBarcodes: string[];
}
