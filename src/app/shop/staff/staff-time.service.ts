import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {StaffTimeSearch} from './model/staff-time-search.model';
import {Observable, of} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {StaffTime} from './model/staff-time.model';

@Injectable({
  providedIn: 'root'
})
export class StaffTimeService {

  staffTimeDay = [
    new StaffTime('20-12-2021', 4),
    new StaffTime('21-12-2021', 7)
  ];

  staffTimeMonth = [
    new StaffTime('enero', 20),
    new StaffTime('febrero', 30)
  ];

  constructor(private httpService: HttpService) { }

  find(staffTime: StaffTimeSearch): Observable<StaffTime[]> {
    if (staffTime.typeOfSearch === 'month') {
      return of(this.staffTimeMonth);
    }
    return of(this.staffTimeDay);
    // return this.httpService
    //   .paramsFrom(staffTime)
    //   .get(EndPoints.STAFF + '/time');
  }

  logout(): Observable<void> {
    return this.httpService.post(EndPoints.STAFF + '/logout');
  }
}
