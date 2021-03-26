import {Component} from '@angular/core';
import {RgpdUser} from '@shared/models/rgpd-user.model';
import {Observable, of} from 'rxjs';
import {DataProtectionActService} from '@shared/components/data-protection-act/data-protection-act.service';
import {RgpdType} from '@shared/models/RgpdType';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-data-protection-act-dialog',
  templateUrl: './data-protection-act-dialog.component.html',
  styleUrls: ['../../shared/dialogs/dialog.component.css']
})
export class DataProtectionActDialogComponent {

  mobile: string;
  mobiles: Observable<number[]> = of([]);
  rgpdUser: RgpdUser;
  isNew = true;

  constructor(private dataProtectionActService: DataProtectionActService, private dialog: MatDialog) {
    this.reset();
  }

  findMobiles(): void {
    this.mobiles = of([11111111, 22222222, 333333333]);
  }

  findByMobile(): void {
    this.dataProtectionActService
      .read(this.mobile)
      .subscribe(searchRgpdUser => {
          if (searchRgpdUser !== null) {
            this.rgpdUser.mobile = searchRgpdUser.mobile;
            this.rgpdUser.rgpdType = (RgpdType as any)[searchRgpdUser.rgpdType];
          }
        }
      );
    this.isNew = this.rgpdUser.rgpdType === undefined;
  }

  isReady(): boolean {
    return this.rgpdUser.mobile !== undefined && this.rgpdUser.rgpdType !== undefined &&
      this.rgpdUser.agreement !== undefined;
  }

  submit(): void {
    if (this.isNew) {
      this.dataProtectionActService.create(this.rgpdUser)
        .subscribe(() => this.dialog.closeAll());
    }
  }

  reset(): void {
    this.rgpdUser = {
      mobile: Number(this.mobile),
      rgpdType: undefined,
      agreement: undefined
    };
  }

}
