import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {StaffReport} from './staff-report.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class StaffReportService {

  staffReport = [
    new StaffReport('user1', 6),
    new StaffReport('user2', 8),
  ];

  constructor(private httpService: HttpService) { }

  find(month: string): Observable<StaffReport[]> {
    //return of(this.staffReport);
    return this.httpService
      .param('month', month)
      .get(EndPoints.STAFF + '/reports');
  }
}
