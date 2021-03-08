import {Injectable} from '@angular/core';
import {of} from 'rxjs';

import {HttpService} from '@core/http.service';

@Injectable({
  providedIn: 'root',
})
export class SharedMessengerService {

  constructor(private httpService: HttpService) {
  }

  checkNewMessages(){
    return of(true);
  }
 
}
