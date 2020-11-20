import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  templateUrl: 'read-detail.dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class ReadDetailDialogComponent {
  title: string;
  labels: string[];
  object: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.object = data.object;
    this.title = data.title;
    this.labels = Object.getOwnPropertyNames(this.object);
  }
}
