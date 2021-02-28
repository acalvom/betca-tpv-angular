import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  templateUrl: 'open-sizes-dialog.component.html',
  styleUrls: ['open-sizes-dialog.component.css']
})
export class OpenSizesDialogComponent implements OnInit{

  sizes: String[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.sizes = this.data;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  addShoppingCart(size: String) {

  }
}
