import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import { Message } from '../shared/services/models/message.model';
import { EndPoints } from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {

  private static GET_SENT_MESSAGES = '/sentMessages';
  private static GET_RECEIVED_MESSAGES = '/receivedMessages';

  constructor(private httpService: HttpService) {  }

  sendNewMessage(message: Message): Observable<void> {
    return this.httpService.post(EndPoints.MESSENGER, message);
  }

  getSentMessages(): Observable<Message[]> {
    return this.httpService.get(EndPoints.MESSENGER + MessengerService.GET_SENT_MESSAGES);
  }

  getReceivedMessages(): Observable<Message[]> {
    return this.httpService.get(EndPoints.MESSENGER + MessengerService.GET_RECEIVED_MESSAGES);
  }

}
