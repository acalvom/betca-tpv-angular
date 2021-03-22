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
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.rgpdUser.agreement = reader.result.toString();
    };
    reader.readAsDataURL(file);
  }

  printUnsignedAgreement(): void {
    this.dataProtectionActService.printUnsignedAgreement(this.rgpdUser);
  }

  printSignedAgreement(): void {
    this.dataProtectionActService.printSignedAgreement(this.rgpdUser.mobile);
  }

}
