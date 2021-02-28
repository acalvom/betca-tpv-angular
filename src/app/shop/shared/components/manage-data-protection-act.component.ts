import {Component} from '@angular/core';
import {RgpdType} from '../services/models/RgpdType';

@Component({
  selector: 'app-manage-data-protection-act',
  templateUrl: './manage-data-protection-act.component.html'
})
export class ManageDataProtectionActComponent {

  rgpdTypes = RgpdType;
  selectedRgpdType: RgpdType;
  userRgpdType = RgpdType.BASIC;
  file: File;

  constructor() { }

  isUserRgpdType(): boolean {
    return this.userRgpdType === this.selectedRgpdType;
  }

  uploadFile($event: Event): void {
    // TODO Upload file
  }

}
