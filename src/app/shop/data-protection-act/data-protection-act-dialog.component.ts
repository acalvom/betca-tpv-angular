import {Component} from '@angular/core';
import {RgpdUser} from '@shared/models/rgpd-user.model';
import {Observable, of} from 'rxjs';
import {DataProtectionActService} from '@shared/components/data-protection-act/data-protection-act.service';
import {RgpdType} from '@shared/models/RgpdType';
import {MatDialog} from '@angular/material/dialog';
import {UserCompleteService} from '@shared/services/userComplete.service';

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

  constructor(private dataProtectionActService: DataProtectionActService,
              private userCompleteService: UserCompleteService, private dialog: MatDialog) {
    this.reset();
  }

  findMobiles(): void {
    this.userCompleteService.getCompleteUsers()
      .subscribe(value => {
        const mobiles: number[] = [value.length];
        for (let i = 0; i < value.length; i++) {
          mobiles[i] = Number(value[i].mobile);
        }
        this.mobiles = of(mobiles);
      });
  }

  findByMobile(): void {
    this.dataProtectionActService
      .read(this.mobile)
      .subscribe(searchRgpdUser => {
          if (searchRgpdUser !== null) {
            this.rgpdUser.mobile = searchRgpdUser.mobile;
            this.rgpdUser.rgpdType = (RgpdType as any)[searchRgpdUser.rgpdType];
          }
          this.isNew = searchRgpdUser === null;
        }
      );
  }

  isReady(): boolean {
    return this.rgpdUser.mobile !== undefined && this.rgpdUser.rgpdType !== undefined &&
      this.rgpdUser.agreement !== undefined;
  }

  submit(): void {
    if (this.isNew) {
      this.dataProtectionActService.create(this.rgpdUser)
        .subscribe(() => this.dialog.closeAll());
    } else {
      this.dataProtectionActService.update(this.rgpdUser)
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
