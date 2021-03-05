export interface Offer {
  reference: string;
  description: string;
  expiryDate: Date;
  discount: number;
  articleDescriptions: string[];
}
