import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

import {Complaint} from '@shared/models/complaint.model';
import {ComplaintShopService} from './complaint-shop.service';
import {AuthService} from '@core/auth.service';
import {User} from "@shared/models/userRegister.model";
import {of} from "rxjs";

@Component({
  templateUrl: 'complaint-update-shop-dialog.component.html',
})

export class ComplaintUpdateShopDialogComponent {
  complaint: Complaint;
  title: string = 'Answer Complaint';

  constructor(@Inject(MAT_DIALOG_DATA) data: Complaint,
              private complaintShopService: ComplaintShopService, private dialog: MatDialog) {
    this.complaint = {id: data.id, mobile: data.mobile, barcode: data.barcode, registrationDate: data.registrationDate,
            description: data.description, opened: data.opened};
  }

  update(): void {
    console.log(this.complaint.reply);
    this.complaintShopService
      .update(this.complaint)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.complaint.barcode) || this.check(this.complaint.description);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
