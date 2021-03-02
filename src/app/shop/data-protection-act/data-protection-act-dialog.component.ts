import {Component} from '@angular/core';
import {RgpdUser} from '../shared/services/models/rgpd-user.model';
import {RgpdType} from '../shared/services/models/RgpdType';

@Component({
  selector: 'app-data-protection-act-dialog',
  templateUrl: './data-protection-act-dialog.component.html',
  styleUrls: ['../../shared/dialogs/dialog.component.css']
})
export class DataProtectionActDialogComponent {

  rgpdUser: RgpdUser;

  constructor() {
    this.resetSearch();
  }

  search(): void {
    this.rgpdUser.rgpdType = RgpdType.ADVANCED;
  }

  resetSearch(): void {
    this.rgpdUser = {};
  }

}
