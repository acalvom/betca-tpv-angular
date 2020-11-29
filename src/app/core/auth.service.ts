import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

import {environment} from '@env';
import {User} from './user.model';
import {HttpService} from './http.service';
import {Role} from './role.model';


import {Router} from '@angular/router';
import {map} from 'rxjs/operators';


@Injectable()
export class AuthService {
  static END_POINT = environment.REST_USER + '/users/token';
  private user: User;

  constructor(private httpService: HttpService, private router: Router) {
  }

  login(mobile: number, password: string): Observable<User> {
    return this.httpService.authBasic(mobile, password).post(AuthService.END_POINT).pipe(
      map(jsonToken => {
        this.user = jsonToken;
        this.user.mobile = new JwtHelperService().decodeToken(jsonToken.token).user;
        this.user.name = new JwtHelperService().decodeToken(jsonToken.token).name;
        this.user.role = new JwtHelperService().decodeToken(jsonToken.token).role;
        this.httpService.setToken(jsonToken.token);
        return this.user;
      })
    );
  }

  logout(): void {
    this.user = undefined;
    this.httpService.setToken(undefined);
    this.router.navigate(['']).then();
  }

  isAuthenticated(): boolean {
    return this.user != null && !(new JwtHelperService().isTokenExpired(this.user.token));
  }

  isAdmin(): boolean {
    return this.user ? this.user.role.includes(Role.ADMIN) : false;
  }

  isManager(): boolean {
    return this.user ? this.user.role.includes(Role.MANAGER) : false;
  }

  isOperator(): boolean {
    return this.user ? this.user.role.includes(Role.OPERATOR) : false;
  }

  isStaff(): boolean {
    return this.isAdmin() || this.isManager() || this.isOperator();
  }

  isCustomer(): boolean {
    return this.user ? this.user.role.includes(Role.CUSTOMER) : false;
  }

  getMobile(): number {
    return this.user ? this.user.mobile : undefined;
  }

  getName(): string {
    return this.user ? this.user.name : '???';
  }


}
