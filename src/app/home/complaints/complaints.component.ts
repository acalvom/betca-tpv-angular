import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {of} from 'rxjs';

import {ComplaintCreationDialogComponent} from './complaint-creation-dialog.component';
import {ComplaintService} from './complaint.service';
import {Complaint} from './complaint.model';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {ComplaintUpdateDialogComponent} from "./complaint-update-dialog.component";

@Component({
  templateUrl: 'complaints.component.html'
})
export class ComplaintsComponent {
  title: string = 'Complaints management';
  complaints = of([]);
  deleteBool: boolean = true;

  constructor(private dialog: MatDialog, private complaintService: ComplaintService) {
  }

  create(): void {
    this.dialog
      .open(ComplaintCreationDialogComponent)
      .afterClosed()
      .subscribe(() => this.searchAll());
  }
  //SOLO VE SUS QUEJAS
  searchAll(): void {
    this.complaints = this.complaintService.searchAll();
  }

  read(complaint: Complaint): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Complaint Details',
        object: this.complaintService.read(complaint.id)
      }
    });
  }

  update(complaint: Complaint): void {
    this.dialog
      .open(ComplaintUpdateDialogComponent, {
        data: {
          object: complaint
        }
      })
      .afterClosed()
      .subscribe(() => this.searchAll());
  }
  // Si cerrada no eliminar
  delete(complaint: Complaint): void {
    this.complaintService
      .delete(complaint.id)
      .subscribe(() => this.searchAll());
  }
}
