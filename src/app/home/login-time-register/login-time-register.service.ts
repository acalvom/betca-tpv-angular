import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {User} from '@core/user.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class LoginTimeRegisterService {

  constructor(private httpService: HttpService) { }

  login(user: User): Observable<void> {
    return this.httpService.post(EndPoints.STAFF + '/login');
  }
}
