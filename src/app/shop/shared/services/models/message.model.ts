import { User } from "./user.models";

export interface Message {
    fromUser: User; 
    toUser: User; 
    subject: string; 
    text: string
  }
  