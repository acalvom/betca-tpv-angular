import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class LoginTimeRegisterService {

  constructor(private httpService: HttpService) { }

  login(): Observable<void> {
    return this.httpService.post(EndPoints.STAFF + '/login');
  }
}
