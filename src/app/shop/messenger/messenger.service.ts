import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import { Message } from '../shared/services/models/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {

  private sendMessages: Message [] = [];
  private receivedMessages: Message [] = [];

  constructor(private httpService: HttpService) {
    // TODO This code is for testing purposes
    for(let i = 0; i < 6; i++){
      let message: Message = new Message();
      message.fromUser = "6";
      message.toUser = "6521" + i;
      message.text = "Message sent" + i;
      message.subject = "Subject sent " + i;
      this.sendMessages.push(message);
    }

    for(let i = 0; i < 5; i++){
      let message: Message = new Message();
      message.toUser = "6";
      message.fromUser = "6521" + i;
      message.text = "Message received" + i;
      message.subject = "Subject received " + i;
      this.receivedMessages.push(message);
    }

  }

  sendNewMessage(message: Message): Observable<void> {
    this.sendMessages.push(message);
    return of(void 0);
  }

  getSentMessages(): Observable<Message[]> {
    return of(this.sendMessages);
  }

  getReceivedMessages(): Observable<Message[]> {
    return of(this.receivedMessages);
  }

}
