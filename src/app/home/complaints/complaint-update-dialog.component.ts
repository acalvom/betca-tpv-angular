import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

import {Complaint} from '@shared/models/complaint.model';
import {ComplaintService} from './complaint.service';
import {AuthService} from '@core/auth.service';

@Component({
  templateUrl: 'complaint-update-dialog.component.html',
  styleUrls: ['complaint-dialog.component.css']
})

export class ComplaintUpdateDialogComponent {
  title: string = 'Update Complaint';
  complaint: Complaint;

  constructor(@Inject(MAT_DIALOG_DATA) data: Complaint, private complaintService: ComplaintService,
              private dialog: MatDialog) {
    this.complaint = {id: data.id, mobile: data.mobile, barcode: data.barcode, registrationDate: data.registrationDate,
      description: data.description, opened: data.opened};
  }

  update(): void {
    this.complaintService
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
