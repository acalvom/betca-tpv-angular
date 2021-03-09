import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {Complaint} from '@shared/models/complaint.model';
import {COMPLAINTS} from "../../shop/complaints-shop/complaints";

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  private static SEARCH = '/search';
  private complaints = COMPLAINTS;

  constructor(private httpService: HttpService) {
  }

  searchAll(): Observable<Complaint[]> {
    return this.httpService
      .get(EndPoints.COMPLAINTS + ComplaintService.SEARCH);
  }

  create(complaint: Complaint): Observable<Complaint> {
    console.log('create '+complaint.opened)
    return this.httpService
      .post(EndPoints.COMPLAINTS, complaint);
  }
  //TO DO description
  update(complaint: Complaint): Observable<Complaint> {
    let complaintUpdate =
      this.complaints.find(c => c.id === complaint.id);
    const i = this.complaints.indexOf(complaintUpdate);
    if(i>=0) {
      this.complaints.splice(i, 1, complaint);
    }
    return of(complaint);
    /*return this.httpService
      .put(EndPoints.COMPLAINTS, complaint);*/
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
