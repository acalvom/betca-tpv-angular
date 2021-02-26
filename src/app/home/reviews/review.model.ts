import {User} from '@core/user.model';

export interface Review {
  user: User;
  articleBarcode: string;
  score: number;
  opinion: string;
}
