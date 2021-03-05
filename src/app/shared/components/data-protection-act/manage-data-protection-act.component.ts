import {Component, Input} from '@angular/core';
import {RgpdType} from '../../models/RgpdType';
import {RgpdUser} from '../../models/rgpd-user.model';
import {DataProtectionActService} from '@shared/components/data-protection-act/data-protection-act.service';

@Component({
  selector: 'app-manage-data-protection-act',
  templateUrl: './manage-data-protection-act.component.html'
})
export class ManageDataProtectionActComponent {

  @Input() rgpdUser: RgpdUser = {};

  rgpdTypes = RgpdType;
  selectedRgpdType: RgpdType;
  file: File;

  constructor(private dataProtectionActService: DataProtectionActService) {
  }

  isUserRgpdType(): boolean {
    return this.rgpdUser.rgpdType === this.selectedRgpdType;
  }

  printUnsignedAgreement(): void {
    this.rgpdUser.rgpdType = this.selectedRgpdType;
    this.dataProtectionActService.printUnsignedAgreement(this.rgpdUser);
  }

  printSignedAgreement(): void {
    this.dataProtectionActService.printSignedAgreement(this.rgpdUser.mobile);
  }

}
