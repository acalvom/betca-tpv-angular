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

  mobiles: Observable<number[]> = of([]);
  rgpdUser: RgpdUser;

  constructor(private dataProtectionActService: DataProtectionActService) {
    this.reset();
  }

  findMobiles(): void {
    this.mobiles = of([11111111, 22222222, 333333333]);
  }

  findByMobile(): void {
    this.dataProtectionActService
      .read(this.rgpdUser.mobile)
      .subscribe(searchRgpdUser => {
          this.rgpdUser.mobile = searchRgpdUser.mobile;
          this.rgpdUser.rgpdType = searchRgpdUser.rgpdType;
        }
      );
  }

  isReady(): boolean {
    return this.rgpdUser.mobile !== undefined && this.rgpdUser.rgpdType !== undefined &&
      this.rgpdUser.agreement !== undefined;
  }

  reset(): void {
    this.rgpdUser = {
      mobile: undefined,
      rgpdType: undefined,
      agreement: undefined
    };
  }
}
