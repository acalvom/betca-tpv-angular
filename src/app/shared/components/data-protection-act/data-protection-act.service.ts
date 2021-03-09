import {Injectable} from '@angular/core';
import {RgpdUser} from '@shared/models/rgpd-user.model';
import {RgpdType} from '@shared/models/RgpdType';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {SearchRgpdUser} from '@shared/components/data-protection-act/search-rgpd-user.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class DataProtectionActService {

  private SEPARATOR = '/';

  searchRgpdUser: SearchRgpdUser = {
    mobile: 123456789,
    rgpdType: RgpdType.ADVANCED
  };

  constructor(private httpService: HttpService) {
  }

  create(rgpdUser: RgpdUser): Observable<RgpdUser> {
    return of(rgpdUser);
  }

  read(mobile: string): Observable<SearchRgpdUser> {
    return this.httpService
      .get(EndPoints.DATA_PROTECTION_ACT + this.SEPARATOR + mobile);
  }

  update(rgpdUser: RgpdUser): Observable<RgpdUser> {
    return of(rgpdUser);
  }

  printUnsignedAgreement(searchRgpdUser: SearchRgpdUser): Observable<void> {
    return of();
  }

  printSignedAgreement(mobile: number): Observable<void> {
    return of();
  }

}
