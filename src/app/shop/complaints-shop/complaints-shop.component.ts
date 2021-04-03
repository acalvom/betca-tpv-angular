import {Component} from '@angular/core';
import {of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {Complaint} from "@shared/models/complaint.model";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {ComplaintShopService} from "./complaint-shop.service";
import {ComplaintUpdateShopDialogComponent} from "./complaint-update-shop-dialog.component";

@Component({
  selector: 'app-complaints-shop',
  templateUrl: './complaints-shop.component.html',
})

export class ComplaintsShopComponent {
  title: string = 'Complaints management';
  complaints = of([]);
  data = of();

  constructor(private dialog: MatDialog, private complaintShopService: ComplaintShopService) {
  }

  searchAll(): void {
    this.complaints = this.complaintShopService.searchAll();
  }

  searchOpened(): void {
    this.complaints = this.complaintShopService.searchOpened();
  }

  update(complaint: Complaint): void {
    this.complaintShopService.update(complaint)
      .subscribe(data => {
        this.dialog.open(ComplaintUpdateShopDialogComponent, {data
        })
          .afterClosed()
          .subscribe(() => this.searchAll());
      })
  }

  read(complaint: Complaint): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Complaint Details',
        object: this.complaintShopService.read(complaint.id)
      }
    });
  }

  delete(complaint: Complaint): void {
    this.complaintShopService
      .delete(complaint.id)
      .subscribe(() => this.searchAll());
  }
}
