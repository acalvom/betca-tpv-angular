import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {Complaint} from './complaint.model';
import {AuthService} from "@core/auth.service";

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  private static SEARCH = '/search';
  private endPoint: string;

  constructor(private httpService: HttpService, private authService: AuthService) {
    const role = this.authService.getRole();
    console.log('role: ' + role);
    // CHANGE USER
    role === 'CUSTOMER' ? this.endPoint = EndPoints.COMPLAINTS :
      this.endPoint = EndPoints.COMPLAINTS_SHOP;
  }

  searchAll(): Observable<Complaint[]> {
    return this.httpService
      .get(this.endPoint + ComplaintService.SEARCH);
  }

  create(complaint: Complaint): Observable<Complaint> {
    return this.httpService
      .post(EndPoints.COMPLAINTS, complaint);
  }
  //TO DO description
  updateClient(complaint: Complaint): Observable<Complaint> {
    return this.httpService
      .put(EndPoints.COMPLAINTS, complaint);
  }
  //TO DO client reply and change status auto
  updateAdmin(complaint: Complaint): Observable<Complaint> {
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
