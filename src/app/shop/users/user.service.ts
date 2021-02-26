import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {UserSearch} from './user-search-model';
import {Article} from '../shared/services/models/article.model';
import {Role} from '@core/role.model';
import {User} from '@core/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static SEARCH = '/search';
  static UNFINISHED = '/unfinished';

  constructor(private httpService: HttpService) {
  }

  search(userSearch: UserSearch): Observable<User[]> {
    return of([
      {mobile: 1234324, name: 'Hector', role: Role.CUSTOMER, token: ' '},
      {mobile: 1236453, name: 'Mario', role: Role.ADMIN, token: ' '},
      {mobile: 1264563, name: 'Pablo', role: Role.MANAGER, token: ' '},
      {mobile: 1346623, name: 'Rafa', role: Role.CUSTOMER, token: ' '},
      {mobile: 1256773, name: 'Jaime', role: Role.OPERATOR, token: ' '},
    ]);
    /*return this.httpService
      .paramsFrom(userSearch)
      .get(EndPoints.USERS + UserService.SEARCH);*/
  }

  searchUnfinished(): Observable<User[]> {
    return of([

    ]);
    /*return this.httpService
      .get(EndPoints.USERS + UserService.UNFINISHED);*/
  }

  read(mobile: number): Observable<User> {
    return this.httpService
      .get(EndPoints.USERS + '/' + mobile);
  }

  update(oldRole: Role, user: User): Observable<User> {
    return this.httpService
      .successful()
      .put(EndPoints.USERS + '/' + oldRole, user);
  }
}
