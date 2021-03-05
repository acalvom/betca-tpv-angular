import {Injectable} from '@angular/core';
import {RgpdUser} from '@shared/models/rgpd-user.model';
import {RgpdType} from '@shared/models/RgpdType';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {CreateRgpdUser} from '@shared/components/data-protection-act/create-rgpd-user.model';

@Injectable({
  providedIn: 'root'
})
export class DataProtectionActService {

  rgpdUser: RgpdUser = {
    mobile: 123456789,
    rgpdType: RgpdType.ADVANCED
  };

  constructor(private httpService: HttpService) {
  }

  create(createRgpdUser: CreateRgpdUser): Observable<CreateRgpdUser> {
    return of(createRgpdUser);
  }

  read(mobile: number): Observable<RgpdUser> {
    return of(this.rgpdUser);
  }

  update(createRgpdUser: CreateRgpdUser): Observable<CreateRgpdUser> {
    return of(createRgpdUser);
  }

  printUnsignedAgreement(rgpdUser: RgpdUser): Observable<void> {
    return of();
  }

  printSignedAgreement(mobile: number): Observable<void> {
    return of();
  }

}
