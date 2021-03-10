import { User } from './user.model';

export class Message {
    fromUser: string;
    toUser: string;
    subject: string;
    text: string;

    constructor(){
        this.fromUser = "";
        this.toUser = "";
        this.subject = "";
        this.text = "";
    }
}
