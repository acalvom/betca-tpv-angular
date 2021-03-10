import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth.service';
import { Observable, of } from 'rxjs';
import { Message } from '../shared/services/models/message.model';
import { MessengerService } from './messenger.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  receivedMessagesTitle: string = "Received Messages";
  sentMessagesTitle: string = "Sent Messages";

  message: Message = new Message();

  constructor(private messengerService: MessengerService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  getReceivedMessages(): Observable<Message[]>{
   return this.messengerService.getReceivedMessages();
  }

  getSentMessages(): Observable<Message[]>{
    return this.messengerService.getSentMessages();
  }

  sendMessage(): void{
    this.message.fromUser = this.authService.getMobile().toString();

    this.messengerService.sendNewMessage(this.message).subscribe(arg => {
      this.message = new Message();
    }, error => {
      console.error("Error sending message. " + error);
    });
  }

  isSendDisabled(): boolean{
    let disabled: boolean = false;

    if(this.message.toUser == ''
        || this.message.subject == ''
        || this.message.text == ''){

      disabled = true;
    }

    return disabled;
  }

}
