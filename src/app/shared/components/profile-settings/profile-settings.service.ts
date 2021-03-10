import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {User} from '../../models/userUpdate.model';
import {AuthService} from '@core/auth.service';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class ProfileSettingsService {

  constructor(private httpService: HttpService, private authService: AuthService) {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getMobile(): number {
    return this.authService.getMobile();
  }

  read(mobile: number): Observable<User> {
    return this.httpService
      .get(EndPoints.USERS + '/' + mobile);
  }

  update(mobile: number, user: User): Observable<User> {
    return this.httpService
      .successful()
      .put(EndPoints.USERS + '/' + mobile, user);
  }

}
