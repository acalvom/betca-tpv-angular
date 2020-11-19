import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {EMPTY, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {JwtHelperService} from '@auth0/angular-jwt';

import {Token} from './token.model';
import {Error} from './error.model';

@Injectable()
export class HttpService {
  static CONNECTION_REFUSE = 0;
  static UNAUTHORIZED = 401;
  static NOT_FOUND = 404;

  private token: Token;
  private headers: HttpHeaders;
  private params: HttpParams;
  private responseType: string;
  private successfulNotification = undefined;
  private errorNotification = undefined;

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {
    this.resetOptions();
  }

  login(mobile: number, password: string, endPoint: string): Observable<any> {
    return this.authBasic(mobile, password).post(endPoint).pipe(
      map(token => {
        this.token = token;
        this.token.mobile = new JwtHelperService().decodeToken(token.token).user;
        this.token.name = new JwtHelperService().decodeToken(token.token).name;
        this.token.role = new JwtHelperService().decodeToken(token.token).role;
      }),
      catchError(error => {
        return this.handleError(error);
      })
    );
  }

  logout(): void {
    this.token = undefined;
    this.router.navigate(['']).then();
  }

  getToken(): Token {
    return this.token;
  }

  param(key: string, value: string): HttpService {
    if (value != null) {
      this.params = this.params.append(key, value); // This class is immutable
    }
    return this;
  }

  paramsFrom(dto: any): HttpService {
    Object.getOwnPropertyNames(dto).forEach(item => {
      if (dto[item] != null) {
        this.param(item, dto[item]);
      }
    });
    return this;
  }

  successful(notification = 'Successful'): HttpService {
    this.successfulNotification = notification;
    return this;
  }

  error(notification: string): HttpService {
    this.errorNotification = notification;
    return this;
  }

  pdf(): HttpService {
    this.responseType = 'blob';
    this.header('Accept', 'application/pdf , application/json');
    return this;
  }

  post(endpoint: string, body?: object): Observable<any> {
    return this.http.post(endpoint, body, this.createOptions()).pipe(
      map(response => this.extractData(response)),
      catchError(error => {
        return this.handleError(error);
      })
    );
  }

  get(endpoint: string): Observable<any> {
    return this.http.get(endpoint, this.createOptions()).pipe(
      map(response => this.extractData(response)),
      catchError(error => {
        return this.handleError(error);
      })
    );
  }

  put(endpoint: string, body?: object): Observable<any> {
    return this.http.put(endpoint, body, this.createOptions()).pipe(
      map(response => this.extractData(response)),
      catchError(error => {
        return this.handleError(error);
      })
    );
  }

  patch(endpoint: string, body?: object): Observable<any> {
    return this.http.patch(endpoint, body, this.createOptions()).pipe(
      map(response => this.extractData(response)),
      catchError(error => {
        return this.handleError(error);
      })
    );
  }

  delete(endpoint: string): Observable<any> {
    return this.http.delete(endpoint, this.createOptions()).pipe(
      map(response => this.extractData(response)),
      catchError(error => {
        return this.handleError(error);
      })
    );
  }

  private header(key: string, value: string): HttpService {
    this.headers = this.headers.append(key, value); // This class is immutable
    return this;
  }

  private authBasic(mobile: number, password: string): HttpService {
    return this.header('Authorization', 'Basic ' + btoa(mobile + ':' + password));
  }

  private resetOptions(): void {
    this.headers = new HttpHeaders();
    this.params = new HttpParams();
    this.responseType = 'json';
  }

  private createOptions(): any {
    if (this.token !== undefined) {
      this.header('Authorization', 'Bearer ' + this.token.token);
    }
    const options: any = {
      headers: this.headers,
      params: this.params,
      responseType: this.responseType,
      observe: 'response'
    };
    this.resetOptions();
    return options;
  }

  private extractData(response): any {
    if (this.successfulNotification) {
      this.snackBar.open(this.successfulNotification, '', {
        duration: 2000
      });
      this.successfulNotification = undefined;
    }
    const contentType = response.headers.get('content-type');
    if (contentType) {
      if (contentType.indexOf('application/pdf') !== -1) {
        const blob = new Blob([response.body], {type: 'application/pdf'});
        window.open(window.URL.createObjectURL(blob));
      } else if (contentType.indexOf('application/json') !== -1) {
        return response.body; // with 'text': JSON.parse(response.body);
      }
    } else {
      return response;
    }
  }

  private showError(notification: string): void {
    if (this.errorNotification) {
      this.snackBar.open(this.errorNotification, 'Error', {duration: 5000});
      this.errorNotification = undefined;
    } else {
      this.snackBar.open(notification, 'Error', {duration: 5000});
    }
  }

  private handleError(response): any {
    let error: Error;
    if (response.status === HttpService.UNAUTHORIZED) {
      this.showError('Unauthorized');
      this.logout();
      this.router.navigate(['']).then();
      return EMPTY;
    } else if (response.status === HttpService.CONNECTION_REFUSE) {
      this.showError('Connection Refuse');
      return EMPTY;
    } else {
      try {
        error = response.error; // with 'text': JSON.parse(response.error);
        this.showError(error.error + ' (' + response.status + '): ' + error.message);
        return throwError(error);
      } catch (e) {
        this.showError('Not response');
        return throwError(response.error);
      }
    }
  }

}
