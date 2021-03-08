export interface Complaint {
  id?: string;
  mobile?: number;
  barcode: string;
  description: string;
  registrationDate?: Date;
  //state: ['opened', 'closed'];
  state: string;
  reply?: string;
}
