import {Component, Input} from '@angular/core';
import {RgpdType} from '../../models/RgpdType';
import {RgpdUser} from '../../models/rgpd-user.model';
import {DataProtectionActService} from '@shared/components/data-protection-act/data-protection-act.service';

@Component({
  selector: 'app-manage-data-protection-act',
  templateUrl: './manage-data-protection-act.component.html',
  styleUrls: ['./manage-data-protection-act.component.css']
})
export class ManageDataProtectionActComponent {

  @Input() rgpdUser: RgpdUser = {
    mobile: undefined,
    rgpdType: undefined,
    agreement: undefined
  };

  rgpdTypes = RgpdType;
  selectedRgpdType: RgpdType;

  constructor(private dataProtectionActService: DataProtectionActService) {
  }

  getColor(rgpdType: RgpdType): string {
    return this.rgpdUser.rgpdType !== undefined && rgpdType === this.rgpdUser.rgpdType ? 'green' : 'gray';
  }

  isUserRgpdType(): boolean {
    return this.rgpdUser.rgpdType === this.selectedRgpdType;
  }

  handleFileInput(event: Event): void {
    this.rgpdUser.rgpdType = this.selectedRgpdType;
    this.rgpdUser.agreement = (event.target as HTMLInputElement).files[0];
  }

  printUnsignedAgreement(): void {
    this.dataProtectionActService.printUnsignedAgreement(
      this.rgpdUser.mobile === undefined ? '' : this.rgpdUser.mobile.toString(), this.selectedRgpdType)
      .subscribe();
  }

  printSignedAgreement(): void {
    this.dataProtectionActService.printSignedAgreement(this.rgpdUser.mobile)
      .subscribe();
  }

}
