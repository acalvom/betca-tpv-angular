import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import { Message } from '../shared/services/models/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {

  constructor(private httpService: HttpService) {
  }

  sendNewMessage(): Observable<void> {
    return this.httpService.post(EndPoints.CASHIERS);
  }

  getSentMessages(): Observable<Message[]> {
    let messageList = [];
    messageList.push("Recuerda pagar las facturas");
    messageList.push("Envía los documentos a la gestoría!!");

    return of(messageList);
  }

  getReceivedMessages(): Observable<Message[]> {
    let messageList = [];
    messageList.push("Pon papel en la impresora. Nos hemos quedado sin tinta y ");
    messageList.push("Envía los documentos a la gestoría!!");

    return of(messageList);
  }

}
