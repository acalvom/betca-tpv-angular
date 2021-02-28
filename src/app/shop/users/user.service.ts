import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {UserSearch} from './user-search-model';
import {Role} from '@core/role.model';
import {User} from '@core/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static SEARCH = '/search';
  static UNFINISHED = '/unfinished';
  private users: User[] = [
    {token: ' ', mobile: 1234324, name: 'Hector', role: Role.CUSTOMER},
    {token: ' ', mobile: 1236453, name: 'Mario', role: Role.ADMIN},
    {token: ' ', mobile: 1264563, name: 'Pablo', role: Role.MANAGER},
    {token: ' ', mobile: 1346623, name: 'Rafa', role: Role.CUSTOMER},
    {token: ' ', mobile: 1256773, name: 'Jaime', role: Role.OPERATOR},
  ];

  constructor(private httpService: HttpService) {
  }

  search(userSearch: UserSearch): Observable<User[]> {
    return of(this.users);
    /*return this.httpService
      .paramsFrom(userSearch)
      .get(EndPoints.USERS + UserService.SEARCH);*/
  }

  searchUnfinished(): Observable<User[]> {
    return of(this.users);
    /*return this.httpService
      .get(EndPoints.USERS + UserService.UNFINISHED);*/
  }

  read(mobile: number): Observable<User> {
    return of({
      token: this.users.find(user => user.mobile === mobile).token,
      mobile,
      name: this.users.find(user => user.mobile === mobile).name,
      role: this.users.find(user => user.mobile === mobile).role,
    });
    /*return this.httpService
      .get(EndPoints.USERS + '/' + mobile);*/
  }

  update(oldRole: Role, user: User): Observable<User> {
    const userToUpdate = this.users.find(item => item.mobile === user.mobile);
    const index = this.users.indexOf(userToUpdate);
    if (index > -1) {
      this.users.splice(index, 1, user);
    }
    this.search(new UserSearch());
    return of(user);
    /*return this.httpService
      .successful()
      .put(EndPoints.USERS + '/' + oldRole, user);*/
  }
}
