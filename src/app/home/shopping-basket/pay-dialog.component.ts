import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  templateUrl: 'pay-dialog.component.html',
  styleUrls: ['shopping-basket.component.css']
})
export class PayDialogComponent {

  constructor(private snackBar: MatSnackBar) {

  }

  confirm() {
    this.snackBar.open('You have successfully paid for the order.', 'Close', {
      duration: 3000
    });
  }
}
