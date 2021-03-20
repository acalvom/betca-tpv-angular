
export class Message {
    userFrom: string;
    userTo: string;
    subject: string;
    text: string;    

    constructor(){
        this.userFrom = "";
        this.userTo = "";
        this.subject = "";
        this.text = "";
    }
}
