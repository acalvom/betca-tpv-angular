import { Component } from '@angular/core';
import {of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {Complaint} from "../../home/complaints/complaint.model";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {COMPLAINTS} from "../../home/complaints/complaints";
import {ComplaintShopService} from "./complaint-shop.service";

@Component({
  selector: 'app-complaints-shop',
  templateUrl: './complaints-shop.component.html',
  styleUrls: ['./complaints-shop.component.css']
})
export class ComplaintsShopComponent {
  title: string = 'Complaints management';
  //complaints = of([]);
  complaints = of(COMPLAINTS);

  constructor(private dialog: MatDialog, private complaintShopService: ComplaintShopService) {
  }
  //If status = closed?
  searchAll(): void {
    this.complaints = this.complaintShopService.searchAll();
  }

  update(): void {
    ///TO DO reply and automatic status
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
