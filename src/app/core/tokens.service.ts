import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {environment} from '@env';
import {HttpService} from './http.service';
import {Role} from './role.model';


@Injectable()
export class TokensService {
  static END_POINT = environment.REST_USER + '/users/token';

  constructor(private httpService: HttpService) {
  }

  login(mobile: number, password: string): Observable<any> {
    return this.httpService.login(mobile, password, TokensService.END_POINT);
  }

  logout(): void {
    return this.httpService.logout();
  }

  isAdmin(): boolean {
    return this.httpService.getToken() ? this.httpService.getToken().role.includes(Role.ADMIN) : false;
  }

  isManager(): boolean {
    return this.httpService.getToken() ? this.httpService.getToken().role.includes(Role.MANAGER) : false;
  }

  isOperator(): boolean {
    return this.httpService.getToken() ? this.httpService.getToken().role.includes(Role.OPERATOR) : false;
  }

  getMobile(): number {
    return this.httpService.getToken() ? this.httpService.getToken().mobile : undefined;
  }

  getName(): string {
    return this.httpService.getToken() ? this.httpService.getToken().name : '???';
  }

}
