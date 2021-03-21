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

  receivedMessages: Observable<Message[]> = this.messengerService.getReceivedMessages();
  sentMessages: Observable<Message[]> = this.messengerService.getSentMessages();

  message: Message = new Message();

  constructor(private messengerService: MessengerService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  getReceivedMessages(): Observable<Message[]> {
    return this.receivedMessages;
  }

  getSentMessages(): Observable<Message[]> {
    return this.sentMessages;
  }

  sendMessage(): void {
    this.message.userFrom = this.authService.getMobile().toString();

    this.messengerService.sendNewMessage(this.message).subscribe(arg => {
      this.message = new Message();
      this.receivedMessages = this.messengerService.getReceivedMessages();
      this.sentMessages = this.messengerService.getSentMessages();
    }, error => {
      console.error("Error sending message. " + error);
    });
  }

  isSendDisabled(): boolean {
    let disabled: boolean = false;

    if (this.message.userTo == ''
      || this.message.subject == ''
      || this.message.text == '') {

      disabled = true;
    }

    return disabled;
  }

}
