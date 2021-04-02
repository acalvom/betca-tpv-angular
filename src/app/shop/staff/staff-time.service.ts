import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {StaffTimeSearch} from './model/staff-time-search.model';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {StaffTime} from './model/staff-time.model';

@Injectable({
  providedIn: 'root'
})
export class StaffTimeService {

  constructor(private httpService: HttpService) { }

  find(staffTime: StaffTimeSearch): Observable<StaffTime[]> {
    return this.httpService
      .paramsFrom(staffTime)
      .get(EndPoints.STAFF + '/time');
  }

  logout(): Observable<void> {
    return this.httpService.post(EndPoints.STAFF + '/logout');
  }
}
