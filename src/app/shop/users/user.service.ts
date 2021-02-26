import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {UserSearch} from './user-search-model';
import {User} from '../shared/models/user.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static SEARCH = '/search';
  static UNFINISHED = '/unfinished';

  constructor(private httpService: HttpService) {
  }

  search(userSearch: UserSearch): Observable<User[]> {
    return this.httpService
      .paramsFrom(userSearch)
      .get(EndPoints.USERS + UserService.SEARCH);
  }

  searchUnfinished(): Observable<User[]> {
    return this.httpService
      .get(EndPoints.USERS + UserService.UNFINISHED);
  }
}
