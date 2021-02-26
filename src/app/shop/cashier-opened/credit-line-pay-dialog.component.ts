import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  templateUrl: 'credit-line-pay-dialog.component.html'
})

export class CreditLinePayDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) data) {

  }

}
