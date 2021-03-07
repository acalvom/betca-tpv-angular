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

  staffTime = [
    new StaffTime('20-12-2021', 4),
    new StaffTime('21-12-2021', 7)
  ];

  constructor(private httpService: HttpService) { }

  find(staffTime: StaffTimeSearch): Observable<StaffTime[]> {
    return of(this.staffTime);
    // return this.httpService
    //   .paramsFrom(staffTime)
    //   .get(EndPoints.STAFF + '/time');
  }
}
