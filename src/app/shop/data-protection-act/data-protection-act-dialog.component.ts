import {Component} from '@angular/core';
import {RgpdUser} from '@shared/models/rgpd-user.model';
import {Observable, of} from 'rxjs';
import {DataProtectionActService} from '@shared/components/data-protection-act/data-protection-act.service';

@Component({
  selector: 'app-data-protection-act-dialog',
  templateUrl: './data-protection-act-dialog.component.html',
  styleUrls: ['../../shared/dialogs/dialog.component.css']
})
export class DataProtectionActDialogComponent {

  userMobile: number;
  mobiles: Observable<number[]> = of([]);
  rgpdUser: RgpdUser = {};

  constructor(private dataProtectionActService: DataProtectionActService) {
  }

  findMobiles(): void {
    this.mobiles = of([11111111, 22222222, 333333333]);
  }

  findByMobile(): void {
    this.dataProtectionActService
      .read(this.userMobile)
      .subscribe(rgpdUser => this.rgpdUser = rgpdUser);
  }

  reset(): void {
    this.rgpdUser = {};
  }
}
