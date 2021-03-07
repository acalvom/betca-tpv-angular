import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {User} from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SharedUserService {

  constructor(private httpService: HttpService) {
  }

  read(mobile: number): Observable<User> {
    return this.httpService
      .get(EndPoints.USERS + '/' + mobile);
  }

}
