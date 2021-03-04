import {Component} from '@angular/core';
import {RgpdUser} from '../shared/services/models/rgpd-user.model';
import {Observable, of} from 'rxjs';
import {RgpdType} from '../shared/services/models/RgpdType';

@Component({
  selector: 'app-data-protection-act-dialog',
  templateUrl: './data-protection-act-dialog.component.html',
  styleUrls: ['../../shared/dialogs/dialog.component.css']
})
export class DataProtectionActDialogComponent {

  userMobile: number;
  mobiles: Observable<number[]> = of([]);
  rgpdUser: RgpdUser = {};

  constructor() {
  }

  findMobiles(): void {
    this.mobiles = of([11111111, 22222222, 333333333]);
  }

  findByMobile(): void {
    this.rgpdUser = {
      mobile: this.userMobile,
      rgpdType: RgpdType.ADVANCED
    };
  }

  reset(): void {
    this.rgpdUser = {};
  }
}
