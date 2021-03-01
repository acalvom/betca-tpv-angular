import {Component, Input} from '@angular/core';
import {RgpdType} from '../services/models/RgpdType';
import {RgpdUser} from '../services/models/rgpd-user.model';

@Component({
  selector: 'app-manage-data-protection-act',
  templateUrl: './manage-data-protection-act.component.html'
})
export class ManageDataProtectionActComponent {

  @Input() rgpdUser: RgpdUser = {};

  rgpdTypes = RgpdType;
  selectedRgpdType: RgpdType;
  file: File;

  constructor() {
  }

  isUserRgpdType(): boolean {
    return this.rgpdUser.rgpdType === this.selectedRgpdType;
  }

}
