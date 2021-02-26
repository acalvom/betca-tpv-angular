import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  templateUrl: 'add-credit-line-dialog.component.html'
})

export class AddCreditLineDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) data) {

  }

}
