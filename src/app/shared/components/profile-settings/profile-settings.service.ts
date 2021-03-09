import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {User} from '../../models/userRegister.model';
import {AuthService} from '@core/auth.service';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class ProfileSettingsService {
  user: User = {
    mobile: this.authService.getMobile(),
    firstName: this.authService.getName(),
    familyName: '',
    email: '',
    dni: '',
    address: '',
    password: this.authService.getPassword(),
    role: this.authService.getRole(),
    registrationDate: new Date(),
    active: true
  };

  constructor(private httpService: HttpService, private authService: AuthService) {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getMobile(): number {
    return this.authService.getMobile();
  }

  read(mobile: number): Observable<User> {
    return of(this.user);
    return this.httpService
      .get(EndPoints.USERS + '/' + mobile);
  }

  update(mobile: number, user: User): Observable<User> {
    this.user = user;
    return of(user);
    return this.httpService
      .successful()
      .put(EndPoints.USERS + '/' + mobile, user);
  }

  reDoLogin(mobile: number, password: string): void {
    this.authService.login(mobile, password);
  }
}
