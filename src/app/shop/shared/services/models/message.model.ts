import { User } from './user.model';

export interface Message {
    fromUser: User;
    toUser: User;
    subject: string;
    text: string;
  }
