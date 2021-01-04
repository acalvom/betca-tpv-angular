import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {Complaint} from './complaint.model';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  private static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  create(complaint: Complaint): Observable<Complaint> {
    console.log('url: ' + EndPoints.COMPLAINTS);
    console.log('complaint: ' + complaint.mobile + ',' + complaint.barcode + ',' + complaint.description);
    return this.httpService
      .post(EndPoints.COMPLAINTS, complaint);
  }

  searchAll(): Observable<Complaint[]> {
    return this.httpService
      .get(EndPoints.COMPLAINTS + ComplaintService.SEARCH);
  }

  read(id: string): Observable<Complaint> {
    return this.httpService
      .get(EndPoints.COMPLAINTS + '/' + id);
  }

}
