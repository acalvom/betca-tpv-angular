import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {Complaint} from "../../home/complaints/complaint.model";

@Injectable({
  providedIn: 'root',
})
export class ComplaintShopService {
  private static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  searchAll(): Observable<Complaint[]> {
    return this.httpService
      .get(EndPoints.COMPLAINTS_SHOP + ComplaintShopService.SEARCH);
  }
  //To CHANGE
  create(complaint: Complaint): Observable<Complaint> {
    return this.httpService
      .post(EndPoints.COMPLAINTS, complaint);
  }

  //TO DO client reply and change status auto
  update(complaint: Complaint): Observable<Complaint> {
    return this.httpService
      .put(EndPoints.COMPLAINTS, complaint);
  }

  read(id: string): Observable<Complaint> {
    return this.httpService
      .get(EndPoints.COMPLAINTS + '/' + id);
  }

  delete(id: string): Observable<void>{
    return this.httpService
      .delete(EndPoints.COMPLAINTS + '/' + id );
  }
}
