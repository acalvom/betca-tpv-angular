import {Component, Input} from '@angular/core';
import {RgpdType} from '../../models/RgpdType';
import {RgpdUser} from '../../models/rgpd-user.model';
import {DataProtectionActService} from '@shared/components/data-protection-act/data-protection-act.service';

@Component({
  selector: 'app-manage-data-protection-act',
  templateUrl: './manage-data-protection-act.component.html'
})
export class ManageDataProtectionActComponent {

  @Input() rgpdUser: RgpdUser;

  rgpdTypes = RgpdType;
  selectedRgpdType: RgpdType;

  constructor(private dataProtectionActService: DataProtectionActService) {
    this.rgpdUser = {
      mobile: undefined,
      rgpdType: undefined,
      agreement: undefined
    };
  }

  isUserRgpdType(): boolean {
    return this.rgpdUser.rgpdType === this.selectedRgpdType;
  }

  onFileSelected(): void {
    const inputNode: any = document.querySelector('#file');
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.rgpdUser.agreement = e.target.result;
      };
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  printUnsignedAgreement(): void {
    this.rgpdUser.rgpdType = this.selectedRgpdType;
    this.dataProtectionActService.printUnsignedAgreement(this.rgpdUser);
  }

  printSignedAgreement(): void {
    this.dataProtectionActService.printSignedAgreement(this.rgpdUser.mobile);
  }

}
