import {Injectable} from '@angular/core';
import { EndPoints } from '@shared/end-points';

import {HttpService} from '@core/http.service';
import { Observable } from 'rxjs';
import { Message } from './models/message.model';

@Injectable({
  providedIn: 'root',
})
export class SharedMessengerService {

  private static CHECK_NEW_MESSAGES = '/checkNewMessages';

  constructor(private httpService: HttpService) {
  }

  checkNewMessages(): Observable<Message[]>{
    return this.httpService.get(EndPoints.MESSENGER + SharedMessengerService.CHECK_NEW_MESSAGES);
  }
 
}
