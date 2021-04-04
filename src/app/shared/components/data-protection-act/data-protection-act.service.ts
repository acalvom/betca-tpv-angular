import {Injectable} from '@angular/core';
import {RgpdUser} from '@shared/models/rgpd-user.model';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {SearchRgpdUser} from '@shared/components/data-protection-act/search-rgpd-user.model';
import {EndPoints} from '@shared/end-points';
import {RgpdType} from '@shared/models/RgpdType';

@Injectable({
  providedIn: 'root'
})
export class DataProtectionActService {

  private SEPARATOR = '/';
  private AGREEMENT = '/agreement';

  constructor(private httpService: HttpService) {
  }

  create(rgpdUser: RgpdUser): Observable<SearchRgpdUser> {
    return this.httpService
      .post(EndPoints.DATA_PROTECTION_ACT, this.getBody(rgpdUser));
  }

  private getBody(rgpdUser: RgpdUser): FormData {
    const formData = new FormData();
    formData.append('user', '{"mobile":"' + rgpdUser.mobile + '","rgpdType":' + rgpdUser.rgpdType + '}');
    formData.append('agreement', rgpdUser.agreement);
    return formData;
  }

  read(mobile: string): Observable<SearchRgpdUser> {
    return this.httpService
      .get(EndPoints.DATA_PROTECTION_ACT + this.SEPARATOR + mobile);
  }

  update(rgpdUser: RgpdUser): Observable<RgpdUser> {
    return this.httpService
      .put(EndPoints.DATA_PROTECTION_ACT + this.SEPARATOR + rgpdUser.mobile, this.getBody(rgpdUser));
  }

  printUnsignedAgreement(mobile: string, rgpdType: RgpdType): Observable<void> {
    return this.httpService
      .pdf()
      .param('mobile', mobile)
      .param('rgpdType', rgpdType.toString())
      .get(EndPoints.DATA_PROTECTION_ACT + this.AGREEMENT);
  }

  printSignedAgreement(mobile: number): Observable<void> {
    return this.httpService
      .pdf()
      .get(EndPoints.DATA_PROTECTION_ACT + this.AGREEMENT + this.SEPARATOR + mobile);
  }

}
